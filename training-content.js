const NOMINAS_NUBE='https://conocimiento.blob.core.windows.net/conocimiento/Manuales/MR_IntegracionNominasNubeConColabora/';

const auditedPopups=[
  {
    title:'Dónde trabaja cada usuario en Colabora',
    intro:'Colabora conecta cuatro espacios. Nóminas desktop envía información; el portal administra servicios; la app y WhatsApp permiten al empleado consultar, registrar y solicitar. Antes de explicar un flujo, identifica en cuál de ellos ocurre cada acción.',
    contextTitle:'El mapa que debe quedar claro',
    context:['Nóminas desktop: enlaza la empresa y sincroniza catálogos, empleados, incidencias y recibos.','Portal Colabora: administra invitaciones, accesos, asistencia y solicitudes.','App móvil y WhatsApp: muestran al empleado los servicios que la empresa habilitó.'],
    procedure:[],
    result:[],
    warnings:[],
    scope:'Las funciones disponibles dependen de la versión, la licencia y la configuración de cada empresa.',
    meta:'Mapa del producto'
  },
  {
    title:'Qué hace Nóminas, qué configura el portal y qué consulta el empleado',
    intro:'Desde Nóminas conectas la empresa con Colabora y sincronizas la información de los empleados. En el portal configuras sus accesos y servicios. Cada trabajador usa la app para consultar lo que la empresa dejó disponible.',
    contextTitle:'Quién interviene',
    context:['SUPERVISOR o nominista autorizado: opera el módulo de integración en Nóminas.','Administrador del portal: configura accesos, asistencia y solicitudes.','Colaborador: entra a la app y usa los servicios habilitados.'],
    requirementsTitle:'Antes de probar el recorrido',
    requirements:['Empresa abierta en Nóminas.','Identidad Nube válida.','Empresa Colabora creada o lista para crearse.'],
    procedureTitle:'Recorrido de comprobación',
    procedure:[['Nóminas desktop · Nominista','Abre Interfaz > Interfaz a CONTPAQi Colabora o Conexión en línea con COLABORA.','Módulo de integración abierto.',1],['Nóminas desktop · Nominista','En Configuración, revisa Enlazado, Alias, licencia y correo propietario.','Vínculo identificado.',1],['Portal · Administrador','Pulsa Colabora y configura los accesos y servicios que se usarán.','Portal preparado.',1],['App · Colaborador','Ingresa con un usuario de prueba y confirma que sólo aparezcan los servicios habilitados.','Experiencia del empleado comprobada.',1]],
    result:['Cada dato tiene una superficie de origen y una comprobación concreta.'],
    warnings:['Sincronizar no valida por sí solo las reglas de negocio.','Instalar la app no habilita automáticamente todos los servicios.'],
    resultTitle:'Comprobación final',
    warningsTitle:'Dos diferencias importantes',
    meta:'4 pasos de comprobación'
  },
  {
    title:'Quién crea la empresa y quién la opera',
    intro:'SUPERVISOR puede crear o eliminar la empresa en la nube. Un nominista puede operar la interfaz sólo si recibe el permiso correspondiente. Es una diferencia de permisos del software, no de puestos laborales.',
    contextTitle:'Permisos del sistema',
    context:['SUPERVISOR: crea o elimina la empresa y usa la identidad propietaria.','Usuario autorizado: entra a la interfaz de Colabora sin adquirir la facultad de crear o eliminar empresas.'],
    requirementsTitle:'Responsabilidad organizacional',
    requirements:['La empresa debe decidir quién custodia la identidad propietaria.','Los líderes revisan solicitudes únicamente cuando el flujo está configurado.','Cada colaborador usa su propia identidad; no se comparten credenciales.'],
    procedureTitle:'Permisos para usar Colabora',
    procedure:[['Nóminas desktop · Administrador','Abre Archivo > Perfiles > pestaña Interfaz.','Permisos de interfaz visibles.',1],['Nóminas desktop · Administrador','Confirma para SUPERVISOR los permisos Interfaz CONTPAQ i Colabora y CONTPAQ i Colabora crear empresa.','Creación y administración habilitadas.',1],['Nóminas desktop · Administrador','A otros usuarios asigna sólo el permiso de interfaz necesario para operar.','Operación sin facultad de crear o eliminar.',1],['Nóminas desktop · SUPERVISOR','Usa un correo corporativo controlado al crear la empresa.','Propiedad de la empresa resguardada.',1]],
    result:['La propiedad queda separada de la operación diaria.'],
    warnings:['Sin privilegio, el sistema muestra “No se tiene privilegios para el proceso”.','No uses una cuenta personal de un capturista como identidad propietaria.'],
    resultTitle:'Comprobación',
    warningsTitle:'Si el acceso falla',
    meta:'Permisos y propiedad'
  },
  {
    title:'Qué preparar antes de enlazar',
    intro:'El primer enlace debe hacerse con una identidad controlada por la empresa, una licencia aplicable y datos de empleados listos. Resolver esto antes evita empresas duplicadas, accesos bloqueados y registros que no se pueden sincronizar.',
    contextTitle:'Lista previa',
    context:['Correo corporativo accesible para la Identidad Nube.','SUPERVISOR disponible para crear la empresa.','Licencia vigente y relacionada con la empresa correcta.','RFC, correo, celular, líder, departamento y estado de los empleados revisados.'],
    procedureTitle:'Crear y validar la identidad',
    procedure:[['Nóminas desktop · SUPERVISOR','Abre Conexión en línea con COLABORA y elige Regístrate.','Formulario de registro abierto.',1],['Identidad Nube · SUPERVISOR','Captura el correo, pulsa Enviar código y registra el código recibido.','Correo verificado.',1],['Identidad Nube · SUPERVISOR','Completa nombre, teléfono y contraseña; pulsa Crear cuenta.','Identidad creada.',1],['Nóminas desktop · TI/Nómina','Comprueba que la licencia y la identidad estén relacionadas con la empresa web.','Acceso habilitado.',2],['Nóminas desktop · Nómina/RH','Revisa los datos requeridos de los empleados antes de sincronizar.','Registros elegibles preparados.',3]],
    result:['La cuenta propietaria, la licencia y los datos base quedan listos para el enlace.'],
    warnings:['18.1.1 documenta 90 días de consulta después del vencimiento de una licencia anual.','19.3.5 valida que la identidad esté relacionada con la empresa web.','Desvincular puede eliminar la empresa en la nube y desinvitar empleados; revisa el alcance antes de hacerlo.'],
    resultTitle:'Antes de continuar',
    warningsTitle:'Licencia, identidad y desvinculación',
    meta:'5 pasos previos'
  },
  {
    title:'Cómo enlazar y sincronizar la empresa',
    intro:'Enlazar crea la relación entre la empresa de Nóminas y Colabora. Sincronizar envía catálogos y empleados. Después debes revisar tanto el resultado de la sincronización como la bitácora general de operaciones: no son el mismo registro.',
    contextTitle:'Qué debes tener listo',
    context:['Sesión de la identidad propietaria.','RFC, razón social y alias correctos.','Empleados con la información requerida.'],
    procedureTitle:'Enlace y primera sincronización',
    procedure:[['Nóminas desktop · Nominista','Abre Interfaz > Interfaz a CONTPAQi Colabora e inicia sesión.','Módulo abierto.',1],['Nóminas desktop · SUPERVISOR','Activa Enlazado y confirma el correo propietario.','Asistente de enlace iniciado.',1],['Nóminas desktop · SUPERVISOR','Captura un alias o activa Mostrar empresas existentes y selecciona la empresa correcta.','Empresa creada o vinculada.',1],['Nóminas desktop · Sistema','Envía los catálogos base que solicita el flujo: acumulados, incidencias, turnos, conceptos, departamentos, puestos y periodos.','Base de catálogos transferida.',1],['Nóminas desktop · Nominista','En Empleados, usa Todos, En Colabora o No se encuentra y selecciona sólo registros elegibles.','Lote definido.',2],['Nóminas desktop · Nominista','Pulsa Sincronizar información y confirma cuando se solicite.','Sincronización ejecutada.',1],['Nóminas desktop · Nominista','Revisa el resultado y el TXT de la carpeta de la empresa > ConexionColabora; consulta también la Bitácora de operaciones para eventos generales.','Errores y movimientos identificados.',3]],
    result:['Configuración muestra enlace, alias, licencia y propietario.','Los empleados aceptados aparecen En CONTPAQi Colabora.'],
    warnings:['Los registros incompletos no se habilitan y los duplicados generan advertencias.','18.0.1 documenta compatibilidad con códigos de empleado alfanuméricos.','19.3.5 puede conservar movimientos locales sin conexión; concílialos al recuperarla.'],
    resultTitle:'Cómo confirmar el enlace',
    warningsTitle:'Registros rechazados o pendientes',
    meta:'7 pasos de integración'
  },
  {
    title:'Cómo enviar invitaciones',
    intro:'Al sincronizar empleados, el sistema puede enviar invitaciones automáticamente. El portal también permite seleccionar colaboradores y reenviar de forma controlada. En ambos casos, correo enviado no significa acceso confirmado.',
    contextTitle:'Antes de enviar',
    context:['Empleado activo y sincronizado.','Correo único y correcto.','Empresa correcta seleccionada.'],
    procedureTitle:'Seguimiento desde el portal',
    procedure:[['Portal · Administrador','Abre el módulo Invitaciones.','Lista de colaboradores visible.',1],['Portal · Administrador','Revisa el correo y la empresa de cada colaborador.','Destinatarios validados.',1],['Portal · Administrador','Selecciona los registros y pulsa Enviar Invitación.','Confirmación abierta.',1],['Portal · Administrador','Pulsa Enviar y espera a que termine el proceso.','Invitaciones procesadas.',1],['Portal · Administrador con soporte','Revisa el estado y corrige datos duplicados antes de reenviar.','Acceso listo para una prueba real.',1]],
    result:['El colaborador recibe la ruta para descargar la app y crear su contraseña.','El portal conserva un estado para dar seguimiento.'],
    warnings:['Valida en tu versión si la invitación se envió automáticamente después de sincronizar antes de generar otra.','Las versiones 18.1.5 y 18.3.1 contienen correcciones relacionadas; consulta la carta técnica correspondiente si el escenario coincide.'],
    resultTitle:'Cómo confirmar el envío',
    warningsTitle:'Invitaciones duplicadas o pendientes',
    meta:'5 pasos de seguimiento'
  },
  {
    title:'Cómo exportar incidencias',
    intro:'El portal permite elegir un periodo, seleccionar incidencias revisadas y generar un archivo de Excel similar a la prenómina de Días y Horas (DyH). La fuente consultada no documenta el menú exacto para importarlo después en Nóminas.',
    contextTitle:'Qué debe estar preparado',
    context:['Horarios y turnos configurados.','Periodo correcto identificado.','Checadas y excepciones revisadas.'],
    procedureTitle:'Exportación desde Colabora',
    procedure:[['Portal · RH/Nominista','Abre Asistencia > Envío de Incidencias.','Módulo abierto.',1],['Portal · RH/Nominista','Elige Tipo de periodo y Periodo.','Corte correcto visible.',1],['Portal · RH/Nominista','Marca únicamente las incidencias que ya fueron revisadas.','Lote controlado.',1],['Portal · RH/Nominista','Pulsa Exportar a EXCEL.','Archivo similar a prenómina de Días y Horas (DyH) generado.',1],['Nóminas · Responsable de nómina','Revisa el archivo y aplica sólo el procedimiento de carga que tu organización haya validado.','Archivo conciliado sin inventar una ruta de importación.',1]],
    result:['El Excel corresponde al periodo elegido y queda listo para conciliación.'],
    warnings:['Exportar no incorpora automáticamente las incidencias en Nóminas.','Un periodo incorrecto cambia el contenido del lote.','Estos registros apoyan la operación; por sí solos no prueban cumplimiento legal.'],
    resultTitle:'Archivo esperado',
    warningsTitle:'Antes de usar el archivo',
    meta:'Exportación documentada'
  },
  {
    title:'Cómo enviar recibos a Colabora',
    intro:'Desde el envío masivo de recibos puedes elegir Colabora como destino. Si la empresa aún no está activa, el flujo solicita la identidad del SUPERVISOR; después sincroniza la base y carga los CFDI de forma asíncrona.',
    contextTitle:'Condiciones del primer envío',
    context:['CFDI timbrados.','Identidad y licencia del SUPERVISOR.','Empresa correcta y una ventana para el proceso asíncrono.'],
    procedureTitle:'Envío y comprobación',
    procedure:[['Nóminas desktop · Nominista','Abre Procesos > Envío masivo de recibos electrónicos.','Parámetros visibles.',1],['Nóminas desktop · Nominista','Captura los parámetros y pulsa Continuar.','Lote localizado.',1],['Nóminas desktop · Nominista','En Enviar a, selecciona CONTPAQi Colabora y pulsa Enviar.','Flujo de envío iniciado.',1],['Nóminas desktop · SUPERVISOR','Registra o usa la Identidad Nube propietaria y, si corresponde, invita a los noministas.','Propiedad y acceso definidos.',1],['Sistema','Espera la sincronización de empleados y catálogos y revisa la Bitácora.','Base transferida o errores identificados.',1],['Nóminas desktop · Nominista','Pulsa Actualizar estado envío hasta obtener el resultado del lote.','Estado de los CFDI actualizado.',1],['Portal/app · Nominista','Pulsa Colabora y comprueba los recibos con un usuario piloto.','Disponibilidad validada.',1]],
    result:['La empresa queda asociada a la identidad propietaria y el piloto puede consultar sus CFDI.'],
    warnings:['Los tiempos de 5 min/500 colaboradores, 25 min/500 CFDI y 60 min/1000 CFDI pertenecen al caso documentado; no son un SLA.','18.3.1 y 19.2.2 contienen correcciones relacionadas con este flujo; consulta sus documentos antes de explicar el alcance del fallo.'],
    resultTitle:'Cómo confirmar el envío',
    warningsTitle:'Tiempos y correcciones por versión',
    meta:'7 pasos de envío'
  },
  {
    title:'Cómo gestionar vacaciones en 19.3.5',
    intro:'Primero se sincronizan tablas y saldos; después RH configura políticas y tipos de permiso. El colaborador solicita, el responsable revisa y el nominista aplica y concilia el movimiento en Nóminas.',
    contextTitle:'Configuración necesaria',
    context:['Nóminas 19.3.5 para el flujo documentado.','Sincronización inicial terminada.','Acceso Vacaciones y Permisos habilitado.','Saldos, políticas y tipos de permiso definidos.'],
    procedureTitle:'De la configuración al sobre-recibo',
    procedure:[['Nóminas desktop · Nominista','Ejecuta la sincronización inicial desde el módulo Colabora.','Tablas vinculadas.',3],['Portal · Administrador','En Accesos, habilita Vacaciones y Permisos y abre Saldos de vacaciones.','Módulo disponible.',2],['Portal · Administrador','Usa Cargar saldos > Importar con plantilla, completa el archivo y súbelo.','Saldos cargados o errores registrados.',2],['Portal · RH','Configura Políticas de vacaciones y Tipos de permisos.','Reglas disponibles.',2],['App/WhatsApp · Colaborador y líder','Registra la solicitud y completa la revisión configurada.','Solicitud autorizada o rechazada.',2],['Portal · Nominista','Abre Solicitudes > Vacaciones y Permisos y pulsa Aplicar solicitud.','Solicitud aplicada.',2],['Nóminas desktop · Nominista','Pulsa Sincronizar información y revisa la bitácora.','Tarjeta creada o conflicto explicado.',2],['Nóminas desktop · Nominista','Revisa la prenómina de Días y Horas (DyH) y sobre-recibo > pestaña 8. Vacaciones.','Movimiento conciliado.',2]],
    result:['Solicitud, saldo y movimiento de nómina coinciden.','Nóminas prevalece en las tablas de prestaciones.'],
    warnings:['Los empalmes con incidencias previas aparecen en Observaciones y pueden impedir la integración.','La fecha de pago toma como referencia el primer día solicitado en el flujo documentado.','Sin conexión, los movimientos pueden quedar pendientes; revisa la bitácora al recuperar la sesión.'],
    resultTitle:'Comprobación en Nóminas',
    warningsTitle:'Conflictos y movimientos pendientes',
    meta:'Flujo 19.3.5'
  },
  {
    title:'Cómo usar Colabora en WhatsApp',
    intro:'El empleado necesita un celular registrado, una empresa asociada y una Identidad Nube activa. Después puede iniciar sesión y usar los servicios que la empresa haya configurado.',
    contextTitle:'Antes de abrir el asistente',
    context:['Celular de 10 dígitos registrado para el empleado.','Identidad Nube activa.','Empresa asociada y políticas configuradas.'],
    procedureTitle:'Acceso y operaciones básicas',
    procedure:[['Nóminas · Nominista','Confirma que el empleado tenga registrado el celular requerido por la integración.','Número disponible para identificación.',2],['App · Colaborador','Pulsa Colabora WhatsApp y, cuando se solicite, Iniciar Sesión.','Autenticación abierta.',1],['Identidad Nube · Colaborador','Ingresa sus credenciales y vuelve al chat.','Menú Principal disponible.',1],['WhatsApp · Colaborador','Usa el menú o comandos como /perfil, /asistencia, /checkin, /recibos y /solicitudes.','Servicio solicitado.',1],['WhatsApp · Colaborador','Para /checkin, comparte la Ubicación y confirma el mensaje de éxito.','Entrada o salida registrada.',1],['WhatsApp · Colaborador y líder','Elige tipo y fechas, envía la solicitud y espera la revisión configurada.','Solicitud procesada.',1]],
    result:['La sesión abre en la empresa correcta y la operación queda visible en el servicio correspondiente.'],
    warnings:['Un token inválido exige iniciar sesión de nuevo.','Si no aparece una empresa, revisa la asociación antes de escalar.','Una checada puede fallar si no se comparte ubicación; una solicitud puede bloquearse por las políticas configuradas.'],
    resultTitle:'Señal de éxito',
    warningsTitle:'Problemas frecuentes',
    meta:'Acceso y comandos'
  },
  {
    title:'Activa Colabora desde CONTPAQi Nóminas Nube',
    intro:'CONTPAQi Nóminas Nube —antes Personia— tiene un flujo propio. La activación inicia desde el acceso directo CONTPAQi Colabora dentro de la empresa abierta; no utiliza los menús de Nóminas desktop.',
    contextTitle:'Antes de activar',
    context:['Usuario con permiso SUPERVISOR.','Correo corporativo o identidad propietaria bajo control de la empresa.','RFC de la empresa y correos de empleados revisados.','Departamentos, puestos y turnos preparados para los servicios que se habilitarán.'],
    procedureTitle:'Activación en Nóminas Nube',
    procedure:[['Nóminas Nube · SUPERVISOR','Abre la empresa que se integrará.','Contexto de empresa confirmado.',2],['Nóminas Nube · SUPERVISOR','Pulsa el acceso directo CONTPAQi Colabora.','Solicitud de activación visible.',2],['Nóminas Nube · SUPERVISOR','Pulsa SÍ, ACTIVAR.','Activación iniciada.',2],['Portal Colabora · SUPERVISOR','Cuando se abra el portal, verifica que corresponda a la empresa correcta antes de configurar servicios.','Empresa activada y lista para configuración.',2]],
    result:['La empresa de Nóminas Nube queda disponible en el portal Colabora.','Para vacaciones, el manual de Nube documenta Importar desde Personia e Importar con plantilla.'],
    warnings:['No copies Interfaz > Interfaz a CONTPAQi Colabora: esa ruta corresponde a Nóminas desktop.','La activación no sustituye la revisión de datos ni la configuración posterior de accesos y servicios.'],
    resultTitle:'Después de activar',
    warningsTitle:'No mezcles los dos productos',
    sources:[['Manual de integración Nóminas Nube–Colabora','actualizado 05-08-2026',NOMINAS_NUBE+'portada.html'],['Activar CONTPAQi Colabora','Nóminas Nube · actualizado 05-08-2026',NOMINAS_NUBE+'activa_contpaqi_colabora__print.html'],['Configuración inicial de vacaciones','Nóminas Nube',NOMINAS_NUBE+'configuracion_inicial_para_vacaciones_en_contpaqi_colabora_.html'],['Integración Nóminas–Colabora','mención histórica de Personia','https://conocimiento.blob.core.windows.net/conocimiento/Manuales/MR_IntegracionNominasConColabora/integracion_de_contpaqi_nominas__con_contpaqi_colabora__print.html']],
    applicability:'CONTPAQi Nóminas Nube · manual actualizado 05-08-2026',
    scope:'Procedimiento exclusivo de Nóminas Nube; no reutiliza menús de Nóminas desktop.',
    meta:'Activación en Nube'
  },
  {
    title:'Qué apoya Colabora en procesos laborales',
    intro:'Colabora puede apoyar actividades de RH y Nómina, pero la herramienta no decide por sí sola si la empresa cumple una obligación legal. La política, el cálculo, la autorización y el resguardo siguen bajo control de la organización.',
    contextTitle:'Tres ejemplos concretos',
    context:['Vacaciones y permisos: registra solicitudes, revisiones y sincronización; RH valida saldos, reglas y pago.','Recibos de nómina: facilita la consulta de CFDI; Nómina conserva el cálculo, el timbrado y los controles de entrega.','Asistencia e incidencias: registra checadas y permite exportar incidencias; la empresa revisa excepciones, conservación y uso en el cálculo.'],
    procedureTitle:'Cómo explicar el alcance sin prometer cumplimiento',
    procedure:[['RH/Legal','Identifica la obligación, su fuente vigente y a quién aplica.','Requisito delimitado.',1],['Consultor','Describe únicamente la función de Colabora respaldada por su documentación.','Capacidad técnica separada.',3],['RH/Nómina','Define quién revisa, autoriza y corrige el proceso.','Control humano asignado.',3],['Legal/TI','Define conservación, privacidad, acceso y respaldo de la información.','Controles de la empresa documentados.',1]],
    result:[],
    warnings:['Para vacaciones, revisa LFT 76, 78, 80 y 81; para recibos, el artículo 101; para conservación, el 804.','La interpretación jurídica debe basarse en fuentes legales vigentes y revisión competente.'],
    warningsTitle:'Referencias legales y límite del producto',
    meta:'Producto y obligación legal'
  },
  {
    title:'Prueba la integración antes de entregarla',
    intro:'Haz un piloto con una empresa, un grupo pequeño y un proceso real. La prueba termina cuando el resultado puede comprobarse en las superficies que correspondan, no cuando sólo aparece una pantalla enlazada.',
    contextTitle:'Antes del piloto',
    context:['Registra empresa, versión y servicios incluidos.','Usa datos de prueba o protege los datos personales.','Define qué resultado se espera y quién lo acepta.'],
    procedureTitle:'Ciclo mínimo de prueba',
    procedure:[['SUPERVISOR/TI','Valida identidad, licencia y permisos.','Condiciones de acceso comprobadas.',1],['Nóminas desktop · Nominista','Enlaza la empresa, sincroniza el grupo y conserva la bitácora.','Empresa y empleados comprobados.',2],['Portal · Administrador','Envía la invitación y confirma el acceso de un colaborador.','Canal de acceso validado.',1],['Nómina/RH','Completa un flujo de incidencia, recibo o vacaciones y revisa el resultado.','Proceso conciliado.',2]],
    result:['El equipo puede demostrar un ciclo completo y explicar cualquier excepción abierta.'],
    warnings:['Las fuentes no documentan una reversa universal; define una para el proyecto sin presentarla como función del producto.','Una prueba técnica no demuestra cumplimiento legal.'],
    resultTitle:'Evidencia de cierre',
    warningsTitle:'Límites de la prueba',
    sources:[['Manual de integración Nóminas–Colabora','Manual','https://conocimiento.blob.core.windows.net/conocimiento/Manuales/MR_IntegracionNominasConColabora/portada.html'],['Bitácora de operaciones','18.1.1','https://conocimiento.blob.core.windows.net/conocimiento/2025/Contables/Nominas/CartasTecnicas/CT_Nominas_1811/bitacora_de_operaciones_2_print.html']],
    applicability:'CONTPAQi Colabora · prueba previa a entrega',
    scope:'La prueba confirma configuración y operación; no sustituye las instrucciones oficiales ni una revisión legal.',
    meta:'Prueba de entrega'
  }
];

auditedPopups.forEach((popup,index)=>{
  const publicCopy=globalThis.COLABORA_EDITORIAL[index];
  publicCopy.title=popup.title;
  if(index===9){
    publicCopy.points=[['Dato del empleado','Celular de 10 dígitos registrado.'],['Acceso','Colabora WhatsApp > Iniciar Sesión.'],['Servicios','Perfil, recibos, asistencia y solicitudes.'],['Si falla','Revisar sesión, empresa y ubicación.']];
  }
  if(index===10){
    publicCopy.lede='Abre la empresa en Nóminas Nube, entra por CONTPAQi Colabora y confirma SÍ, ACTIVAR; después verifica la empresa en el portal.';
    publicCopy.points=[['Origen','Empresa abierta en Nóminas Nube.'],['Acceso','CONTPAQi Colabora.'],['Activación','SÍ, ACTIVAR.'],['Después','Verificar empresa y configurar servicios en el portal.']];
  }
});

globalThis.COLABORA_AUDITED_POPUPS=auditedPopups;
