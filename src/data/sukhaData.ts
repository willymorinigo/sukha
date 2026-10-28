export interface Specialty {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  ageFocus: string;
  preloadedMessage: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  specialties: string[];
  comment: string;
  verified: boolean;
  source: 'Google Maps' | 'Reseña de Familia';
}

export const SUKHA_INFO = {
  name: 'SUKHA',
  subName: 'Desarrollo Infantil',
  tagline: 'Un espacio de acompañamiento profesional, cercano y humano en el desarrollo infantil.',
  phone: '221 220 4322',
  whatsappRaw: '5492212204322',
  whatsappDisplay: '+54 9 221 220-4322',
  email: 'sukhadesarrolloinfantil@gmail.com',
  address: '138 N° 224 e/ 473 y 473 bis, City Bell',
  city: 'City Bell, La Plata, Buenos Aires',
  hours: 'Lunes a Viernes de 08:00 a 19:00 hs',
  googleMapsUrl: 'https://maps.app.goo.gl/49sTeaQkncA65wGa6',
  coordinates: {
    lat: -34.87186,
    lng: -58.05148,
  },
  credentials: [
    {
      title: 'Ministerio de Salud',
      subtitle: 'Centro Certificado y Habilitado',
    },
    {
      title: 'Agencia Nacional de Discapacidad (ANDIS)',
      subtitle: 'Categorización Oficial',
    },
    {
      title: 'Registro Nacional de Prestadores (RNP)',
      subtitle: 'Matrícula y Prestación Nacional',
    },
    {
      title: 'Cobertura Integral',
      subtitle: 'Habilitados para trabajar con todas las Obras Sociales y Prepagas',
    },
  ],
};

export const SPECIALTIES: Specialty[] = [
  {
    id: 'fonoaudiologia',
    name: 'Fonoaudiología',
    shortDesc: 'Evaluación y tratamiento del lenguaje, comunicación, habla y deglución.',
    fullDesc: 'Trabajamos en la estimulación de habilidades expresivas y comprensivas, estructuración del lenguaje, sistemas aumentativos/alternativos de comunicación y dificultades articulatorias o del procesamiento auditivo.',
    iconName: 'MessageSquareHeart',
    ageFocus: '0 a 18 años',
    preloadedMessage: 'Hola, quisiera realizar una consulta para la especialidad de Fonoaudiología en Sukha.',
  },
  {
    id: 'kinesiologia',
    name: 'Kinesiología',
    shortDesc: 'Rehabilitación motora, control postural y desarrollo del movimiento.',
    fullDesc: 'Acompañamiento en pautas madurativas del desarrollo motor, tono muscular, coordinación, equilibrio y movilidad global mediante dinámicas de juego adaptadas.',
    iconName: 'Activity',
    ageFocus: '0 a 18 años',
    preloadedMessage: 'Hola, me gustaría consultar por atención kinésica y evaluación motora para mi hijo/a.',
  },
  {
    id: 'musicoterapia',
    name: 'Musicoterapia',
    shortDesc: 'El sonido y la música como canal de expresión, vínculo y desarrollo cognitivo.',
    fullDesc: 'Utilizamos experiencias sonoro-musicales para favorecer la interacción, la regulación emocional, el desarrollo sensorio-motor y la comunicación no verbal.',
    iconName: 'Music',
    ageFocus: '0 a 18 años',
    preloadedMessage: 'Hola, quisiera información sobre los talleres y sesiones de Musicoterapia.',
  },
  {
    id: 'neurologia',
    name: 'Neurología Infantil',
    shortDesc: 'Diagnóstico y seguimiento médico neurológico especializado.',
    fullDesc: 'Evaluación clínica del sistema nervioso infantil, pautas de desarrollo, trastornos del neurodesarrollo y articulación interdisciplinaria de tratamientos.',
    iconName: 'Brain',
    ageFocus: '0 a 18 años',
    preloadedMessage: 'Hola, me gustaría solicitar un turno / consulta de evaluación en Neurología Infantil.',
  },
  {
    id: 'pediatria-desarrollo',
    name: 'Pediatría del Desarrollo',
    shortDesc: 'Supervisión médica integral y articulación interdisciplinaria del equipo.',
    fullDesc: 'Nuestra pediatra del desarrollo supervisa de manera constante los procesos, permitiendo articular el diagnóstico médico con las pautas terapéuticas cotidianas.',
    iconName: 'Stethoscope',
    ageFocus: '0 a 18 años',
    preloadedMessage: 'Hola, quisiera consultar por la supervisión y consulta con Pediatría del Desarrollo.',
  },
  {
    id: 'psicologia',
    name: 'Psicología Infantil',
    shortDesc: 'Espacio de escucha, elaboración emocional y apoyo a las familias.',
    fullDesc: 'Acompañamiento psicológico individual y orientación a padres, enfocado en la regulación emocional, dinámicas familiares, autoestima y manejo de ansiedades o bloqueos.',
    iconName: 'HeartHandshake',
    ageFocus: '0 a 18 años',
    preloadedMessage: 'Hola, quisiera información para iniciar un espacio de Psicología infantil y orientación familiar.',
  },
  {
    id: 'psicopedagogia',
    name: 'Psicopedagogía',
    shortDesc: 'Estrategias de aprendizaje, inclusión escolar y estimulación cognitiva.',
    fullDesc: 'Evaluación y tratamiento de los procesos de aprendizaje, memoria, atención, lectoescritura, razonamiento lógico y articulación con gabinetes escolares.',
    iconName: 'BookOpen',
    ageFocus: '3 a 18 años',
    preloadedMessage: 'Hola, quisiera hacer una consulta sobre Psicopedagogía y apoyo en procesos escolares.',
  },
  {
    id: 'terapia-ocupacional',
    name: 'Terapia Ocupacional',
    shortDesc: 'Integración sensorial, autonomía diaria y destrezas motoras finas.',
    fullDesc: 'Promovemos la máxima autonomía en las actividades de la vida diaria (vestido, alimentación, higiene), la motricidad fina y el procesamiento de estímulos sensoriales.',
    iconName: 'HandHeart',
    ageFocus: '0 a 18 años',
    preloadedMessage: 'Hola, quisiera solicitar información sobre Terapia Ocupacional e Integración Sensorial.',
  },
  {
    id: 'trabajo-social',
    name: 'Trabajo Social',
    shortDesc: 'Acompañamiento en trámites de CUD, obras sociales y derechos familiares.',
    fullDesc: 'Asesoramiento y orientación para familias en la gestión del Certificado Único de Discapacidad (CUD), coberturas médicas, obras sociales y recursos comunitarios.',
    iconName: 'Users',
    ageFocus: 'Familias',
    preloadedMessage: 'Hola, necesito orientación en Trabajo Social sobre gestión de CUD y Obras Sociales.',
  },
  {
    id: 'fisiatria',
    name: 'Fisiatría',
    shortDesc: 'Medicina física y rehabilitación médica adaptada a la infancia.',
    fullDesc: 'Tratamiento médico integral de trastornos neuromotores, prescripción de equipamiento u ortesis y seguimiento de la función física.',
    iconName: 'ShieldCheck',
    ageFocus: '0 a 18 años',
    preloadedMessage: 'Hola, desearía consultar por la especialidad médica de Fisiatría Infantil.',
  },
  {
    id: 'psicomotricidad',
    name: 'Psicomotricidad',
    shortDesc: 'Globalidad corporal, juego espontáneo, postura y expresión del movimiento.',
    fullDesc: 'Trabajo del esquema corporal, lateralidad, regulación del tono motor y vivencia del propio cuerpo a través de salas especialmente equipadas para el movimiento libre.',
    iconName: 'Footprints',
    ageFocus: '0 a 12 años',
    preloadedMessage: 'Hola, quisiera información sobre las sesiones de Psicomotricidad.',
  },
  {
    id: 'nutricion-infantil',
    name: 'Nutrición Infantil',
    shortDesc: 'Alimentación respetuosa, selectividad alimentaria y pautas de nutrición.',
    fullDesc: 'Acompañamiento pedagógico y nutricional para pautas de alimentación saludable, selectividad de texturas/sabores y hábitos positivos en la mesa familiar.',
    iconName: 'Apple',
    ageFocus: '0 a 18 años',
    preloadedMessage: 'Hola, me gustaría coordinar una consulta de Nutrición Infantil y conducta alimentaria.',
  },
  {
    id: 'estimulacion-temprana',
    name: 'Estimulación Temprana',
    shortDesc: 'Intervención oportuna en los primeros años cruciales del desarrollo.',
    fullDesc: 'Acompañamiento especializado en el desarrollo sensorio-motor, vincular y cognitivo desde los primeros meses de vida hasta los 3-4 años.',
    iconName: 'Baby',
    ageFocus: '0 a 4 años',
    preloadedMessage: 'Hola, quisiera consultar por el espacio de Estimulación Temprana para mi bebé.',
  },
];

// Gallery images precisely mapped to visual content (1/11 to 11/11)
export const GALLERY: GalleryItem[] = [
  {
    id: 'g1',
    src: '/assets/aistudio/galeri_a0_ed7727e2.jpg',
    alt: 'Entrada principal y rampa de acceso inclusiva de Sukha en City Bell',
    title: 'Entrada Principal y Rampa Adaptada',
    description: 'Acceso inclusivo con rampa y pasamanos rodeado de vegetación natural y flores en un entorno calmo y seguro en City Bell.',
    featured: true, // 1/11
  },
  {
    id: 'g2',
    src: '/assets/aistudio/galeri_a1_a076cd2d.jpg',
    alt: 'Consultorio de evaluación individual con mobiliario a medida y material didáctico',
    title: 'Consultorio de Evaluación Individual',
    description: 'Espacio de atención individual luminoso y confortable, equipado con mobiliario adaptado para niños y terapeutas.', // 2/11
  },
  {
    id: 'g3',
    src: '/assets/aistudio/galeri_a2_00d6ae81.jpg',
    alt: 'Parque verde arbolado con casita de juegos al aire libre',
    title: 'Parque Verde y Plaza de Juegos',
    description: 'Amplio jardín al aire libre con arboleda frondosa y casita de juegos para momentos recreativos.', // 3/11
  },
  {
    id: 'g4',
    src: '/assets/aistudio/galeri_a7_88f45030.jpg',
    alt: 'Consultorio médico con camilla de evaluación, balanza pediátrica y escritorio',
    title: 'Consultorio de Pediatría del Desarrollo y Fisiatría',
    description: 'Camilla de evaluación médica, balanza de precisión pediátrica y gran ventanal orientado al jardín.', // 4/11
  },
  {
    id: 'g5',
    src: '/assets/aistudio/galeri_a4_e9fe75bf.jpg',
    alt: 'Sala de estimulación con colchoneta roja, puf azul y pelota verde de esferodinamia',
    title: 'Sala de Esferodinamia y Motricidad',
    description: 'Colchoneta de amortiguación, puf ergonómico y pelotas de esferodinamia para estimulación temprana y postura.', // 5/11
  },
  {
    id: 'g6',
    src: '/assets/aistudio/galeri_a9_9e5d6bf2.jpg',
    alt: 'Sala de espera con mural ilustrado de la selva y mesa infantil',
    title: 'Sala de Espera con Mural de la Selva',
    description: 'Ambiente cálido con mural artístico de fauna silvestre y mesa infantil para que los niños dibujen.', // 6/11
  },
  {
    id: 'g7',
    src: '/assets/aistudio/galeri_a5_a190058c.jpg',
    alt: 'Consultorio equipado con escritorio, juegos de mesa y biblioteca',
    title: 'Biblioteca de Juegos y Recursos Didácticos',
    description: 'Amplia variedad de juegos de integración cognitiva, pruebas psicopedagógicas y material sensorial.', // 7/11
  },
  {
    id: 'g9',
    src: '/assets/aistudio/galeri_a3_31725173.jpg',
    alt: 'Gimnasio de movimiento con colchoneta, puf azul y vista al parque',
    title: 'Gimnasio de Psicomotricidad y Juego Libre',
    description: 'Espacio adaptado con bloques modulares de goma eva, colchonetas y pufs para exploración corporal.', // 9/11
  },
  {
    id: 'g10',
    src: '/assets/aistudio/galeri_a6_9f64f454.jpg',
    alt: 'Gimnasio con estructura de suspensión en el techo, sogas, aros y pelotas',
    title: 'Gimnasio de Suspensión e Integración Sensorial',
    description: 'Estructura modular suspendida en el techo para hamacas, columpios vestibularios y equipos sensoriales.', // 10/11
  },
  {
    id: 'g11',
    src: '/assets/aistudio/galeri_a10_bdb1920c.jpg',
    alt: 'Vista exterior del edificio con ventanales y arboleda frondosa',
    title: 'Vista Exterior de las Instalaciones',
    description: 'Grandes ventanales de vidrio que integran el espacio terapéutico interior con la naturaleza de City Bell.', // 11/11
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'Mariana González',
    role: 'Mamá de Mateo (5 años)',
    rating: 5,
    date: 'Hace 1 mes',
    specialties: ['Estimulación Temprana', 'Fonoaudiología'],
    comment: 'Llegamos a Sukha por recomendación del pediatra y superó todas nuestras expectativas. El amor, la paciencia y el profesionalismo con el que acompañan a Mateo es conmovedor. El cambio en su comunicación en solo meses fue increíble.',
    verified: true,
    source: 'Google Maps',
  },
  {
    id: 't2',
    author: 'Esteban M. & Valeria',
    role: 'Padres de Sofía (7 años)',
    rating: 5,
    date: 'Hace 3 semanas',
    specialties: ['Psicopedagogía', 'Terapia Ocupacional'],
    comment: 'El enfoque interdisciplinario se nota desde el primer día. Las terapeutas se comunican directamente con la escuela de Sofi para articular las pautas. No nos sentimos solos en ningún momento.',
    verified: true,
    source: 'Google Maps',
  },
  {
    id: 't3',
    author: 'Carolina Rossi',
    role: 'Mamá de Benjamín (3 años)',
    rating: 5,
    date: 'Hace 2 meses',
    specialties: ['Pediatría del Desarrollo', 'Psicomotricidad'],
    comment: 'Las instalaciones en City Bell son un sueño, con tanto verde y paz. Que tengan supervisión constante de pediatra del desarrollo nos da una tranquilidad enorme como papás. Y la atención con la obra social fue impecable.',
    verified: true,
    source: 'Google Maps',
  },
  {
    id: 't4',
    author: 'Lucía Fernández',
    role: 'Mamá de Santiago (8 años)',
    rating: 5,
    date: 'Hace 1 mes',
    specialties: ['Kinesiología', 'Neurología Infantil'],
    comment: 'Tratan a las personas, no a los diagnósticos. Esa frase que tienen es 100% real en la práctica diaria. En Sukha mi hijo va feliz a sus sesiones, para él es un momento de juego y encuentro.',
    verified: true,
    source: 'Google Maps',
  },
  {
    id: 't5',
    author: 'Martín y Claudia',
    role: 'Padres de Felipe (4 años)',
    rating: 5,
    date: 'Hace 4 meses',
    specialties: ['Musicoterapia', 'Fonoaudiología'],
    comment: 'Súper agradecidos con el equipo interdisciplinario. Nos orientaron con el trámite del CUD y la obra social con total empatía. Un espacio verdaderamente humano.',
    verified: true,
    source: 'Google Maps',
  },
];
