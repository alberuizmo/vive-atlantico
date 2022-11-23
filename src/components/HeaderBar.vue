<template>
  <div :class="idDown ? 'down-style' : ''">
    <header class="grid" style="background-color: var(--va-verde)">
      <div
        class="col-1 flex justify-content-center align-items-center cursor-pointer"
      >
        <i class="mdi mdi-menu" style="font-size: 3rem; color: white"></i>
      </div>
      <div class="col-1 flex justify-content-center align-items-center">
        <img
          src="../assets/images/logo_vive_atlantico.png"
          alt=""
          height="40px"
        />
      </div>
      <div class="col-1 flex justify-content-center align-items-center">
        <img src="../assets/images/bandera.png" alt="" height="40px" />
      </div>
      <div class="col-6 flex align-items-center">
        <div class="searcher-container">
          <input type="text" style="width: 100%" />
          <div class="vertical-separator"></div>
          <i class="pi pi-search" style="font-size: 1.2rem; color: black"></i>
        </div>
      </div>
      <div class="col-3 flex align-items-center justify-content-around">
        <div class="container-icon cursor-pointer">
          <img src="../assets/images/pointer.png" alt="" height="40px" />
          <span class="title-icono">Mi Ubicación</span>
        </div>
        <div class="container-icon cursor-pointer">
          <img src="../assets/images/mi_cuenta.png" alt="" height="40px" />
          <span class="title-icono">Mi Cuenta</span>
        </div>
        <div class="container-icon cursor-pointer">
          <img src="../assets/images/carrito.png" alt="" height="40px" />
          <span class="title-icono">Mi Carrito</span>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { ref } from "vue";
const idDown = ref(false);
</script>

<style scoped lang="scss">
/* cabecera */
header {
  min-height: 100px;
}
.container-icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 50px;
    height: auto;
  }
  span {
    font-weight: 600;
    color: white;
    font-size: 0.8rem;
  }
}
.searcher-container {
  background-color: white;
  width: 100%;
  height: 50px;
  border-radius: 50px;
  display: flex;
  padding: 10px 20px;
  align-items: center;
  input {
    border: none;
    font-size: 1.6rem;
  }
  input:focus {
    outline: none;
  }
  .vertical-separator {
    width: 1px;
    height: 100%;
    background-color: #e0e0e0;
    margin: 0 10px;
  }
}

.down-style {
  background-color: white;
  width: 100%;
  padding: 30px 50px 30px 50px;
}

.cursor-pointer {
  cursor: pointer;
}

.cursor-pointer:hover {
  opacity: 0.8;
}
</style>
