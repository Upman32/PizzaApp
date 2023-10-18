import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import { doc, getDoc, getDocs, query, setDoc, updateDoc, where, } from 'firebase/firestore'
import {db, dbUsersRef} from '../firebase'
import { ref } from 'vue'


export default function useAuth() {
  const auth = getAuth()
  const errorMessage = ref('')
  const signInModalOpen = ref(false)
  const userData = ref(null)
  const userIsAdmin = ref(false)
 const toggleAdminMessage=ref("")
 const selectedUser=ref(null)

 async function findUser(userEmail){
  try {
toggleAdminMessage.value=""
if(!userIsAdmin.value) return
const queryData = query(dbUsersRef, where("email", "==", userEmail))
const user = await getDocs(queryData)
const userObject = {
  id:user.docs[0].id,
  email:user.docs[0].data().email,
  isAdmin:user.docs[0].data().isAdmin
}
selectedUser.value = userObject
}
  catch(error){
selectedUser.value = null
toggleAdminMessage.value ="no user with such email"

  }
 }


async function checkAdminRole(){
  if(userData.value?.uid) {
  const docRef = doc(dbUsersRef, userData.value.uid)
  const user = await getDoc(docRef)
  if(user.exists() && user.data().isAdmin){
    userIsAdmin.value = true;
  } else {
    userIsAdmin.value = false
  }
  }
}

  function toggleModel() {
    signInModalOpen.value = !signInModalOpen.value
  }

  async function signUp(email, password) {
    try {
    const {user} = await createUserWithEmailAndPassword(auth, email, password)
    const userObject = {
      createdAt: new Date(),
      email: user.email,
      isAdmin: false
    }
    const newDoc = doc(db, "users", user.uid)
    await setDoc(newDoc, userObject)
      errorMessage.value = ''
      signInModalOpen.value = false
    } catch (error) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage.value = 'a user with that email already exists, please log in'
          break
        case 'auth/weak-password':
          errorMessage.value = 'pass should be 6 chars long'
          break
        default:
          errorMessage.value = 'sorry, there was an unexpected error'
      }
    }
  }
  async function logIn(email, password) {
    if (!email) return (errorMessage.value = 'Please enter a valid email')
    if (!password) return (errorMessage.value = 'Please enter a valid password')
    try {
      const user = await signInWithEmailAndPassword(auth, email, password)
      errorMessage.value = ''
      signInModalOpen.value = false
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          errorMessage.value = 'incorrect pass.'
          break
        case 'auth/weak-password':
          errorMessage.value = 'no user found with that email'
          break
        default:
          errorMessage.value = 'sorry, there was an unexpected error'
      }
    }
  }
  function logOut() {
    try {
      signOut(auth)
    } catch (error) {
      errorMessage.value = error.message
    }
  }
  async function toggleAdmin() {
    try {
      if (!userIsAdmin.value) return 
const docRef = doc(db, "users", selectedUser.value.id)
await updateDoc(docRef, {
  isAdmin: !selectedUser.value.isAdmin
})
findUser(selectedUser.value.email);
    }catch(error) {
console.log(error)
    }
  }

  onAuthStateChanged(auth, function (user) {
    if (user) {
      userData.value = user
      checkAdminRole()
    } else {
      userData.value = null
      userIsAdmin.value = false
    }
  })
  return { 
    signUp, 
    errorMessage, 
    signInModalOpen, 
    toggleModel, 
    logOut, 
    logIn, 
    userIsAdmin, 
    userData, 
    findUser, 
    selectedUser,
    toggleAdminMessage,
    toggleAdmin 
  }

}
