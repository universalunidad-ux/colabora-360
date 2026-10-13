const slideRefinements=[
  {
    title:'Colabora conecta Nóminas, portal y app',
    lede:'Nóminas envía información; el portal configura servicios; la app y WhatsApp acercan consultas y solicitudes al colaborador.',
    points:[['Nóminas','Empresa, empleados, catálogos, incidencias y recibos.'],['Portal','Accesos, invitaciones, asistencia y solicitudes.'],['App y WhatsApp','Consultas, checadas, recibos y trámites.'],['Versiones','Cambios documentados de 17.2.1 a 19.3.5.']]
  },
  {
    title:'Qué hace cada sistema',
    lede:'Cada tarea comienza y termina en una superficie concreta. Esta separación indica dónde configurar, corregir y comprobar.',
    points:[['Nóminas','Enlaza la empresa y sincroniza información.'],['Portal Colabora','Configura accesos, asistencia y solicitudes.'],['App móvil','Muestra recibos, datos y servicios habilitados.'],['Regreso a Nóminas','Solicitudes e incidencias vuelven por el flujo documentado.']]
  },
  {
    title:'Quién crea la empresa y quién la opera',
    lede:'SUPERVISOR conserva la propiedad en la nube; noministas, líderes y colaboradores reciben sólo los permisos que necesitan.',
    points:[['SUPERVISOR','Crea o elimina empresas.'],['Nominista','Opera la interfaz autorizada.'],['Líder','Revisa solicitudes configuradas.'],['Colaborador','Consulta información y envía solicitudes.']]
  },
  {
    title:'Qué preparar antes de enlazar',
    lede:'Confirma la cuenta propietaria, la licencia, los permisos y los datos del empleado antes de iniciar la conexión.',
    points:[['Identidad','Correo corporativo o del propietario.'],['Permisos','SUPERVISOR crea; otros usuarios operan.'],['Licencia','Vigente y asociada con la empresa correcta.'],['Datos','RFC, correo, celular, líder y estado.']]
  },
  {
    title:'Cómo enlazar y sincronizar la empresa',
    lede:'Activa el vínculo, crea o elige la empresa, sincroniza catálogos y empleados, y revisa el resultado en la bitácora.',
    points:[['Abrir','Interfaz > Interfaz a CONTPAQi Colabora.'],['Enlazar','Activar Enlazado y elegir empresa o alias.'],['Sincronizar','Enviar catálogos y empleados elegibles.'],['Comprobar','Revisar estatus y carpeta ConexionColabora.']]
  },
  {
    title:'Cómo enviar invitaciones',
    lede:'Revisa el correo del empleado, selecciona el registro y confirma el envío. Después comprueba que pueda ingresar.',
    points:[['Antes','Empleado activo y sincronizado.'],['Ruta','Portal > Invitaciones.'],['Enviar','Seleccionar > Enviar Invitación > Enviar.'],['Revisar','Estado de envío, activación y correos duplicados.']]
  },
  {
    title:'Cómo exportar incidencias',
    lede:'Elige el tipo de periodo, revisa las incidencias y genera el Excel que Nómina conciliará antes del cálculo.',
    points:[['Ruta','Asistencia > Envío de Incidencias.'],['Periodo','Elegir Tipo de periodo y Periodo.'],['Selección','Marcar sólo incidencias revisadas.'],['Salida','Pulsar Exportar a EXCEL.']]
  },
  {
    title:'Cómo enviar recibos a Colabora',
    lede:'Desde el envío masivo, selecciona Colabora como destino, autoriza con SUPERVISOR y consulta el estado del proceso.',
    points:[['Ruta','Procesos > Envío masivo de recibos electrónicos.'],['Destino','Enviar a: CONTPAQi Colabora.'],['Autorización','Identidad y licencia del SUPERVISOR.'],['Seguimiento','Actualizar estado envío y probar con un usuario.']]
  },
  {
    title:'Cómo gestionar vacaciones en 19.3.5',
    lede:'Carga saldos y políticas, recibe la solicitud, aplícala y comprueba el movimiento en bitácora, prenómina y tarjeta.',
    points:[['Configurar','Saldos, políticas y tipos de permiso.'],['Solicitar','App o WhatsApp.'],['Aplicar','Solicitudes > Vacaciones y Permisos.'],['Comprobar','Bitácora, prenómina y tarjeta.']]
  },
  {
    title:'Cómo usar Colabora en WhatsApp',
    lede:'El empleado necesita celular registrado, empresa asociada e Identidad Nube activa para consultar o solicitar.',
    points:[['Celular','Empleado > IMSS-Infonavit > Celular.'],['Acceso','Colabora WhatsApp > Iniciar Sesión.'],['Servicios','Perfil, recibos, asistencia y solicitudes.'],['Si falla','Revisar token, empresa y ubicación.']]
  },
  {
    title:'Nóminas Nube: confirma el alcance',
    lede:'La fuente disponible confirma acceso a la app, pero no documenta una implementación equivalente a Nóminas desktop.',
    points:[['Confirmado','Acceso del colaborador a la app.'],['Por confirmar','Producto, edición y versión actuales.'],['Antes de cotizar','Solicitar documentación técnica vigente.'],['Al implementar','No reutilizar pasos de desktop por analogía.']]
  },
  {
    title:'Qué apoya Colabora en procesos laborales',
    lede:'Colabora ayuda a operar solicitudes, recibos y registros; RH y Nómina conservan cálculo, autorización, políticas y resguardo.',
    points:[['Vacaciones y permisos','Solicitud, aprobación y sincronización; revisar LFT 76, 78, 80 y 81 para vacaciones.'],['Recibos de nómina','Consulta de CFDI; revisar LFT art. 101.'],['Asistencia e incidencias','Registro, revisión y exportación; conservar controles aplicables.'],['Fuera de Colabora','Interpretación legal, privacidad, políticas y respaldo documental.']]
  },
  {
    title:'Prueba la integración antes de entregarla',
    lede:'Con una empresa y un grupo piloto, completa el enlace, la invitación y un proceso real antes de ampliar la operación.',
    points:[['Preparar','Empresa, versión y responsables.'],['Ejecutar','Identidad, enlace, empleado e invitación.'],['Comprobar','Un proceso real y su bitácora.'],['Decidir','Corregir o ampliar la implementación.']]
  }
];

slideRefinements.forEach((refinement,index)=>Object.assign(globalThis.COLABORA_EDITORIAL[index],refinement));
globalThis.COLABORA_SLIDE_REFINEMENTS=slideRefinements;
