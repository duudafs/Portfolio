<script setup>
import NavBar from '../components/NavBar.vue'
import { onMounted } from "vue";

onMounted(() => {
  particlesJS('particles-js', {
    particles: {
      number: { value: 20 },
      size: { value: 3 },
      color: { value: "#e2bfcd" },
      line_linked: { enable: false },
      move: { speed: 2 }
    }
  })
})

</script>


<template>
  <div id="particles-js"></div>
      <NavBar />
    
   <section class="home-section">
   
    <div class="initial">
      <h3 class="my-name">Hello! Maria Eduarda here</h3>
      <h6 class="presentation">I'm Software Engineering student from Brazil</h6>
    </div>
  </section>

  <div class="container d-flex flex-column align-items-center justify-content-center p-4">

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
    z-index: 2;
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

.search-input{
    border-radius: 25px;
    width: 470px;
    height: 40px;
}
.home-section {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* tira se quiser a esquerda */
  padding-top: 80px; /* espaço pra navbar */
    background: transparent !important;

}

.initial{
  margin-top: -500px;
}
.my-name{
  font-size: 35px;
  margin-top: -10px;
 font-family: "Silkscreen", sans-serif;
 font-weight: 400;
}

#particles-js {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background: transparent;
}

</style>
