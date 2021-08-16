<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container ">
        <a class="navbar-brand" href="#"
          ><img src="@/assets/logo.jpg" id="icon" alt="User Icon" class="" />
        </a>

        <div class="nav navbar-nav d-flex">
          <router-link to="/listar" class="nav-link ">Inicio</router-link>
          <router-link to="/crear" class="nav-link">Crear</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>
