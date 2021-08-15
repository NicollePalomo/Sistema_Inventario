<template>
  <div class=" container">
    <div class="card mt-5 ">
      <div class="card-header text-center">
        Empleados
      </div>
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="empleado in empleados" :key="empleado.id">
              <td>{{ empleado.id }}</td>
              <td>{{ empleado.nombre }}</td>
              <td>{{ empleado.correo }}</td>
              <td>
                <div class="btn-group mt-3 " role="group" aria-label="">
                  <router-link
                    :to="{ name: 'Editar', params: { id: empleado.id } }"
                    class="btn btn-info"
                    >Editar</router-link
                  >
                  <button
                    type="submit"
                    class="btn btn-danger mx-2"
                    v-on:click="borrarEmpleado(empleado.id)"
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
</template>

<script>
  export default {
    data() {
      return {
        empleados: [],
      };
    },
    created: function() {
      this.consultarEmpleados();
    },
    methods: {
      consultarEmpleados() {
        fetch("http://localhost/empleados/")
          .then((respuesta) => respuesta.json())
          .then((datosRespuesta) => {
            console.log(datosRespuesta);
            this.empleados = [];
            if (typeof datosRespuesta[0].success === "undefined") {
              this.empleados = datosRespuesta;
            }
          })
          .catch(console.log);
      },
      borrarEmpleado(id) {
        console.log(id);

        fetch("http://localhost/empleados/?borrar=" + id)
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
