<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Planos eléctricos
    p.mb-5(data-aos="fade-left") El diseño de las instalaciones eléctricas debe incluir la elaboración de planos que muestran en forma gráfica y simbólica los aspectos constructivos del proyecto, usando los símbolos establecidos por el retie. Existen dos tipos de planos: los diagramas unifilares para las acometidas y tableros y, los multifilares para la localización en planta de las salidas y los tableros. El formato del papel y el rótulo de marcación que deben usarse para la elaboración de los planos los establece el operador de red.
    p.mb-5(data-aos="fade-left") <b>Podrá verificar qué es y cuál es la simbología y rotulado explorando el siguiente recurso:</b>

    .tarjeta.tarjeta--azul.p-4.mb-5.mt-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0.p-5
            h4  Formatos 700x1000 y 500x700 mm. (figura A.49 Norma técnica ESSA)
            p Cuando se necesite usar un símbolo que no esté establecido en retie o por el operador de red, se pueden usar símbolos propios con la condición de que se especifiquen en el espacio del rótulo destinado para tal fin. A manera de ejemplo se muestra en la siguiente figura los formatos establecidos por la ESSA para la presentación de planos.
          .col-sm-6
            figure
              img(src='@/assets/curso/temas/tema5/1.svg', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0.p-5
            h4  Rótulo para formatos 700x1000 y 500x700 mm. (figura A.49 Norma técnica ESSA)
          .col-sm-6
            figure
              img(src='@/assets/curso/temas/tema5/2.svg', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0.p-5
            h4  Figura 25. Formato 280 mm. (figura A.50 Norma técnica ESSA)
          .col-sm-6
            figure
              img(src='@/assets/curso/temas/tema5/3.svg', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0.p-5
            h4  Rótulo para formato 280 mm. (figura A.50 Norma técnica ESSA)
          .col-sm-6
            figure
              img(src='@/assets/curso/temas/tema5/4.svg', alt='Texto que describa la imagen')

    p.mb-5(data-aos="fade-left") <b>Se invita a consultar el siguiente recurso:</b>

    .row.justify-content-center 
      .col-8
        TabsC.color-acento-contenido
          .py-3.py-md-4(titulo="Diagrama unifamiliar")
            .row.justify-content-center.align-items-center 
              .col-md-8.mb-4.mb-md-0
                p Un ejemplo de diagrama unifamiliar de una instalación eléctrica se muestra en la siguiente figura:
              .col-md-8
                figure
                  img(src='@/assets/curso/temas/tema5/5.svg', alt='Texto que describa la imagen')
          .py-3.py-md-4(titulo="Diagrama multifamiliar")
            .row.justify-content-center.align-items-center 
              .col-md-8.mb-4.mb-md-0
                p Un ejemplo de diagrama multifamiliar para la instalación con el diagrama unifamiliar se muestra en la siguiente figura:
              .col-md-8
                figure
                  img(src='@/assets/curso/temas/tema5/6.svg', alt='Texto que describa la imagen')
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
