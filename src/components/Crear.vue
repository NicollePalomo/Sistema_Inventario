<template>
  <div class="container">
    <div class="card  mt-5">
      <!-- Titulo -->
      <div class="card-header">
        Agregar nuevo equipo
      </div>
      <!-- Contenido -->
      <div class="card-body">
        <form v-on:submit.prevent="agregarRegistro">
          <div class="row g-3 justify-content-center">
            <!-- nombre -->
            <div class="col-md-6  ">
              <label for="nombre" class="form-label">Nombre del equipo</label>
              <input
                type="text"
                class="form-control"
                name="nombre"
                v-model="equipo.nombre"
                id="nombre"
                aria-describedby="helpId"
                placeholder="Ingrese el nombre"
                required
              />
            </div>
            <!-- periferico -->
            <div class="col-md-6">
              <label for="periferico" class="form-label">Nombre del Periférico</label>
              <input
                type="text"
                class="form-control"
                name="periferico"
                v-model="equipo.periferico"
                id="periferico"
                aria-describedby="helpId"
                placeholder="periferico"
                required
              />
            </div>
            <!-- fabricante -->
            <div class="col-md-5">
              <label for="fabricante" class="form-label">Nombre del Fabricante</label>
              <input
                type="text"
                class="form-control"
                name="fabricante"
                v-model="equipo.fabricante"
                id="fabricante"
                aria-describedby="helpId"
                placeholder="fabricante"
                required
              />
            </div>
          </div>
          <!-- Botones -->
          <div class="btn-group mt-3 " role="group" aria-label="">
            <button type="submit" class="btn btn-info mx-2">Agregar</button>
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
        equipo: {},
      };
    },
    methods: {
      agregarRegistro() {
        console.log(this.equipo);

        let datosEnviar = {
          nombre: this.equipo.nombre,
          periferico: this.equipo.periferico,
          fabricante: this.equipo.fabricante,
          //   // num_serial: this.equipo.num_serial,
          //   // modelo: this.equipo.modelo,
          //   // procesador: this.equipo.procesador,
          //   // ram: this.equipo.ram,
          //   // so: this.equipo.so,
          //   // tipo_area: this.equipo.tipo_area,
          //   // servicio: this.equipo.servicio,
        };

        fetch("http://localhost/equipos/?insertar=1", {
          method: "POST",
          body: JSON.stringify(datosEnviar),
        })
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
