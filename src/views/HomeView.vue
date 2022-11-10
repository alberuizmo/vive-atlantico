<template>
  <div>
    <!-- cabecera -->
    <header class="grid" style="background-color: var(--va-verde)">
      <div class="col-1 flex justify-content-center align-items-center">
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
          <i class="pi pi-search" style="font-size: 1.2frem; color: black"></i>
        </div>
      </div>
      <div class="col-3 flex align-items-center justify-content-around">
        <div class="container-icon">
          <img src="../assets/images/pointer.png" alt="" height="40px" />
          <span class="title-icono">Mi Ubicación</span>
        </div>
        <div class="container-icon">
          <img src="../assets/images/mi_cuenta.png" alt="" height="40px" />
          <span class="title-icono">Mi Cuenta</span>
        </div>
        <div class="container-icon">
          <img src="../assets/images/carrito.png" alt="" height="40px" />
          <span class="title-icono">Mi Carrito</span>
        </div>
      </div>
    </header>
    <!-- JUMBO -->
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
    <!-- banner botonera -->
    <div class="grid">
      <div class="col-12 p-0 container-item-botonera">
        <img src="../assets/images/simbolos.png" alt="" style="width: 100%" />
      </div>
    </div>
    <!-- banner iconos -->
    <div class="grid p-4 bg-white">
      <div
        class="col flex-column justify-content-center align-items-center text-center container-item-iconos"
      >
        <img src="../assets/images/simbolos_1.png" alt="" />
        <p class="title-banner-iconos text-center">Eventos</p>
      </div>
      <div
        class="col flex-column justify-content-center align-items-center text-center container-item-iconos"
      >
        <img src="../assets/images/simbolos_2.png" alt="" />
        <p class="title-banner-iconos">Artesanias</p>
      </div>
      <div
        class="col flex-column justify-content-center align-items-center text-center container-item-iconos"
      >
        <img src="../assets/images/simbolos_3.png" alt="" />
        <p class="title-banner-iconos">Cultura</p>
      </div>
      <div
        class="col flex-column justify-content-center align-items-center text-center container-item-iconos"
      >
        <img src="../assets/images/simbolos_4.png" alt="" />
        <p class="title-banner-iconos">Belleza</p>
      </div>
      <div
        class="col flex-column justify-content-center align-items-center text-center container-item-iconos"
      >
        <img src="../assets/images/simbolos_5.png" alt="" />
        <p class="title-banner-iconos">Tendencias</p>
      </div>
      <div
        class="col flex-column justify-content-center align-items-center text-center container-item-iconos"
      >
        <img src="../assets/images/simbolos_6.png" alt="" />
        <p class="title-banner-iconos">Entretenimiento</p>
      </div>
    </div>
    <!-- buscador (la misma cabecera con border redondeados)-->
    <div class="bg-white" style="width: 100%; padding: 30px 50px 30px 50px">
      <header
        class="grid"
        style="background-color: var(--va-verde); border-radius: 50px"
      >
        <div class="col-1 flex justify-content-center align-items-center">
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
            <i
              class="pi pi-search"
              style="font-size: 1.2frem; color: black"
            ></i>
          </div>
        </div>
        <div class="col-3 flex align-items-center justify-content-around">
          <div class="container-icon">
            <img src="../assets/images/pointer.png" alt="" height="40px" />
            <span class="title-icono">Mi Ubicación</span>
          </div>
          <div class="container-icon">
            <img src="../assets/images/mi_cuenta.png" alt="" height="40px" />
            <span class="title-icono">Mi Cuenta</span>
          </div>
          <div class="container-icon">
            <img src="../assets/images/carrito.png" alt="" height="40px" />
            <span class="title-icono">Mi Carrito</span>
          </div>
        </div>
      </header>
    </div>
    <!-- linea bonita -->
    <div
      class="grid bg-white container-linea-multicolor"
      style="padding: 0px 50px"
    >
      <div class="col-4 separador-multicolor"></div>
      <div class="col-4 separador-multicolor"></div>
      <div class="col-4 separador-multicolor"></div>
    </div>

    <!-- productos -->
    <div style="width: 100%">
      <div class="grid" style="padding: 0px 50px">
        <div class="col-12">
          <img
            src="../assets/images/productos.jpg"
            alt=""
            style="width: 100%"
          />
        </div>
      </div>
    </div>
    <!-- banner imagen -->
    <div class="text-center" style="width: 100%">
      <img src="../assets/images/banner_colorido.jpg" alt="" />
    </div>
    <!-- categorias populares -->
    <h3 class="title-section">Nuestras Categorias Populares</h3>
    <!-- linea bonita -->
    <div
      class="grid bg-white container-linea-multicolor"
      style="padding: 0px 50px"
    >
      <div class="col-4 separador-multicolor"></div>
      <div class="col-4 separador-multicolor"></div>
      <div class="col-4 separador-multicolor"></div>
    </div>
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
    <!-- ofertas del mes -->
    <h3 class="title-section">Ofertas del mes</h3>
    <!-- linea bonita -->
    <div
      class="grid bg-white container-linea-multicolor"
      style="padding: 0px 50px"
    >
      <div class="col-4 separador-multicolor"></div>
      <div class="col-4 separador-multicolor"></div>
      <div class="col-4 separador-multicolor"></div>
    </div>
    <div class="grid" style="padding: 0px 50px">
      <div class="col-6 text-center">
        <img
          src="../assets/images/propaganda_1.jpg"
          alt=""
          style="width: 80%"
        />
      </div>
      <div class="col-6 text-center">
        <img
          src="../assets/images/propaganda_2.jpg"
          alt=""
          style="width: 90%"
        />
        <img
          src="../assets/images/propaganda_3.jpg"
          alt=""
          style="width: 90%; margin-top: 10px"
        />
      </div>
    </div>
    <!-- compañias y marcas -->
    <h3 class="title-section mt-8 mb-4 text-center">Compañias y Marcas</h3>
    <div class="grid">
      <div class="col text-center">
        <img src="../assets/images/companias_marcas.jpg" alt="" />
      </div>
    </div>
    <!-- mercado -->
    <div class="grid mt-4" style="padding: 0px 50px">
      <div class="col-12 flex justify-content-between p-0">
        <span style="font-size: 2rem">Mercado</span>
        <span
          style="color: #57a2ff; font-size: 1.2rem; text-decoration: underline"
          >!Ver Todo¡</span
        >
      </div>
      <div class="col-6 flex justify-content-start p-0">
        <img src="../assets/images/mercado_1.jpg" alt="" />
      </div>
      <div class="col-6 flex justify-content-end p-0">
        <img src="../assets/images/mercado_2.jpg" alt="" />
      </div>
    </div>

    <!-- banner botonera (la misma de arriba)-->
    <div class="grid mt-8">
      <div class="col-12 p-0 container-item-botonera">
        <img src="../assets/images/simbolos.png" alt="" style="width: 100%" />
      </div>
    </div>
    <!-- newsletter -->
    <div class="grid">
      <div class="col-12 p-0">
        <img src="../assets/images/newsletter.png" alt="" style="width: 100%" />
      </div>
    </div>
    <!-- footer -->
    <footer class="grid" style="padding: 40px 50px">
      <div class="col-9">
        <div class="grid">
          <div class="col-12">
            <img
              src="../assets/images/logo_vive_footer.png"
              alt=""
              height="75"
            />
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
        <img
          src="../assets/images/buscar.png"
          alt=""
          width="120"
          class="mb-6"
        />
        <img
          src="../assets/images/ministerio.jpg"
          alt=""
          width="250"
          style="margin: 0px auto"
        />
      </div>
      <div class="col-12"></div>
    </footer>
  </div>
</template>

<script setup></script>

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

/* banner iconos */
.container-item-iconos {
  img {
    height: 120px;
    width: auto;
  }
  p {
    margin-top: 20px;
    font-size: 1.2rem;
    font-weight: 600;
    color: black;
  }
}

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

/* sectiones */
.title-section {
  font-size: 1.8rem;
  font-weight: 600;
  margin: 5px 0px;
  padding: 0px 50px;
}

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

/* imagen con mascara */
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
