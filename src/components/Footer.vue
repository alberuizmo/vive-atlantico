<template>
  <footer class="grid" style="padding: 40px 50px">
    <div class="col-9">
      <div class="grid">
        <div class="col-12">
          <img src="../assets/images/logo_vive_footer.png" alt="" height="75" />
        </div>
        <div class="col-4">
          <p class="title-lista-footer">Acerca de:</p>
          <ul class="lista-footer">
            <li>Vive Atlántico</li>
            <li>Envios a domicilio</li>
            <li>Paga y recoge</li>
            <li>Compra seguro</li>
            <li>Cliente VIP</li>
            <li>Trabaja con nosotros</li>
          </ul>
        </div>
        <div class="col-4">
          <p class="title-lista-footer">Compra:</p>
          <ul class="lista-footer">
            <li>Ingresa</li>
            <li>Crea tu cuenta</li>
            <li>¿Olvidaste tu contraseña?</li>
            <li>Preguntas frecuentes</li>
            <li>Terminos de uso</li>
            <li>Politica de privacidad</li>
          </ul>
        </div>
        <div class="col-4">
          <p class="title-lista-footer">Vende:</p>
          <ul class="lista-footer">
            <li>Crea tu tienda</li>
            <li>Freelance</li>
            <li>Asistencia Vive Atlántico</li>
          </ul>
        </div>
        <div class="col-12">
          Calle 99 # 11 - 19 Ofic. 701
          <strong>B/quilla, Colombia - Call Center</strong> (60-1) 593-6000 o
          #593
        </div>
        <div class="col-12">
          <p class="title-lista-footer">Metodos de pago:</p>
          <img src="../assets/images/metodos_pago.jpg" alt="" />
        </div>
      </div>
    </div>
    <div class="col-3 flex flex-column">
      <div>
        <img src="../assets/images/redes_1.png" alt="" height="55" />
        <img src="../assets/images/redes_2.png" alt="" height="55" />
        <img src="../assets/images/redes_3.png" alt="" height="55" />
        <img src="../assets/images/redes_4.png" alt="" height="55" />
        <img src="../assets/images/redes_5.png" alt="" height="55" />
      </div>
      <p class="title-lista-footer">Siguenos en nuestras redes</p>
      <div class="searcher-container-footer">
        <input type="text" style="width: 100%" />
        <div class="vertical-separator"></div>
        <i class="pi pi-search" style="font-size: 1.6rem; color: white"></i>
      </div>
      <img src="../assets/images/buscar.png" alt="" width="120" class="mb-6" />
      <img
        src="../assets/images/ministerio.jpg"
        alt=""
        width="250"
        style="margin: 0px auto"
      />
    </div>
    <div class="col-12"></div>
  </footer>
</template>

<style lang="scss">
/* footer */
.title-lista-footer {
  font-size: 1rem;
  font-weight: 700;
  margin: 10px 0px;
}
.lista-footer {
  list-style: none;
  padding: 0px;
  margin: 0px;
  li {
    font-size: 0.8rem;
    font-weight: 600;
    margin: 0px;
  }
}

.searcher-container-footer {
  background-color: rgb(214, 214, 214);
  width: 100%;
  height: 50px;
  border-radius: 50px;
  display: flex;
  padding: 10px 20px;
  align-items: center;
  margin-bottom: 15px;
  input {
    border: none;
    font-size: 1.6rem;
    background-color: rgb(214, 214, 214);
  }
  input:focus {
    outline: none;
  }
  .vertical-separator {
    width: 2px;
    height: 100%;
    background-color: #ffffff;
    margin: 0 10px;
  }
}
</style>
