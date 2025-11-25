<script setup>
import NavBar from '../components/NavBar.vue'
</script>

<template>
  <div class="container d-flex flex-column align-items-center justify-content-center p-4">

    <div class="mb-4">
      <NavBar />
    </div>

    <div class="searchg-input mb-3 d-flex justify-content-center">
      <input type="text" class="form-control w-50" placeholder="search for my..." />
    </div>

    <section class="projects d-flex justify-content-center w-100">
      <div class="card">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card’s content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
.card{
    width: 470px;
    height: 200px;
    transition: 2s;
    border: none;
    box-shadow: rgba(99, 99, 99, 0.07) 0px 1px 2px, rgba(99, 99, 99, 0.07) 0px 2px 4px, rgba(99, 99, 99, 0.07) 0px 4px 8px, rgba(99, 99, 99, 0.07) 0px 8px 16px, rgba(99, 99, 99, 0.07) 0px 16px 32px, rgba(99, 99, 99, 0.07) 0px 32px 64px;
}

.card:hover{
  transform: translateY(-2px) scale(1.02);
     animation: glow-animation 2s infinite alternate; 
}
@keyframes glow-animation {
    from {
      box-shadow:
        0 0 5px #e2bfcd,
        0 0 10px #e2bfcd,
    }
    to {
      box-shadow:
        0 0 50px #f7dbe6,
        0 0 13px rgba(255, 138, 220, 0.61),
        0 0 40px rgba(255, 208, 0, 0.603);
    }
}
</style>
