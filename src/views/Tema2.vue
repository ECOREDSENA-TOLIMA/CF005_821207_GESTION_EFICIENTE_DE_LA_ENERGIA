<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Niveles de iluminación

    p.mb-4(data-aos="fade-left") En el Artículo 200.2 del #[i RETILAP] se establece que para conocer los requerimientos de luz de cualquier proyecto es necesario determinar el nivel de iluminación óptimo para el tipo de actividad a desarrollar, las condiciones visuales de quien las desarrolla, el tiempo de permanencia y los fines específicos que se persigan. Por lo tanto, es necesario definir las cantidades y las unidades de variables lumínicas que permitan comparar los niveles de iluminación de las diferentes clases de fuentes y establecer sus valores óptimos para las condiciones visuales del ser humano.

    separador
    #t_2_1.titulo-segundo.color-acento-botones
      h2 2.1 Flujo luminoso

    p.mb-4(data-aos="fade-left") En el siguiente recurso se describirá en qué consiste el flujo luminoso:

    .tarjeta.tarjeta--azul.p-4.mb-5.mt-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Las fuentes lumínicas son elementos que transforman energía eléctrica en calor y radiación electromagnética, la cual está compuesta por un conjunto de ondas electromagnéticas de diferente longitud de onda. La forma en que se distribuye la potencia en cada una de las longitudes de onda emitidas por la fuente lumínica es única para cada sustancia que la compone, hasta el punto de que se puede identificar la fuente por su espectro electromagnético.
          .col-sm-4
            figure
              img(src='@/assets/curso/temas/tema2/1.svg', alt='Texto que describa la imagen')
              
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Experimentalmente se ha determinado que de todo el espectro electromagnético, el ojo humano solo percibe una pequeña porción de este (entre 380 y 780 nm) y al cual se le denomina espectro visible, como se muestra en la imagen.
          .col-sm-4
            figure
              img(src='@/assets/curso/temas/tema2/2.svg', alt='Texto que describa la imagen')
              
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p También se ha comprobado experimentalmente que la sensibilidad del ojo humano no es constante para todas las longitudes de onda dentro del espectro visible. Es más, existen dos clases de fotorreceptores en el ojo humano que originan dos mecanismos bien diferenciados de visión: uno para condiciones de buena luminosidad denominado visión fotópica (debido a los conos) en donde se percibe forma y color de los objetos y otro para condiciones de baja luminosidad denominado visión escotópica (debido a los bastones) en donde solo se perciben las formas de los objetos. La distribución de potencia en el espectro visible para los dos mecanismos de visión del ser humano se muestra en la siguiente imagen:
          .col-sm-4
            figure
              img(src='@/assets/curso/temas/tema2/3.svg', alt='Texto que describa la imagen')
              

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Se define ahora el flujo luminoso como la cantidad de potencia eléctrica consumida por una fuente lumínica, que efectivamente se convierte en luz en el espectro visible y su unidad de medida es el lumen, el cual se define como la 1/683 parte de la potencia luminosa de una onda de 555 nm de longitud de onda en condiciones de claridad o la 1/1700 parte de la potencia luminosa de una onda de 507 nm de longitud de onda en condiciones de oscuridad. El cálculo del flujo luminoso de cualquier fuente se realiza usando las siguientes ecuaciones:
            p En donde F es el flujo luminoso fotópico y F´ es el flujo luminoso escotópico de la fuente lumínica en lúmenes, P𝜆 es la potencia en vatios de la fuente lumínica a la longitud de onda 𝜆, y V𝜆 y V´𝜆 la eficiencia fotópica y escotópica del ojo humano respectivamente, a la longitud de onda 𝜆.
          .col-sm-4
            figure
              img(src='@/assets/curso/temas/tema2/4.svg', alt='Texto que describa la imagen')
              

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Aplicando la fórmula anterior para una fuente de luz blanca ideal (radiación de potencia constante para todo el espectro visible y cero en el resto) se obtiene la máxima eficiencia luminosa posible para el ojo humano, estos 220 lm/w.
            p Los valores de flujo luminoso de cada fuente son suministrados por el fabricante en la hoja de datos del producto.
          .col-sm-4
            figure
              img(src='@/assets/curso/temas/tema2/5.svg', alt='Texto que describa la imagen')

    separador
    #t_2_2.titulo-segundo.color-acento-botones
      h2 2.2 Nivel de iluminancia

    p.mb-5(data-aos="fade-left") Otro parámetro usado para evaluar los niveles de iluminación de un proyecto es la iluminancia, cuyo valor promedio se define como la densidad superficial del flujo luminoso, es decir, el flujo luminoso en lúmenes de la fuente dividido por el área en m#[sup 2] de la superficie a iluminar. La unidad de medida es el lux, que es igual a 1 lumen/m#[sup 2], formalmente el nivel de iluminancia de una superficie es igual a la derivada del flujo luminoso respecto al área de la superficie en consideración.

    .row.justify-content-center.mb-5(data-aos="slide-right" data-aos-duration="900")
      .col-12.col-lg-8
        .tarjeta.color-primario.p-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema2/6.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small <b>Los niveles de iluminancia promedio requeridos por el <i>RETILAP</i> para diferentes áreas y actividades son adoptados de la Norma ISO 8995 y se encuentran en la tabla 410.1 del mismo numeral, como se muestra a continuación:</b> 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexo_RETILAP.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    separador
    #t_2_3.titulo-segundo.color-acento-botones
      h2 2.3 Iluminación interior y exterior

    p.mb-5(data-aos="fade-left") El tipo de actividad a desarrollar en el área del proyecto según el #[i RETILAP] es una de las variables a considerar en la determinación de los requisitos del proyecto de iluminación, y el tipo de actividades que se pueden desarrollar en un área determinada dependen en gran medida del tipo de espacio a considerar, es decir, si es un área interior o una exterior. 
    p.mb-5(data-aos="fade-left") <b>Complemente su estudio revisando la siguiente información:</b> 

    .row.justify-content-center.align-items-center
      .tarjeta.tarjeta--azul.p-4.mb-5
        .row.justify-content-center.align-items-center
          .col-lg-8
            h3.text-center.mb-5 Iluminación interior y exterior
            p.mb-5 Por regla general, las áreas interiores corresponden a áreas privadas y las exteriores a áreas públicas, estando representadas estas últimas principalmente por vías peatonales, vehiculares y escenarios deportivos.
            figure.mb-5
              img(src='@/assets/curso/temas/tema2/7.svg')
            p.mb-5.text-center Los tipos de fuentes lumínicas aceptadas por #[i RETILAP] actualmente son:
            figure.mb-5
              img(src='@/assets/curso/temas/tema2/8.svg')
          .col-lg-6  
            .tarjeta.color-primario.p-4.mb-5
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.px-5
                  p.text-small Los requisitos para cada tipo de fuente lumínica se encuentran especificados en el numeral 305 del #[i RETILAP].
          .col-lg-10
            p.mb-5 Las lámparas requieren para su instalación un elemento denominado luminaria, definido por #[i RETILAP] como aparato que distribuye, filtra o transforma la luz emitida por una o más fuentes lumínicas y que incluye todas las partes necesarias para el soporte, la fijación, la protección y los medios de conexión de la lámpara a la fuente de alimentación.
          .col-lg-8
            figure.mb-5
              img(src='@/assets/curso/temas/tema2/9.svg')
          .col-lg-8
            p.mb-5.text-center Los criterios usados para seleccionar el conjunto lámpara - luminaria apropiado para cada actividad según #[i RETILAP] son:
          .col-lg-5
            figure.mb-5
              img(src='@/assets/curso/temas/tema2/10.svg')
          .col-lg-8          
            .tarjeta.tarjeta--gris.p-4.mb-4
              PasosB.color-acento-contenido
                .row.justify-content-center.align-items-center
                  .col-12.mb-4.mb-md-0
                    p Fotometría (incluye flujo luminoso, índice de reproducción cromática y temperatura de color). 
                .row.justify-content-center.align-items-center
                  .col-12.mb-4.mb-md-0
                    p Dimensiones y forma de luminaria.
                .row.justify-content-center.align-items-center
                  .col-12.mb-4.mb-md-0
                    p Cerramiento o grado de protección IP.
                .row.justify-content-center.align-items-center
                  .col-12.mb-4.mb-md-0
                    p Tipo de superficie reflectora del conjunto óptico.
          .col-lg-10
            p.mb-5 La temperatura del color de una lámpara es una característica que hace referencia a la tonalidad de la luz emitida y corresponde a la temperatura en grados kelvin a la cual debe calentarse un cuerpo negro para que emita luz del color indicado. 
          .col-lg-4
            figure.mb-5
              img(src='@/assets/curso/temas/tema2/11.svg')
          .col-lg-10
            p.mb-5 Se acostumbra a denominar luz día a la de temperaturas de color entre 5500 y 6000 ºK, colores cálidos a los desplazados hacia el extremo amarillo del espectro (menor temperatura de color) y colores fríos a los desplazados hacia el extremo azul del espectro (mayor temperatura de color), tal y como se muestra en la siguiente imagen:
          .col-lg-8
            figure.mb-5
              img(src='@/assets/curso/temas/tema2/12.svg')
            p.text-center.mb-5 Temperatura de color de fuentes lumínicas
          .col-lg-10
            figure.mb-5
              img(src='@/assets/curso/temas/tema2/13.svg')

    .row.justify-content-center
      .col-lg-8
        .cajon.color-primario.px-5.py-4.mb-4
          p.mb-0 Los niveles de iluminancia promedio requeridos por el #[i RETILAP] para diferentes tipos de vías se encuentran en la tabla 510.2.1.b para vías vehiculares y en la tabla 510.2.2 para vías peatonales, como se muestra a continuación:

    .titulo-sexto.color-acento-contenido
      <b>Tabla 6.</b> <i>Niveles de iluminancia promedio mínimo para vías vehiculares (tabla 510.2.1.b RETILAP)</i>
    .row.justify-content-center
      .col-12.mb-5
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th(rowspan="2") Clase de iluminación
                th(colspan="3") Valor promedio ( minimo mantenido) de iluminancia Según tipo de superficie de la via (luxes)
                th Uniformidad de la iluminancia
              tr
                th R1
                th R2 y R3
                th R4
                th E#[sub min] /E#[sub prom] (%)
            tbody
              tr 
                td.text-center M3
                td.text-center 12
                td.text-center 17 
                td.text-center 15
                td.text-center 34%
              tr
                td.text-center M4
                td.text-center 8
                td.text-center 12 
                td.text-center 10
                td.text-center 25%
              tr 
                td.text-center M5
                td.text-center 6
                td.text-center 99 
                td.text-center 8
                td.text-center 18%

    
    .titulo-sexto.color-acento-contenido
      <b>Tabla 7.</b> <i>Niveles de iluminancia promedio mínimo para vías peatonales (tabla 510.2.2 RETILAP)</i>
    .row.justify-content-center
      .col-lg-10.mb-5
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th(rowspan="2") Clase de iluminación
                th(colspan="2") Iluminación Horizontal (luxes)
              tr
                th Valor promedio
                th Valor mínimo
            tbody
              tr
                th P1
                td.text-center 20,0
                td.text-center 7,5
              tr
                th P2
                td.text-center 10,0
                td.text-center 3,0
              tr
                th P3
                td.text-center 7,5
                td.text-center 1,5
              tr
                th P4
                td.text-center 5,0
                td.text-center 1,0
              tr
                th P5
                td.text-center 3,0
                td.text-center 0,6
              tr
                th P6
                td.text-center 1,5
                td.text-center 0,2
              tr
                th P7
                td.text-center No aplica
                td.text-center No aplica

    h3.text-center.mb-5(data-aos="fade-left") Medición de niveles de iluminación
    .row.justify-content-center 
      .col-lg-10
        p.mb-5(data-aos="fade-left") La medición de los niveles de iluminación de un proyecto tiene como finalidad verificar que los niveles reales de flujo luminoso e iluminancia concuerden con los niveles calculados en el diseño. Con esta finalidad se debe contar con instrumentos adecuados (calibrados) y un procedimiento aceptado por la norma. Explore la infografía para saber más.
        PasosB.color-acento-contenido
          .row.justify-content-center.align-items-center
            .col-12.mb-4.mb-md-0
              p La medida del flujo luminoso, por ser una característica propia de la fuente de luz, es una responsabilidad de los fabricantes, quienes deben certificar en la hoja de datos del producto el valor de esta variable, medido por un laboratorio acreditado y mediante el uso de un instrumento denominado esfera de Ulbricht, que consiste en una esfera hueca con su interior recubierto por una capa de material reflectante blanco difuso (reflexión en todas las direcciones) y un fotodetector ajustado a la curva de sensibilidad fotópica del ojo humano y situado en una pequeña ventana frontal sobre la esfera en donde eventualmente converge todo el flujo luminoso de cualquier fuente lumínica ubicada en el centro de la esfera.
          .row.justify-content-center.align-items-center
            .col-12.mb-4.mb-md-0
              p Teniendo en cuenta que la iluminancia depende del área que se pretende iluminar, debe ser medida en un sitio con un instrumento denominado luxómetro, el cual tiene tres características importantes: sensibilidad o rango de medida, corrección de color para ajustarlo a la sensibilidad del observador fotópico normalizado y corrección coseno que permite al instrumento realizar mediciones de luz en direcciones diferentes a la normal.
          .row.justify-content-center.align-items-center
            .col-12.mb-4.mb-md-0
              p En cuanto al procedimiento de medida, los numerales 490 (iluminación interior) y 540 (iluminación exterior) del RETILAP establecen que el espacio debe ser dividido usualmente por una cuadrícula de 0.6 m de lado y el luxómetro se debe ubicar sucesivamente en el centro de cada cuadrado a la altura del plano de trabajo usado en el diseño. Si no se cuenta con este valor se consideran para iluminación interior dos planos de trabajo, uno a 0,75 m (actividades sentado) y otro a 0,85 m (actividades de pie), ambos medidos sobre el nivel del suelo. Para iluminación exterior el plano de trabajo se considera a 0.15 m sobre el nivel del suelo. 
          .row.justify-content-center.align-items-center
            .col-12.mb-4.mb-md-0
              p Se calcula la media aritmética de todas las lecturas tomadas y ese valor debe corresponder con el valor de iluminancia promedio del diseño para cada plano de trabajo. Los numerales del RETILAP mencionados suministran modelos de mallas de medición específicas para varias configuraciones de localización de lámparas.
              
        //figure.mb-5
          img(src='@/assets/curso/temas/tema2/16.svg')

</template>

<script>
export default {
  name: 'Tema2',
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
