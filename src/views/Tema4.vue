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

    .row.justify-content-center.mb-5
      .col-12
        .tabla-a.color-acento-botones
          table.text-center(style="width:auto")
            thead
              tr.text-small
                th(rowspan="2") Circuito
                th(rowspan="2") Toma Normal
                th(rowspan="2") Tomas Especial
                th(rowspan="2") Salida Alumbrado
                th(colspan="4") Potencia (w)
                th(rowspan="2") Factor de potencia
                th(rowspan="2") Potencia total (VA)
                th(rowspan="2") Corriente (A)
                th(rowspan="2") Calibre conductor
                th(rowspan="2") Diámetro ducto
                th(rowspan="2") Protección
                th(rowspan="2") Observaciones
              tr.text-small
                th R
                th S
                th T
                th Total 
            tbody
              tr
                td
                td
                td
                td
                td
                td
                td
                td
                td
                td
                td
                td
                td
                td
                td
              tr
                td
                td
                td
                td
                td
                td
                td
                td
                td
                td
                td
                td
                td
                td
                td
              tr
                td
                td
                td
                td
                td
                td
                td
                td
                td
                td
                td
                td
                td
                td
                td
              tr
                td Total
                td
                td
                td
                td
                td
                td
                td
                td
                td
                td
                td
                td
                td
                td
              

    p.mb-5(data-aos="fade-left") <b>De acuerdo con lo anterior, revise esta didáctica que ayuda a complementar el tema que se viene explicando.</b>

    .row.justify-content-center
      .col-lg-9
        TabsA.color-acento-botones.mb-5
          .tarjeta.color-acento-botones--borde.p-4(titulo="Columna del circuito")
            h4 Columna del circuito
            p La columna del circuito es un número entero que corresponde a la posición del interruptor de protección en el tablero de distribución y a la cantidad de fases del circuito. Por ejemplo 1 para el caso monofásico, 1-2 para el caso de dos fases y 1-2-3 para el caso trifásico. Las columnas de tomas y salidas de alumbrado corresponden a la cantidad de cada elemento que es alimentado por ese circuito.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Columnas de potencia")
            h4 Columnas de potencia 
            p Las columnas de potencia en vatios corresponden a la suma de las potencias nominales de los aparatos atendidos por el circuito y discriminados según la fase a la que esté conectado el circuito. Si el circuito es a 220 V o trifásico el valor de potencia en cada fase corresponde a la mitad o a la tercera parte de la potencia total según corresponda.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Factor de potencia")
            h4 Factor de potencia 
            p El factor de potencia se toma de los datos del fabricante de los equipos. Cuando el circuito atiende salidas con diferentes f.p. Se toma un promedio aritmético, lo cual si bien no es exacto por ser una magnitud fasorial, el efecto del error introducido es aumentar la capacidad de los cables del circuito.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Valor de la columna")
            h4 Valor de la columna
            p El valor de la columna potencia aparente en voltio amperios se calcula dividiendo la potencia total en vatios entre el f.p. promedio del circuito.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Cálculo de la magnitud")
            h4 Cálculo de la magnitud
            p Para el cálculo de la magnitud de la corriente es necesario usar las fórmulas para circuitos monofásicos y trifásicos según corresponda y con el valor de voltaje de fase y línea, de acuerdo con el tipo de red de alimentación de la instalación, es decir, voltaje de línea igual a dos veces el voltaje de fase para circuitos alimentados desde redes monofásicas trifilares y voltaje de línea igual a √3 veces el voltaje de fase para circuitos alimentados desde redes trifásicas tetrafilares.
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema4/1.svg', alt='')

    p.mb-5(data-aos="fade-left") El calibre de los conductores se selecciona de acuerdo con la tabla 5 y el diámetro de los ductos de acuerdo con las tablas C1 a C10 del anexo C de la NTC 2050, como se muestra en la siguiente tabla:

    .titulo-sexto.color-acento-contenido
      <b>Tabla 10.</b> <i>Número máximo de conductores y alambres de aparatos en tubo conduit rígido de PVC Schedule 80 (extracto de tabla C 9 del anexo C de la NTC 2050)</i>

    figure
      img(src='@/assets/curso/temas/tema4/tabla11.svg', alt='')
      figcaption Nota. Tomado de https://drive.google.com/file/d/0B0uO_Mh36Fv-VVVObDMtanZYeXM/view?resourcekey=0-UKxOFb8PpRs8vX-Vg9YEWQ página 823.
    //- .tabla-a.color-acento-botones.mb-5.mt-5 
    //-   table
    //-     thead
    //-       tr
    //-         th Letras De tipo
    //-         th Sección Transversal del Conductor
    //-         th Tamaño comercial mm Pulgadas
    //-     tbody
    //-       tr
    //-         td 
    //-         td 
    //-         td 

    separador
    #t_4_1.titulo-segundo.color-acento-botones
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
      .col-lg-10
        .tabla-a.color-acento-botones.mb-5
          table
            caption Nota. Tomado de https://www.essa.com.co/site/Portals/proveedores/ntg-02%20marco%20general%20norma%20urbana%20%20.pdf?ver=2022-05-02-130335-283 página 19.
            thead
              tr
                th Descripción
                th Carga
                th Factor de demanda (%)
            tbody
              tr
                td
                  p #[b Residencial]
                  p.mb-0 Estratos 1 y 2
                  p.mb-0 Estratos 3 y 4
                  p.mb-0 Estratos 5 y 6
                  p Carga áreas comunes 
                td.text-center
                  p.mb-0 Carga aparato mayor potencia 
                  p Resto
                  p.mb-0 Carga aparato mayor potencia 
                  p Resto
                  p.mb-0 Carga aparato mayor potencia 
                  p Resto
                  p.mb-0 Motores 
                  p Resto
                td.text-center
                  p.mb-0 100
                  p 50
                  p.mb-0 100
                  p 40
                  p.mb-0 100
                  p 30
                  p.mb-0 100
                  p 60
              tr
                td
                  p #[b Comercial]
                  p.mb-0 Tomas comunes
                  p.mb-0 Alumbrado
                  p.mb-0 Cargas especiales y áreas comunes
                td.text-center
                  p.mb-0 Primeros 5000
                  p Sobre 5000
                  p.mb-0 Primeros 50000
                  p Sobre 50000
                  p Total
                td.text-center
                  p.mb-0 100
                  p 50
                  p.mb-0 100
                  p 50
                  p 100
              tr 
                td #[b Industrial]
                td(colspan="2") Según proyecto particular

    separador
    #t_4_2.titulo-segundo.color-acento-botones
      h2 4.2 Carga nominal electrodomésticos comunes

    .row.justify-content-center.align-items-center
      .col-lg-8
        p De acuerdo con el #[i RETIE] la responsabilidad de la conformidad de una instalación es compartida entre el diseñador y el constructor y, un buen diseño empieza con una acertada caracterización de las cargas. Esta caracterización también es importante para gestionar el uso racional de la energía (URE) en los Sistemas de gestión energética. Por esta razón, es prioritario tener una idea general sobre el consumo de los electrodomésticos más comunes; de los diferentes estudios que se han realizado en este campo, el realizado en el 2009 por el organismo delegado para ejercer la función de regulación del Estado en los asuntos energéticos es la comisión de regulación de energía y gas (CREG), que incluye la tabla mostrada a continuación: 
      .col.lg-4
        figure
          img(src='@/assets/curso/temas/tema4/4.svg', alt='Texto que describa la imagen')

          
    .titulo-sexto.color-acento-contenido
      <b>Tabla 12.</b> <i>Carga nominal de electrodomésticos comunes (tabla 1 Consultoría para la determinación de las pérdidas de energía en los mercados de comercialización presentes en el SIN volumen 3 CREG)</i>
    .row.justify-content-center
      .col-lg-8
        .tabla-a.color-acento-botones.mb-5
          table.text-center
            caption Nota. Tomado de http://apolo.creg.gov.co/Publicac.nsf/0/925c4f40c27f9fca0525785a007a6fe8/$FILE/CIRCULAR024-2008%20T-3.pdf página 7. 
            thead
              tr
                th Electrodomésticos básicos de un hogar
                th Consumo nominal W
            tbody
              tr
                td Nevera
                td 250
              tr
                td Televisor
                td 150
              tr 
                td Reproductor de DVD
                td 150
              tr 
                td Equipo de sonido
                td 100
              tr 
                td Aire acondicionado
                td 5000
              tr 
                td Horno microondas
                td 1800
              tr 
                td Olla arrocera
                td 1200
              tr 
                td Parrilla pequeña alto
                td 1500
              tr 
                td Sanduchera
                td 1200
              tr 
                td Licuadora
                td 600 
              tr 
                td Cafetera
                td 800 
              tr 
                td Lavadora
                td 750
              tr 
                td Plancha
                td 1000
              tr 
                td Grabadora
                td 100
              tr 
                td Ventilador pequeño
                td 100
              tr 
                td Computador
                td 800
              tr 
                td Ducha eléctrica
                td 1500
              tr 
                td Secador
                td 1500
              tr 
                td Bombilla de 60 W
                td 60
              tr 
                td Bombilla de 100 W
                td 100
                  
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
            tr.text-small
              th Ubicación
              th Largo (m)
              th Ancho (m)
              th Área (m#[sup 2])
              th Flujo luminoso por lámpara (lumen)
              th Cantidad de lámparas
              th Iluminancia (lux)
              th Iluminancia Promedio #[i RETILAP] (lux)
              th Observaciones
          tbody
            tr
              td
              td
              td
              td
              td
              td
              td
              td
              td
            tr
              td
              td
              td
              td
              td
              td
              td
              td
              td
            tr
              td
              td
              td
              td
              td
              td
              td
              td
              td
            tr
              td
              td
              td
              td
              td
              td
              td
              td
              td
            tr
              td
              td
              td
              td
              td
              td
              td
              td
              td
            tr
              td
              td
              td
              td
              td
              td
              td
              td
              td
            tr
              td
              td
              td
              td
              td
              td
              td
              td
              td


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
                
            .row.justify-content-center.align-items-center
              .col-md-8.mb-4.mb-md-0
                p <b>Requisito 5.</b> Se debe instalar como mínimo un tomacorriente especial para la lavadora y la plancha.
                
            .row.justify-content-center.align-items-center
              .col-md-8.mb-4.mb-md-0
                p <b>Requisito 6.</b> La potencia nominal mínima de un tomacorriente normal es 180 [VA] y su f.p. 0.95.
                
            .row.justify-content-center.align-items-center
              .col-md-8.mb-4.mb-md-0
                p <b>Requisito 7.</b> El f.p. de salidas de motores de equipos grandes como, por ejemplo, aires acondicionados y nevecones, en ausencia del dato del fabricante deben considerarse en 0.85.
                
            .row.justify-content-center.align-items-center
              .col-md-8.mb-4.mb-md-0
                p <b>Requisito 8.</b> El f.p. de salidas de motores de equipos pequeños como, por ejemplo, ventiladores, licuadoras y lavadoras, en ausencia del dato del fabricante deben considerarse en 0.9.
                
            .row.justify-content-center.align-items-center
              .col-md-8.mb-4.mb-md-0
                p <b>Requisito 9.</b> Las salidas de iluminación led y fluorescente sin corrección del f.p., en ausencia del dato del fabricante deben considerarse en 0.9.
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
                p <b>Requisito 1.</b> Deben existir por lo menos dos circuitos de 20 [A], uno para plancha y lavadora y otro para pequeños artefactos con una capacidad nominal de 1800 [VA] cada uno.
            
            .row.justify-content-center.align-items-center
              .col-md-8.mb-4.mb-md-0
                p <b>Requisito 2.</b> El conductor del neutro debe tener el mismo calibre de la fase; excepto para circuitos trifásicos tetrafilares en donde se puede reducir al 70% de la fase.
            
            .row.justify-content-center.align-items-center
              .col-md-8.mb-4.mb-md-0
                p <b>Requisito 3.</b> Dos circuitos ramales de fases diferentes que compartan ducto pueden usar un mismo neutro, pero su calibre debe ser el mismo del de la fase de mayor calibre.
            
            .row.justify-content-center.align-items-center
              .col-md-8.mb-4.mb-md-0
                p <b>Requisito 4.</b> Se deben dejar 30% de puestos libres de reserva en cada tablero.
                
            .row.justify-content-center.align-items-center
              .col-md-8.mb-4.mb-md-0
                p <b>Requisito 5.</b> La protección y calibre de circuitos ramales deben cumplir con las condiciones mínimas establecidas en la Tabla 5. Resumen de los requisitos de circuitos ramales. (tabla 210.24 NTC 2050).
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
