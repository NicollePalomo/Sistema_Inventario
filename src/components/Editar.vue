<template>
  <div class="container">
    <div class="card  mt-5">
      <!-- Titulo -->
      <div class="card-header">
        Editar Nuevo Empleado
      </div>
      <!-- Contenido -->
      <div class="card-body">
        <form v-on:submit.prevent="actualizarRegistro">
          <div class="row justify-content-center">
            <!-- nombre -->
            <div class="col-md-5 form-group">
              <label for="nombre">Nombre:</label>
              <input
                type="text"
                class="form-control"
                name="nombre"
                v-model="empleado.nombre"
                id="nombre"
                aria-describedby="helpId"
                required
              />
            </div>
            <!-- email -->
            <div class="col-md-5 form-group">
              <label for="email">Email:</label>
              <input
                type="text"
                class="form-control"
                name="email"
                v-model="empleado.correo"
                id="email"
                aria-describedby="helpId"
                required
              />
            </div>
          </div>
          <!-- Botones -->
          <div class="btn-group mt-3 " role="group" aria-label="">
            <button type="submit" class="btn btn-info mx-2">Modificar</button>
            <router-link :to="{ name: 'Listar' }" class="btn btn-warning"
              >Cancelar</router-link
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        empleado: {},
      };
    },
    created: function() {
      this.obtenerInformacionID();
    },
    methods: {
      obtenerInformacionID() {
        fetch("http://localhost/empleados/?consultar=" + this.$route.params.id)
          .then((respuesta) => respuesta.json())
          .then((datosRespuesta) => {
            console.log(datosRespuesta);
            this.empleado = datosRespuesta[0];
          })
          .catch(console.log);
      },
      actualizarRegistro() {
        let datosEnviar = {
          id: this.$route.params.id,
          nombre: this.empleado.nombre,
          correo: this.empleado.correo,
        };
        fetch("http://localhost/empleados/?actualizar=" + this.$route.params.id, {
          method: "POST",
          body: JSON.stringify(datosEnviar),
        })
          .then((respuesta) => respuesta.json())
          .then((datosRespuesta) => {
            console.log(datosRespuesta);
            window.location.href = "../listar";
          });
      },
    },
  };
</script>

<style></style>
