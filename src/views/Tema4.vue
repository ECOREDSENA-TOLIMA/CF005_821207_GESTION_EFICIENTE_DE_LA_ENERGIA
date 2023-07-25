<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Cuadros de carga
    p.mb-5(data-aos="fade-left") La aplicación de los requisitos del #[i RETIE] y los de la NTC 2050 a las instalaciones eléctricas determina la distribución de los circuitos y la localización de las salidas para tomacorrientes y luminarias necesarias para atender la demanda de energía eléctrica del usuario. El cuadro de carga de una instalación es una herramienta que muestra en forma resumida las principales características de las cargas atendidas por el tablero de distribución y un ejemplo de su estructura se muestra en la siguiente tabla:  
    .titulo-sexto.color-acento-contenido
      <b>Tabla 9.</b> <i>Cuadro de carga</i>

    .row.justify-content-center
      .col-lg-10.mb-5
        table.text-center
          <tr>
            <th>Circuito</th>
            <th>Toma Normal</th>
            <th>Tomas Especial</th>
            <th>Salida Alumbrado</th>
            <th colspan="4">Potencia (w)</th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th></th>          
            <th></th>
            <th>R</th>
            <th>S</th>
            <th>T</th>
            <th>Total</th>
          </tr>

    p.mb-5(data-aos="fade-left") <b>De acuerdo con lo anterior, revise esta didáctica que ayuda a complementar el tema que se viene explicando.</b>

    .row.justify-content-center
      .col-lg-9
        TabsA.color-acento-botones.mb-5
          .tarjeta.color-acento-botones--borde.p-4(titulo="Columna del circuito")
            h4 Columna del circuito
            p This is a normal paragraph
          .tarjeta.color-acento-botones--borde.p-4(titulo="Columnas de potencia")
            h4 Columnas de potencia 
            p Las columnas de potencia en vatios corresponden a la suma de las potencias nominales de los aparatos atendidos por el circuito y discriminados según la fase a la que esté conectado el circuito. Si el circuito es a 220V o trifásico el valor de potencia en cada fase corresponde a la mitad o a la tercera parte de la potencia total según corresponda.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Factor de potencia")
            h4 Columna del circuito
            p This is a normal paragraph
          .tarjeta.color-acento-botones--borde.p-4(titulo="Valor de la columna")
            h4 Columna del circuito
            p This is a normal paragraph
          .tarjeta.color-acento-botones--borde.p-4(titulo="Cálculo de la magnitud")
            h4 Columna del circuito
            p This is a normal paragraph
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema4/1.svg', alt='Texto que describa la imagen')

    p.mb-5(data-aos="fade-left") El calibre de los conductores se selecciona de acuerdo con la tabla 5 y el diámetro de los ductos de acuerdo con las tablas C1 a C10 del anexo C de la NTC 2050, como se muestra en la siguiente tabla:

    .titulo-sexto.color-acento-contenido
      <b>Tabla 10.</b> <i>Número máximo de conductores y alambres de aparatos en tubo conduit rígido de PVC Schedule 80 (extracto de tabla C 9 del anexo C de la NTC2050)</i>

    .tabla-a.color-acento-botones.mb-5.mt-5 
      table
        thead
          tr
            th Letras De tipo
            th Sección Transversal del Conductor
            th Tamaño comercial mm Pulgadas
        tbody
          tr
            td 
            td 
            td 

    separador
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1 Carga y demanda eléctrica

    .row.justify-content-center.align-items-center
      .col.lg-7
          p La carga eléctrica de un equipo eléctrico según #[i RETIE] es la potencia eléctrica requerida para su funcionamiento. La carga nominal es la máxima potencia promedio que el equipo puede soportar continuamente sin deteriorarse. Este es el valor que el fabricante declara en la hoja de datos del producto. Y la demanda es el valor instantáneo de la carga en un momento determinado, por ejemplo, en una unidad familiar hay un circuito con 10 luces led de 12 [w] de potencia nominal cada una. La carga nominal del circuito es de 120 [w], pero la demanda corresponde a 48 [w] cuando hay 4 luces encendidas o 72 [w] cuando hay 6.
      .col.lg-5
        figure
          img(src='@/assets/curso/temas/tema4/2.svg', alt='Texto que describa la imagen')
    .row.justify-content-center.align-items-center
      .col.lg-4.offset-lg-2.mb-5
        figure
          img(src='@/assets/curso/temas/tema4/3.svg', alt='Texto que describa la imagen')
      .col-lg-6
          p Se conoce como factor de demanda al resultado de dividir la demanda máxima esperada entre la carga nominal de un usuario. Determinar el factor de demanda de los diferentes sectores es responsabilidad del operador de red al que están conectados los usuarios, para darlo a conocer a los diseñadores y así ellos dimensionan correctamente el calibre de los cables y las protecciones de las instalaciones. La siguiente tabla es un ejemplo de factores de demanda de los usuarios de la electrificadora de Santander (ESSA):

    .titulo-sexto.color-acento-contenido
      <b>Tabla 11.</b> <i>Factores de demanda por tipo de usuario (tabla 2.15 Norma Técnica ESSA)</i>   

    .row.justify-content-center 
      .col-lg-8
        .tabla-a.color-acento-botones.mb-5
          table
            thead
              tr
                th Descripción
                th Carga
                th Factor de demanda (%)
            tbody
              tr
                td 
                td 
                td 
    separador
    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2 Carga nominal electrodomésticos comunes

    .row.justify-content-center.align-items-center
      .col-lg-8
        p De acuerdo con el #[i RETIE] la responsabilidad de la conformidad de una instalación es compartida entre el diseñador y el constructor y, un buen diseño empieza con una acertada caracterización de las cargas. Esta caracterización también es importante para gestionar el uso racional de la energía (URE) en los Sistemas de gestión energético. Por esta, razón es prioritario tener una idea general sobre el consumo de los electrodomésticos más comunes; de los diferentes estudios que se han realizado en este campo, el realizado en el 2009 por el organismo delegado para ejercer la función de regulación del Estado en los asuntos energéticos es la comisión de regulación de energía y gas (CREG), que incluye la tabla mostrada a continuación: 
      .col.lg-4
        figure
          img(src='@/assets/curso/temas/tema4/4.svg', alt='Texto que describa la imagen')

          
    .titulo-sexto.color-acento-contenido
      <b>Tabla 12.</b> <i>Carga nominal de electrodomésticos comunes (tabla 1 Consultoría para la determinación de las pérdidas de energía en los mercados de comercialización presentes en el SIN volumen 3 CREG)</i>
    .row.justify-content-center
      .col-lg-8
        .tabla-a.color-acento-botones.mb-5
          table.text-center
            thead
              tr
                th Electrodomésticos básicos de un hogar
                th Consumo nominal W
            tbody
              tr
                td Nevera
                td 250
                  
    p.mb-5(data-aos="fade-left") Posterior a la publicación del estudio algunos equipos con motores de inducción como aires acondicionados y lavadoras adoptaron la tecnología “inverter”, la cual les permite desarrollar las mismas funciones, pero con una disminución aproximada de un 40% de la potencia nominal de los equipos sin esa tecnología. En el 2011 mediante el Decreto 3450 de 2008 se prohíbe la importación, distribución y uso de fuentes lumínicas de baja eficacia como las incandescentes, entre otras. Actualmente se usan lámparas led de potencia nominal 12 y 9 [w], las cuales emiten un flujo luminoso equivalente a las bombillas incandescentes de 100 y 60 [w] respectivamente.

    .row.justify-content-center.mb-5(data-aos="slide-right" data-aos-duration="900")
      .col-12.col-lg-8
        .tarjeta.color-primario.p-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema4/5.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p <b>Se invita a explorar la circular 0057 de 2009, y de esta manera complemente la información.</b> 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/CIRCULAR057-2009.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    separador
    #t_4_3.titulo-segundo.color-acento-contenido
      h2 4.3 Salidas de iluminación

    p.mb-5(data-aos="fade-left") En forma general, la cantidad de luminarias de un proyecto de iluminación, así como el tipo de fuente lumínica y tipo de luminaria seleccionada es el resultado final de la elaboración de un diseño ajustado a los requisitos establecidos por el #[i RETIE] y el #[i RETILAP] aplicables al proyecto; sin embargo, para proyectos de iluminación que de acuerdo con #[i RETILAP] no requieren diseño, como los de unidades de vivienda o como punto de partida para los que sí lo requieren, la cantidad de luminarias se puede estimar por comparación directa de la iluminancia promedio calculada por el área del proyecto, con los valores correspondientes a la actividad desarrollada en el área considerada establecidos por el #[i RETILAP] en la tabla 6. Estos cálculos se pueden organizar en una tabla como la siguiente:

    .titulo-sexto.color-acento-contenido
      <b>Tabla 13.</b> <i>Tabla de iluminancias promedio por área del proyecto</i>

    .col-12.mb-5
      .tabla-a.color-acento-botones.mb-5
        table.text-center
          thead
            tr
              th Ubicación
              th Largo (m)
              th Ancho (m)
              th Area (m2)
              th Flujo luminoso por Lámpara (lumen)
              th Cantidad deLámparas
              th Iluminancia(Lux)
              th Iluminancia Promedio #[i RETILAP] (lux)
              th Observaciones


    separador
    #t_4_4.titulo-segundo.color-acento-contenido
      h2 4.4 Salidas para tomacorrientes

    p.mb-5(data-aos="fade-left") De acuerdo con la sección 210 parte C de la NTC 2050 la cantidad de salidas, su localización y el tipo de tomacorrientes necesarios para instalaciones eléctricas residenciales se deben ajustar a los siguientes requisitos:
                
    .row.justify-content-center.align-items-center
      .col-8
        .tarjeta.tarjeta--azul.p-4
          PasosB.color-acento-contenido
            .row.justify-content-center.align-items-center
              .col-md-8.mb-4.mb-md-0
                p <b>Requisito 1.</b> Todos los tomacorrientes deben ser con polo a tierra y polarizados.
            
            .row.justify-content-center.align-items-center
              .col-md-8.mb-4.mb-md-0
                p <b>Requisito 2.</b> Los tomacorrientes deben ser localizados de tal forma que ningún punto de la instalación esté a más de 1.8 [m] horizontales de uno de ellos.
            
            .row.justify-content-center.align-items-center
              .col-md-8.mb-4.mb-md-0
                p <b>Requisito 3.</b> Todos los tomacorrientes instalados a menos de 1.8 [m] a fuentes de agua como lavamanos y lavaplatos deben ser de tipo GFCI.
            
            .row.justify-content-center.align-items-center
              .col-md-8.mb-4.mb-md-0
                p <b>Requisito 4.</b> Todas las paredes adyacentes al lavamanos deben tener instalado un tomacorriente.
      .col-4
        figure
          img(src='@/assets/curso/temas/tema4/6.svg', alt='Texto que describa la imagen')

    separador
    #t_4_5.titulo-segundo.color-acento-contenido
      h2 4.5 Tableros de distribución

    p.mb-5(data-aos="fade-left") De acuerdo con la sección 210, 220 y 225 de la NTC 2050, la cantidad de tableros y la distribución de circuitos deben ajustarse a los siguientes requisitos:
                
    .row.justify-content-center.align-items-center
      .col-8
        .tarjeta.tarjeta--azul.p-4
          PasosB.color-acento-contenido
            .row.justify-content-center.align-items-center
              .col-md-8.mb-4.mb-md-0
                p <b>Requisito 1.</b> deben existir por lo menos dos circuitos de 20 [A], uno para plancha y lavadora y otro para pequeños artefactos con una capacidad nominal de 1800 [VA] cada uno.
            
            .row.justify-content-center.align-items-center
              .col-md-8.mb-4.mb-md-0
                p <b>Requisito 2.</b> el conductor del neutro debe tener el mismo calibre de la fase; excepto para circuitos trifásicos tetrafilares en donde se puede reducir al 70% de la fase.
            
            .row.justify-content-center.align-items-center
              .col-md-8.mb-4.mb-md-0
                p <b>Requisito 3.</b> dos circuitos ramales de fases diferentes que compartan ducto pueden usar un mismo neutro, pero su calibre debe ser el mismo del de la fase de mayor calibre.
            
            .row.justify-content-center.align-items-center
              .col-md-8.mb-4.mb-md-0
                p <b>Requisito 4.</b> se deben dejar 30% de puestos libres de reserva en cada tablero.
      .col-4
        figure
          img(src='@/assets/curso/temas/tema4/7.svg', alt='Texto que describa la imagen')
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
