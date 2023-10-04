<script setup>
import { ref } from 'vue';
import {addDoc} from 'firebase/firestore'
import {dbPizzasRef} from '../../firebase'
const message = ref('');

const showNewPizza = ref(true)
const newPizza = ref({
  name: 'Eg. Margharita',
  description: 'Eg. A delicious tomato based pizza topped with mozzarella',
  options: [
    {size:9, price: 6.95},
    {size:12, price: 12.95},
  ]
})

async function add() {
  try {
    await addDoc(dbPizzasRef, newPizza.value);
    message.value = `Pizza ${newPizza.value.name} has been added` 
  }
  catch(e) {
    message.value = 'There a issue with adding this pizza.....'
  }
}

</script>

<template>
  <section class="admin_section">
    <header class="admin_section_header">
    <h3>Add new pizza</h3>
    <small class="toggleBtn" @click="showNewPizza = !showNewPizza">{{ showNewPizza ? 'hide' : 'show' }}</small>
    </header>
      <form v-show="showNewPizza">
  <div class="form_group">
    <label font="">Name</label>
    <input type="text" id="name" v-model="newPizza.name"/>
  </div>
  <div class="form_group">
    <label font="description">Description</label>
    <textarea rows="5" id="description" v-model="newPizza.description"></textarea>
  </div>
  <p>
    <strong>Option 1:</strong>
  </p>
  <div class="form_group">
    <label font="size1">Size(")</label>
    <input type="text" id="size1" v-model="newPizza.options[0].size"/>
  </div>
  <div class="form_group">
    <label font="price1">Price</label>
    <input type="text" id="price1" v-model="newPizza.options[0].price"/>
  </div>
  <p>
    <strong>Option 2:</strong>
  </p>
  <div class="form_group">
    <label font="size2">Size(")</label>
    <input type="text" id="size2" v-model="newPizza.options[1].size"/>
  </div>
  <div class="form_group">
    <label font="price2">Price</label>
    <input type="text" id="price2" v-model="newPizza.options[1].price"/>
  </div>
  <div class="form_group">
    <button @click.prevent="add">
    Add
    </button>
    <span class="message">{{ message }}</span>
  </div>
 </form>
  </section>
</template>

<style >
.message {
  margin-left:1rem;
}
</style>