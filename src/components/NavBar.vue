<template>
 
<ul class="nav nav-pills">
            <li class="nav-item">
                <router-link to="/">home </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/projects">projects</router-link>
            </li>
        </ul>


</template>
<style scoped>

.router-link-exact-active {
  color: #fff !important;
  background-color: #e2bfcd;
  padding: 6px 12px;
  border-radius: 6px;
}
.nav-item a{
    margin-left: 20px;
    color: black;
}


/*.router-link-exact-active {
    width: 250px;
    height: 100px;
    background-color: #111;
    border-radius: 10px;
    color: #fff;
    font-family: sans-serif;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: glow-animation 2s infinite alternate; 
  }

  @keyframes glow-animation {
    from {
      box-shadow:
        0 0 5px #0ff,
        0 0 10px #0ff;
    }
    to {
      box-shadow:
        0 0 20px #0ff,
        0 0 40px #0ff,
        0 0 60px #0ff;
    }
  }*/ 
</style>