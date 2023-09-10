<script setup>
import { ref } from 'vue';
const newPizza = ref({
  name: 'Eg. Margharita',
  description: 'Eg. A delicious tomato based pizza topped with mozzarella',
  options: [
    {size:9, price: 6.95},
    {size:12, price: 12.95},
  ]
})

</script>

<template>
  {{ newPizza }}
  <section class="admin_section">
    <header class="admin_section_header">
    <h3>Add new pizza</h3>
    </header>
      <form>
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
    <button>
    Add
    </button>
  </div>
 </form>
  </section>
</template>