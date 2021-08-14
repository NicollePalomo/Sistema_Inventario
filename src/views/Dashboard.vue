<template>
  <div>
    <Header />
    <div class="container ">
      <div class="aligne">
        <button class="btn btn-info " v-on:click="nuevo()">Agregar </button>
        <br /><br />
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col">Handle</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="paciente in Listapacientes" :key="paciente.PacienteId">
            <td>{{ paciente.PacienteId }}</td>
            <td>{{ paciente.Nombre }}</td>
            <td>{{ paciente.DNI }}</td>
            <td>{{ paciente.Telefono }}</td>
            <td>{{ paciente.Correo }}</td>
            <button
              type="button"
              class="btn btn-outline-info btn-sm mx-1 mt-1"
              v-on:click="editar(paciente.PacienteId)"
            >
              Editar
            </button>
            <!-- <button type="button" class="btn btn-outline-danger btn-sm mt-1">Borrar</button> -->
          </tr>
        </tbody>
      </table>
    </div>
    <Footer />
  </div>
</template>

<script>
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";
  import axios from "axios";
  export default {
    name: "Dashboard",
    data() {
      return {
        Listapacientes: null,
        pagina: 1,
      };
    },
    components: { Header, Footer },
    methods: {
      editar(id) {
        this.$router.push("/editar/" + id);
      },
      nuevo() {
        this.$router.push("/crear");
      },
    },
    mounted: function() {
      let direct = "https://api.solodata.es/pacientes?page=" + this.pagina;
      axios.get(direct).then((data) => {
        //console.log(data);
        this.Listapacientes = data.data;
      });
    },
  };
</script>

<style scoped>
  .aligne {
    text-align: left;
  }
</style>
