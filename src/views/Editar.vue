<template>
  <div class="container">
    <Header />
    Hola Editar
    <Footer />
  </div>
</template>

<script>
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";
  import axios from "axios";
  export default {
    name: "Editar",
    components: { Header, Footer },
  };
</script>
<style></style>
