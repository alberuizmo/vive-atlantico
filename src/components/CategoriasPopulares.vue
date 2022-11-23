<template>
  <h3 class="title-section">Nuestras Categorias Populares</h3>
  <!-- Banda Multicolor -->
  <BandaMulticolor />
  <div class="grid p-4">
    <div
      class="col flex-column justify-content-center align-items-center text-center container-item-categorias"
    >
      <img src="../assets/images/categoria_1.png" alt="" />
      <p class="title-banner-iconos text-center">Vive Food</p>
    </div>
    <div
      class="col flex-column justify-content-center align-items-center text-center container-item-categorias"
    >
      <img src="../assets/images/categoria_2.png" alt="" />
      <p class="title-banner-iconos text-center">Vive Motos</p>
    </div>
    <div
      class="col flex-column justify-content-center align-items-center text-center container-item-categorias"
    >
      <img src="../assets/images/categoria_3.png" alt="" />
      <p class="title-banner-iconos text-center">Vive Fashion</p>
    </div>
  </div>
</template>

<script setup>
import BandaMulticolor from "./BandaMulticolor.vue";
</script>

<style lang="scss">
/* categorias */
.container-item-categorias {
  img {
    height: 250px;
    width: auto;
  }
  p {
    margin-top: 20px;
    font-size: 1.6rem;
    font-weight: 600;
    color: black;
  }
}
</style>
