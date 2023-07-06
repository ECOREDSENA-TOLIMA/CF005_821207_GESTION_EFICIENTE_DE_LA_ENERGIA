export default {
  global: {
    componenteFormativo: 'Requisitos de producto',
    descripcionCurso:
      'El <i>RETIE</i> y el <i>RETILAP</i>, aunque reglamentan los requisitos de cumplimiento tanto de productos como instalaciones eléctricas y de alumbrado, no son suficientes para implementar mecanismos de verificación del cumplimiento de dichos requisitos. El conocimiento de los requisitos y su mecanismo de verificación permitirá al aprendiz evaluar correctamente la conformidad de las instalaciones con los reglamentos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Requisitos del producto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Alambre y cables',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tubería de canalización',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Portalámparas o portabombillas',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Tableros eléctricos',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Niveles de iluminación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Flujo luminoso',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Nivel de iluminancia',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Iluminación interior y exterior',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Trabajos en redes desenergizadas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Distancias de seguridad',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Reglas de oro',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Medida de sistemas de puesta a tierra',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Trabajos en redes desenergizadas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Carga y demanda eléctrica',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Carga nominal electrodomésticos comunes',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Salidas de iluminación',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Salidas para tomacorrientes',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Tableros de distribución',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Trabajos en redes desenergizadas',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_05_821207.pdf',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Alambre y cables',
      referencia:
        'Ministerio de Minas y Energía de Colombia. Resolución 90708 de 2013 y anexos. Por la cual se expide el Reglamento técnico de instalaciones eléctricas - RETIE, que fija las condiciones técnicas que garanticen la seguridad en los procesos de generación, transmisión, transformación, distribución y utilización de la energía eléctrica en la república de Colombia y se dictan otras disposiciones. Agosto 30 de 2013. ',
      tipo: 'Documento legal',
      link:
        'https://sic.gov.co/sites/default/files/files/reglamentos%20tecnicos/ANEXO%20GENERAL%20RETIE%20Res%2090708%20de%202013%20actualizado%20a%20Res%202017-03-29.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Cajas eléctricas',
      significado:
        'Cerramiento que alberga las conexiones eléctricas para protegerlas de la intemperie y evitar que las personas sufran descargas eléctricas accidentales.',
    },
    {
      termino: 'Carga',
      significado:
        'Potencia eléctrica requerida para el funcionamiento de uno o varios equipos eléctricos o la potencia que transporta un circuito. ',
    },
    {
      termino: 'Carga nominal',
      significado:
        'Carga asignada a un equipo o sistema eléctrico por el diseñador, para definir su funcionamiento bajo unas condiciones específicas.',
    },
    {
      termino: 'Conduletas',
      significado:
        'Parte independiente de un sistema de conductos o tuberías que permite acceder, a través de tapa o tapas removibles, al interior del sistema en el punto de unión de dos o más secciones del sistema o en una terminal de este.',
    },
    {
      termino: 'Demanda eléctrica',
      significado:
        'Carga eléctrica en los terminales de recepción, promediada normalmente durante 15 minutos.',
    },
    {
      termino: 'Diagrama eléctrico',
      significado: 'Representación gráfica de un circuito eléctrico.',
    },
    {
      termino: 'Flujo luminoso',
      significado:
        'Cantidad de luz emitida por una fuente luminosa en todas las direcciones por una unidad de tiempo. Su unidad es el lumen (Im). ',
    },
    {
      termino: 'Generador eléctrico',
      significado:
        'Máquina que convierte energía mecánica en energía eléctrica.',
    },
    {
      termino: 'Motor eléctrico',
      significado:
        'Es una máquina eléctrica que convierte la energía eléctrica en energía mecánica.',
    },
    {
      termino: 'Tableros de distribución',
      significado:
        'Conjunto de equipos de protección, barrajes y cableado que recibe las acometidas parciales y del cual se derivan los circuitos ramales. ',
    },
    {
      termino: 'Tierra eléctrica',
      significado:
        'Para sistemas eléctricos es una expresión que generaliza todo lo referente a conexiones con tierra. En temas eléctricos se asocia al suelo, terreno, tierra, masa, chasis, carcasa, armazón, estructura o tubería de agua.',
    },
  ],
  referencias: [
    {
      referencia:
        'Resolución 90708 de 2013 y anexos. [Ministerio de Minas y Energía de Colombia]. Por la cual se expide el Reglamento técnico de instalaciones eléctricas - RETIE, que fija las condiciones técnicas que garanticen la seguridad en los procesos de generación, transmisión, transformación, distribución y utilización de la energía eléctrica en la república de Colombia y se dictan otras disposiciones. Agosto 30 de 2013.',
      link:
        'https://sic.gov.co/sites/default/files/files/reglamentos%20tecnicos/ANEXO%20GENERAL%20RETIE%20Res%2090708%20de%202013%20actualizado%20a%20Res%202017-03-29.pdf',
    },
    {
      referencia:
        'Resolución 181331 de 2009 y anexo. [Ministerio de Minas y Energía de Colombia].  Por la cual se expide el Reglamento técnico de iluminación y alumbrado público RETILAP y se dictan otras disposiciones. Agosto 6 de 2009.',
      link:
        'https://sic.gov.co/sites/default/files/files/reglamentos%20tecnicos/RETILAP.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Javier González Cuevas ',
          cargo: 'Experto Técnico ',
          centro:
            'Regional Distrito Capital - Centro Electricidad Electrónica y Telecomunicaciones ',
        },
        {
          nombre: 'Leidy Carolina Arias  Aguirre ',
          cargo: 'Diseñadora Instruccional ',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Carolina Coca Salazar ',
          cargo: 'Revisora Metodológica y Pedagógica ',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología ',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes ',
          cargo: 'Responsable Equipo Desarrollo Curricular ',
          centro:
            'Regional D.C. - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Julia Isabel Roberto ',
          cargo: 'Correctora de Estilo ',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortés ',
          cargo: 'Diseñador Instruccional ',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
        {
          nombre: 'María Inés Machado López ',
          cargo: 'Revisora Metodológica y Pedagógica ',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Yobani Penagos Mora',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
        {
          nombre: 'Sebastián Trujillo Afanador',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador ',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco Javier Vásquez Suarez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y Vinculación en Plataforma LMS',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Tolima – Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
