<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Trabajos en redes desenergizadas
    p(data-aos="fade-left") Aunque el objeto de estudio del #[i RETIE] son las instalaciones eléctricas, su objetivo primordial es garantizar la seguridad de las personas frente a los riesgos de origen eléctrico, siendo la prevención la estrategia más efectiva para lograrlo. Es un hecho que nuestro cuerpo por estar compuesto un 60% de agua es conductor de la electricidad y, por lo tanto, circulará corriente por él, siempre que sea sometido a una diferencia de potencial. Por esta razón, la primera herramienta de prevención frente a los riesgos de origen eléctrico es mantener el cuerpo aislado de las fuentes de voltaje.

    separador
    #t_3_1.titulo-segundo.color-acento-botones
      h2 3.1 Distancias de seguridad
    
    .row.justify-content-center.align-items-center
      .tarjeta.tarjeta--azul.p-4.mb-5
        .row.justify-content-center.align-items-center
          .col-lg-7
            p El aire es la sustancia que naturalmente se encuentra entre las fuentes de voltaje y nuestro cuerpo, afortunadamente, el aire es un material aislante con dos características importantes que debe conocer, su rigidez dieléctrica promedio (valor límite de voltaje a partir del cual se vuelve conductor) en ausencia de humedad es de 1 kV/cm y que en caso de presentarse una descarga o sea una falla, si el valor de voltaje que la produce disminuye, la condición de aislante se recupera, es decir, es un proceso reversible. 
          .col-lg-4
            figure.mb-5
              img(src='@/assets/curso/temas/tema3/1.svg')
          .col-lg-4
            figure.mb-5
              img(src='@/assets/curso/temas/tema3/2.svg')
          .col-lg-7
            p Aplicando una sencilla regla de proporcionalidad se puede calcular para cada nivel de voltaje la distancia mínima que garantiza el aislamiento, y como el valor de 1 kV/cm es un valor promedio, se aplica un factor de seguridad al cálculo de estas distancias para disminuir el riesgo de electrocución. Como resultado del proceso descrito el #[i RETIE] en el numeral 10.4 establece los espacios mínimos para el montaje, operación y mantenimiento de los equipos eléctricos de acuerdo con su nivel de tensión y en el Artículo 13 establece las distancias horizontales y verticales mínimas que deben mantenerse respecto de las partes energizadas y, se definen las distancias mínimas de aproximación, como puede observarse en la siguiente figura:

        .titulo-sexto.color-acento-contenido
          <b>Figura 9.</b> <i> Límites de aproximación </i>
        .row.justify-content-center
          .col-lg-10
            figure.mb-5
              img(src='@/assets/curso/temas/tema3/3.svg')


    separador
    #t_3_2.titulo-segundo.color-acento-botones
      h2 3.2 Reglas de oro

    p.mb-5 Los trabajos sobre equipos energizados, aunque no están prohibidos por el #[i RETIE] son clasificados como de alto riesgo y solo deben efectuarse en situaciones especiales por el personal calificado y con herramientas especialmente diseñadas para estas actividades. Como regla general de prevención, los trabajos sobre equipos eléctricos deben realizarse, siempre que sea posible, en condición de desenergización y en estricta observancia de las cinco “reglas de oro” establecidas en el numeral 18.1 del #[i RETIE], así:

    SlyderF.mb-5(columnas="col-md-6 col-xl-4")
      .tarjeta.tarjeta--gris.p-4
        .row.justify-content-center.mb-3
          .col-7
            img(src='@/assets/curso/temas/tema3/4.svg' alt='AvatarTop')
        p.text-small.text-center Efectuar el corte visible de todas las fuentes de tensión.
      .tarjeta.tarjeta--gris.p-4
        .row.justify-content-center.mb-3
          .col-7
            img(src='@/assets/curso/temas/tema3/5.svg' alt='AvatarTop')
        p.text-small.text-center Condenación o bloqueo del circuito a intervenir.
      .tarjeta.tarjeta--gris.p-4
        .row.justify-content-center.mb-3
          .col-7
            img(src='@/assets/curso/temas/tema3/6.svg' alt='AvatarTop')
        p.text-small.text-center Verificar ausencia de tensión en cada una de las fases.
      .tarjeta.tarjeta--gris.p-4
        .row.justify-content-center.mb-3
          .col-7
            img(src='@/assets/curso/temas/tema3/D7.svg' alt='AvatarTop')
        p.text-small.text-center Puesta a tierra temporales y en cortocircuito de todas las posibles fuentes de tensión que incidan en la zona de trabajo.
      .tarjeta.tarjeta--gris.p-4 
        .row.justify-content-center.mb-3
          .col-7
            img(src='@/assets/curso/temas/tema3/E8.svg' alt='AvatarTop')
        p.text-small.text-center Señalizar y delimitar la zona de trabajo.

    //.row.justify-content-center.mb-3
    //  .col-lg-5
    //    figure
    //      img(src='@/assets/curso/temas/tema3/7.svg', alt='Texto que describa la imagen')

    separador
    #t_3_3.titulo-segundo.color-acento-botones
      h2 3.3 Medida de sistemas de puesta a tierra
    
    p.mb-5(data-aos="fade-left") El Artículo 15 del #[i RETIE] establece que toda instalación eléctrica debe disponer de un sistema de puesta a tierra (SPT), para que en caso de ocurrencia de una falla, ninguna persona ubicada en el área de influencia de la misma sea sometida a tensiones superiores al umbral de soportabilidad del ser humano. Para que el SPT cumpla con su función es necesario que su resistencia no supere los valores establecidos en IEC 60364-4-442, como se muestra en la siguiente tabla:

    .titulo-sexto.color-acento-contenido
      <b>Tabla 8.</b> <i>Valores de referencia para la resistencia de puesta a tierra (tabla 15.4 RETIE)</i>

    .row.justify-content-center
      .col-lg-10.mb-5
      .tabla-a.color-acento-botones.mb-5 
        table
          thead
            tr
              th Aplicación
              th Valores Máximos de resistencia de Puesta a Tierra
          tbody
            tr
              td.text-center Estructuras y torrecillas metálicas de líneas o redes con cable de guarda.
              td.text-center 20 Ω
            tr
              td.text-center Subestaciones de alta y extra alta tensión.
              td.text-center 1 Ω 
            tr
              td.text-center Subestaciones de media tensión.
              td.text-center 10 Ω 
            tr
              td.text-center Protección contra rayos.
              td.text-center 10 Ω 
            tr
              td.text-center Punto neutro de acometida en baja tensión.
              td.text-center 25 Ω 
            tr
              td.text-center Redes para equipos electrónicos o sensibles.
              td.text-center 10 Ω 

    .row.justify-content-center
      .col-lg-8
        .cajon.color-primario.px-5.py-4.mb-4
          p.mb-0 La verificación de conformidad del valor de resistencia del SPT con los valores de la tabla 8 solo puede ser efectuada midiendo dicha resistencia y para ello, #[b #[i RETIE] recomienda el método de la caída de potencial mostrado en la siguiente figura:]
    
    .titulo-sexto.color-acento-contenido
      <b>Figura 10.</b> <i>Esquema de medición de resistencia de puesta a tierra (figura 15.5 RETIE)</i>
    
    .row.justify-content-center
      .col-lg-8
        figure.mb-5
          img(src='@/assets/curso/temas/tema3/9.svg', alt='Texto que describa la imagen')
      .col-lg-6
        .tarjeta.color-secundario.p-4.mb-5
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.px-5
              p.text-small #[b En donde x] es la distancia del electrodo auxiliar de tensión y d es la distancia del electrodo auxiliar de corriente, que debe ser equivalente a 6,5 veces la mayor distancia del SPT.

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
