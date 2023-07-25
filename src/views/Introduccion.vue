<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-4
      .col-12
        p(data-aos="fade-letf") Respetado aprendiz, en esta unidad visualizará <b>los reglamentos técnicos del <i>RETIE</i> y el <i>RETILAP</i></b> en los que se especifican los requisitos que deben cumplir los productos, las instalaciones eléctricas y de alumbrado para garantizar la seguridad de las personas y la preservación del medio ambiente, a partir de la implementación de mecanismos de verificación. El siguiente vídeo permite identificar todos estos requisitos:
      //.col-sm-5(data-aos="zoom-in-up")
      //  figure
      //  img(src='@/assets/curso/temas/intro/1.svg')
      
    figure(data-aos="zoom-in-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/qPduI2ePAFM" title="Requisitos de producto" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
