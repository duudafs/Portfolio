<template>

<nav class="navbar fixed-top ">
  <h3 class="logo justify-contente-start"> duda</h3>
  
<ul class="nav nav-pills">
            <li class="nav-item">
                <router-link to="/">home </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/projects">projects</router-link>
            </li>
        </ul>
  


</nav>


</template>
<style scoped>

.router-link-exact-active {
  color: #fff !important;
  background-color: #e2bfcd;
  padding: 6px 12px;
  border-radius: 26px;
  
}
.navbar {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0;
    align-items: center;

}

.nav-pills {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background-color: #c2a0ae57;
  border-radius: 26px;
  margin-top: 10px;

}

.nav-item a {
  margin: 0 20px;
  color: black;
}

.logo{
    position: absolute;
  left: 160px;
  margin: 0;
  margin-top: 10px;
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