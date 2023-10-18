import { deleteDoc, doc, onSnapshot, orderBy, query } from "firebase/firestore";
import { onMounted, onUnmounted, ref } from "vue";
import { dbOrdersRef } from "../firebase";

export default function useOrders() {
  const allOrders = ref([]);
  const message =ref('')
  const unsubscribeFromOrders = ref()

  async function getOrders() {
try {
const queryData = query(dbOrdersRef, orderBy("createdAt"))

 const unsubscribe = onSnapshot(queryData, function(docs) {
  allOrders.value= []
  docs.forEach(function (doc) {
    const order ={
      id: doc.id,
      ...doc.data()
    }
    allOrders.value.push(order);
   });
 })
 unsubscribeFromOrders.value = unsubscribe
} catch(error) {
    message.value ="There was an error fetching orders, please reload the page"
  }
}
  onMounted(getOrders)
onUnmounted(function() {
  console.log("unmounted")
  unsubscribeFromOrders.value()
})


  async function deleteOrder(id) {
    try {
     message.value = ""
     const order = doc(dbOrdersRef, id);
     await deleteDoc(order);
     getOrders();
    } catch (error) {
      message.value ="There is some error..."
    }
  }
  return {allOrders, deleteOrder, message}
}
