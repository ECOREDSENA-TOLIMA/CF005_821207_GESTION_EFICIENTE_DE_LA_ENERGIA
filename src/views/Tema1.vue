<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Requisitos del producto

    p(data-aos="fade-left") Los productos utilizados en las redes e instalaciones eléctricas deben cumplir una serie de requisitos, que son necesarios para la calidad del servicio, así como para la seguridad de las personas y del medio ambiente.

    separador
    #t_1_1.titulo-segundo.color-acento-botones
      h2 1.1 Alambre y cables

    p.mb-5(data-aos="fade-left") Los conductores eléctricos son el medio de transporte usado para llevar la energía de un lugar a otro. Alambre y cable son dos términos que comúnmente se usan de forma indiscriminada para referirse a dichos conductores, aunque en realidad se refieren a dos elementos diferentes. Mientras el alambre es un conductor compuesto por un solo hilo, el cable es un conductor compuesto por varios hilos trenzados entre sí de forma concéntrica como se muestra en la siguiente figura:

    .titulo-sexto.color-acento-contenido
      <b>Figura 1.</b> <i>Cable y alambre</i>

    .row.justify-content-center.align-items-center
      .col-md-6.col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/1.svg')
        .row.justify-content-center.align-items-center
          .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3.mt-3
            p.tarjeta.color-acento-contenido.text-center.text-white Cable
      .col-md-6.col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/2.svg')
        .row.justify-content-center.align-items-center
          .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3.mt-3
            p.tarjeta.color-acento-contenido.text-center.text-white Alambre

    p.mb-5(data-aos="fade-left") Según el #[i RETIE] la <b>definición de alambre</b> es un “hilo o filamento de metal, trefilado o laminado, para conducir corriente eléctrica”, y la <b>definición de cable</b> es un “conjunto de alambres sin aislamiento entre sí y entorchado por medio de capas concéntricas”. 

    .row.justify-content-center.mb-5(data-aos="slide-right" data-aos-duration="900")
      .col-12.col-lg-8
        .tarjeta.color-primario.p-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema1/3.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p <b>Se invita a que explore este documento para complementar la información. (páginas 17 y 18)</b> 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexo_general_del_RETIE.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    p.mb-5(data-aos="fade-left") Revise la siguiente didáctica, la cual le explica la distribución de cargas en el cobre y el aluminio.                    

    .row.justify-content-center.align-items-center.mb-5
      .col-sm-6.col-lg-5.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .titulo-sexto.color-acento-contenido
              <b>Figura 2.</b> <i>Distribución de cargas en corriente continua</i>
            .col-7.mb-3
              figure
                img(src='@/assets/curso/temas/tema1/4.svg', alt='')

            p El cobre y el aluminio son los materiales más usados en la fabricación de conductores, porque además de tener baja resistividad eléctrica, son flexibles para facilitar su instalación y dúctiles para permitir su fabricación.
            p Cuando una corriente continua circula en un alambre, las cargas eléctricas se distribuyen uniformemente en toda el área del conductor,  ver figura.
      .col-sm-6.col-lg-5.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .titulo-sexto.color-acento-contenido
              <b>Figura 3.</b> <i>Distribución de cargas en corriente alterna</i>
            .col-7.mb-3
              figure
                img(src='@/assets/curso/temas/tema1/5.svg', alt='')
            p Cuando una corriente alterna circula en un alambre, las cargas eléctricas se distribuyen con mayor densidad en la periferia que en el centro del conducto,  ver figura.

      .col-sm-6.col-lg-5.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4.mt-2
          .row.justify-content-center.mb-3
            .col-7.mb-3
            p A este fenómeno se le conoce como efecto skin o pelicular. Como se observa en las figuras, el efecto skin reduce el área efectiva de la superficie de conducción, lo cual se traduce en un aumento de la resistencia, ya que:
            .row.align-items-center
              .col-sm-6.col-md-8.col-lg-6.mb-3.mt-3
                p.tarjeta.color-primario.text-center.text-white.p-2 R = 𝞺 L/A
            p donde R es la resistencia del conductor en [𝜴], L su longitud en [m], A el área de la sección transversal en [mm#[sup 2]] y 𝞺 la resistividad del material en [𝜴 -mm#[sup 2]/m].
    
      .col-sm-6.col-lg-5.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .titulo-sexto.color-acento-contenido
              <b>Figura 4.</b> <i>Diámetro externo de alambre y cable con igual área</i>
            .col-7.mb-3
              figure
                img(src='@/assets/curso/temas/tema1/6.svg', alt='')
            p De lo anterior, se puede concluir que para un alambre y un cable de igual área de sección transversal el cable tiene mayor diámetro, mayor área efectiva (en A.C), es decir, menor resistencia(en A.C) y mayor flexibilidad.

    ul.lista-ul--color.lista-ul--separador
      li 
        i.fas.fa-play
        | <b>Calibre AWG de conductores</b>

    p Con el fin de normalizar el diámetro de los conductores se crearon varios sistemas de clasificación de calibres, siendo el #[em American Wire Gauge (AWG)] el adoptado por Colombia según la NTC 2050, aunque el Artículo 17 del #[em RETIE] permite especificar los calibres según el estándar europeo en mm#[sup 2].
    h5 El estándar de calibres AWG también conocido por #[em Brown & Sharpe] fue definido para alambres con las siguientes reglas: 

    .row.justify-content-center.align-items-center
      .col-lg-7
        .tarjeta.tarjeta--gris
        LineaTiempoC.color-acento-contenido(text-small)
          .row
            .col-md-3.offset-md-1
              figure
                img(src='@/assets/curso/temas/tema1/8.svg', alt='')
            .col-md-7.mb-4.mb-md-0.p-3
              p <b>Regla 1.</b> El primer número de calibre es el 36, que equivale a un diámetro de 5/1000 pulgadas.
          .row
            .col-md-3.offset-md-1
              figure
                img(src='@/assets/curso/temas/tema1/8.svg', alt='')
            .col-md-7.mb-4.mb-md-0.p-3
              p <b>Regla 2.</b> Al llegar a 1, los calibres siguientes se denominan 1/0, 2/0, 3/0 y 4/0.
          .row
            .col-md-3.offset-md-1
              figure
                img(src='@/assets/curso/temas/tema1/8.svg', alt='')
            .col-md-7.mb-4.mb-md-0.p-3
              p <b>Regla 3.</b> El último número de calibre, el 4/0, equivale a 0.46 pulgadas.
          .row
            .col-md-3.offset-md-1
              figure
                img(src='@/assets/curso/temas/tema1/8.svg', alt='')
            .col-md-7.mb-4.mb-md-0.p-3
              p <b>Regla 4.</b> El diámetro de dos calibres sucesivos está en proporción geométrica, es decir, el segundo calibre se obtiene multiplicando el primero por una constante y así sucesivamente.
          .row
            .col-md-3.offset-md-1
              figure
                img(src='@/assets/curso/temas/tema1/8.svg', alt='')
            .col-md-7.mb-4.mb-md-0.p-3
              p <b>Regla 5.</b> Desde el calibre 36 al 4/0 hay 40 calibres, lo cual equivale a decir que el diámetro del 4/0 es igual al diámetro del 36 multiplicado 39 veces por la constante.
            
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/7.svg', alt='')

    p.mt-5.mb-4.text-center <b>Teniendo en cuenta las anteriores reglas se deduce que la razón de la progresión es igual a:</b>
    .row.justify-content-center 
      .col-lg-4.mb-4
        figure
          img(src='@/assets/curso/temas/tema1/9.svg', alt='')

    p(data-aos="fade-left") Como 1.122936 es aproximadamente 2, esto quiere decir que pasar de un calibre cualquiera a otro cuya diferencia con el primero sea de 6, por ejemplo, del AWG 12 al AWG 8, equivale a duplicar el diámetro o cuadruplicar el área de la sección transversal.

    p.mb-5(data-aos="fade-left") En cuanto a la aplicación del estándar de calibres a cables se hace por área equivalente, es decir, la suma de las áreas de los hilos de un cable debe ser igual al área de la sección transversal del alambre del mismo calibre. En cuanto a la longitud de los hilos de un cable es necesario tener en cuenta que resulta mayor que la longitud del cable, debido al efecto del trenzado como se muestra en la siguiente figura:

    .titulo-sexto.color-acento-contenido
      <b>Figura 5.</b> <i>Aumento de la longitud del hilo debido al trenzado</i>

    .row.justify-content-center 
      .col-lg-6.mb-4.mt-4
        figure
          img(src='@/assets/curso/temas/tema1/10.svg', alt='')

    p(data-aos="fade-left") <b>Revise la siguiente información que complementa su estudio:</b>

    .tarjeta.tarjeta--gris.p-4.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Debido al #[b efecto joule] los conductores aumentan su temperatura proporcional al cuadrado del valor de la corriente que circula por ellos. A cada valor de corriente corresponde un valor de temperatura. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-01.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p En teoría el valor límite para la corriente que puede transportar un conductor es aquella que lo lleva hasta el punto de fusión.  
            p Este fenómeno se aprovecha como mecanismo de protección en los denominados fusibles.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-02.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p En los conductores nunca se llega a temperaturas tan altas, por la presencia del material aislante de recubrimiento, con que se protegen del medioambiente, previniendo descargas eléctricas entre ellos, efecto de los voltajes a los que están sometidos y por la señalización de color. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-03.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Este material aislante normalmente es en PVC, su espesor y composición se diseñan para un voltaje y temperatura de operación de servicio máximo respectivamente. Comercialmente se encuentran aislantes tipo THW para 75#[sup o], THHN para 90#[sup o] en baja tensión y XLPE para 90#[sup o] en media tensión.  
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-04.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Según el Artículo 20.2.9 el material aislante de los conductores debe adicionalmente ser libre de halógenos (HF) y tener baja emisión de humo (LS) cuando sean instalados en lugares clasificados de alta concentración de personas. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/tema1-05.png', alt='')

              
    .cajon.color-acento-botones.p-3.mb-4(data-aos="fade-left")
      p.mb-0 La capacidad de corriente de un conductor de un calibre determinado se calcula para que no sobrepase la temperatura del aislante, obteniéndose de esta forma tablas como la siguiente:

    .row.mb-4(data-aos="fade-down")
      .col-12
        .titulo-sexto.color-acento-contenido
          <b>Tabla 1.</b> <i>Capacidades de corriente (tabla 310-16 NTC 2050)</i>
        figure
          img(src='@/assets/curso/temas/tema1/tabla-01.svg', alt='')

    //- .tabla-b.color-acento-contenido.mb-5
    //-   .tabla-b__header
    //-     h4.mb-0 Temperatura nominal del conductor
    //-   table
    //-     tr
    //-       th(rowspan="2") Sección Transv.
    //-       td
    //-         .h6.mb-0.text-center 60 ºC 
    //-       td
    //-         .h6.mb-0.text-center 75 ºC
    //-       td
    //-         .h6.mb-0.text-center 90 ºC
    //-       td
    //-         .h6.mb-0.text-center 
    //-       td
    //-         .h6.mb-0.text-center 60 ºC 
    //-       td
    //-         .h6.mb-0.text-center 75 ºC 
    //-       td
    //-         .h6.mb-0.text-center 90 ºC 
    //-       td
    //-         .h6.mb-0.text-center 
    //-       td(rowspan="2")
    //-         .h6.mb-0.text-center Calibre

    p(data-aos="fade-left") Los valores de las tablas deben ser corregidos por temperatura ambiente, cantidad de conductores y tipo de instalación (aire libre o en ductos).
    p(data-aos="fade-left") Los colores del aislamiento deben cumplir con lo establecido en el #[i RETIE] en el numeral 6.3, de acuerdo con la siguiente tabla:

    .row.mb-4(data-aos="fade-down")
      .col-12
        .titulo-sexto.color-acento-contenido
          <b>Tabla 2.</b> <i>Código de colores para conductores (tabla 6.5 RETIE)</i>
        figure
          img(src='@/assets/curso/temas/tema1/tabla-02.svg', alt='')
    //- .tabla-a.color-acento-contenido.mb-5.mt-5 
    //-   table
    //-     thead
    //-       tr
    //-         th Sistema c.a
    //-         th 10
    //-         th 10
    //-         th 30Y
    //-         th 30Y
    //-         th 30Y
    //-         th 30Y
    //-         th 30Y
    //-     tbody
    //-       tr
    //-         th.text-center Tensión Nominal (Votos)
    //-         td.text-center 120
    //-         td.text-center 240/120
    //-         td.text-center 208/120
    //-         td.text-center 240
    //-         td.text-center 240/208/120
    //-         td.text-center 380/220
    //-         td
          
    p(data-aos="fade-left") <b>Conductores</b>
    p.mb-4(data-aos="fade-left") Los conductores en aluminio aislado se usan principalmente en redes de alumbrado y los desnudos en redes de transmisión y distribución aéreas. <b>Las principales configuraciones de cables de aluminio que se encuentran son:</b>

    .row.justify-content-center.align-items-center
      .col-lg-8
        TabsA.color-acento-contenido.mb-5
          .tarjeta.color-acento-contenido--borde.p-4(titulo="Cables AAC <i>all aluminium conductor</i>:")
            h4 Cables AAC (<i>all aluminium conductor</i>): 
            .row
              .col-xl-12
                p Todos los hilos son de aluminio.
            .row
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/tema1/11.svg', alt='')

          .tarjeta.color-acento-contenido--borde.p-4(titulo="Cables AAAC <i>all aluminium alloy conductor</i>:")
            h4 Cables AAAC (<i>all aluminium alloy conductor</i>): 
            .row
              .col-xl-12
                p Todos los hilos son de una aleación de aluminio con otros metales para aumentar la resistencia mecánica respecto a los de solo aluminio y aumentar la resistencia a la corrosión respecto a los ACSR.
            .row
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/tema1/12.svg', alt='')

          .tarjeta.color-acento-contenido--borde.p-4(titulo="Cables ACSR <i>aluminium conductor steel reinforced</i>:")
            h4 Cables ACSR (<i>aluminium conductor steel reinforced</i>): 
            .row
              .col-xl-12
                p Los hilos centrales de aluminio se reemplazan por hilos de acero, mejorando notablemente la resistencia mecánica, pero disminuyendo la resistencia a la corrosión.
            .row
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/tema1/13.svg', alt='')
          
          .tarjeta.color-acento-contenido--borde.p-4(titulo="Cables ACAR <i>aluminium conductor alloy reinforced</i>:") 
            h4 Cables ACAR (<i>aluminium conductor alloy reinforced</i>): 
            .row
              .col-xl-12
                p Los hilos centrales de aluminio se reemplazan por hilos de aleación de aluminio, mejorando la resistencia mecánica sin disminuir significativamente la resistencia a la corrosión.
            .row
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/temas/tema1/14.svg', alt='')
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/15.svg', alt='')

    .row.justify-content-center.mb-5(data-aos="slide-right" data-aos-duration="900").mt-4
      .col-12.col-md-10.col-lg-8
        .tarjeta.color-primario.p-4
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p.mb-0 <b>Importante: los requisitos de producto y de instalación de conductores eléctricos están establecidos en el numeral 20.2 del <i>RETIE</i>.</b> 
              
    separador
    #t_1_2.titulo-segundo.color-acento-botones
      h2 1.2 Tubería de canalización

    p.mb-4(data-aos="fade-left") De forma general, según el #[i RETIE], los conductores eléctricos deben ser instalados dentro de canalizaciones o conductos cerrados para protegerlos contra impactos, humedad y vapores químicos y además para darles dirección y soporte dentro de la estructura donde van a ser instalados. El conducto eléctrico puede ser metálico o polimérico con o sin refuerzo en fibra de vidrio, en todo caso con pared resistente a los impactos. La mayoría de los conductos son rígidos, pero se utilizan conductos flexibles para algunos propósitos especiales.             
          
    .row.justify-content-center
      .col-lg-8
        .cajon.color-primario.px-5.py-4.mb-4
          p.mb-0 La tubería fabricada para las canalizaciones eléctricas se denomina conduit y según el espesor de la pared se consiguen de tres tipos: pesado, intermedio y liviano. <b>Los requisitos de espesor para cada tipo de tubería se encuentran en milímetros en la tabla 20.10 del <i>RETIE</i> que se muestra a continuación:</b>

    .row.mb-4(data-aos="fade-down")
      .col-12
        .titulo-sexto.color-acento-contenido
          <b>Tabla 3.</b> <i>Espesores mínimos para tuberías conduit (tabla 20.10. RETIE)</i>
        figure
          img(src='@/assets/curso/temas/tema1/tabla-03.svg', alt='')
    
    //- .row.justify-content-center.align-items-center
    //-   .col-lg-6
    //-     .tabla-b.color-acento-contenido.mb-5
    //-       .tabla-b__header
    //-         h4.mb-0 Tubos No Metálicos
    //-       table
    //-         tr
    //-         th.text-small Diámetro Nominal Pulgadadas Y mm
    //-         td
    //-           .h6.mb-0.text-center.text-small Rígido SCH80 (Tipo Pesado)
    //-         td
    //-           .h6.mb-0.text-center.text-small Rígido SCH40 (Tipo Intermedio)
    //-         td
    //-           .h6.mb-0.text-center.text-small Rígido Tipo liviano

    //-   .col-lg-6
    //-     .tabla-b.color-acento-contenido.mb-5
    //-       .tabla-b__header
    //-         h4.mb-0 Tubos Metálicos
    //-       table
    //-         tr
    //-         th.text-small Diámetro Nominal Pulgadadas Y mm
    //-         td
    //-           .h6.mb-0.text-center.text-small (Tipo pesado)
    //-         td
    //-           .h6.mb-0.text-center.text-small (Tipo Intermedio)
    //-         td
    //-           .h6.mb-0.text-center.text-small Liviano o EMT

    .cajon-b.color-acento-contenido.mb-5
      p.mb-0 Los ductos metálicos tipo pesado o RMC (#[i rigid metal conduit]) y los tipo intermedio o IMC (#[i intermediate metal conduit]) son de acero galvanizado y para la instalación de accesorios roscados y los tipo liviano o EMT (#[i electrical metallic tubing]) son de acero galvanizado, pero la instalación de accesorios es sin rosca y a presión por medio de tornillos, tal como se muestra en la siguiente figura:  
      
    .titulo-sexto.color-acento-contenido
      <b>Figura 6.</b> <i>Tubería conduit metálica</i>
    
    .row.justify-content-center
      .col-lg-8
        figure
          img(src='@/assets/curso/temas/tema1/16.svg', alt='')
          figcaption Fuente imagen A: https://acortar.link/demTra Fuente imagen B: https://acortar.link/zWUzqa Fuente imagen C: https://acortar.link/2T9Mgq

    p.mt-4.mb-5(data-aos="fade-left") Para saber más sobre tipos de tubería revise el siguiente recurso:

    .tarjeta.tarjeta--gris.p-4
      PasosB.color-acento-contenido
        .row.justify-content-center.align-items-center
          .col-md-8.mb-4.mb-md-0
            p Los ductos metálicos requieren para su instalación el uso de herramientas especiales para doblarlos en los ángulos requeridos por las rutas, ya que comercialmente solo se consiguen curvas a 90º. 
        
        .row.justify-content-center.align-items-center
          .col-md-8.mb-4.mb-md-0
            p Los ductos no metálicos se fabrican de tres tipos: el tipo pesado o SCH80 (schedule 80), el tipo intermedio o SCH40 (schedule 40) y el tipo liviano o EB, siendo los más usados los de PVC.
        
        .row.justify-content-center.align-items-center
          .col-md-8.mb-4.mb-md-0
            p Adicionalmente los ductos RMC y los IMC también requieren el uso de herramientas especiales para realizar el roscado en los extremos, que necesitan conectarse a algún accesorio o a otro tubo.
        
        .row.justify-content-center.align-items-center
          .col-md-8.mb-4.mb-md-0
            p Tener en cuenta que los tipo liviano o EB solo pueden ser instalados embebidos en concreto, mientras que el tipo pesado y los intermedios pueden ser instalados a la vista o directamente enterrados. 
        
        .row.justify-content-center.align-items-center
          .col-md-8.mb-4.mb-md-0
            p Los ductos de PVC se pueden calentar en el sitio de instalación mediante el uso de herramientas calefactoras especiales, con la finalidad de hacer la campana de unión en los extremos y/o cambiar la dirección del tendido.

    .row.justify-content-center.mt-3
      .col-md-8.mb-3
        .cajon.color-primario.px-5.py-4.mb-4
          p.mb-0 El tubo #[b conduit PVC] y #[b la campana de unión en el extremo], tiene indicados los requisitos de producto y de instalación de canalizaciones están establecidos en el numeral 20.6 del #[i RETIE] y adicionalmente incluye las especificaciones del capítulo 3 de la NTC 2050. Se invita a que revise, cómo se trabaja con las cajas, las conduletas, las clavijas y los tomacorrientes, a continuación:
      .col-md-4.mb-3
        figure
          img(src='@/assets/curso/temas/tema1/17.svg', alt='')
    
    TabsC.color-secundario(data-aos="flip-left")
      .py-3.py-md-4(titulo="Cajas y conduletas")
        .row
          .col-md-8.mb-4.mb-md-0
            p Según #[i RETIE], en el numeral 20.5, son elementos utilizados como encerramiento de aparatos eléctricos. Cuando los aparatos eléctricos son tomacorrientes, interruptores y plafones se usan cajas, que pueden ser metálicas (lámina #[em cold rolled zincada]) o no metálicas (PVC), rectangulares para interruptores y tomacorrientes y octogonales para portalámparas.  
            p Cuando se requiere instalar más de un aparato en la misma caja se usan cajas cuadradas. Estas vienen con perforaciones premoldeadas fáciles de remover según la necesidad. 
            p Cuando se necesitan hacer derivaciones del cableado o cuando la longitud de los tramos es muy larga se usan cajas o conduletas para realizar los empalmes necesarios o como puntos de halado en la instalación. Si los ductos son metálicos y la instalación está a la vista, se deben usar conduletas. En los demás casos se pueden usar cajas. 
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/video2-01.png', alt='')
      .py-3.py-md-4(titulo="Clavijas y tomacorrientes")
        .row
          .col-md-8.mb-4.mb-md-0
            h5 Tomacorrientes monofásicos
            p Son elementos complementarios entre sí, que permiten que los equipos eléctricos se conecten a la fuente de alimentación en los sitios destinados para tal fin. 
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/video2-02.png', alt='')
      .py-3.py-md-4(titulo="Tipos de clavijas y tomacorrientes")
        .row
          .col-md-8.mb-4.mb-md-0
            p La clavija es el contacto “macho” y está del lado del equipo y el tomacorriente es el contacto hembra y está del lado de la instalación. Aunque se han estandarizado diferentes sistemas de clavijas y tomacorrientes de acuerdo con voltajes y corrientes nominales, forma, tamaño y tipo de conector, según #[b #[i RETIE]] solo se pueden usar las mostradas en la pantalla. 
            p Todas las tomas monofásicas deben ser polarizadas (terminal de la fase más corta que el del neutro) y con polo a tierra. Las tomas con protección de falla a tierra #[b #[i GFCI]] (#[i ground fault circuit interrupter]) deben ser usadas en lugares húmedos como baños y cocinas. Las tomas con polo a tierra aislada (marcada con un triángulo) y las tomas de grado hospitalario (marcada con un círculo) deben ser usadas en equipos sensibles no conectados a pacientes o en hospitales, respectivamente.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/video2-03.png', alt='')
      .py-3.py-md-4(titulo="Tomas a 220")
        .row
          .col-md-8.mb-4.mb-md-0
            p Las tomas a 220 o trifásicos también deben ser “polarizados”, es decir, la forma y disposición de los terminales debe ser tal, que garanticen una correcta conexión eléctrica bajo cualquier condición. 
            p Los requisitos de producto y de instalación de clavijas y tomacorrientes están establecidos en el numeral 20.10 del <i>RETIE</i>. 
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/video2-04.png', alt='')
    
    separador
    #t_1_3.titulo-segundo.color-acento-botones
      h2 1.3 Portalámparas o portabombillas

    p(data-aos="fade-left") Como su nombre lo indica el portalámpara o portabombilla es el elemento de la instalación eléctrica en donde se conectan las fuentes de iluminación. Al igual que con las clavijas y los tomacorrientes existen diferentes tipos de portalámparas con base en  los voltajes y corrientes nominales, forma, tamaño y tipo de conector, pero de acuerdo con el #[i RETIE], de las que usan terminal roscado solo deben usarse de dos tipos como se muestra en la siguiente figura:

    .titulo-sexto.color-acento-contenido
      <b>Figura 7.</b> <i>Bases roscadas de portalámparas</i>

    .row.justify-content-center
      .col-lg-8.mt-3.mb-3
        figure
          img(src='@/assets/curso/temas/tema1/18.svg', alt='')

    .row.justify-content-center
      .col-lg-8.mb-3.mt-3
        .cajon.color-acento-contenido.px-5.py-4.mb-4
          p En ambos casos, la fase debe ser conectada siempre al contacto central y el neutro a la rosca. La base E27 es de propósito general y la base E40 puede ser usada en el alumbrado público o industrial.
          p Los requisitos de producto y de instalación de portalámparas o portabombillas están establecidos en el numeral 20.29 del #[i RETIE].
          p Los demás requisitos tanto del producto como de la instalación asociados a los temas de iluminación son competencia del #[i RETILAP].
    
    separador
    #t_1_4.titulo-segundo.color-acento-botones
      h2 1.4 Tableros eléctricos

    .row.justify-content-center.align-items-center
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/19.svg', alt='')
      .col-lg-7
        .cajon.color-acento-botones.px-5.py-4.mb-4
          //.cajon-b.color-acento-contenido
          p #[b El tablero de una instalación eléctrica es el componente en baja tensión (B.T.)] donde se distribuye el suministro de energía para cada área a alimentar. Normalmente consta del gabinete o armario, de los conductores de entrada o acometida, de los conductores de salida o circuitos y de los interruptores automáticos, mediante los cuales se ejercen funciones de protección y control de cada circuito. Los interruptores automáticos brindan dos tipos de protección, una térmica para las sobrecargas y una magnética para los cortocircuitos. 
          p Los conductores de los circuitos ramales se deben seleccionar con base en la suma de las capacidades de los aparatos que alimentan. Los conductores de la acometida se seleccionan de acuerdo con la suma de la capacidad de los circuitos multiplicada por un factor conocido como factor de demanda que toma en cuenta el hecho de que los aparatos no se conectan todos al mismo tiempo. Un tablero terminado tiene el aspecto mostrado en la siguiente figura:

    .titulo-sexto.color-acento-contenido
      <b>Figura 8.</b> <i>Tablero eléctrico</i>

    .row.justify-content-center.align-items-center
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/20.svg', alt='')
          figcaption.text-center Fuente imagen: https://acortar.link/nK9Lvk
      .col-lg-8.mb-3
        .cajon.color-primario.px-5.py-4.mb-4
          p.mb-0 Los requisitos del producto y de instalación de los tableros eléctricos están establecidos en el numeral 20.23 del #[i RETIE] y de acuerdo con el tipo aplican los requisitos de las siguientes normas, ver tabla.
        .titulo-sexto.color-acento-contenido
          <b>Tabla 4.</b> <i>Normas aplicables a tableros (tabla 20.12 RETIE)</i>
        .tabla-a.color-acento-contenido 
          table
            thead
              tr
                th Tipos de Tablero
                th Norma IEC
                th Norma UL
                th NTC
            tbody
              tr
                td.text-center De distribución
                td.text-center 60439 - 3 <br> 61439 - 1/3
                td.text-center 67
                td.text-center 3475 <br> 2050
              tr
                td.text-center De potencia
                td.text-center 60439 -1 <br> 61439 - 1/2
                td.text-center 891 <br> 508
                td.text-center 3278
              tr
                td.text-center Para instalaciones  temporales
                td.text-center 60439 - 4 <br> 61439 - 1/4
                td.text-center 
                td.text-center 3278 <br> 2050
              tr
                td.text-center Para redes de distribución pública
                td.text-center 60439 - 5 <br> 61439 - 1/5
                td.text-center 
                td.text-center 3278 <br> 2050

    p.mt-5(data-aos="fade-left") El calibre mínimo de los conductores de los circuitos ramales y la capacidad de los interruptores automáticos correspondientes a cada circuito se muestran en la siguiente tabla:

    .titulo-sexto.color-acento-contenido
      <b>Tabla 5.</b> <i>Resumen de los requisitos de circuitos ramales (tabla 210.24 NTC 2050)</i>
    .row.justify-content-center.mb-5
      .col-lg-8.col-md-10
        figure
          img(src='@/assets/curso/temas/tema1/tabla5.svg', alt='')
    //-     .tabla-a.color-acento-contenido 
    //-       table
    //-         thead
    //-           tr
    //-             th Corriente nominal del circuito
    //-             th 15 A
    //-             th 20 A
    //-             th 30 A
    //-             th 40 A
    //-             th 50 A
    //-         tbody
    //-           tr
    //-             td.text-center 
    //-             td.text-center 
    //-             td.text-center 
    //-             td.text-center
    //-             td.text-center
    //-             td.text-center 
    
    //- .row.justify-content-center
    //-   .col-lg-8.mb-3.mt-5
    //-     .cajon.color-acento-contenido.px-5.py-4.mb-4
    //-       ul.lista-ul--color
    //-         li 
    //-           i.fas.fa-check
    //-           | Estos calibres se refieren a conductores de cobre con sección transversal en mm#[sup 2]  y entre paréntesis AWG.
    //-         li 
    //-           i.fas.fa-check
    //-           | Para la capacidad nominal de los tomacorrientes para los artefactos con lámpara de descarga conectados con cordón, véase Articulo 410-30.c).

    p(data-aos="fade-left").text-center <b>Motores y generadores eléctricos</b>              
          
    .tarjeta.tarjeta--azul.p-4.mb-5.mt-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Los motores y generadores eléctricos son máquinas que convierten la energía eléctrica en mecánica, los motores y la energía mecánica en eléctrica; los generadores gracias a la acción de dos principios electromagnéticos fundamentales: la Ley de inducción de Faraday, que establece que en cualquier conductor que se encuentre dentro de un campo magnético variante en el tiempo se “induce” un voltaje de polaridad tal, que se opone al cambio (e = -dϕ/dt).
          .col-sm-4
            figure
              img(src='@/assets/curso/temas/tema1/21.svg', alt='')
              figcaption.text-center Acción generadora y acción motora:  Ley de inducción de Faraday
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p La ley de Lorentz, que establece que sobre cualquier conductor por el que circule una corriente y que se encuentre dentro de un campo magnético aparece una fuerza proporcional a la corriente y al campo y, perpendicular al plano formado por el sentido del campo y la corriente (F = iL x B).
            p Teóricamente, cualquier generador eléctrico también puede funcionar como motor y viceversa. En la práctica, a menudo se optimizan para una aplicación u otra.
          .col-sm-4
            figure
              img(src='@/assets/curso/temas/tema1/22.svg', alt='')
              figcaption.text-center Acción generadora y acción motora: Ley de Lorentz
        .row.justify-content-center.align-items-center
          .col-md-8.mb-4.mb-md-0
            p Las máquinas de AC se dividen en dos categorías: síncronas y de inducción. Las máquinas síncronas son usadas generalmente como generadores y deben su nombre al hecho de que giran siempre a la misma velocidad, sin importar la carga.
            p Esta velocidad conocida como velocidad de sincronismo, depende de la frecuencia y el número de polos mediante la siguiente fórmula: nsinc = 120f/p  donde f es la frecuencia del voltaje y p es el número de polos de la máquina. Cuando el rotor se alimenta con corriente continua se forman polos magnéticos de dirección fija y si se hace girar a una velocidad constante, los conductores del estator ven un campo magnético giratorio que varía en el tiempo de forma senoidal, por lo tanto, se induce en ellos una tensión senoidal a una frecuencia equivalente a la velocidad de sincronismo, como se muestra en la imagen.

          .col-sm-4
            figure
              img(src='@/assets/curso/temas/tema1/23.svg', alt='')
              figcaption.text-center Generador síncrono

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Las máquinas de inducción son usadas generalmente como motores. El rotor no se conecta a ninguna fuente, se pone en cortocircuito y el estator se conecta a una fuente de corriente alterna, de tal manera que generan un campo magnético giratorio. Los conductores del rotor ven este campo magnético variando en el tiempo y por lo tanto, se induce en ellos una tensión. Y como el rotor está en corto empieza a circular una corriente eléctrica, que al estar dentro del campo magnético del estator produce una fuerza sobre el rotor que lo hace girar a una velocidad inferior a la de sincronismo. A este tipo de rotores se les conoce como “jaula de ardilla”. En la siguiente imagen se muestra un motor de inducción.
          .col-sm-4
            figure
              img(src='@/assets/curso/temas/tema1/24.svg', alt='')
              figcaption.text-center Motor de inducción

        .row.justify-content-center.align-items-center
          .col-md-8.mb-4.mb-md-0
            p La desventaja principal de los motores de inducción hasta hace poco tiempo fue el control de la velocidad, ya que para un número de polos dado solo depende de la frecuencia de la red. En otras palabras, para controlar la velocidad era necesario variar la frecuencia. Y esto se pudo hacer solo cuando la electrónica de estado sólido permitió el manejo de los niveles de potencia de los motores a controlar. Se denomina variador de velocidad a un equipo electrónico que convierte la corriente alterna en continua (rectificador) y luego convierte la continua a alterna (inversor); pero a un nivel de voltaje y frecuencia diferente y variable, permitiendo de esta forma controlar la velocidad de los motores de inducción.
            p A este tipo de tecnología se le denomina actualmente como “inverter” y en aplicaciones como aires acondicionados y neveras donde la potencia de salida es proporcional a la velocidad logra grandes mejoras en el rendimiento, ya que antes de esto, la potencia de salida solo se podía tomar en dos valores: 100% o 0% conllevando a un gran desperdicio de energía.
          .col-sm-4
            figure
              img(src='@/assets/curso/temas/tema1/25.svg', alt='')
              figcaption.text-center Motor de inducción

        .row.justify-content-center.align-items-center
          .col-md-8.mb-4.mb-md-0
            p En las instalaciones eléctricas de uso final es común encontrar motores en aparatos como bombas, neveras, lavadoras, ascensores, etc. Los generadores están mayormente asociados a las instalaciones eléctricas del sector de generación, no a las de uso final. Sin embargo, es posible encontrarlos en esas instalaciones como fuente de respaldo en caso de falla de la red principal y se les conoce como plantas de emergencia. Las plantas de emergencia son un generador síncrono acoplado a un motor diesel, cuya capacidad se establece para tres modos de operación según la Norma ISO 8528: modo standby hasta 200 horas al año en forma discontinua y carga variable promedio hasta 70% de la capacidad nominal, modo prime cualquier número de horas al año; pero carga variable promedio hasta 70% de la capacidad nominal y servicio continuo cualquier número de horas al año con carga constante igual al 100% de la capacidad nominal. Debido a las definiciones anteriores, una misma planta tiene tres potencias nominales, modo standby la mayor y modo continuo la menor de ellas. El aspecto de una planta de emergencia es como el mostrado en la siguiente imagen:
          .col-sm-4
            figure
              img(src='@/assets/curso/temas/tema1/26.svg', alt='')
              figcaption.text-center Planta de emergencia

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Los requisitos de producto y de instalación de motores y generadores están establecidos en el numeral 20.21 del #[i RETIE].
          .col-sm-4
            figure
              img(src='@/assets/curso/temas/tema1/27.svg', alt='')
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
