<template>
  <h3 class="title-section">Ofertas del mes</h3>
  <!-- Banda Multicolor -->
  <BandaMulticolor />
  <div class="grid" style="padding: 0px 50px">
    <div class="col-6 text-center">
      <img src="../assets/images/propaganda_1.jpg" alt="" style="width: 80%" />
    </div>
    <div class="col-6 text-center">
      <img src="../assets/images/propaganda_2.jpg" alt="" style="width: 90%" />
      <img
        src="../assets/images/propaganda_3.jpg"
        alt=""
        style="width: 90%; margin-top: 10px"
      />
    </div>
  </div>
</template>

<script setup>
import BandaMulticolor from "./BandaMulticolor.vue";
</script>
