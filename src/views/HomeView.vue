<template>
  <div>
    <!-- cabecera -->
    <HeaderBar />
    <!-- JUMBO -->
    <Jumbo />
    <!-- banner botonera -->
    <BannerBotonera />
    <!-- banner iconos -->
    <BannerIconos />
    <!-- Banda Multicolor -->
    <BandaMulticolor />
    <!-- productos -->
    <ProductosList />
    <!-- banner imagen -->
    <BannerImage />
    <!-- categorias populares -->
    <CategoriasPopulares />
    <!-- ofertas del mes -->
    <OfertasDelDia />
    <!-- compañias y marcas -->
    <CompaniasYMarcas />
    <!-- mercado -->
    <Mercado />
    <!-- banner botonera-->
    <BannerBotonera class="mt-8" />
    <!-- NewsLetter-->
    <NewsLetter />
    <!-- footer -->
    <FooterMain />
  </div>
</template>

<script setup>
import BannerBotonera from "../components/BannerBotonera.vue";
import HeaderBar from "../components/HeaderBar.vue";
import Jumbo from "../components/Jumbo.vue";
import BannerIconos from "../components/BannerIconos.vue";
import BandaMulticolor from "../components/BandaMulticolor.vue";
import ProductosList from "../components/ProductosList.vue";
import CategoriasPopulares from "../components/CategoriasPopulares.vue";
import OfertasDelDia from "../components/OfertasDelDia.vue";
import CompaniasYMarcas from "../components/CompaniasYMarcas.vue";
import FooterMain from "../components/Footer.vue";
import Mercado from "../components/Mercado.vue";
import NewsLetter from "../components/NewsLetter.vue";
import BannerImage from "../components/BannerImage.vue";
</script>

<style lang="scss">
/* sectiones */
.title-section {
  font-size: 1.8rem;
  font-weight: 600;
  margin: 5px 0px;
  padding: 0px 50px;
}
</style>
