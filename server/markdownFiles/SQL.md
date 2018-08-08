## Inyeccion SQL 

**Que es una inyeccion de SQL ?**

Un ataque por inyección SQL consiste en la inserción o “inyección” de una consulta SQL por medio de los datos de entrada desde el cliente hacia la aplicación. Un ataque por inyección SQL exitoso puede leer información sensible desde la base de datos, modificar la información (Insert/ Update/ Delete), ejecutar operaciones de administración sobre la base de datos (tal como parar la base de datos), recuperar el contenido de un determinado archivo presente sobre el sistema de archivos del DBMS y en algunos casos emitir comandos al sistema operativo. Los ataques por inyección SQL son un tipo de ataque de inyección, en el cual los comandos SQL son insertados en la entrada de datos con la finalidad de efectuar la ejecución de comandos SQL predefinidos.

# Una inyección SQL ocurre cuando:

1. Los datos ingresan en un programa desde una fuente que no es de confianza.
2. Los datos construyen dinámicamente una consulta SQL.

**Las principales consecuencias son:**

Confidencialidad : Dado que las bases de datos SQL generalmente almacenan información sensible, la pérdida de la confiabilidad es un problema frecuente con las vulnerabilidades de inyección SQL.

Autenticación: Si se utilizan consultas SQL pobres para chequear nombres de usuarios u contraseñas, puede ser posible conectarse a un sistema como otro usuario sin conocimiento previo de la contraseña.

Autorización: Si la información de autorización es almacenada en una base de datos SQL, puede ser posible cambiar esta información mediante la explotación exitosa de una vulnerabilidad por inyección SQL.

Integridad: Así como puede ser posible leer información sensible, también es posible realizar cambios o incluso borrar esta información mediante un ataque por inyección SQL.

**Factores de Riesgo**

La plataforma afectada puede ser:

Lenguaje: SQL

Plataforma: Cualquiera (requiere de interacción con una base de datos SQL).
La inyección SQL se ha convertido en un problema común con sitios web que cuentan con base de datos. La falla es fácilmente detectada y fácilmente explotada, y como tal, cualquier sitio o paquete de software con incluso una mínima base de usuario es propenso a ser objeto de un intento de ataque de este tipo. Esencialmente, el ataque es llevado a cabo mediante la colocación de un meta carácter en los datos de entrada para colocar comandos SQL en el plano de control, el cual antes no existía. Este error depende del hecho de que SQL no hace real distinción entre los planos de datos y los de control.


## Ejemplo script

Crearemos un script que haga múltiples solicitudes a un servidor, registre el tiempo de respuesta y devuelva un tiempo promedio. Esto se puede usar para calcular las fluctuaciones en las respuestas en ataques basados en el tiempo conocidos como jitter.

```python
  import requests
  import sys
  url = sys.argv[1]
  values = []
  for i in range(100):
      r = requests.get(url)
      values.append(int(r.elapsed.total_seconds()))
      average = sum(values) / float(len(values))
      print("Average response time for "+url+" is "+str(average))
```

