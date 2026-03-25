// Listado completo de ciclos formativos
// Para añadir municipios: añade bloques al array datos
export const familiaEmoji = {
  "Actividades Físicas y Deportivas": "⚽",
  "Administración y Gestión": "📋",
  "Agraria": "🌱",
  "Comercio y Márketing": "🛍️",
  "Comunicación, Imagen y Sonido": "🎬",
  "Edificación y Obra Civil": "🏗️",
  "Electricidad y Electrónica": "⚡",
  "Fabricación Mecánica": "⚙️",
  "Hostelería y Turismo": "🍽️",
  "Imagen Personal": "💇",
  "Industrias Alimentarias": "🍞",
  "Informática y Comunicaciones": "💻",
  "Instalación y Mantenimiento": "🔧",
  "Madera, Mueble y Corcho": "🪵",
  "Marítimo-Pesquera": "⚓",
  "Química": "🧪",
  "Sanidad": "🏥",
  "Seguridad y Medio Ambiente": "🛡️",
  "Servicios Socioculturales y a la Comunidad": "🤝",
  "Transporte y Mantenimiento de Vehículos": "🚗",
  "Artes Plásticas y Diseño": "🎨",
  "Energía y Agua":                      "💧",
  "Textil, Confección y Piel":           "🧵",
};

export const cicloInfo = {
  "Servicios administrativos":           { desc:"Aprenderás a realizar tareas administrativas básicas: tratamiento informático de datos, archivo, atención al cliente, correspondencia y operaciones básicas de tesorería.", salidas:"Auxiliar de oficina, grabador/a de datos, telefonista, auxiliar de venta, cajero/a." },
  "Agrojardinería y composiciones florales": { desc:"Trabajarás en viveros, jardines y espacios verdes, y aprenderás a elaborar composiciones florales y ornamentales.", salidas:"Operario/a de vivero, jardinero/a, auxiliar de floristería." },
  "Servicios comerciales":               { desc:"Te formarás en operaciones básicas de venta, atención al cliente y gestión de cobros en establecimientos comerciales.", salidas:"Auxiliar de comercio, reponedor/a, auxiliar de caja, auxiliar de almacén." },
  "Electricidad y electrónica":          { desc:"Realizarás operaciones auxiliares de montaje e instalación de redes eléctricas, equipos electrónicos y sistemas de automatización.", salidas:"Ayudante electricista, auxiliar de montaje electrónico, ayudante instalador." },
  "Instalaciones electrotécnicas y mecánica": { desc:"Te formarás en el montaje y mantenimiento básico de instalaciones eléctricas y sistemas mecánicos en edificios e industria.", salidas:"Auxiliar de instalaciones eléctricas, ayudante de mantenimiento electromecánico." },
  "Fabricación y montaje":               { desc:"Aprenderás técnicas básicas de mecanizado, soldadura, conformado de metales y montaje de estructuras metálicas.", salidas:"Ayudante de soldador/a, auxiliar de mecanizado, operario/a de montaje." },
  "Actividades de horno y pastelería":   { desc:"Te formarás en la elaboración de masas, productos de panadería, bollería y pastelería básica.", salidas:"Auxiliar de panadería, auxiliar de pastelería, ayudante de obrador." },
  "Alojamiento y lavandería":            { desc:"Aprenderás las operaciones de limpieza y preparación de habitaciones, zonas comunes y gestión básica de lencería en hoteles.", salidas:"Auxiliar de pisos, auxiliar de lavandería, camarero/a de pisos." },
  "Cocina y restauración":               { desc:"Te formarás en elaboraciones culinarias básicas, montaje de servicios de restauración y mantenimiento de zonas de producción.", salidas:"Auxiliar de cocina, ayudante de camarero/a, auxiliar de colectividades." },
  "Peluquería y estética":               { desc:"Aprenderás técnicas básicas de higiene capilar, corte, aplicación de color y tratamientos estéticos sencillos.", salidas:"Auxiliar de peluquería, auxiliar de estética, ayudante en salón de belleza." },
  "Informática de oficina":              { desc:"Te formarás en el manejo de aplicaciones ofimáticas, gestión de archivos digitales, navegación en internet y soporte básico a usuarios.", salidas:"Auxiliar informático/a, operador/a de sistemas, auxiliar de oficina digital." },
  "Informática y comunicaciones":        { desc:"Aprenderás a instalar y mantener equipos informáticos, redes locales y sistemas de comunicación básicos.", salidas:"Ayudante de montaje de sistemas, auxiliar de mantenimiento informático." },
  "Mantenimiento de viviendas":          { desc:"Te formarás en operaciones básicas de fontanería, pintura, pequeñas reparaciones eléctricas y mantenimiento general de viviendas.", salidas:"Auxiliar de mantenimiento, peón especialista en construcción." },
  "Madera y mueble":                     { desc:"Aprenderás técnicas básicas de carpintería, ebanistería, acabados de madera y montaje de muebles.", salidas:"Auxiliar de carpintería, ayudante de montaje de muebles." },
  "Actividades domésticas y limpieza de edificios": { desc:"Te formarás en técnicas de limpieza y mantenimiento básico de hogares, oficinas y espacios comunes.", salidas:"Empleado/a de hogar, auxiliar de limpieza, operario/a de limpieza." },
  "Mantenimiento de vehículos":          { desc:"Aprenderás operaciones básicas de mantenimiento preventivo y reparación sencilla de automóviles.", salidas:"Auxiliar de mecánico/a de vehículos, ayudante de taller." },
  "Gestión administrativa":              { desc:"Aprenderás a gestionar la administración de empresas: contabilidad, facturación, recursos humanos, atención al cliente y gestión documental.", salidas:"Auxiliar administrativo/a, técnico/a en contabilidad, gestor/a de RR.HH., recepcionista." },
  "Jardinería y floristería":            { desc:"Te formarás en el diseño, implantación y mantenimiento de jardines, zonas verdes y espacios naturales, y en la elaboración de composiciones florales.", salidas:"Jardinero/a, florista, técnico/a en espacios verdes, responsable de vivero." },
  "Actividades comerciales":             { desc:"Aprenderás a gestionar operaciones de compraventa, atención al cliente, merchandising, gestión de stocks y técnicas de venta presencial y online.", salidas:"Técnico/a en comercio, vendedor/a, gestor/a de punto de venta." },
  "Obras de interior, decoración y rehabilitación": { desc:"Te formarás en técnicas de revestimientos, pintura, instalación de suelos, techos, tabiques y rehabilitación de espacios interiores.", salidas:"Técnico/a en obras de interior, decorador/a de espacios, especialista en rehabilitación." },
  "Instalaciones de telecomunicaciones": { desc:"Aprenderás a instalar y mantener infraestructuras de telecomunicaciones: redes de cable, fibra óptica, antenas y sistemas de seguridad.", salidas:"Técnico/a instalador de telecomunicaciones, instalador de fibra óptica." },
  "Instalaciones eléctricas y automáticas": { desc:"Te formarás en el montaje y mantenimiento de instalaciones eléctricas en baja tensión, sistemas automáticos y domóticos.", salidas:"Electricista, técnico/a en automatismos, instalador/a de sistemas domóticos." },
  "Mecanizado":                          { desc:"Aprenderás a operar máquinas herramienta convencionales y de control numérico (CNC) para la fabricación de piezas metálicas.", salidas:"Operario/a de mecanizado, programador/a CNC, ajustador/a mecánico." },
  "Soldadura y calderería":              { desc:"Te formarás en técnicas de soldadura (MIG, TIG, electrodo) y fabricación de estructuras metálicas, depósitos y conducciones.", salidas:"Soldador/a, calderero/a, montador/a de estructuras metálicas." },
  "Servicios de restauración":           { desc:"Aprenderás a organizar y ejecutar el servicio en sala, barra y eventos gastronómicos, gestión de bebidas y atención al cliente.", salidas:"Camarero/a, maitre, barman/barlady, técnico/a en servicios de restaurante." },
  "Cocina y gastronomía":                { desc:"Te formarás en técnicas culinarias avanzadas, elaboración de menús, gestión de cocina y creatividad gastronómica.", salidas:"Cocinero/a, jefe/a de partida, técnico/a en cocina." },
  "Peluquería y cosmética capilar":      { desc:"Aprenderás técnicas profesionales de corte, coloración, permanente, alisado y tratamientos capilares.", salidas:"Peluquero/a, colorista, técnico/a en tratamientos capilares, encargado/a de salón." },
  "Estética y belleza":                  { desc:"Te formarás en técnicas de depilación, manicura, pedicura, maquillaje, masajes estéticos y tratamientos de belleza.", salidas:"Esteticista, técnico/a en imagen personal, especialista en uñas, maquillador/a." },
  "Elaboración de productos alimentarios": { desc:"Aprenderás a transformar y conservar materias primas alimentarias, controlando calidad y aplicando normas de seguridad alimentaria.", salidas:"Técnico/a en industria alimentaria, operario/a de producción, controlador/a de calidad." },
  "Horno, repostería y confitería":      { desc:"Te formarás en la elaboración artesanal e industrial de pan, bollería, repostería, pastelería y confitería de alta calidad.", salidas:"Panadero/a, pastelero/a, repostero/a, técnico/a en obrador." },
  "Sistemas microinformáticos y redes":  { desc:"Aprenderás a instalar, configurar y mantener equipos informáticos, redes locales, sistemas operativos y dar soporte técnico.", salidas:"Técnico/a de soporte informático, administrador/a de redes, helpdesk." },
  "Instalaciones de producción de calor":{ desc:"Te formarás en el montaje y mantenimiento de calderas, sistemas de calefacción, suelo radiante y energías renovables térmicas.", salidas:"Técnico/a en calefacción, instalador/a de sistemas térmicos." },
  "Instalaciones frigoríficas y de climatización": { desc:"Aprenderás a instalar y mantener equipos de refrigeración, aire acondicionado y sistemas de climatización.", salidas:"Técnico/a en climatización, instalador/a de frío, mantenedor/a de sistemas HVAC." },
  "Mantenimiento electromecánico":       { desc:"Te formarás en el mantenimiento preventivo y correctivo de maquinaria industrial: sistemas eléctricos, mecánicos, hidráulicos y neumáticos.", salidas:"Técnico/a de mantenimiento industrial, electromecánico/a." },
  "Instalación y amueblamiento":         { desc:"Aprenderás a fabricar elementos de carpintería y realizar el montaje e instalación de muebles y elementos de madera.", salidas:"Técnico/a en carpintería, montador/a de muebles, instalador/a de suelos de madera." },
  "Mantenimiento y control de maquinaria de barcos": { desc:"Te formarás en el mantenimiento de motores marinos, sistemas de propulsión e instalaciones de embarcaciones.", salidas:"Mecánico/a naval, técnico/a de mantenimiento de embarcaciones." },
  "Navegación y pesca de litoral":       { desc:"Aprenderás técnicas de navegación costera, manejo de artes de pesca, seguridad marítima y gestión de embarcaciones pesqueras.", salidas:"Patrón/ona de litoral, marinero/a pescador/a, técnico/a en pesca." },
  "Operaciones subacuáticas e hiperbáricas": { desc:"Te formarás en técnicas profesionales de buceo, trabajos subacuáticos y seguridad hiperbárica.", salidas:"Buceador/a profesional, técnico/a en trabajos subacuáticos." },
  "Operaciones de laboratorio":          { desc:"Aprenderás a realizar análisis físicos, químicos y biológicos básicos, con manejo de instrumentación analítica.", salidas:"Auxiliar de laboratorio, técnico/a de análisis, operario/a de control de calidad." },
  "Cuidados auxiliares de enfermería (TCAE)": { desc:"Te formarás en la atención básica al paciente, higiene y movilización, control de constantes vitales y apoyo en pruebas diagnósticas.", salidas:"Técnico/a auxiliar de enfermería (TCAE), auxiliar de clínica, auxiliar de geriatría." },
  "Emergencias sanitarias":              { desc:"Aprenderás a atender urgencias extrahospitalarias: soporte vital, triaje, transporte sanitario y coordinación con equipos de emergencia.", salidas:"Técnico/a en emergencias sanitarias, técnico/a de ambulancias." },
  "Farmacia y parafarmacia":             { desc:"Te formarás en la dispensación de medicamentos, atención farmacéutica, gestión de stocks y elaboración de fórmulas magistrales.", salidas:"Auxiliar de farmacia, técnico/a en parafarmacia, dispensador/a en oficina de farmacia." },
  "Emergencias y protección civil":      { desc:"Aprenderás a planificar y ejecutar operaciones de emergencia, extinción de incendios, salvamento y protección de personas.", salidas:"Técnico/a en protección civil, bombero/a, técnico/a en emergencias." },
  "Seguridad":                           { desc:"Te formarás en vigilancia y protección de personas, bienes e instalaciones y normativa de seguridad privada.", salidas:"Vigilante de seguridad, técnico/a en seguridad privada, controlador/a de accesos." },
  "Sanidad ambiental aplicada":          { desc:"Aprenderás a controlar y gestionar riesgos ambientales: calidad del agua, gestión de residuos, control de plagas y contaminación.", salidas:"Técnico/a en sanidad ambiental, inspector/a de salud pública, técnico/a en control de plagas." },
  "Atención a personas en situación de dependencia": { desc:"Te formarás en la atención integral a personas mayores, con discapacidad o en situación de dependencia.", salidas:"Auxiliar de ayuda a domicilio, técnico/a en residencias, gerocultora, trabajador/a familiar." },
  "Carrocería":                          { desc:"Aprenderás a diagnosticar y reparar daños en carrocerías: conformado de chapa, sustitución de elementos y preparación para pintura.", salidas:"Chapista, pintor/a de vehículos, técnico/a en carrocería." },
  "Electromecánica de vehículos automóviles": { desc:"Te formarás en el diagnóstico y reparación de sistemas eléctricos, mecánicos y electrónicos de vehículos automóviles.", salidas:"Mecánico/a de automóviles, técnico/a de diagnóstico, electricista del automóvil." },
  "Guía en el medio natural y tiempo libre": { desc:"Aprenderás a programar y conducir actividades en el medio natural: senderismo, escalada, kayak, orientación y campamentos.", salidas:"Guía de montaña, monitor/a de actividades en la naturaleza, técnico/a en turismo activo." },
  "Asistente al Producto Gráfico Interactivo": { desc:"Aprenderás a preparar, maquetar y producir contenidos gráficos digitales e interactivos: webs, apps, publicaciones digitales y multimedia.", salidas:"Maquetador/a digital, técnico/a en diseño gráfico, operador/a de preimpresión digital, asistente de diseño web." },
  "Arquitectura Efímera":                 { desc:"Te formarás en el diseño y construcción de espacios temporales para eventos, exposiciones, stands y espectáculos.", salidas:"Diseñador/a de espacios efímeros, técnico/a en montajes y escenografías, decorador/a de eventos." },
  "Proyectos y Dirección de Obras de Decoración": { desc:"Aprenderás a proyectar y dirigir la ejecución de espacios interiores decorativos: viviendas, comercios y espacios públicos.", salidas:"Decorador/a de interiores, director/a de obras de decoración, interiorista, técnico/a en escaparatismo." },
  "Modelismo y Maquetismo":               { desc:"Te formarás en la construcción de modelos tridimensionales y maquetas para arquitectura, diseño industrial y escenografía.", salidas:"Maquetista, modelador/a, técnico/a en prototipado, asistente en estudios de arquitectura y diseño." },
  "Ilustración Gráfica Publicitaria":     { desc:"Aprenderás técnicas de ilustración analógica y digital aplicadas a publicidad, editorial, cómic y diseño gráfico.", salidas:"Ilustrador/a, técnico/a en comunicación visual, diseñador/a gráfico/a, creativo/a publicitario/a." },
  "Cerámica Artística":                   { desc:"Te formarás en técnicas de creación cerámica artística: modelado, torno, vidriados y cocción para producción artística e industrial.", salidas:"Ceramista artístico/a, técnico/a en cerámica, artesano/a, docente de artes plásticas." },
  "Vídeo DJ y sonido":                   { desc:"Te formarás en la producción audiovisual, mezcla de audio y vídeo, técnicas de DJ, sonorización de eventos y edición multimedia.", salidas:"DJ, técnico/a de sonido, operador/a audiovisual, productor/a de contenidos." },
  // GS
  "Administración y Finanzas":            { desc:"Te formarás en contabilidad avanzada, fiscalidad, gestión financiera, análisis de balances y asesoría de empresas.", salidas:"Técnico/a superior en administración, controller financiero, asesor/a fiscal, responsable de contabilidad." },
  "Asistencia a la Dirección":            { desc:"Aprenderás a apoyar a la dirección de empresas en gestión de agenda, comunicación corporativa y organización de eventos.", salidas:"Asistente de dirección, secretario/a de dirección, asistente jurídico, gestor/a de RRHH." },
  "Animación de Actividades Físicas y Deportivas": { desc:"Te formarás en diseño y gestión de programas de actividad física, deportes recreativos y acondicionamiento para distintas poblaciones.", salidas:"Técnico/a superior en animación deportiva, coordinador/a deportivo, monitor/a de fitness." },
  "Administración de Sistemas Informáticos en Red": { desc:"Aprenderás a instalar, administrar y mantener sistemas informáticos y redes corporativas con seguridad y virtualización.", salidas:"Administrador/a de sistemas, técnico/a de redes corporativas, especialista en ciberseguridad." },
  "Desarrollo de Aplicaciones Informáticas": { desc:"Te formarás en análisis, diseño y programación de aplicaciones informáticas de escritorio y sistemas.", salidas:"Programador/a, analista programador/a, desarrollador/a de software." },
  "Desarrollo de Aplicaciones Web":       { desc:"Aprenderás a diseñar y desarrollar aplicaciones y servicios web tanto en frontend como en backend.", salidas:"Desarrollador/a web, programador/a full-stack, técnico/a en e-commerce." },
  "Sistemas de Telecomunicaciones e Informáticos": { desc:"Te formarás en instalación y gestión de sistemas complejos de telecomunicación, redes corporativas y difusión.", salidas:"Técnico/a superior en telecomunicaciones, administrador/a de redes." },
  "Sistemas Electrotécnicos y Automatizados": { desc:"Aprenderás a diseñar, montar y mantener instalaciones eléctricas industriales, sistemas automáticos y de control.", salidas:"Técnico/a en electrotecnia industrial, programador/a de autómatas PLC, jefe/a de instalaciones." },
  "Mantenimiento Electrónico":            { desc:"Te formarás en el diagnóstico, reparación y mantenimiento de equipos electrónicos industriales y de consumo.", salidas:"Técnico/a superior en electrónica, especialista en mantenimiento, técnico/a de servicio." },
  "Mecatrónica Industrial":               { desc:"Aprenderás a integrar sistemas mecánicos, eléctricos y electrónicos en maquinaria industrial automatizada.", salidas:"Técnico/a en mecatrónica, jefe/a de mantenimiento industrial, especialista en automatización." },
  "Prevención de Riesgos Profesionales":  { desc:"Te formarás en identificación, evaluación y control de riesgos laborales, y normativa de seguridad y salud en el trabajo.", salidas:"Técnico/a superior en PRL, inspector/a de seguridad, coordinador/a de seguridad en obra." },
  "Estética Integral y Bienestar":        { desc:"Aprenderás técnicas avanzadas de estética: láser, tratamientos corporales, spa, nutrición estética y gestión de centros.", salidas:"Técnico/a superior en estética, responsable de spa, esteticista especializada, gestora de salón." },
  "Asesoría de Imagen Personal y Corporativa": { desc:"Te formarás en imagen personal, protocolo, comunicación no verbal y consultoría de imagen para personas y empresas.", salidas:"Asesor/a de imagen, personal shopper, consultor/a de moda, responsable de protocolo." },
  "Gestión de Alojamientos Turísticos":   { desc:"Aprenderás a gestionar establecimientos hoteleros: recepción, reservas, revenue management y atención al cliente.", salidas:"Jefe/a de recepción, director/a de hotel, responsable de alojamiento, técnico/a en revenue." },
  "Guía, Información y Asistencia Turísticas": { desc:"Te formarás en guía turístico, información y organización de viajes y gestión de recursos turísticos.", salidas:"Guía turístico/a, técnico/a en agencia de viajes, informador/a turístico/a, gestor/a de destinos." },
  "Dirección de Cocina":                  { desc:"Aprenderás a dirigir cocinas profesionales: gestión de equipos, control de costes, creatividad culinaria y alta cocina.", salidas:"Jefe/a de cocina, director/a de restaurante, consultor/a gastronómico, chef ejecutivo/a." },
  "Dirección de Servicios en Restauración": { desc:"Te formarás en la dirección de sala y servicios: gestión de equipos, sumillería, mixología y dirección de F&B.", salidas:"Director/a de sala, jefe/a de F&B, sumiller, maitre, director/a de restaurante." },
  "Audiología Protésica":                 { desc:"Aprenderás a evaluar la capacidad auditiva y adaptar audífonos y prótesis auditivas.", salidas:"Audioprotesista, técnico/a en audiología, asesor/a en centros auditivos." },
  "Higiene Bucodental":                   { desc:"Te formarás en prevención y educación para la salud bucodental y asistencia al odontólogo.", salidas:"Higienista dental, técnico/a bucodental, auxiliar de clínica dental." },
  "Laboratorio Clínico y Biomédico":      { desc:"Aprenderás a realizar análisis clínicos, bioquímicos, microbiológicos e histológicos en laboratorios hospitalarios.", salidas:"Técnico/a superior de laboratorio clínico, analista clínico, técnico/a en banco de sangre." },
  "Educación Infantil":                   { desc:"Te formarás en el desarrollo y atención educativa de niños de 0 a 6 años, diseño de actividades y colaboración con familias.", salidas:"Educador/a infantil, técnico/a superior en educación infantil, monitor/a de ludoteca." },
  "Integración Social":                   { desc:"Aprenderás a diseñar e implementar programas de integración para personas con discapacidad, exclusión social o en riesgo.", salidas:"Integrador/a social, técnico/a en servicios sociales, educador/a social, mediador/a intercultural." },
  "Automoción":                           { desc:"Te formarás en diagnóstico y gestión de talleres: sistemas electrónicos avanzados, gestión de calidad y atención al cliente.", salidas:"Jefe/a de taller, director/a técnico/a de automoción, técnico/a en diagnosis avanzada." },
  "Producción de Audiovisuales y Espectáculos": { desc:"Aprenderás a organizar y gestionar la producción de contenidos audiovisuales, TV, radio y espectáculos.", salidas:"Productor/a audiovisual, técnico/a de producción TV/radio, coordinador/a de espectáculos." },
  "Iluminación, Captación y Tratamiento de Imagen": { desc:"Te formarás en fotografía profesional, iluminación de cine y TV, postproducción y tratamiento digital de imagen.", salidas:"Director/a de fotografía, técnico/a de iluminación, editor/a de imagen, fotógrafo/a profesional." },
  "Animaciones 3D, Juegos y Entornos Interactivos": { desc:"Aprenderás a crear animaciones en 3D, videojuegos y entornos virtuales interactivos con herramientas profesionales.", salidas:"Animador/a 3D, diseñador/a de videojuegos, técnico/a en realidad virtual/aumentada." },
  "Realización de Proyectos Audiovisuales y Espectáculos": { desc:"Te formarás en la dirección y realización de proyectos de cine, televisión, teatro y espectáculos en vivo.", salidas:"Realizador/a de TV, director/a de cine, técnico/a de realización, regidor/a de teatro." },
};

export const familiaDescripcion = {
  "Actividades Físicas y Deportivas": "Enseñanzas relacionadas con la práctica y gestión del deporte, actividades recreativas y atención en instalaciones deportivas.",
  "Administración y Gestión": "Familia conectada con la mayoría de sectores productivos. Engloba atención al público, administración, finanzas, seguros y gestión de la información.",
  "Agraria": "Enseñanzas dedicadas a la agricultura, ganadería, jardinería y floricultura, con enfoque en producción sostenible y gestión de recursos naturales.",
  "Comercio y Márketing": "Actividades relacionadas con la distribución comercial, compraventa, logística, transporte, marketing y relaciones públicas.",
  "Comunicación, Imagen y Sonido": "Formación en producción audiovisual, fotografía, sonido, realización y postproducción de contenidos multimedia.",
  "Edificación y Obra Civil": "Diseño, planificación, construcción y mantenimiento de edificios e infraestructuras. Alta demanda en construcción y rehabilitación.",
  "Electricidad y Electrónica": "Montaje e instalación de equipos electrónicos, telecomunicaciones, instalaciones eléctricas y sistemas domóticos.",
  "Fabricación Mecánica": "Diseño, producción y mantenimiento de componentes metálicos mediante mecanizado, soldadura y control numérico (CNC).",
  "Hostelería y Turismo": "Elaboración culinaria, atención en hoteles y restaurantes, gestión turística y promoción de destinos.",
  "Imagen Personal": "Tratamientos de estética y peluquería, utilizando las tecnologías actuales del sector con criterios de higiene y seguridad.",
  "Industrias Alimentarias": "Elaboración, transformación, envasado y conservación de productos alimenticios con control de calidad y seguridad alimentaria.",
  "Informática y Comunicaciones": "Tecnologías de la Información: configuración de equipos, redes, páginas web, sistemas de seguridad informática y soporte técnico.",
  "Instalación y Mantenimiento": "Frío y climatización, sistemas de aislamiento y mantenimiento electromecánico en edificios e industria.",
  "Madera, Mueble y Corcho": "Transformación de madera y fabricación de mobiliario con maquinaria CNC, diseño técnico (CAD) y acabados.",
  "Marítimo-Pesquera": "Formación para trabajar en pesca, acuicultura, buceo profesional y transporte marítimo.",
  "Química": "Operación y control de procesos industriales y de laboratorio en farmacia, petroquímica, alimentación y medio ambiente.",
  "Sanidad": "Actividades preventivas, curativas y de apoyo sanitario: enfermería, emergencias, farmacia, diagnóstico y más.",
  "Seguridad y Medio Ambiente": "Prevención de riesgos laborales, gestión ambiental, protección civil y seguridad privada.",
  "Servicios Socioculturales y a la Comunidad": "Dinamización cultural, atención e integración social, actividades educativas y cuidado de personas en situación de dependencia.",
  "Artes Plásticas y Diseño": "Enseñanzas Profesionales de Artes Plásticas y Diseño (EASDA). Forman profesionales creativos en diseño, ilustración, fotografía, cerámica y espacios. ⚠️ Son enseñanzas artísticas, no FP reglada ordinaria — el acceso requiere prueba específica.",
  "Transporte y Mantenimiento de Vehículos": "Aeronáutica, náutica, automoción y mantenimiento de vehículos por carretera.",
};

export const datos = [
  // ALICANTE FPB
  {centro:"CIPFP Leonardo da Vinci",nivel:"FPB",familia:"Administración y Gestión",ciclo:"Servicios administrativos"},
  {centro:"IES Figueras Pacheco",nivel:"FPB",familia:"Administración y Gestión",ciclo:"Servicios administrativos"},
  {centro:"Colegio San José",nivel:"FPB",familia:"Administración y Gestión",ciclo:"Servicios administrativos"},
  {centro:"Academia Cots",nivel:"FPB",familia:"Administración y Gestión",ciclo:"Servicios administrativos"},
  {centro:"CIPFP Leonardo da Vinci",nivel:"FPB",familia:"Agraria",ciclo:"Agrojardinería y composiciones florales"},
  {centro:"IES Dr. Balmis",nivel:"FPB",familia:"Comercio y Márketing",ciclo:"Servicios comerciales"},
  {centro:"IES El Pla",nivel:"FPB",familia:"Electricidad y Electrónica",ciclo:"Electricidad y electrónica"},
  {centro:"IES Antonio José Cavanilles",nivel:"FPB",familia:"Electricidad y Electrónica",ciclo:"Electricidad y electrónica"},
  {centro:"IES Antonio José Cavanilles",nivel:"FPB",familia:"Electricidad y Electrónica",ciclo:"Instalaciones electrotécnicas y mecánica"},
  {centro:"IES Antonio José Cavanilles",nivel:"FPB",familia:"Fabricación Mecánica",ciclo:"Fabricación y montaje"},
  {centro:"CIPFP Leonardo da Vinci",nivel:"FPB",familia:"Hostelería y Turismo",ciclo:"Actividades de horno y pastelería"},
  {centro:"IES Miguel Hernández",nivel:"FPB",familia:"Hostelería y Turismo",ciclo:"Alojamiento y lavandería"},
  {centro:"IES Las Lomas",nivel:"FPB",familia:"Imagen Personal",ciclo:"Peluquería y estética"},
  {centro:"IES El Pla",nivel:"FPB",familia:"Imagen Personal",ciclo:"Peluquería y estética"},
  {centro:"IES Jorge Juan",nivel:"FPB",familia:"Imagen Personal",ciclo:"Peluquería y estética"},
  {centro:"IES Jorge Juan",nivel:"FPB",familia:"Informática y Comunicaciones",ciclo:"Informática de oficina"},
  {centro:"IES Mare Nostrum",nivel:"FPB",familia:"Informática y Comunicaciones",ciclo:"Informática de oficina"},
  {centro:"Academia Cots",nivel:"FPB",familia:"Informática y Comunicaciones",ciclo:"Informática de oficina"},
  {centro:"IES Antonio José Cavanilles",nivel:"FPB",familia:"Informática y Comunicaciones",ciclo:"Informática y comunicaciones"},
  {centro:"IES Gran Vía",nivel:"FPB",familia:"Instalación y Mantenimiento",ciclo:"Mantenimiento de viviendas"},
  {centro:"IES Las Lomas",nivel:"FPB",familia:"Madera, Mueble y Corcho",ciclo:"Madera y mueble"},
  {centro:"IES Gran Vía",nivel:"FPB",familia:"Servicios Socioculturales y a la Comunidad",ciclo:"Actividades domésticas y limpieza de edificios"},
  {centro:"CIPFP Leonardo da Vinci",nivel:"FPB",familia:"Transporte y Mantenimiento de Vehículos",ciclo:"Mantenimiento de vehículos"},
  // ALICANTE GM
  {centro:"IES 8 de Marzo",nivel:"GM",familia:"Actividades Físicas y Deportivas",ciclo:"Guía en el medio natural y tiempo libre"},
  {centro:"CIPFP Leonardo da Vinci",nivel:"GM",familia:"Administración y Gestión",ciclo:"Gestión administrativa"},
  {centro:"IES Dr. Balmis",nivel:"GM",familia:"Administración y Gestión",ciclo:"Gestión administrativa"},
  {centro:"IES Mare Nostrum",nivel:"GM",familia:"Administración y Gestión",ciclo:"Gestión administrativa"},
  {centro:"Academia Cots",nivel:"GM",familia:"Administración y Gestión",ciclo:"Gestión administrativa"},
  {centro:"CIPFP Leonardo da Vinci",nivel:"GM",familia:"Agraria",ciclo:"Jardinería y floristería"},
  {centro:"IES Dr. Balmis",nivel:"GM",familia:"Comercio y Márketing",ciclo:"Actividades comerciales"},
  {centro:"IES Radio Exterior",nivel:"GM",familia:"Comercio y Márketing",ciclo:"Actividades comerciales"},
  {centro:"Academia Cots",nivel:"GM",familia:"Comercio y Márketing",ciclo:"Actividades comerciales"},
  {centro:"IES Gran Vía",nivel:"GM",familia:"Edificación y Obra Civil",ciclo:"Obras de interior, decoración y rehabilitación"},
  {centro:"IES Antonio José Cavanilles",nivel:"GM",familia:"Electricidad y Electrónica",ciclo:"Instalaciones de telecomunicaciones"},
  {centro:"IES Antonio José Cavanilles",nivel:"GM",familia:"Electricidad y Electrónica",ciclo:"Instalaciones eléctricas y automáticas"},
  {centro:"IES Antonio José Cavanilles",nivel:"GM",familia:"Fabricación Mecánica",ciclo:"Mecanizado"},
  {centro:"IES Antonio José Cavanilles",nivel:"GM",familia:"Fabricación Mecánica",ciclo:"Soldadura y calderería"},
  {centro:"Instituto Tecnológico del Metal",nivel:"GM",familia:"Fabricación Mecánica",ciclo:"Soldadura y calderería"},
  {centro:"IES Miguel Hernández",nivel:"GM",familia:"Hostelería y Turismo",ciclo:"Servicios de restauración"},
  {centro:"IES Las Lomas",nivel:"GM",familia:"Imagen Personal",ciclo:"Peluquería y cosmética capilar"},
  {centro:"IES El Pla",nivel:"GM",familia:"Imagen Personal",ciclo:"Peluquería y cosmética capilar"},
  {centro:"Alba Formación",nivel:"GM",familia:"Imagen Personal",ciclo:"Peluquería y cosmética capilar"},
  {centro:"IES El Pla",nivel:"GM",familia:"Imagen Personal",ciclo:"Estética y belleza"},
  {centro:"IES Jorge Juan",nivel:"GM",familia:"Imagen Personal",ciclo:"Estética y belleza"},
  {centro:"Alba Formación",nivel:"GM",familia:"Imagen Personal",ciclo:"Estética y belleza"},
  {centro:"CIPFP Leonardo da Vinci",nivel:"GM",familia:"Industrias Alimentarias",ciclo:"Elaboración de productos alimentarios"},
  {centro:"CIPFP Leonardo da Vinci",nivel:"GM",familia:"Industrias Alimentarias",ciclo:"Horno, repostería y confitería"},
  {centro:"IES Dr. Balmis",nivel:"GM",familia:"Informática y Comunicaciones",ciclo:"Sistemas microinformáticos y redes"},
  {centro:"IES El Pla",nivel:"GM",familia:"Informática y Comunicaciones",ciclo:"Sistemas microinformáticos y redes"},
  {centro:"IES Jorge Juan",nivel:"GM",familia:"Informática y Comunicaciones",ciclo:"Sistemas microinformáticos y redes"},
  {centro:"IES Radio Exterior",nivel:"GM",familia:"Informática y Comunicaciones",ciclo:"Sistemas microinformáticos y redes"},
  {centro:"IES Mare Nostrum",nivel:"GM",familia:"Informática y Comunicaciones",ciclo:"Sistemas microinformáticos y redes"},
  {centro:"Academia Cots",nivel:"GM",familia:"Informática y Comunicaciones",ciclo:"Sistemas microinformáticos y redes"},
  {centro:"IES Gran Vía",nivel:"GM",familia:"Instalación y Mantenimiento",ciclo:"Instalaciones de producción de calor"},
  {centro:"IES Gran Vía",nivel:"GM",familia:"Instalación y Mantenimiento",ciclo:"Instalaciones frigoríficas y de climatización"},
  {centro:"IES Antonio José Cavanilles",nivel:"GM",familia:"Instalación y Mantenimiento",ciclo:"Mantenimiento electromecánico"},
  {centro:"IES Las Lomas",nivel:"GM",familia:"Madera, Mueble y Corcho",ciclo:"Instalación y amueblamiento"},
  {centro:"CIPFP Marítimo-Pesquero",nivel:"GM",familia:"Marítimo-Pesquera",ciclo:"Mantenimiento y control de maquinaria de barcos"},
  {centro:"CIPFP Marítimo-Pesquero",nivel:"GM",familia:"Marítimo-Pesquera",ciclo:"Navegación y pesca de litoral"},
  {centro:"CIPFP Marítimo-Pesquero",nivel:"GM",familia:"Marítimo-Pesquera",ciclo:"Operaciones subacuáticas e hiperbáricas"},
  {centro:"CIPFP Leonardo da Vinci",nivel:"GM",familia:"Química",ciclo:"Operaciones de laboratorio"},
  {centro:"CIPFP Leonardo da Vinci",nivel:"GM",familia:"Sanidad",ciclo:"Cuidados auxiliares de enfermería (TCAE)"},
  {centro:"MEDAC Divina Pastora",nivel:"GM",familia:"Sanidad",ciclo:"Cuidados auxiliares de enfermería (TCAE)"},
  {centro:"Cruz Roja",nivel:"GM",familia:"Sanidad",ciclo:"Cuidados auxiliares de enfermería (TCAE)"},
  {centro:"Academia Cots",nivel:"GM",familia:"Sanidad",ciclo:"Cuidados auxiliares de enfermería (TCAE)"},
  {centro:"CIPFP Leonardo da Vinci",nivel:"GM",familia:"Sanidad",ciclo:"Emergencias sanitarias"},
  {centro:"Cruz Roja",nivel:"GM",familia:"Sanidad",ciclo:"Emergencias sanitarias"},
  {centro:"CIPFP Leonardo da Vinci",nivel:"GM",familia:"Sanidad",ciclo:"Farmacia y parafarmacia"},
  {centro:"Cruz Roja",nivel:"GM",familia:"Sanidad",ciclo:"Farmacia y parafarmacia"},
  {centro:"MEDAC Babel",nivel:"GM",familia:"Sanidad",ciclo:"Farmacia y parafarmacia"},
  {centro:"CIPFP Leonardo da Vinci",nivel:"GM",familia:"Seguridad y Medio Ambiente",ciclo:"Emergencias y protección civil"},
  {centro:"CIPFP Leonardo da Vinci",nivel:"GM",familia:"Seguridad y Medio Ambiente",ciclo:"Seguridad"},
  {centro:"IES Gran Vía",nivel:"GM",familia:"Servicios Socioculturales y a la Comunidad",ciclo:"Atención a personas en situación de dependencia"},
  {centro:"IES Figueras Pacheco",nivel:"GM",familia:"Servicios Socioculturales y a la Comunidad",ciclo:"Atención a personas en situación de dependencia"},
  {centro:"CIPFP Leonardo da Vinci",nivel:"GM",familia:"Transporte y Mantenimiento de Vehículos",ciclo:"Carrocería"},
  {centro:"CIPFP Leonardo da Vinci",nivel:"GM",familia:"Transporte y Mantenimiento de Vehículos",ciclo:"Electromecánica de vehículos automóviles"},
  // SAN VICENTE FPB
  {centro:"IES San Vicente",nivel:"FPB",familia:"Administración y Gestión",ciclo:"Servicios administrativos"},
  {centro:"IES María Blasco",nivel:"FPB",familia:"Electricidad y Electrónica",ciclo:"Electricidad y electrónica"},
  {centro:"CIPFP Canastell",nivel:"FPB",familia:"Hostelería y Turismo",ciclo:"Cocina y restauración"},
  {centro:"IES San Vicente",nivel:"FPB",familia:"Imagen Personal",ciclo:"Peluquería y estética"},
  {centro:"IES Gaia",nivel:"FPB",familia:"Informática y Comunicaciones",ciclo:"Informática de oficina"},
  {centro:"IES San Vicente",nivel:"FPB",familia:"Informática y Comunicaciones",ciclo:"Informática de oficina"},
  {centro:"IES San Vicente",nivel:"FPB",familia:"Informática y Comunicaciones",ciclo:"Informática y comunicaciones"},
  {centro:"CIPFP Canastell",nivel:"FPB",familia:"Transporte y Mantenimiento de Vehículos",ciclo:"Mantenimiento de vehículos"},
  // SAN VICENTE GM
  {centro:"IES Haygón",nivel:"GM",familia:"Actividades Físicas y Deportivas",ciclo:"Guía en el medio natural y tiempo libre"},
  {centro:"IES San Vicente",nivel:"GM",familia:"Administración y Gestión",ciclo:"Gestión administrativa"},
  {centro:"Santa Faz",nivel:"GM",familia:"Administración y Gestión",ciclo:"Gestión administrativa"},
  {centro:"IES Haygón",nivel:"GM",familia:"Comercio y Márketing",ciclo:"Actividades comerciales"},
  {centro:"CIPFP Canastell",nivel:"GM",familia:"Electricidad y Electrónica",ciclo:"Instalaciones eléctricas y automáticas"},
  {centro:"CIPFP Canastell",nivel:"GM",familia:"Hostelería y Turismo",ciclo:"Cocina y gastronomía"},
  {centro:"CIPFP Canastell",nivel:"GM",familia:"Hostelería y Turismo",ciclo:"Servicios de restauración"},
  {centro:"Santa Faz",nivel:"GM",familia:"Imagen Personal",ciclo:"Estética y belleza"},
  {centro:"IES San Vicente",nivel:"GM",familia:"Informática y Comunicaciones",ciclo:"Sistemas microinformáticos y redes"},
  {centro:"CIPFP Canastell",nivel:"GM",familia:"Instalación y Mantenimiento",ciclo:"Instalaciones de producción de calor"},
  {centro:"CIPFP Canastell",nivel:"GM",familia:"Instalación y Mantenimiento",ciclo:"Instalaciones frigoríficas y de climatización"},
  {centro:"CIPFP Canastell",nivel:"GM",familia:"Instalación y Mantenimiento",ciclo:"Mantenimiento electromecánico"},
  {centro:"CIPFP Canastell",nivel:"GM",familia:"Sanidad",ciclo:"Cuidados auxiliares de enfermería (TCAE)"},
  {centro:"Santa Faz",nivel:"GM",familia:"Sanidad",ciclo:"Cuidados auxiliares de enfermería (TCAE)"},
  {centro:"CIPFP Canastell",nivel:"GM",familia:"Sanidad",ciclo:"Emergencias sanitarias"},
  {centro:"CIPFP Canastell",nivel:"GM",familia:"Sanidad",ciclo:"Farmacia y parafarmacia"},
  {centro:"CIPFP Canastell",nivel:"GM",familia:"Seguridad y Medio Ambiente",ciclo:"Sanidad ambiental aplicada"},
  {centro:"CIPFP Canastell",nivel:"GM",familia:"Servicios Socioculturales y a la Comunidad",ciclo:"Atención a personas en situación de dependencia"},
  {centro:"CIPFP Canastell",nivel:"GM",familia:"Transporte y Mantenimiento de Vehículos",ciclo:"Carrocería"},
  {centro:"CIPFP Canastell",nivel:"GM",familia:"Transporte y Mantenimiento de Vehículos",ciclo:"Electromecánica de vehículos automóviles"},
  // MUTXAMEL FPB
  {centro:"IES L'Allusser",nivel:"FPB",familia:"Agraria",ciclo:"Agrojardinería y composiciones florales"},
  {centro:"IES Mutxamel",nivel:"FPB",familia:"Imagen Personal",ciclo:"Peluquería y estética"},
  {centro:"IES Mutxamel",nivel:"FPB",familia:"Informática y Comunicaciones",ciclo:"Informática de oficina"},
  // MUTXAMEL GM
  {centro:"IES L'Allusser",nivel:"GM",familia:"Agraria",ciclo:"Jardinería y floristería"},
  {centro:"IES Mutxamel",nivel:"GM",familia:"Imagen Personal",ciclo:"Estética y belleza"},
  {centro:"IES Mutxamel",nivel:"GM",familia:"Informática y Comunicaciones",ciclo:"Sistemas microinformáticos y redes"},
  // SANT JOAN GM
  {centro:"IES Lloixa",nivel:"GM",familia:"Administración y Gestión",ciclo:"Gestión administrativa"},
  {centro:"IES Luís García Berlanga",nivel:"GM",familia:"Comunicación, Imagen y Sonido",ciclo:"Vídeo DJ y sonido"},
  // EL CAMPELLO GM
  {centro:"IES Enric Valor",nivel:"GM",familia:"Servicios Socioculturales y a la Comunidad",ciclo:"Atención a personas en situación de dependencia"},

  // ── EASDA – ARTES PLÁSTICAS Y DISEÑO (Alicante) ─────────────
  {centro:"EASDA",nivel:"GM",familia:"Artes Plásticas y Diseño",ciclo:"Asistente al Producto Gráfico Interactivo"},
  {centro:"EASDA",nivel:"GS",familia:"Artes Plásticas y Diseño",ciclo:"Arquitectura Efímera"},
  {centro:"EASDA",nivel:"GS",familia:"Artes Plásticas y Diseño",ciclo:"Proyectos y Dirección de Obras de Decoración"},
  {centro:"EASDA",nivel:"GS",familia:"Artes Plásticas y Diseño",ciclo:"Modelismo y Maquetismo"},
  {centro:"EASDA",nivel:"GS",familia:"Artes Plásticas y Diseño",ciclo:"Ilustración Gráfica Publicitaria"},
  {centro:"EASDA",nivel:"GS",familia:"Artes Plásticas y Diseño",ciclo:"Cerámica Artística"},
  // ── ALICANTE GS ─────────────────────────────────────────────
  {centro:"CIPFP Leonardo da Vinci",nivel:"GS",familia:"Administración y Gestión",ciclo:"Administración y Finanzas"},
  {centro:"IES Dr. Balmis",nivel:"GS",familia:"Administración y Gestión",ciclo:"Administración y Finanzas"},
  {centro:"IES Mare Nostrum",nivel:"GS",familia:"Administración y Gestión",ciclo:"Administración y Finanzas"},
  {centro:"IES Dr. Balmis",nivel:"GS",familia:"Administración y Gestión",ciclo:"Asistencia a la Dirección"},
  {centro:"IES Mare Nostrum",nivel:"GS",familia:"Administración y Gestión",ciclo:"Asistencia a la Dirección"},
  {centro:"IES 8 de Marzo",nivel:"GS",familia:"Actividades Físicas y Deportivas",ciclo:"Animación de Actividades Físicas y Deportivas"},
  {centro:"IES Dr. Balmis",nivel:"GS",familia:"Informática y Comunicaciones",ciclo:"Administración de Sistemas Informáticos en Red"},
  {centro:"IES Mare Nostrum",nivel:"GS",familia:"Informática y Comunicaciones",ciclo:"Administración de Sistemas Informáticos en Red"},
  {centro:"IES Mare Nostrum",nivel:"GS",familia:"Informática y Comunicaciones",ciclo:"Desarrollo de Aplicaciones Informáticas"},
  {centro:"IES Mare Nostrum",nivel:"GS",familia:"Informática y Comunicaciones",ciclo:"Desarrollo de Aplicaciones Web"},
  {centro:"IES Antonio José Cavanilles",nivel:"GS",familia:"Electricidad y Electrónica",ciclo:"Sistemas de Telecomunicaciones e Informáticos"},
  {centro:"IES Antonio José Cavanilles",nivel:"GS",familia:"Electricidad y Electrónica",ciclo:"Sistemas Electrotécnicos y Automatizados"},
  {centro:"IES Antonio José Cavanilles",nivel:"GS",familia:"Electricidad y Electrónica",ciclo:"Mantenimiento Electrónico"},
  {centro:"IES Antonio José Cavanilles",nivel:"GS",familia:"Fabricación Mecánica",ciclo:"Mecatrónica Industrial"},
  {centro:"IES Antonio José Cavanilles",nivel:"GS",familia:"Seguridad y Medio Ambiente",ciclo:"Prevención de Riesgos Profesionales"},
  {centro:"IES Gran Vía",nivel:"GS",familia:"Seguridad y Medio Ambiente",ciclo:"Prevención de Riesgos Profesionales"},
  {centro:"IES El Pla",nivel:"GS",familia:"Imagen Personal",ciclo:"Estética Integral y Bienestar"},
  {centro:"IES El Pla",nivel:"GS",familia:"Imagen Personal",ciclo:"Asesoría de Imagen Personal y Corporativa"},
  {centro:"IES Miguel Hernández",nivel:"GS",familia:"Hostelería y Turismo",ciclo:"Gestión de Alojamientos Turísticos"},
  {centro:"IES Miguel Hernández",nivel:"GS",familia:"Hostelería y Turismo",ciclo:"Guía, Información y Asistencia Turísticas"},
  {centro:"IES Miguel Hernández",nivel:"GS",familia:"Hostelería y Turismo",ciclo:"Dirección de Cocina"},
  {centro:"IES Miguel Hernández",nivel:"GS",familia:"Hostelería y Turismo",ciclo:"Dirección de Servicios en Restauración"},
  {centro:"CIPFP Leonardo da Vinci",nivel:"GS",familia:"Sanidad",ciclo:"Audiología Protésica"},
  {centro:"CIPFP Leonardo da Vinci",nivel:"GS",familia:"Sanidad",ciclo:"Higiene Bucodental"},
  {centro:"CIPFP Leonardo da Vinci",nivel:"GS",familia:"Sanidad",ciclo:"Laboratorio Clínico y Biomédico"},
  {centro:"Cruz Roja",nivel:"GS",familia:"Sanidad",ciclo:"Laboratorio Clínico y Biomédico"},
  {centro:"IES Figueras Pacheco",nivel:"GS",familia:"Servicios Socioculturales y a la Comunidad",ciclo:"Educación Infantil"},
  {centro:"IES Figueras Pacheco",nivel:"GS",familia:"Servicios Socioculturales y a la Comunidad",ciclo:"Integración Social"},
  {centro:"CIPFP Leonardo da Vinci",nivel:"GS",familia:"Transporte y Mantenimiento de Vehículos",ciclo:"Automoción"},
  // ── SAN VICENTE GS ──────────────────────────────────────────
  {centro:"IES San Vicente",nivel:"GS",familia:"Administración y Gestión",ciclo:"Administración y Finanzas"},
  {centro:"IES San Vicente",nivel:"GS",familia:"Informática y Comunicaciones",ciclo:"Administración de Sistemas Informáticos en Red"},
  {centro:"IES San Vicente",nivel:"GS",familia:"Informática y Comunicaciones",ciclo:"Desarrollo de Aplicaciones Web"},
  {centro:"CIPFP Canastell",nivel:"GS",familia:"Electricidad y Electrónica",ciclo:"Sistemas Electrotécnicos y Automatizados"},
  {centro:"CIPFP Canastell",nivel:"GS",familia:"Seguridad y Medio Ambiente",ciclo:"Prevención de Riesgos Profesionales"},
  {centro:"CIPFP Canastell",nivel:"GS",familia:"Transporte y Mantenimiento de Vehículos",ciclo:"Automoción"},
  {centro:"CIPFP Canastell",nivel:"GS",familia:"Fabricación Mecánica",ciclo:"Mecatrónica Industrial"},
  {centro:"IES Haygón",nivel:"GS",familia:"Actividades Físicas y Deportivas",ciclo:"Animación de Actividades Físicas y Deportivas"},
  // ── SANT JOAN GS ────────────────────────────────────────────
  {centro:"IES Luís García Berlanga",nivel:"GS",familia:"Comunicación, Imagen y Sonido",ciclo:"Producción de Audiovisuales y Espectáculos"},
  {centro:"IES Luís García Berlanga",nivel:"GS",familia:"Comunicación, Imagen y Sonido",ciclo:"Iluminación, Captación y Tratamiento de Imagen"},
  {centro:"IES Luís García Berlanga",nivel:"GS",familia:"Comunicación, Imagen y Sonido",ciclo:"Animaciones 3D, Juegos y Entornos Interactivos"},
  {centro:"IES Luís García Berlanga",nivel:"GS",familia:"Comunicación, Imagen y Sonido",ciclo:"Realización de Proyectos Audiovisuales y Espectáculos"},
];

import { centrosInfo } from './centres.js';
// Enriquecer datos con info del centro (comarca, municipio, lat, lng, privado…)
export const datosEnriquecidos = datos.map(d => ({
  ...d, ...(centrosInfo[d.centro] || { comarca:"L'Alacantí", municipio:'Alicante', lat:38.345, lng:-0.481, privado:false })
}));

  // ═══════════════════════════════════════════════════════════
  // L'ALCOIÀ
  // ═══════════════════════════════════════════════════════════

  // CIPFP BATOI — Alcoy/Alcoi
  // Imatge Personal
  {centro:"CIPFP Batoi", nivel:"FPB", familia:"Imagen Personal", ciclo:"Peluquería y Estética"},
  {centro:"CIPFP Batoi", nivel:"GM",  familia:"Imagen Personal", ciclo:"Estética y Belleza"},
  {centro:"CIPFP Batoi", nivel:"GM",  familia:"Imagen Personal", ciclo:"Peluquería y Cosmética Capilar"},
  {centro:"CIPFP Batoi", nivel:"GS",  familia:"Imagen Personal", ciclo:"Estética Integral y Bienestar"},
  {centro:"CIPFP Batoi", nivel:"GS",  familia:"Imagen Personal", ciclo:"Estilismo y Dirección de Peluquería"},
  // Sanitat
  {centro:"CIPFP Batoi", nivel:"GM",  familia:"Sanidad",                        ciclo:"Cuidados Auxiliares de Enfermería"},
  {centro:"CIPFP Batoi", nivel:"GM",  familia:"Sanidad",                        ciclo:"Farmacia y Parafarmacia"},
  {centro:"CIPFP Batoi", nivel:"GM",  familia:"Sanidad",                        ciclo:"Emergencias Sanitarias"},
  {centro:"CIPFP Batoi", nivel:"GS",  familia:"Sanidad",                        ciclo:"Imagen para el Diagnóstico y Medicina Nuclear"},
  {centro:"CIPFP Batoi", nivel:"GS",  familia:"Sanidad",                        ciclo:"Laboratorio Clínico y Biomédico"},
  // Servicis Socioculturals
  {centro:"CIPFP Batoi", nivel:"GM",  familia:"Servicios Socioculturales y a la Comunidad", ciclo:"Atención a Personas en Situación de Dependencia"},
  {centro:"CIPFP Batoi", nivel:"GS",  familia:"Servicios Socioculturales y a la Comunidad", ciclo:"Animación Sociocultural y Turística"},
  {centro:"CIPFP Batoi", nivel:"GS",  familia:"Servicios Socioculturales y a la Comunidad", ciclo:"Educación Infantil"},
  {centro:"CIPFP Batoi", nivel:"GS",  familia:"Servicios Socioculturales y a la Comunidad", ciclo:"Integración Social"},
  // Hostaleria i Turisme
  {centro:"CIPFP Batoi", nivel:"GM",  familia:"Hostelería y Turismo",           ciclo:"Cocina y Gastronomía"},
  {centro:"CIPFP Batoi", nivel:"GM",  familia:"Hostelería y Turismo",           ciclo:"Servicios en Restauración"},
  {centro:"CIPFP Batoi", nivel:"GS",  familia:"Hostelería y Turismo",           ciclo:"Dirección de Cocina"},
  {centro:"CIPFP Batoi", nivel:"GS",  familia:"Hostelería y Turismo",           ciclo:"Gestión de Alojamientos Turísticos"},
  // Administració
  {centro:"CIPFP Batoi", nivel:"FPB", familia:"Administración y Gestión",       ciclo:"Servicios Administrativos"},
  {centro:"CIPFP Batoi", nivel:"GM",  familia:"Administración y Gestión",       ciclo:"Gestión Administrativa"},
  {centro:"CIPFP Batoi", nivel:"GS",  familia:"Administración y Gestión",       ciclo:"Asistencia a la Dirección"},
  // Informàtica
  {centro:"CIPFP Batoi", nivel:"GM",  familia:"Informática y Comunicaciones",   ciclo:"Sistemas Microinformáticos y Redes"},
  {centro:"CIPFP Batoi", nivel:"GS",  familia:"Informática y Comunicaciones",   ciclo:"Desarrollo de Aplicaciones Web"},

  // IES COTES BAIXES — Alcoy/Alcoi
  // Automoció
  {centro:"IES Cotes Baixes", nivel:"GM",  familia:"Transporte y Mantenimiento de Vehículos", ciclo:"Electromecánica de Vehículos Automóviles"},
  // Tèxtil
  {centro:"IES Cotes Baixes", nivel:"GM",  familia:"Textil, Confección y Piel", ciclo:"Operaciones de Ennoblecimiento Textil"},
  {centro:"IES Cotes Baixes", nivel:"GM",  familia:"Textil, Confección y Piel", ciclo:"Producción de Hilatura y Tejeduría de Calada"},
  {centro:"IES Cotes Baixes", nivel:"GS",  familia:"Textil, Confección y Piel", ciclo:"Diseño Técnico en Textil y Piel"},
  // Fabricació Mecànica
  {centro:"IES Cotes Baixes", nivel:"FPB", familia:"Fabricación Mecánica",      ciclo:"Fabricación y Montaje"},
  {centro:"IES Cotes Baixes", nivel:"GM",  familia:"Fabricación Mecánica",      ciclo:"Mecanizado"},
  {centro:"IES Cotes Baixes", nivel:"GS",  familia:"Fabricación Mecánica",      ciclo:"Programación de la Producción en Fabricación Mecánica"},
  // Comerç
  {centro:"IES Cotes Baixes", nivel:"GM",  familia:"Comercio y Márketing",      ciclo:"Actividades Comerciales"},
  // Fusta i Moble
  {centro:"IES Cotes Baixes", nivel:"GM",  familia:"Madera, Mueble y Corcho",   ciclo:"Fabricación a Medida e Instalación de Carpintería y Mueble"},
  // Electricitat i Electrònica
  {centro:"IES Cotes Baixes", nivel:"GM",  familia:"Electricidad y Electrónica", ciclo:"Instalaciones Eléctricas y Automáticas"},
  {centro:"IES Cotes Baixes", nivel:"GS",  familia:"Electricidad y Electrónica", ciclo:"Sistemas Electrotécnicos y Automatizados"},
  // Energies Renovables
  {centro:"IES Cotes Baixes", nivel:"GS",  familia:"Energía y Agua",            ciclo:"Energías Renovables"},

  // IES PARE VITÒRIA — Alcoy/Alcoi
  {centro:"IES Pare Vitòria", nivel:"FPB", familia:"Administración y Gestión",  ciclo:"Servicios Administrativos"},
  {centro:"IES Pare Vitòria", nivel:"GM",  familia:"Administración y Gestión",  ciclo:"Gestión Administrativa"},
  {centro:"IES Pare Vitòria", nivel:"GS",  familia:"Administración y Gestión",  ciclo:"Administración y Finanzas"},

  // IES ANDREU SEMPERE — Alcoy/Alcoi (FPB)
  {centro:"IES Andreu Sempere", nivel:"FPB", familia:"Fabricación Mecánica",    ciclo:"Fabricación y Montaje"},
  {centro:"IES Andreu Sempere", nivel:"FPB", familia:"Electricidad y Electrónica", ciclo:"Electricidad y Electrónica"},

  // COL·LEGI SANT ROC — Alcoy/Alcoi (privat concertat)
  {centro:"Col·legi Sant Roc", nivel:"GM",  familia:"Administración y Gestión", ciclo:"Gestión Administrativa"},
  {centro:"Col·legi Sant Roc", nivel:"GS",  familia:"Administración y Gestión", ciclo:"Administración y Finanzas"},
  {centro:"Col·legi Sant Roc", nivel:"GM",  familia:"Servicios Socioculturales y a la Comunidad", ciclo:"Atención a Personas en Situación de Dependencia"},
  {centro:"Col·legi Sant Roc", nivel:"GS",  familia:"Servicios Socioculturales y a la Comunidad", ciclo:"Integración Social"},

  // SALESIANOS JOAN XXIII — Alcoy/Alcoi (privat concertat)
  {centro:"Salesianos Joan XXIII Alcoi", nivel:"GM",  familia:"Electricidad y Electrónica", ciclo:"Instalaciones de Telecomunicaciones"},
  {centro:"Salesianos Joan XXIII Alcoi", nivel:"GM",  familia:"Electricidad y Electrónica", ciclo:"Instalaciones Eléctricas y Automáticas"},
  {centro:"Salesianos Joan XXIII Alcoi", nivel:"GS",  familia:"Electricidad y Electrónica", ciclo:"Sistemas Electrotécnicos y Automatizados"},

  // ═══════════════════════════════════════════════════════════
  // EL COMTAT
  // ═══════════════════════════════════════════════════════════

  // IES EL COMTAT — Cocentaina
  {centro:"IES El Comtat", nivel:"FPB", familia:"Administración y Gestión",     ciclo:"Servicios Administrativos"},
  {centro:"IES El Comtat", nivel:"GM",  familia:"Administración y Gestión",     ciclo:"Gestión Administrativa"},
  {centro:"IES El Comtat", nivel:"GS",  familia:"Administración y Gestión",     ciclo:"Administración y Finanzas"},
  {centro:"IES El Comtat", nivel:"GM",  familia:"Comercio y Márketing",         ciclo:"Actividades Comerciales"},
  {centro:"IES El Comtat", nivel:"GM",  familia:"Servicios Socioculturales y a la Comunidad", ciclo:"Atención a Personas en Situación de Dependencia"},

  // IES MURO — Muro de Alcoy/Muro d'Alcoi
  {centro:"IES Muro", nivel:"FPB", familia:"Administración y Gestión",          ciclo:"Servicios Administrativos"},
  {centro:"IES Muro", nivel:"GM",  familia:"Administración y Gestión",          ciclo:"Gestión Administrativa"},
  {centro:"IES Muro", nivel:"GM",  familia:"Agraria",                           ciclo:"Jardinería y Floristería"},

  // ═══════════════════════════════════════════════════════════
  // LA MARINA ALTA
  // ═══════════════════════════════════════════════════════════

  // CIPFP DÉNIA — Dénia
  {centro:"CIPFP Dénia", nivel:"FPB", familia:"Hostelería y Turismo",           ciclo:"Cocina y Restauración"},
  {centro:"CIPFP Dénia", nivel:"GM",  familia:"Hostelería y Turismo",           ciclo:"Cocina y Gastronomía"},
  {centro:"CIPFP Dénia", nivel:"GM",  familia:"Hostelería y Turismo",           ciclo:"Servicios en Restauración"},
  {centro:"CIPFP Dénia", nivel:"GS",  familia:"Hostelería y Turismo",           ciclo:"Dirección de Cocina"},
  {centro:"CIPFP Dénia", nivel:"GS",  familia:"Hostelería y Turismo",           ciclo:"Gestión de Alojamientos Turísticos"},
  {centro:"CIPFP Dénia", nivel:"GS",  familia:"Hostelería y Turismo",           ciclo:"Guía, Información y Asistencias Turísticas"},
  {centro:"CIPFP Dénia", nivel:"GM",  familia:"Marítimo-Pesquera",              ciclo:"Navegación y Pesca de Litoral"},
  {centro:"CIPFP Dénia", nivel:"GM",  familia:"Comercio y Márketing",           ciclo:"Actividades Comerciales"},
  {centro:"CIPFP Dénia", nivel:"GS",  familia:"Comercio y Márketing",           ciclo:"Comercio Internacional"},

  // IES MARIA IBARS — Dénia
  {centro:"IES Maria Ibars", nivel:"FPB", familia:"Hostelería y Turismo",       ciclo:"Cocina y Restauración"},
  {centro:"IES Maria Ibars", nivel:"GM",  familia:"Industrias Alimentarias",    ciclo:"Elaboración de Productos Alimenticios"},
  {centro:"IES Maria Ibars", nivel:"GS",  familia:"Electricidad y Electrónica", ciclo:"Automatización y Robótica Industrial"},

  // IES LA MAR — Xàbia/Jávea
  {centro:"IES La Mar", nivel:"FPB", familia:"Administración y Gestión",        ciclo:"Servicios Administrativos"},
  {centro:"IES La Mar", nivel:"GM",  familia:"Administración y Gestión",        ciclo:"Gestión Administrativa"},
  {centro:"IES La Mar", nivel:"GS",  familia:"Administración y Gestión",        ciclo:"Administración y Finanzas"},
  {centro:"IES La Mar", nivel:"GM",  familia:"Servicios Socioculturales y a la Comunidad", ciclo:"Atención a Personas en Situación de Dependencia"},
  {centro:"IES La Mar", nivel:"GS",  familia:"Servicios Socioculturales y a la Comunidad", ciclo:"Educación Infantil"},
  {centro:"IES La Mar", nivel:"GS",  familia:"Servicios Socioculturales y a la Comunidad", ciclo:"Integración Social"},
  {centro:"IES La Mar", nivel:"GM",  familia:"Sanidad",                         ciclo:"Cuidados Auxiliares de Enfermería"},
  {centro:"IES La Mar", nivel:"GS",  familia:"Sanidad",                         ciclo:"Dietética"},
  {centro:"IES La Mar", nivel:"GM",  familia:"Comercio y Márketing",            ciclo:"Actividades Comerciales"},
  {centro:"IES La Mar", nivel:"GS",  familia:"Comercio y Márketing",            ciclo:"Comercio Internacional"},

  // IES PEDREGUER — Pedreguer
  {centro:"IES de Pedreguer", nivel:"GS",  familia:"Sanidad",                  ciclo:"Laboratorio Clínico y Biomédico"},
  {centro:"IES de Pedreguer", nivel:"GM",  familia:"Administración y Gestión", ciclo:"Gestión Administrativa"},
  {centro:"IES de Pedreguer", nivel:"GS",  familia:"Administración y Gestión", ciclo:"Administración y Finanzas"},

  // IES JOSEP IBORRA — Benissa
  {centro:"IES Josep Iborra", nivel:"FPB", familia:"Hostelería y Turismo",     ciclo:"Cocina y Restauración"},
  {centro:"IES Josep Iborra", nivel:"GS",  familia:"Comercio y Márketing",     ciclo:"Comercio Internacional"},
  {centro:"IES Josep Iborra", nivel:"GS",  familia:"Hostelería y Turismo",     ciclo:"Gestión de Alojamientos Turísticos"},

  // IES IFAC — Calp/Calpe
  {centro:"IES Ifac", nivel:"GM",  familia:"Marítimo-Pesquera",               ciclo:"Navegación y Pesca de Litoral"},
  {centro:"IES Ifac", nivel:"FPB", familia:"Administración y Gestión",        ciclo:"Servicios Administrativos"},
  {centro:"IES Ifac", nivel:"GM",  familia:"Administración y Gestión",        ciclo:"Gestión Administrativa"},

  // IES ONDARA — Ondara
  {centro:"IES Ondara", nivel:"FPB", familia:"Administración y Gestión",      ciclo:"Servicios Administrativos"},
  {centro:"IES Ondara", nivel:"GM",  familia:"Administración y Gestión",      ciclo:"Gestión Administrativa"},
  {centro:"IES Ondara", nivel:"GM",  familia:"Servicios Socioculturales y a la Comunidad", ciclo:"Atención a Personas en Situación de Dependencia"},

  // ═══════════════════════════════════════════════════════════
  // LA MARINA BAIXA
  // ═══════════════════════════════════════════════════════════

  // IES BEATRIU FAJARDO DE MENDOZA — Benidorm
  {centro:"IES Beatriu Fajardo de Mendoza", nivel:"FPB", familia:"Hostelería y Turismo",          ciclo:"Alojamiento y Lavandería"},
  {centro:"IES Beatriu Fajardo de Mendoza", nivel:"FPB", familia:"Hostelería y Turismo",          ciclo:"Cocina y Restauración"},
  {centro:"IES Beatriu Fajardo de Mendoza", nivel:"GM",  familia:"Hostelería y Turismo",          ciclo:"Cocina y Gastronomía"},
  {centro:"IES Beatriu Fajardo de Mendoza", nivel:"GM",  familia:"Hostelería y Turismo",          ciclo:"Servicios en Restauración"},
  {centro:"IES Beatriu Fajardo de Mendoza", nivel:"GS",  familia:"Hostelería y Turismo",          ciclo:"Dirección de Cocina"},
  {centro:"IES Beatriu Fajardo de Mendoza", nivel:"GS",  familia:"Hostelería y Turismo",          ciclo:"Guía, Información y Asistencias Turísticas"},
  {centro:"IES Beatriu Fajardo de Mendoza", nivel:"GS",  familia:"Energía y Agua",                ciclo:"Gestión del Agua"},
  {centro:"IES Beatriu Fajardo de Mendoza", nivel:"GM",  familia:"Fabricación Mecánica",          ciclo:"Mecanizado"},
  {centro:"IES Beatriu Fajardo de Mendoza", nivel:"GS",  familia:"Fabricación Mecánica",          ciclo:"Diseño en Fabricación Mecánica"},
  {centro:"IES Beatriu Fajardo de Mendoza", nivel:"GM",  familia:"Comercio y Márketing",          ciclo:"Actividades Comerciales"},
  {centro:"IES Beatriu Fajardo de Mendoza", nivel:"GM",  familia:"Comunicación, Imagen y Sonido",               ciclo:"Vídeo Disc-jockey y Sonido"},
  {centro:"IES Beatriu Fajardo de Mendoza", nivel:"GS",  familia:"Comunicación, Imagen y Sonido",               ciclo:"Producción de Audiovisuales y Espectáculos"},

  // IES BERNAT DE SARRIÀ — Benidorm (Imatge Personal)
  {centro:"IES Bernat de Sarrià", nivel:"FPB", familia:"Imagen Personal", ciclo:"Peluquería y Estética"},
  {centro:"IES Bernat de Sarrià", nivel:"GM",  familia:"Imagen Personal", ciclo:"Estética y Belleza"},
  {centro:"IES Bernat de Sarrià", nivel:"GM",  familia:"Imagen Personal", ciclo:"Peluquería y Cosmética Capilar"},
  {centro:"IES Bernat de Sarrià", nivel:"GS",  familia:"Imagen Personal", ciclo:"Estética Integral y Bienestar"},
  {centro:"IES Bernat de Sarrià", nivel:"GS",  familia:"Imagen Personal", ciclo:"Estilismo y Dirección de Peluquería"},
  {centro:"IES Bernat de Sarrià", nivel:"GS",  familia:"Imagen Personal", ciclo:"Asesoría de Imagen Personal y Corporativa"},

  // IES L'ALMADRAVA — Benidorm (Sanitat)
  {centro:"IES L'Almadrava", nivel:"FPB", familia:"Agraria",                   ciclo:"Agro-jardinería y Composiciones Florales"},
  {centro:"IES L'Almadrava", nivel:"GM",  familia:"Sanidad",                   ciclo:"Cuidados Auxiliares de Enfermería"},
  {centro:"IES L'Almadrava", nivel:"GM",  familia:"Sanidad",                   ciclo:"Farmacia y Parafarmacia"},
  {centro:"IES L'Almadrava", nivel:"GS",  familia:"Sanidad",                   ciclo:"Dietética"},
  {centro:"IES L'Almadrava", nivel:"GS",  familia:"Sanidad",                   ciclo:"Laboratorio Clínico y Biomédico"},
  {centro:"IES L'Almadrava", nivel:"GS",  familia:"Química",                   ciclo:"Química y Salud Ambiental"},

  // IES PERE MARIA ORTS I BOSCH — Benidorm (Informàtica + Ciberseguretat)
  {centro:"IES Pere Maria Orts i Bosch", nivel:"FPB", familia:"Informática y Comunicaciones", ciclo:"Informática de Oficina"},
  {centro:"IES Pere Maria Orts i Bosch", nivel:"GM",  familia:"Informática y Comunicaciones", ciclo:"Sistemas Microinformáticos y Redes"},
  {centro:"IES Pere Maria Orts i Bosch", nivel:"GS",  familia:"Informática y Comunicaciones", ciclo:"Administración de Sistemas Informáticos en Red"},
  {centro:"IES Pere Maria Orts i Bosch", nivel:"GS",  familia:"Informática y Comunicaciones", ciclo:"Desarrollo de Aplicaciones Multiplataforma"},

  // IES MEDITERRÀNIA — Benidorm (Hostaleria)
  {centro:"IES Mediterrània", nivel:"FPB", familia:"Hostelería y Turismo",     ciclo:"Alojamiento y Lavandería"},
  {centro:"IES Mediterrània", nivel:"FPB", familia:"Hostelería y Turismo",     ciclo:"Cocina y Restauración"},
  {centro:"IES Mediterrània", nivel:"GM",  familia:"Hostelería y Turismo",     ciclo:"Cocina y Gastronomía"},
  {centro:"IES Mediterrània", nivel:"GM",  familia:"Hostelería y Turismo",     ciclo:"Servicios en Restauración"},
  {centro:"IES Mediterrània", nivel:"GS",  familia:"Hostelería y Turismo",     ciclo:"Dirección de Cocina"},
  {centro:"IES Mediterrània", nivel:"GS",  familia:"Hostelería y Turismo",     ciclo:"Gestión de Alojamientos Turísticos"},
  {centro:"IES Mediterrània", nivel:"GS",  familia:"Hostelería y Turismo",     ciclo:"Guía, Información y Asistencias Turísticas"},

  // IES BELLAGUARDA — Altea
  {centro:"IES Bellaguarda", nivel:"FPB", familia:"Agraria",                   ciclo:"Agro-jardinería y Composiciones Florales"},
  {centro:"IES Bellaguarda", nivel:"GM",  familia:"Agraria",                   ciclo:"Jardinería y Floristería"},
  {centro:"IES Bellaguarda", nivel:"GS",  familia:"Agraria",                   ciclo:"Paisajismo y Medio Rural"},
  {centro:"IES Bellaguarda", nivel:"GM",  familia:"Electricidad y Electrónica", ciclo:"Instalaciones Eléctricas y Automáticas"},
  {centro:"IES Bellaguarda", nivel:"GM",  familia:"Administración y Gestión",  ciclo:"Gestión Administrativa"},
  {centro:"IES Bellaguarda", nivel:"GM",  familia:"Comercio y Márketing",      ciclo:"Actividades Comerciales"},

  // IES L'ARABÍ — l'Alfàs del Pi
  {centro:"IES L'Arabí", nivel:"FPB", familia:"Agraria",                       ciclo:"Agro-jardinería y Composiciones Florales"},
  {centro:"IES L'Arabí", nivel:"FPB", familia:"Informática y Comunicaciones",  ciclo:"Informática de Oficina"},
  {centro:"IES L'Arabí", nivel:"GM",  familia:"Informática y Comunicaciones",  ciclo:"Sistemas Microinformáticos y Redes"},
  {centro:"IES L'Arabí", nivel:"GM",  familia:"Sanidad",                       ciclo:"Cuidados Auxiliares de Enfermería"},
  {centro:"IES L'Arabí", nivel:"GM",  familia:"Sanidad",                       ciclo:"Emergencias Sanitarias"},
  {centro:"IES L'Arabí", nivel:"GM",  familia:"Servicios Socioculturales y a la Comunidad", ciclo:"Atención a Personas en Situación de Dependencia"},
  {centro:"IES L'Arabí", nivel:"GS",  familia:"Servicios Socioculturales y a la Comunidad", ciclo:"Educación Infantil"},
  {centro:"IES L'Arabí", nivel:"GS",  familia:"Servicios Socioculturales y a la Comunidad", ciclo:"Integración Social"},
  {centro:"IES L'Arabí", nivel:"GS",  familia:"Servicios Socioculturales y a la Comunidad", ciclo:"Promoción de Igualdad de Género"},
  {centro:"IES L'Arabí", nivel:"GS",  familia:"Sanidad",                       ciclo:"Dietética"},

  // IES MARCOS ZARAGOZA — La Vila Joiosa/Villajoyosa
  {centro:"IES Marcos Zaragoza", nivel:"GM",  familia:"Administración y Gestión",      ciclo:"Gestión Administrativa"},
  {centro:"IES Marcos Zaragoza", nivel:"GS",  familia:"Administración y Gestión",      ciclo:"Administración y Finanzas"},
  {centro:"IES Marcos Zaragoza", nivel:"GM",  familia:"Electricidad y Electrónica",    ciclo:"Instalaciones Eléctricas y Automáticas"},
  {centro:"IES Marcos Zaragoza", nivel:"GM",  familia:"Electricidad y Electrónica",    ciclo:"Instalaciones de Telecomunicaciones"},
  {centro:"IES Marcos Zaragoza", nivel:"GM",  familia:"Informática y Comunicaciones",  ciclo:"Sistemas Microinformáticos y Redes"},
  {centro:"IES Marcos Zaragoza", nivel:"GS",  familia:"Informática y Comunicaciones",  ciclo:"Administración de Sistemas Informáticos en Red"},

  // IES MARINA BAIXA — La Vila Joiosa/Villajoyosa
  {centro:"IES Marina Baixa", nivel:"FPB", familia:"Administración y Gestión", ciclo:"Servicios Administrativos"},
  {centro:"IES Marina Baixa", nivel:"GM",  familia:"Administración y Gestión", ciclo:"Gestión Administrativa"},
  {centro:"IES Marina Baixa", nivel:"GM",  familia:"Comercio y Márketing",     ciclo:"Actividades Comerciales"},

  // IES LA NUCÍA — La Nucía
  {centro:"IES La Nucía", nivel:"FPB", familia:"Actividades Físicas y Deportivas", ciclo:"Actividades de Acondicionamiento Físico"},
  {centro:"IES La Nucía", nivel:"FPB", familia:"Electricidad y Electrónica",   ciclo:"Electricidad y Electrónica"},
  {centro:"IES La Nucía", nivel:"GM",  familia:"Actividades Físicas y Deportivas", ciclo:"Guía en el Medio Natural y de Tiempo Libre"},
  {centro:"IES La Nucía", nivel:"GS",  familia:"Actividades Físicas y Deportivas", ciclo:"Acondicionamiento Físico"},
  {centro:"IES La Nucía", nivel:"GS",  familia:"Actividades Físicas y Deportivas", ciclo:"Enseñanza y Animación Sociodeportiva"},

  // IES RODOLFO LLOPIS — Callosa d'En Sarrià (Agrària)
  {centro:"IES Rodolfo Llopis", nivel:"FPB", familia:"Agraria",               ciclo:"Agro-jardinería y Composiciones Florales"},
  {centro:"IES Rodolfo Llopis", nivel:"GM",  familia:"Agraria",               ciclo:"Jardinería y Floristería"},
  {centro:"IES Rodolfo Llopis", nivel:"GM",  familia:"Agraria",               ciclo:"Aprovechamiento y Conservación del Medio Natural"},
  {centro:"IES Rodolfo Llopis", nivel:"GS",  familia:"Agraria",               ciclo:"Gestión Forestal y del Medio Natural"},

  // ═══════════════════════════════════════════════════════════
  // L'ALT VINALOPÓ
  // ═══════════════════════════════════════════════════════════

  // IES HERMANOS AMORÓS — Villena
  {centro:"IES Hermanos Amorós", nivel:"FPB", familia:"Agraria",              ciclo:"Agro-jardinería y Composiciones Florales"},
  {centro:"IES Hermanos Amorós", nivel:"GM",  familia:"Informática y Comunicaciones", ciclo:"Sistemas Microinformáticos y Redes"},
  {centro:"IES Hermanos Amorós", nivel:"GS",  familia:"Informática y Comunicaciones", ciclo:"Desarrollo de Aplicaciones Web"},
  {centro:"IES Hermanos Amorós", nivel:"GS",  familia:"Agraria",             ciclo:"Gestión Forestal y del Medio Natural"},
  {centro:"IES Hermanos Amorós", nivel:"GS",  familia:"Servicios Socioculturales y a la Comunidad", ciclo:"Educación Infantil"},
  {centro:"IES Hermanos Amorós", nivel:"GS",  familia:"Servicios Socioculturales y a la Comunidad", ciclo:"Integración Social"},

  // IES NAVARRO SANTAFÉ — Villena
  {centro:"IES Navarro Santafé", nivel:"FPB", familia:"Electricidad y Electrónica", ciclo:"Instalaciones Electrotécnicas y Mecánica"},
  {centro:"IES Navarro Santafé", nivel:"GM",  familia:"Administración y Gestión",   ciclo:"Gestión Administrativa"},
  {centro:"IES Navarro Santafé", nivel:"GS",  familia:"Administración y Gestión",   ciclo:"Administración y Finanzas"},
  {centro:"IES Navarro Santafé", nivel:"GM",  familia:"Fabricación Mecánica",       ciclo:"Mecanizado"},
  {centro:"IES Navarro Santafé", nivel:"GS",  familia:"Fabricación Mecánica",       ciclo:"Programación de la Producción en Fabricación Mecánica"},
  {centro:"IES Navarro Santafé", nivel:"GM",  familia:"Electricidad y Electrónica", ciclo:"Instalaciones Eléctricas y Automáticas"},
  {centro:"IES Navarro Santafé", nivel:"GS",  familia:"Electricidad y Electrónica", ciclo:"Sistemas Electrotécnicos y Automatizados"},
  {centro:"IES Navarro Santafé", nivel:"GS",  familia:"Energía y Agua",             ciclo:"Energías Renovables"},

  // IES LAS FUENTES — Villena
  {centro:"IES Las Fuentes", nivel:"FPB", familia:"Imagen Personal", ciclo:"Peluquería y Estética"},
  {centro:"IES Las Fuentes", nivel:"GM",  familia:"Imagen Personal", ciclo:"Estética y Belleza"},
  {centro:"IES Las Fuentes", nivel:"GM",  familia:"Imagen Personal", ciclo:"Peluquería y Cosmética Capilar"},
  {centro:"IES Las Fuentes", nivel:"GS",  familia:"Imagen Personal", ciclo:"Estética Integral y Bienestar"},
  {centro:"IES Las Fuentes", nivel:"GM",  familia:"Comercio y Márketing",          ciclo:"Actividades Comerciales"},
  {centro:"IES Las Fuentes", nivel:"GS",  familia:"Comercio y Márketing",          ciclo:"Comercio Internacional"},
  {centro:"IES Las Fuentes", nivel:"GS",  familia:"Comercio y Márketing",          ciclo:"Transporte y Logística"},

  // ═══════════════════════════════════════════════════════════
  // EL VINALOPÓ MITJÀ
  // ═══════════════════════════════════════════════════════════

  // CIPFP VALLE DE ELDA — Elda
  {centro:"CIPFP Valle de Elda", nivel:"FPB", familia:"Comercio y Márketing",       ciclo:"Servicios Comerciales"},
  {centro:"CIPFP Valle de Elda", nivel:"GM",  familia:"Comercio y Márketing",       ciclo:"Actividades Comerciales"},
  {centro:"CIPFP Valle de Elda", nivel:"GM",  familia:"Comercio y Márketing",       ciclo:"Comercialización de Productos Alimentarios"},
  {centro:"CIPFP Valle de Elda", nivel:"GS",  familia:"Comercio y Márketing",       ciclo:"Comercio Internacional"},
  {centro:"CIPFP Valle de Elda", nivel:"GS",  familia:"Comercio y Márketing",       ciclo:"Marketing y Publicidad"},
  {centro:"CIPFP Valle de Elda", nivel:"GS",  familia:"Comercio y Márketing",       ciclo:"Transporte y Logística"},
  {centro:"CIPFP Valle de Elda", nivel:"FPB", familia:"Hostelería y Turismo",       ciclo:"Cocina y Restauración"},
  {centro:"CIPFP Valle de Elda", nivel:"GM",  familia:"Hostelería y Turismo",       ciclo:"Cocina y Gastronomía"},
  {centro:"CIPFP Valle de Elda", nivel:"GM",  familia:"Hostelería y Turismo",       ciclo:"Servicios en Restauración"},
  {centro:"CIPFP Valle de Elda", nivel:"GS",  familia:"Hostelería y Turismo",       ciclo:"Dirección de Cocina"},
  {centro:"CIPFP Valle de Elda", nivel:"GS",  familia:"Hostelería y Turismo",       ciclo:"Guía, Información y Asistencias Turísticas"},
  {centro:"CIPFP Valle de Elda", nivel:"FPB", familia:"Industrias Alimentarias",    ciclo:"Industrias Alimentarias"},
  {centro:"CIPFP Valle de Elda", nivel:"GM",  familia:"Industrias Alimentarias",    ciclo:"Elaboración de Productos Alimenticios"},
  {centro:"CIPFP Valle de Elda", nivel:"GM",  familia:"Industrias Alimentarias",    ciclo:"Panadería, Repostería y Confitería"},
  {centro:"CIPFP Valle de Elda", nivel:"GS",  familia:"Industrias Alimentarias",    ciclo:"Vitivinicultura"},
  {centro:"CIPFP Valle de Elda", nivel:"FPB", familia:"Informática y Comunicaciones", ciclo:"Informática y Comunicaciones"},
  {centro:"CIPFP Valle de Elda", nivel:"GM",  familia:"Informática y Comunicaciones", ciclo:"Sistemas Microinformáticos y Redes"},
  {centro:"CIPFP Valle de Elda", nivel:"GM",  familia:"Seguridad y Medio Ambiente", ciclo:"Seguridad"},
  {centro:"CIPFP Valle de Elda", nivel:"GS",  familia:"Seguridad y Medio Ambiente", ciclo:"Coordinación de Emergencias y Protección Civil"},
  {centro:"CIPFP Valle de Elda", nivel:"GS",  familia:"Servicios Socioculturales y a la Comunidad", ciclo:"Promoción de Igualdad de Género"},
  {centro:"CIPFP Valle de Elda", nivel:"GS",  familia:"Hostelería y Turismo",       ciclo:"Dirección de Servicios de Restauración"},

  // IES LA TORRETA ELDA — Elda
  {centro:"IES La Torreta Elda", nivel:"FPB", familia:"Textil, Confección y Piel", ciclo:"Calzado y Complementos"},
  {centro:"IES La Torreta Elda", nivel:"GM",  familia:"Electricidad y Electrónica", ciclo:"Instalaciones de Telecomunicaciones"},
  {centro:"IES La Torreta Elda", nivel:"GS",  familia:"Electricidad y Electrónica", ciclo:"Sistemas Electrotécnicos y Automatizados"},
  {centro:"IES La Torreta Elda", nivel:"GM",  familia:"Imagen Personal", ciclo:"Estética y Belleza"},

  // IES LA MELVA — Elda
  {centro:"IES La Melva", nivel:"GM",  familia:"Sanidad",                      ciclo:"Cuidados Auxiliares de Enfermería"},
  {centro:"IES La Melva", nivel:"GS",  familia:"Sanidad",                      ciclo:"Dietética"},

  // IES MONASTIL — Elda
  {centro:"IES Monastil", nivel:"FPB", familia:"Actividades Físicas y Deportivas", ciclo:"Actividades de Acondicionamiento Físico"},

  // IES EL VINALOPÓ — Novelda
  {centro:"IES El Vinalopó", nivel:"FPB", familia:"Administración y Gestión",  ciclo:"Servicios Administrativos"},
  {centro:"IES El Vinalopó", nivel:"GM",  familia:"Administración y Gestión",  ciclo:"Gestión Administrativa"},
  {centro:"IES El Vinalopó", nivel:"GS",  familia:"Administración y Gestión",  ciclo:"Administración y Finanzas"},
  {centro:"IES El Vinalopó", nivel:"GM",  familia:"Electricidad y Electrónica", ciclo:"Instalaciones Eléctricas y Automáticas"},
  {centro:"IES El Vinalopó", nivel:"GM",  familia:"Transporte y Mantenimiento de Vehículos", ciclo:"Electromecánica de Vehículos Automóviles"},
  {centro:"IES El Vinalopó", nivel:"GM",  familia:"Transporte y Mantenimiento de Vehículos", ciclo:"Aeronaves Pilotadas de Forma Remota"},

  // IES LA MOLA — Novelda
  {centro:"IES La Mola", nivel:"FPB", familia:"Agraria",                       ciclo:"Agro-jardinería y Composiciones Florales"},
  {centro:"IES La Mola", nivel:"FPB", familia:"Comercio y Márketing",          ciclo:"Servicios Comerciales"},
  {centro:"IES La Mola", nivel:"GM",  familia:"Comercio y Márketing",          ciclo:"Actividades Comerciales"},
  {centro:"IES La Mola", nivel:"GS",  familia:"Comercio y Márketing",          ciclo:"Marketing y Publicidad"},
  {centro:"IES La Mola", nivel:"GM",  familia:"Informática y Comunicaciones",  ciclo:"Sistemas Microinformáticos y Redes"},
  {centro:"IES La Mola", nivel:"GS",  familia:"Informática y Comunicaciones",  ciclo:"Desarrollo de Aplicaciones Multiplataforma"},
  {centro:"IES La Mola", nivel:"GS",  familia:"Informática y Comunicaciones",  ciclo:"Desarrollo de Aplicaciones Web"},

  // ═══════════════════════════════════════════════════════════
  // EL BAIX VINALOPÓ — ELCHE
  // ═══════════════════════════════════════════════════════════

  // CIPFP LA TORRETA — Elx/Elche
  {centro:"CIPFP La Torreta", nivel:"FPB", familia:"Agraria",                  ciclo:"Agro-jardinería y Composiciones Florales"},
  {centro:"CIPFP La Torreta", nivel:"FPB", familia:"Electricidad y Electrónica", ciclo:"Electricidad y Electrónica"},
  {centro:"CIPFP La Torreta", nivel:"FPB", familia:"Transporte y Mantenimiento de Vehículos", ciclo:"Mantenimiento de Vehículos"},
  {centro:"CIPFP La Torreta", nivel:"GM",  familia:"Transporte y Mantenimiento de Vehículos", ciclo:"Carrocería"},
  {centro:"CIPFP La Torreta", nivel:"GM",  familia:"Transporte y Mantenimiento de Vehículos", ciclo:"Electromecánica de Vehículos Automóviles"},
  {centro:"CIPFP La Torreta", nivel:"GS",  familia:"Transporte y Mantenimiento de Vehículos", ciclo:"Automoción"},
  {centro:"CIPFP La Torreta", nivel:"GM",  familia:"Sanidad",                  ciclo:"Cuidados Auxiliares de Enfermería"},
  {centro:"CIPFP La Torreta", nivel:"GM",  familia:"Sanidad",                  ciclo:"Emergencias Sanitarias"},
  {centro:"CIPFP La Torreta", nivel:"GS",  familia:"Sanidad",                  ciclo:"Documentación y Administración Sanitarias"},
  {centro:"CIPFP La Torreta", nivel:"GM",  familia:"Imagen Personal", ciclo:"Estética y Belleza"},
  {centro:"CIPFP La Torreta", nivel:"GM",  familia:"Imagen Personal", ciclo:"Peluquería y Cosmética Capilar"},
  {centro:"CIPFP La Torreta", nivel:"GM",  familia:"Imagen Personal", ciclo:"Instalaciones de Telecomunicaciones"},
  {centro:"CIPFP La Torreta", nivel:"GM",  familia:"Agraria",                  ciclo:"Jardinería y Floristería"},
  {centro:"CIPFP La Torreta", nivel:"GS",  familia:"Imagen Personal", ciclo:"Estética Integral y Bienestar"},
  {centro:"CIPFP La Torreta", nivel:"GS",  familia:"Imagen Personal", ciclo:"Estilismo y Dirección de Peluquería"},

  // IES SIXTO MARCO — Elx/Elche (Calçat — Centre Referència Nacional)
  {centro:"IES Sixto Marco", nivel:"FPB", familia:"Textil, Confección y Piel", ciclo:"Arreglo y Reparación de Artículos Textiles y de Piel"},
  {centro:"IES Sixto Marco", nivel:"GM",  familia:"Textil, Confección y Piel", ciclo:"Calzado y Complementos de Moda"},
  {centro:"IES Sixto Marco", nivel:"GS",  familia:"Textil, Confección y Piel", ciclo:"Diseño y Producción de Calzado y Complementos"},

  // IES CAYETANO SEMPERE — Elx/Elche
  {centro:"IES Cayetano Sempere", nivel:"GS",  familia:"Energía y Agua",       ciclo:"Energías Renovables"},
  {centro:"IES Cayetano Sempere", nivel:"GM",  familia:"Administración y Gestión", ciclo:"Gestión Administrativa"},
  {centro:"IES Cayetano Sempere", nivel:"GS",  familia:"Administración y Gestión", ciclo:"Administración y Finanzas"},

  // IES SEVERO OCHOA — Elx/Elche
  {centro:"IES Severo Ochoa", nivel:"GS",  familia:"Informática y Comunicaciones", ciclo:"Administración de Sistemas Informáticos en Red"},
  {centro:"IES Severo Ochoa", nivel:"GS",  familia:"Comercio y Márketing",     ciclo:"Comercio Internacional"},
  {centro:"IES Severo Ochoa", nivel:"GM",  familia:"Administración y Gestión", ciclo:"Gestión Administrativa"},

  // IES PEDRO IBARRA — Elx/Elche
  {centro:"IES Pedro Ibarra", nivel:"GM",  familia:"Informática y Comunicaciones", ciclo:"Sistemas Microinformáticos y Redes"},
  {centro:"IES Pedro Ibarra", nivel:"GS",  familia:"Informática y Comunicaciones", ciclo:"Desarrollo de Aplicaciones Multiplataforma"},
  {centro:"IES Pedro Ibarra", nivel:"GM",  familia:"Administración y Gestión", ciclo:"Gestión Administrativa"},

  // IES ASUNCIÓN DE NUESTRA SEÑORA — Elx/Elche
  {centro:"IES Asunción de Nuestra Señora", nivel:"GM",  familia:"Química",    ciclo:"Operaciones de Laboratorio"},
  {centro:"IES Asunción de Nuestra Señora", nivel:"GM",  familia:"Sanidad",    ciclo:"Cuidados Auxiliares de Enfermería"},
  {centro:"IES Asunción de Nuestra Señora", nivel:"GM",  familia:"Administración y Gestión", ciclo:"Gestión Administrativa"},

  // IES PERIODISTA VICENTE VERDÚ — Elx/Elche
  {centro:"IES Periodista Vicente Verdú", nivel:"GM",  familia:"Hostelería y Turismo", ciclo:"Panadería, Repostería y Confitería"},
  {centro:"IES Periodista Vicente Verdú", nivel:"GS",  familia:"Industrias Alimentarias", ciclo:"Procesos y Calidad en la Industria Alimentaria"},
  {centro:"IES Periodista Vicente Verdú", nivel:"GM",  familia:"Industrias Alimentarias", ciclo:"Elaboración de Productos Alimenticios"},

  // IES MONSERRAT ROIG — Elx/Elche
  {centro:"IES Monserrat Roig", nivel:"GS",  familia:"Actividades Físicas y Deportivas", ciclo:"Acondicionamiento Físico"},
  {centro:"IES Monserrat Roig", nivel:"GM",  familia:"Actividades Físicas y Deportivas", ciclo:"Guía en el Medio Natural y de Tiempo Libre"},

  // IES TIRANT LO BLANC — Elx/Elche
  {centro:"IES Tirant lo Blanc", nivel:"FPB", familia:"Hostelería y Turismo",  ciclo:"Cocina y Restauración"},
  {centro:"IES Tirant lo Blanc", nivel:"FPB", familia:"Informática y Comunicaciones", ciclo:"Informática de Oficina"},
  {centro:"IES Tirant lo Blanc", nivel:"GS",  familia:"Hostelería y Turismo",  ciclo:"Agencias de Viajes y Gestión de Eventos"},
  {centro:"IES Tirant lo Blanc", nivel:"GS",  familia:"Hostelería y Turismo",  ciclo:"Gestión de Alojamientos Turísticos"},
  {centro:"IES Tirant lo Blanc", nivel:"GS",  familia:"Hostelería y Turismo",  ciclo:"Guía, Información y Asistencias Turísticas"},

  // IES VICTORIA KENT — Elx/Elche
  {centro:"IES Victoria Kent", nivel:"GS",  familia:"Comercio y Márketing",    ciclo:"Comercio Internacional"},
  {centro:"IES Victoria Kent", nivel:"GM",  familia:"Administración y Gestión", ciclo:"Gestión Administrativa"},
  {centro:"IES Victoria Kent", nivel:"GS",  familia:"Administración y Gestión", ciclo:"Administración y Finanzas"},

  // IES CARRUS — Elx/Elche
  {centro:"IES Carrus", nivel:"FPB", familia:"Fabricación Mecánica",           ciclo:"Fabricación de Elementos Metálicos"},
  {centro:"IES Carrus", nivel:"GM",  familia:"Fabricación Mecánica",           ciclo:"Soldadura y Calderería"},
  {centro:"IES Carrus", nivel:"GM",  familia:"Instalación y Mantenimiento",    ciclo:"Instalaciones de Producción de Calor"},
  {centro:"IES Carrus", nivel:"GS",  familia:"Instalación y Mantenimiento",    ciclo:"Desarrollo de Proyectos de Instalaciones Térmicas y de Fluidos"},
  {centro:"IES Carrus", nivel:"GM",  familia:"Transporte y Mantenimiento de Vehículos", ciclo:"Electromecánica de Vehículos Automóviles"},

  // IES JOANOT MARTORELL — Elx/Elche
  {centro:"IES Joanot Martorell", nivel:"FPB", familia:"Administración y Gestión", ciclo:"Servicios Administrativos"},
  {centro:"IES Joanot Martorell", nivel:"GM",  familia:"Administración y Gestión", ciclo:"Gestión Administrativa"},
  {centro:"IES Joanot Martorell", nivel:"GS",  familia:"Administración y Gestión", ciclo:"Administración y Finanzas"},
  {centro:"IES Joanot Martorell", nivel:"GM",  familia:"Servicios Socioculturales y a la Comunidad", ciclo:"Atención a Personas en Situación de Dependencia"},
  {centro:"IES Joanot Martorell", nivel:"GS",  familia:"Servicios Socioculturales y a la Comunidad", ciclo:"Educación Infantil"},

  // IES NIT DE L'ALBÀ — Elx/Elche
  {centro:"IES Nit de l'Albà", nivel:"FPB", familia:"Administración y Gestión", ciclo:"Servicios Administrativos"},
  {centro:"IES Nit de l'Albà", nivel:"GM",  familia:"Administración y Gestión", ciclo:"Gestión Administrativa"},
  {centro:"IES Nit de l'Albà", nivel:"GM",  familia:"Comercio y Márketing",     ciclo:"Actividades Comerciales"},
  {centro:"IES Nit de l'Albà", nivel:"GS",  familia:"Comercio y Márketing",     ciclo:"Gestión de Ventas y Espacios Comerciales"},

  // IES TORRELLANO — Elx/Elche (Torrellano)
  {centro:"IES Torrellano", nivel:"FPB", familia:"Administración y Gestión",   ciclo:"Servicios Administrativos"},
  {centro:"IES Torrellano", nivel:"GM",  familia:"Administración y Gestión",   ciclo:"Gestión Administrativa"},
  {centro:"IES Torrellano", nivel:"GM",  familia:"Electricidad y Electrónica", ciclo:"Instalaciones Eléctricas y Automáticas"},

  // IES MISTERI D'ELX — Elx/Elche (Arts Plàstiques)
  {centro:"IES Misteri d'Elx", nivel:"GM",  familia:"Artes Plásticas y Diseño",          ciclo:"Impresión Gráfica"},
  {centro:"IES Misteri d'Elx", nivel:"GS",  familia:"Artes Plásticas y Diseño",          ciclo:"Diseño y Gestión de la Producción Gráfica"},
  {centro:"IES Misteri d'Elx", nivel:"GS",  familia:"Comunicación, Imagen y Sonido", ciclo:"Animaciones 3D, Juegos y Entornos Interactivos"},

  // ═══════════════════════════════════════════════════════════
  // LA VEGA BAIXA / EL BAIX SEGURA
  // ═══════════════════════════════════════════════════════════

  // IES LAS ESPEÑETAS — Orihuela
  {centro:"IES Las Espeñetas", nivel:"GM",  familia:"Administración y Gestión", ciclo:"Gestión Administrativa"},
  {centro:"IES Las Espeñetas", nivel:"GS",  familia:"Administración y Gestión", ciclo:"Administración y Finanzas"},
  {centro:"IES Las Espeñetas", nivel:"GS",  familia:"Comercio y Márketing",     ciclo:"Comercio Internacional"},
  {centro:"IES Las Espeñetas", nivel:"GS",  familia:"Comercio y Márketing",     ciclo:"Transporte y Logística"},

  // IES THÁDER — Orihuela
  {centro:"IES Tháder", nivel:"FPB", familia:"Administración y Gestión",       ciclo:"Servicios Administrativos"},
  {centro:"IES Tháder", nivel:"GM",  familia:"Administración y Gestión",       ciclo:"Gestión Administrativa"},
  {centro:"IES Tháder", nivel:"GM",  familia:"Sanidad",                        ciclo:"Cuidados Auxiliares de Enfermería"},
  {centro:"IES Tháder", nivel:"GM",  familia:"Electricidad y Electrónica",     ciclo:"Instalaciones Eléctricas y Automáticas"},

  // IES VEGA BAJA — Callosa de Segura
  {centro:"IES Vega Baja", nivel:"FPB", familia:"Agraria",                     ciclo:"Agro-jardinería y Composiciones Florales"},
  {centro:"IES Vega Baja", nivel:"GM",  familia:"Agraria",                     ciclo:"Producción Agropecuaria"},
  {centro:"IES Vega Baja", nivel:"GM",  familia:"Administración y Gestión",    ciclo:"Gestión Administrativa"},

  // IES LIBERTAS — Torrevieja
  {centro:"IES Libertas", nivel:"FPB", familia:"Administración y Gestión",     ciclo:"Servicios Administrativos"},
  {centro:"IES Libertas", nivel:"GM",  familia:"Administración y Gestión",     ciclo:"Gestión Administrativa"},
  {centro:"IES Libertas", nivel:"GS",  familia:"Administración y Gestión",     ciclo:"Administración y Finanzas"},
  {centro:"IES Libertas", nivel:"GM",  familia:"Comercio y Márketing",         ciclo:"Actividades Comerciales"},
  {centro:"IES Libertas", nivel:"GM",  familia:"Sanidad",                      ciclo:"Cuidados Auxiliares de Enfermería"},

  // IES LAS LAGUNAS — Torrevieja
  {centro:"IES Las Lagunas", nivel:"FPB", familia:"Administración y Gestión",  ciclo:"Servicios Administrativos"},
  {centro:"IES Las Lagunas", nivel:"GM",  familia:"Administración y Gestión",  ciclo:"Gestión Administrativa"},
  {centro:"IES Las Lagunas", nivel:"GM",  familia:"Electricidad y Electrónica", ciclo:"Instalaciones Eléctricas y Automáticas"},
  {centro:"IES Las Lagunas", nivel:"GS",  familia:"Electricidad y Electrónica", ciclo:"Sistemas Electrotécnicos y Automatizados"},

  // IES MARE NOSTRUM TORREVIEJA — Torrevieja
  {centro:"IES Mare Nostrum Torrevieja", nivel:"FPB", familia:"Hostelería y Turismo", ciclo:"Cocina y Restauración"},
  {centro:"IES Mare Nostrum Torrevieja", nivel:"GM",  familia:"Hostelería y Turismo", ciclo:"Cocina y Gastronomía"},
  {centro:"IES Mare Nostrum Torrevieja", nivel:"GM",  familia:"Hostelería y Turismo", ciclo:"Servicios en Restauración"},
  {centro:"IES Mare Nostrum Torrevieja", nivel:"GS",  familia:"Hostelería y Turismo", ciclo:"Gestión de Alojamientos Turísticos"},
  {centro:"IES Mare Nostrum Torrevieja", nivel:"GM",  familia:"Imagen Personal", ciclo:"Estética y Belleza"},

  // IES MEDITERRÁNEO TORREVIEJA — Torrevieja
  {centro:"IES Mediterráneo Torrevieja", nivel:"GM",  familia:"Administración y Gestión", ciclo:"Gestión Administrativa"},
  {centro:"IES Mediterráneo Torrevieja", nivel:"GS",  familia:"Administración y Gestión", ciclo:"Administración y Finanzas"},
  {centro:"IES Mediterráneo Torrevieja", nivel:"GM",  familia:"Servicios Socioculturales y a la Comunidad", ciclo:"Atención a Personas en Situación de Dependencia"},
  {centro:"IES Mediterráneo Torrevieja", nivel:"GS",  familia:"Servicios Socioculturales y a la Comunidad", ciclo:"Educación Infantil"},

  // IES SANTIAGO GRISOLIA — Callosa de Segura
  {centro:"IES Santiago Grisolia", nivel:"FPB", familia:"Administración y Gestión", ciclo:"Servicios Administrativos"},
  {centro:"IES Santiago Grisolia", nivel:"GM",  familia:"Administración y Gestión", ciclo:"Gestión Administrativa"},
  {centro:"IES Santiago Grisolia", nivel:"GM",  familia:"Sanidad",               ciclo:"Cuidados Auxiliares de Enfermería"},

  // IES AZUD DE ALFEITAMÍ — Almoradí
  {centro:"IES Azud de Alfeitamí", nivel:"FPB", familia:"Administración y Gestión", ciclo:"Servicios Administrativos"},
  {centro:"IES Azud de Alfeitamí", nivel:"GM",  familia:"Administración y Gestión", ciclo:"Gestión Administrativa"},
  {centro:"IES Azud de Alfeitamí", nivel:"GS",  familia:"Informática y Comunicaciones", ciclo:"Ciberseguridad en Entornos de las TIC"},
  {centro:"IES Azud de Alfeitamí", nivel:"GM",  familia:"Electricidad y Electrónica", ciclo:"Instalaciones Eléctricas y Automáticas"},

  // EFA EL CAMPICO — Jacarilla
  {centro:"EFA El Campico", nivel:"FPB", familia:"Agraria",                    ciclo:"Agro-jardinería y Composiciones Florales"},
  {centro:"EFA El Campico", nivel:"GM",  familia:"Agraria",                    ciclo:"Jardinería y Floristería"},
  {centro:"EFA El Campico", nivel:"GM",  familia:"Agraria",                    ciclo:"Aprovechamiento y Conservación del Medio Natural"},
  {centro:"EFA El Campico", nivel:"GM",  familia:"Informática y Comunicaciones", ciclo:"Sistemas Microinformáticos y Redes"},
  {centro:"EFA El Campico", nivel:"GS",  familia:"Agraria",                    ciclo:"Gestión Forestal y del Medio Natural"},
  {centro:"EFA El Campico", nivel:"GS",  familia:"Informática y Comunicaciones", ciclo:"Desarrollo de Aplicaciones Web"},
  {centro:"EFA El Campico", nivel:"GS",  familia:"Administración y Gestión",   ciclo:"Administración y Finanzas"},
  {centro:"EFA El Campico", nivel:"GS",  familia:"Comercio y Márketing",       ciclo:"Marketing y Publicidad"},

  // IES PACO RUIZ — Bigastro
  {centro:"IES Paco Ruiz", nivel:"FPB", familia:"Agraria",                     ciclo:"Agro-jardinería y Composiciones Florales"},
  {centro:"IES Paco Ruiz", nivel:"GM",  familia:"Administración y Gestión",    ciclo:"Gestión Administrativa"},

  // COLEGIO JESÚS MARÍA ORIHUELA — Orihuela (privat concertat)
  {centro:"Colegio Jesús María Orihuela", nivel:"GM",  familia:"Sanidad",      ciclo:"Cuidados Auxiliares de Enfermería"},
  {centro:"Colegio Jesús María Orihuela", nivel:"GM",  familia:"Administración y Gestión", ciclo:"Gestión Administrativa"},
  {centro:"Colegio Jesús María Orihuela", nivel:"GS",  familia:"Servicios Socioculturales y a la Comunidad", ciclo:"Educación Infantil"},
