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
            <!-- serial -->
            <div class="col-md-4">
              <label for="serial" class="form-label">Numero Serial</label>
              <input
                type="text"
                class="form-control"
                name="serial"
                v-model="equipo.seriall"
                id="serial"
                aria-describedby="helpId"
                placeholder="serial"
                required
              />
            </div>

            <!-- modelo -->
            <div class="col-md-3">
              <label for="modelo" class="form-label">Nombre del Modelo</label>
              <input
                type="text"
                class="form-control"
                name="modelo"
                v-model="equipo.modelo"
                id="modelo"
                aria-describedby="helpId"
                placeholder="modelo"
                required
              />
            </div>
            <!-- Procesador -->
            <div class="col-md-5">
              <label for="procesador" class="form-label">Nombre del Procesador</label>
              <input
                type="text"
                class="form-control"
                name="procesador"
                v-model="equipo.procesador"
                id="procesador"
                aria-describedby="helpId"
                placeholder="procesador"
                required
              />
            </div>
            <!-- SO -->
            <div class="col-md-4">
              <label for="so" class="form-label">Sistema Operativo</label>
              <input
                type="text"
                class="form-control"
                name="so"
                v-model="equipo.so"
                id="so"
                aria-describedby="helpId"
                placeholder="so"
                required
              />
            </div>
            <!-- ram -->
            <div class="col-md-3">
              <label for="ram" class="form-label">RAM</label>
              <input
                type="text"
                class="form-control"
                name="ram"
                v-model="equipo.ram"
                id="ram"
                aria-describedby="helpId"
                placeholder="ram"
                required
              />
            </div>
            <!-- Area -->
            <div class="col-md-6  ">
              <label for="area" class="form-label">Area</label>
              <input
                type="text"
                class="form-control"
                name="area"
                v-model="equipo.area"
                id="area"
                aria-describedby="helpId"
                placeholder="Ingrese el area"
                required
              />
            </div>
            <!-- Servicio -->
            <div class="col-md-6">
              <label for="servicio" class="form-label">Servicio</label>
              <input
                type="text"
                class="form-control"
                name="servicio"
                v-model="equipo.servicio"
                id="servicio"
                aria-describedby="helpId"
                placeholder="servicio que presta"
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
        //console.log(this.equipo);

        let datosEnviar = {
          nombre: this.equipo.nombre,
          periferico: this.equipo.periferico,
          fabricante: this.equipo.fabricante,
          seriall: this.equipo.seriall,
          modelo: this.equipo.modelo,
          procesador: this.equipo.procesador,
          ram: this.equipo.ram,
          so: this.equipo.so,
          area: this.equipo.area,
          servicio: this.equipo.servicio,
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
