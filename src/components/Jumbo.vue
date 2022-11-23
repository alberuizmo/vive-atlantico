<template>
  <div class="grid jumbo" style="background-color: var(--va-verde)">
    <div class="col-6 p-0 container-mask">
      <img
        class="one"
        src="../assets/images/imagen_jumbo.jpg"
        alt=""
        style="width: auto"
      />
    </div>
    <div
      class="col-6 flex flex-column justify-content-center align-items-center"
      style="color: white"
    >
      <h1 style="font-size: 3rem">Lo nuevo ha llegado</h1>
      <p class="text-center" style="font-size: 1.5rem; padding: 0px 20px">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
        aspernatur tenetur quis ratione officiis qui. Corrupti excepturi non
        soluta molestiae eaque illum adipisci magni. Cupiditate sequi ratione
        deleniti reprehenderit esse.
      </p>
    </div>
  </div>
</template>

<style lang="scss">
/* jumbotron */
.jumbo {
  height: 500px;
  max-height: 500px;
  background-color: var(--va-verde);
  display: flex;
  div {
    height: 100%;
    display: flex;
    img {
      width: 100%;
    }
  }
}
.container-mask img {
  max-width: 100%;
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
  -webkit-mask-size: cover;
  mask-size: cover;
}
.one {
  -webkit-mask-image: url("../assets/images/oval-mask.png");
  mask-image: url("../assets/images/oval-mask.png");
}
</style>
