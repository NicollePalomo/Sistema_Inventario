<template>
  <div>
    <Header />

    <div class=" container-fluid">
      <router-link to="/crear" class=" btn btn-info mt-5">Crear nuevo equipo</router-link>
      <div class="card mt-3 ">
        <div class="card-header text-center">
          Equipos de Cómputo de la Clínica Laura Daniela
        </div>
        <div class="card-body">
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>NOMBRE</th>
                <th>PERIFÉRICO</th>
                <th>FABRICANTE</th>
                <th>SERIAL</th>
                <th>MODELO</th>
                <th>PROCESADOR</th>
                <th>RAM</th>
                <th>SO</th>
                <th>AREA</th>
                <th>SERVICIO</th>
                <th>ACCIÓN</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="equipo in equipos" :key="equipo.id">
                <td>{{ equipo.id }}</td>
                <td>{{ equipo.nombre }}</td>
                <td>{{ equipo.periferico }}</td>
                <td>{{ equipo.fabricante }}</td>
                <td>{{ equipo.seriall }}</td>
                <td>{{ equipo.modelo }}</td>
                <td>{{ equipo.procesador }}</td>
                <td>{{ equipo.ram }}</td>
                <td>{{ equipo.so }}</td>
                <td>{{ equipo.area }}</td>
                <td>{{ equipo.servicio }}</td>
                <td>
                  <div class="btn-groupe" role="group" aria-label="">
                    <router-link
                      :to="{ name: 'Editar', params: { id: equipo.id } }"
                      class="btn btn-info"
                      >Editar</router-link
                    >
                    <button
                      type="submit"
                      class="btn btn-danger mx-2"
                      v-on:click="borrarEquipo(equipo.id)"
                    >
                      Borrar
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";
  export default {
    data() {
      return {
        equipos: [],
      };
    },
    components: {
      Header,
      Footer,
    },
    created: function() {
      this.consultarEquipos();
    },
    methods: {
      consultarEquipos() {
        fetch("http://localhost/equipos/")
          .then((respuesta) => respuesta.json())
          .then((datosRespuesta) => {
            console.log(datosRespuesta);
            this.equipos = [];
            if (typeof datosRespuesta[0].success === "undefined") {
              this.equipos = datosRespuesta;
            }
          })
          .catch(console.log);
      },
      borrarEquipo(id) {
        console.log(id);

        fetch("http://localhost/equipos/?borrar=" + id)
          .then((respuesta) => respuesta.json())
          .then((datosRespuesta) => {
            console.log(datosRespuesta);
            window.location.href = "listar";
          });
      },
    },
  };
</script>

<style></style>
