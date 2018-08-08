## Metodologias del pentesting

A la hora de realizar pruebas de seguridad, es importante seguir un orden de los procedimientos a realizar y tener en cuenta ciertos lineamientos para alcanzar un resultado satisfactorio y consistente en el contexto en el cual se realiza la prueba.

Para esto se han definido diferentes metodologías que involucran un contexto científico formal para  orientar al profesional en la búsqueda de mejorar los procesos, técnicas y resultados siguiendo lineamientos y fases.

Existen unas fases genéricas para una prueba de seguridad o ciber-ataque, las cuales son reconocimiento del contexto, escaneo y análisis de vulnerabilidades, obtener acceso y escalamiento de privilegios, mantener el acceso y borrar el rastro de la intrusión.

![](https://i1.wp.com/giseproi.org/wp-content/uploads/2017/07/Diagram.png?resize=300%2C186)

# PTES
PTES (Penetration Testing Execution Standart) consta de siete (7) secciones principales. Pretende unir esfuerzos de analistas y expertos en seguridad para hacer un estándar que pueda completar una auditoría en todos sus procesos más habituales. Estos cubren todo lo relacionado con una prueba de penetración:

<ol>
  <li>Herramientas requeridas</li>
  <li>Recolección de información</li>
  <li>Análisis de vulnerabilidades</li>
  <li>Explotación</li>
  <li>Post-explotación</li>
  <li>Informes</li>
</ol>

Esta metodología maneja niveles de riesgo dirigidos a un lenguaje para el negocio y maneja una descripción cualitativa, lo que permite la fácil comunicación con el cliente. Las razones para las que se solicitó el test deben ser los primeros aspectos relevantes del informe final. Seguido de los posibles riesgos y su valoración. Las métricas utilizadas y las contramedidas propuestas para los riesgos analizados.

# OWASP Testing Guide

Método de test para aplicaciones web basado en dos fases: pasiva y activa. Su enfoque es “black box” preferentemente, se sabe poco o nada de la aplicación que se va a probar, incluso del contexto en el que se van a hacer las pruebas. El enfoque OWASP es abierto y colaborativo. 

Fase pasiva:
Se trata de hacer pruebas hasta comprender la lógica de la aplicación que está en fase de testing, comprobar si arroja algún elemento que pueda significar una puerta abierta para su análisis detallado.
Fase activa:
El “tester” comienza a probar todos los procesos recomendados en esta metodología. Esta fase se centra, concretamente, en 9 subcategorías de 66 procesos:

<ol>
  <li>Configuration Management Testing (Information gathering + configuration management).</li>
  <li>Authentication Testing</li>
  <li>Authorization testing</li>
  <li>Session Management Testing</li>
  <li>Business Logic Testing</li>
  <li>Data Validation Testing</li>
  <li>Denial of Service Testing</li>
  <li>Web Services Testing</li>
  <li>Ajax Testing</li>
<ol>
<br>


# ISSAF

ISSAF (Information Systems Security Assessment Framework)  es una muy buena fuente de referencia para las pruebas de penetración, aunque  no esta activa y se encuentra desactualizada. Proporciona una guía técnica de pruebas de penetración exhaustiva. 

Se basa en los llamados “Criterios de evaluación” los cuales fueron elaborados por especialistas y estan compuestos por los siguientes elementos:

Se basa en los llamados “Criterios de evaluación” los cuales fueron elaborados por especialistas y estan compuestos por los siguientes elementos:

<ol>
  <li>Descripción del criterio de evaluacón</li>
  <li>Puntos y objetivos a cubrir</li>
  <li>Pre-requisitos para conducir la evaluación</li>
  <li>Proceso de evaluación</li>
  <li>Informe de los resultados esperados</li>
  <li>Contramedidas y recomendaciones</li>
  <li>Referencias y documentación externa</li>
</ol>
<br>

# OSSTMM

OSSTMM (Open Source Security Testing Methodology Manual)  es una metodología para probar la seguridad operativa de ubicaciones físicas, flujo de trabajo, pruebas de seguridad humana, pruebas de seguridad física, pruebas de seguridad inalámbrica, pruebas de seguridad de telecomunicaciones, pruebas de seguridad de redes de datos y cumplimiento. OSSTMM puede estar soportando la referencia de IOS 27001 en lugar de una guía práctica de pruebas de penetración.

Esta metodología es una de las mas estrictas y usadas en el ámbito corporativo, busca:

<ol>
  <li>Rigurosidad de las pruebas</li>
  <li>Evitar falsos positivos</li>
  <li>Cumplir con las regulaciones y estándares internacionales</li>
  <li>Cuantificar los resultados</li>
  <li>Obtener resultados consistentes y reproducibles</li>
  <li>Realizar una auditora formal de calidad</li>
<ol>

**Consta de las siguientes fases:**

1. Inducción: Estudiar el entorno donde reside el objetivo.
2. Interacción: Interactuar directamente con el objetivo y observar las respuestas obtenidas.
3. Investigación
4. Intervención

**OSSTMM incluye las siguientes secciones clave:**

**Métricas de seguridad operacional:**

1. Análisis de la confianza
2. Flujo De Trabajo.
3. Pruebas de Seguridad Humana
4. Pruebas de seguridad física
5. Pruebas de Seguridad Inalámbrica
6. Pruebas de Seguridad en las Telecomunicaciones
7. Pruebas de seguridad de redes de datos
8. Normas de Cumplimiento
9. Informar con el STAR (Informe de auditoría de prueba de seguridad)