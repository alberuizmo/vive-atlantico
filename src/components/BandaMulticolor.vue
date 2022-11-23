<template>
  <div
    class="grid bg-white container-linea-multicolor"
    style="padding: 0px 50px"
  >
    <div class="col-4 separador-multicolor"></div>
    <div class="col-4 separador-multicolor"></div>
    <div class="col-4 separador-multicolor"></div>
  </div>
</template>

<style lang="scss">
/* separador multicolor */
.container-linea-multicolor {
  margin: 20px 0px;
  .separador-multicolor {
    padding: 0px;
    height: 10px;
    background-color: var(--va-amarillo);
  }
  /* first .separador-multicolor */
  .separador-multicolor:first-child {
    background-color: var(--va-rojo);
    border-radius: 10px 0px 0px 10px;
  }
  /* last .separador-multicolor */
  .separador-multicolor:last-child {
    background-color: var(--va-verde);
    border-radius: 0px 10px 10px 0px;
  }
}
</style>
