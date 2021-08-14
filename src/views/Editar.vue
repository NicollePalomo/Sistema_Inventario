<template>
  <div>
    <Header />
    <div class="container">
      <form class="form-group">
        <div class="form-group left ">
          <label for="" class="control-label col-sm-2">Nombre</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control mb-2"
              name="nombre"
              id="nombre"
              v-model="form.nombre"
            />
          </div>
        </div>
        <div class="form-group left">
          <label for="" class="control-label col-sm-2">Direccion</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control mb-2"
              name="direccion"
              id="direccion"
              v-model="form.direccion"
            />
          </div>
        </div>
        <div class="form-group left row">
          <div class="col">
            <label for="" class="control-label col-sm-3">Correo</label>
            <div class="col-sm-7">
              <input
                type="text"
                class="form-control mb-2"
                name="correo"
                id="correo"
                v-model="form.correo"
              />
            </div>
          </div>

          <div class="col">
            <label for="" class="control-label col-sm-5">Codigo Postal</label>
            <div class="col-sm-7">
              <input
                type="text"
                class="form-control mb-2"
                name="codigopostal"
                id="codigopostal"
                v-model="form.codigoPostal"
              />
            </div>
          </div>
        </div>
        <div class="form-group left row">
          <div class="col">
            <label for="" class="control-label col-sm-2">Genero</label>
            <div class="col-sm-7">
              <input
                type="text"
                class="form-control mb-2"
                name="genero"
                id="genero"
                v-model="form.genero"
              />
            </div>
          </div>
          <div class="col">
            <label for="" class="control-label col-sm-2">Telefono</label>
            <div class="col-sm-7">
              <input
                type="text"
                class="form-control mb-2"
                name="telefono"
                id="telefono"
                v-model="form.telefono"
              />
            </div>
          </div>
        </div>
        <div class="form-group left">
          <label for="" class="control-label col-sm-2">Fecha nacimiento</label>
          <div class="col-sm-3">
            <input
              type="text"
              class="form-control mb-2"
              name="fechanacimineto"
              id="telefono"
              v-model="form.fechaNacimiento"
            />
          </div>
        </div>

        <div class="form-group mt-5">
          <button type="button" class="btn btn-primary" v-on:click="editar()">Editar</button>
          <button type="button" class="btn btn-danger margen" v-on:click="eliminar()">
            Eliminar
          </button>
          <button type="button" class="btn btn-warning" v-on:click="cancelar()">
            Cancelar
          </button>
        </div>
      </form>
    </div>
    <Footer />
  </div>
</template>

<script>
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";
  import axios from "axios";
  export default {
    name: "Editar",
    components: {
      Header,
      Footer,
    },
    data: function() {
      return {
        form: {
          pacienteId: "",
          nombre: "",
          direccion: "",
          dni: "",
          correo: "",
          codigoPostal: "",
          genero: "",
          telefono: "",
          fechaNacimiento: "",
          token: "",
        },
      };
    },
    methods: {
      editar() {
        axios.put("http://api.solodata.es/pacientes", this.form).then((data) => {
          console.log(data);
          this.$router.push("/dashboard");
        });
      },
      cancelar() {
        this.$router.push("/dashboard");
      },
      eliminar() {
        let enviar = {
          pacienteId: this.form.pacienteId,
          token: this.form.token,
        };
        axios.delete("http://api.solodata.es/pacientes", { headers: enviar }).then((datos) => {
          console.log(datos);
          this.$router.push("/dashboard");
        });
      },
    },
    mounted: function() {
      this.form.pacienteId = this.$route.params.id;
      axios
        .get("http://api.solodata.es/pacientes?id=" + this.form.pacienteId)
        .then((datos) => {
          this.form.nombre = datos.data[0].Nombre;
          this.form.direccion = datos.data[0].Direccion;
          this.form.dni = datos.data[0].DNI;
          this.form.correo = datos.data[0].Correo;
          this.form.codigoPostal = datos.data[0].CodigoPostal;
          this.form.genero = datos.data[0].Genero;
          this.form.telefono = datos.data[0].Telefono;
          this.form.fechaNacimiento = datos.data[0].FechaNacimiento;
          this.form.token = localStorage.getItem("token");
          console.log(this.form);
        });
    },
  };
</script>
<style scoped>
  .left {
    text-align: left;
  }
  .margen {
    margin-left: 15px;
    margin-right: 15px;
  }
</style>
