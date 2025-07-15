const malla = {
  "Ciclo 1": [
    { nombre: "Lógica Simbólica", codigo: "LS", tipo: "General", creditos: 3 },
    { nombre: "Fundamentos Matemáticos", codigo: "FM", tipo: "General", creditos: 3 },
    { nombre: "Teoría y Proceso Administrativo", codigo: "TPA", tipo: "Específico", creditos: 3 },
    { nombre: "Herramientas Digitales", codigo: "HD", tipo: "General", creditos: 3 },
    { nombre: "Comunicación", codigo: "COM", tipo: "General", creditos: 3 },
    { nombre: "Cátedra Pedro Ruiz Gallo", codigo: "CPRG", tipo: "General", creditos: 3 },
    { nombre: "Redacción Científica y Técnicas de Estudio", codigo: "RCTE", tipo: "General", creditos: 3 }
  ],
  "Ciclo 2": [
    { nombre: "Cálculo Diferencial e Integral", codigo: "CDI", tipo: "Específico", creditos: 3, prerequisitos: ["FM"] },
    { nombre: "Contabilidad Empresarial", codigo: "CE", tipo: "Específico", creditos: 3 },
    { nombre: "Dirección, Liderazgo e Inteligencia Emocional", codigo: "DLIE", tipo: "Especialidad", creditos: 3, prerequisitos: ["COM"] },
    { nombre: "Desarrollo Personal", codigo: "DP", tipo: "General", creditos: 2 },
    { nombre: "Ambiente y Desarrollo Sostenible", codigo: "ADS", tipo: "General", creditos: 3 },
    { nombre: "Ciudadanía y Democracia", codigo: "CD", tipo: "General", creditos: 3 },
    { nombre: "Taller de Arte", codigo: "TA", tipo: "General", creditos: 2 },
    { nombre: "Inglés Básico para los Negocios", codigo: "ING", tipo: "Específico", creditos: 2 }
  ],
  "Ciclo 3": [
    { nombre: "Legislación Laboral", codigo: "LL", tipo: "Específico", creditos: 3, prerequisitos: ["LS"] },
    { nombre: "Microeconomía", codigo: "MIC", tipo: "Específico", creditos: 3, prerequisitos: ["CDI"] },
    { nombre: "Estadística Descriptiva", codigo: "ED", tipo: "Específico", creditos: 3, prerequisitos: ["FM"] },
    { nombre: "Matemática Financiera", codigo: "MF", tipo: "Específico", creditos: 3, prerequisitos: ["FM"] },
    { nombre: "Motivación y Trabajo en Equipo", codigo: "MDTE", tipo: "Especialidad", creditos: 3, prerequisitos: ["DLIE"] },
    { nombre: "Administración de Costos", codigo: "AC", tipo: "Especialidad", creditos: 3, prerequisitos: ["CE"] },
    { nombre: "Legislación Empresarial", codigo: "LE", tipo: "Específico", creditos: 3 }
  ],
  "Ciclo 4": [
    { nombre: "Taller de Deporte", codigo: "TD", tipo: "General", creditos: 2 },
    { nombre: "Macroeconomía", codigo: "MAC", tipo: "Específico", creditos: 3, prerequisitos: ["CDI"] },
    { nombre: "Estadística Inferencial", codigo: "EI", tipo: "Específico", creditos: 3, prerequisitos: ["ED"] },
    { nombre: "Administración Presupuestaria", codigo: "AP", tipo: "Especialidad", creditos: 4, prerequisitos: ["AC"] },
    { nombre: "Marketing", codigo: "MKT", tipo: "Especialidad", creditos: 3, prerequisitos: ["MIC"] },
    { nombre: "Administración de Personal", codigo: "APERS", tipo: "Especialidad", creditos: 4, prerequisitos: ["LL"] },
    { nombre: "Pensamiento Filosófico", codigo: "PF", tipo: "General", creditos: 2, prerequisitos: ["CD"] }
  ],
  "Ciclo 5": [
    { nombre: "Ética en los Negocios", codigo: "EN", tipo: "General", creditos: 2, prerequisitos: ["PF"] },
    { nombre: "Administración Tributaria", codigo: "AT", tipo: "Específico", creditos: 4, prerequisitos: ["LE"] },
    { nombre: "Diseño Organizacional", codigo: "DO", tipo: "Especialidad", creditos: 3, prerequisitos: ["APERS"] },
    { nombre: "Programación Lineal", codigo: "PL", tipo: "Especialidad", creditos: 3, prerequisitos: ["FM"] },
    { nombre: "Administración Financiera Operativa", codigo: "AFO", tipo: "Especialidad", creditos: 3, prerequisitos: ["AP"] },
    { nombre: "Gestión de Ventas", codigo: "GV", tipo: "Especialidad", creditos: 3, prerequisitos: ["MKT"] },
    { nombre: "Comportamiento Organizacional", codigo: "CO", tipo: "Especialidad", creditos: 3, prerequisitos: ["MDTE"] }
  ],
  "Ciclo 6": [
    { nombre: "Pensamiento Crítico y Creativo", codigo: "PCC", tipo: "General", creditos: 2, prerequisitos: ["PF"] },
    { nombre: "Organización por Procesos", codigo: "OP", tipo: "Especialidad", creditos: 3, prerequisitos: ["DO"] },
    { nombre: "Gestión de Compras e Inventarios", codigo: "GCI", tipo: "Especialidad", creditos: 4, prerequisitos: ["CDI"] },
    { nombre: "Procesos Estocásticos", codigo: "PE", tipo: "Especialidad", creditos: 3, prerequisitos: ["EI"] },
    { nombre: "Administración Financiera de Capitales", codigo: "AFC", tipo: "Especialidad", creditos: 3, prerequisitos: ["AFO"] },
    { nombre: "Investigación de Mercados", codigo: "IM", tipo: "Especialidad", creditos: 3, prerequisitos: ["MKT"] },
    { nombre: "Electivo 1", codigo: "E1", tipo: "Electivo", creditos: 3, prerequisitos: ["APERS"] }
  ],
  "Ciclo 7": [
    { nombre: "Planificación e Innovación", codigo: "PI", tipo: "Específico", creditos: 3, prerequisitos: ["IM"] },
    { nombre: "Control de Gestión", codigo: "CG", tipo: "Especialidad", creditos: 3, prerequisitos: ["AFO"] },
    { nombre: "Gestión de Almacenes", codigo: "GA", tipo: "Especialidad", creditos: 3, prerequisitos: ["GCI"] },
    { nombre: "Localización y Distribución", codigo: "LD", tipo: "Especialidad", creditos: 3, prerequisitos: ["PL"] },
    { nombre: "Diseño de la Organización Pública", codigo: "DOP", tipo: "Especialidad", creditos: 3, prerequisitos: ["DO"] },
    { nombre: "Marketing Estratégico", codigo: "MKE", tipo: "Especialidad", creditos: 3, prerequisitos: ["MKT"] },
    { nombre: "Marketing Digital", codigo: "MKD", tipo: "Especialidad", creditos: 3, prerequisitos: ["GV"] }
  ],
  "Ciclo 8": [
    { nombre: "Innovación y Transferencia Tecnológica", codigo: "ITT", tipo: "Específico", creditos: 3, prerequisitos: ["PI"] },
    { nombre: "Auditoría de Procesos", codigo: "AUDP", tipo: "Especialidad", creditos: 3, prerequisitos: ["OP"] },
    { nombre: "Sistemas Integrados de Gestión", codigo: "SIG", tipo: "Especialidad", creditos: 3, prerequisitos: ["OP"] },
    { nombre: "Planeación Agregada", codigo: "PA", tipo: "Especialidad", creditos: 3, prerequisitos: ["PE"] },
    { nombre: "Planeamiento en el Sector Público", codigo: "PSP", tipo: "Especialidad", creditos: 3, prerequisitos: ["DOP"] },
    { nombre: "Marketing Internacional", codigo: "MKI", tipo: "Especialidad", creditos: 3, prerequisitos: ["MKE"] },
    { nombre: "Proyecto de Investigación", codigo: "PII", tipo: "Específico", creditos: 3, prerequisitos: ["EI"] }
  ],
  "Ciclo 9": [
    { nombre: "Epistemología de la Administración", codigo: "EA", tipo: "Especialidad", creditos: 3 },
    { nombre: "Auditoría de Gestión Empresarial", codigo: "AGE", tipo: "Especialidad", creditos: 3, prerequisitos: ["AUDP"] },
    { nombre: "Planificación Estratégica", codigo: "PEE", tipo: "Especialidad", creditos: 3, prerequisitos: ["PI"] },
    { nombre: "Sistemas de Información Gerencial", codigo: "SIGE", tipo: "Específico", creditos: 3 },
    { nombre: "Finanzas y Proyectos Públicos", codigo: "FPP", tipo: "Especialidad", creditos: 3, prerequisitos: ["AFC"] },
    { nombre: "Control Gubernamental", codigo: "CGUB", tipo: "Especialidad", creditos: 3, prerequisitos: ["PSP"] },
    { nombre: "Ejecución de la Investigación", codigo: "EPI", tipo: "Específico", creditos: 3, prerequisitos: ["PII"] }
  ],
  "Ciclo 10": [
    { nombre: "Planificación Operativa", codigo: "PO", tipo: "Especialidad", creditos: 3, prerequisitos: ["PEE"] },
    { nombre: "Formulación y Gestión de Proyectos", codigo: "FGP", tipo: "Especialidad", creditos: 4, prerequisitos: ["AFC"] },
    { nombre: "Informe Final de Investigación", codigo: "IFI", tipo: "Específico", creditos: 3, prerequisitos: ["EPI"] },
    { nombre: "Electivo 2", codigo: "E2", tipo: "Electivo", creditos: 3, prerequisitos: ["MKI"] },
    { nombre: "Prácticas Preprofesionales", codigo: "PPP", tipo: "Especialidad", creditos: 10 }
  ]
};