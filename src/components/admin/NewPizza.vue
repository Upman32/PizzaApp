<template>
  <section class="admin_section">
    <header class="admin_section_header">
    <h3>Add new pizza</h3>
    </header>
      <form>
  <div class="form_group">
    <label font="">Name</label>
    <input type="text" id="name"/>
  </div>
  <div class="form_group">
    <label font="description">Description</label>
    <textarea rows="5" id="description"></textarea>
  </div>
  <p>
    <strong>Option 1:</strong>
  </p>
  <div class="form_group">
    <label font="size1">Size(")</label>
    <input type="text" id="size1"/>
  </div>
  <div class="form_group">
    <label font="price1">Price</label>
    <input type="text" id="price1"/>
  </div>
  <p>
    <strong>Option 2:</strong>
  </p>
  <div class="form_group">
    <label font="size2">Size(")</label>
    <input type="text" id="size2"/>
  </div>
  <div class="form_group">
    <label font="price2">Price</label>
    <input type="text" id="price2"/>
  </div>
  <div class="form_group">
    <button>
    Add
    </button>
  </div>
 </form>
  </section>
</template>