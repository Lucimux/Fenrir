## XSS Scripting 

**Definicion**

XSS es un ataque de inyección de código malicioso para su posterior ejecución que puede realizarse a sitios web, aplicaciones locales e incluso al propio navegador.

Sucede cuando un usuario mal intencionado envía código malicioso a la aplicación web y se coloca en forma de un hipervínculo para conducir al usuario a otro sitio web, mensajería instantánea o un correo electrónico. Así mismo, puede provocar una negación de servicio (DDos).

Generalmente, si el código malicioso se encuentra en forma de hipervínculo es codificado en HEX (basado en el sistema de numeración hexadecimal, base 16) o algún otro, así cuando el usuario lo vea, no le parecerá sospechoso. De esta manera, los datos ingresados por el usuario son enviados a otro sitio, cuya pantalla es muy similar al sitio web original.

De esta manera, es posible secuestrar una sesión, robar cookies y cambiar la configuración de una cuenta de usuario.

**Tipos de ataques**

Las diversas variantes de esta vulnerabilidad pueden dividirse en dos grandes grupos: el primero se conoce como XSS persistente o directo y el segundo como XSS reflejado o indirecto.

**Directo o persistente.** Consiste en invadir código HTML mediante la inclusión de etiquetas <script> y <frame> en sitios que lo permiten.

**Local.** Es una de las variantes del XSS directo, uno de sus objetivos consiste en explotar las vulnerabilidades del mismo código fuente o página web. Esas vulnerabilidades son resultado del uso indebido del DOM (Modelo de Objetos del Documento, es un conjunto estandarizado de objetos para representar páginas web) con JavaScript, lo cual permite abrir otra página web con código malicioso JavaScript incrustado, afectando el código de la primera página en el sistema local. Cuando el XSS es local, ningún código malicioso es enviado al servidor. El funcionamiento toma lugar completamente en la máquina del cliente, pero modifica la página proporcionada por el sitio web antes de que sea interpretada por el navegador para que se comporte como si se realizara la carga maliciosa en el cliente desde el servidor. Esto significa que la protección del lado del servidor que filtra el código malicioso no funciona en este tipo de vulnerabilidad.

**Indirecto o reflejado.** Funciona modificando valores que la aplicación web pasa de una página a otra, sin emplear sesiones. Sucede cuando se envía un mensaje o ruta en una URL, una cookie o en la cabecera HTTP (pudiendo extenderse al DOM del navegador).


## Ejemplo basico XSS a php

```php

  <?php
   if( isset($_GET["name"]) || isset($_GET["age"]) ) {
      echo "Welcome ". $_GET['name']. "<br />";
      echo "You are ". $_GET['age']. " years old.";
      
      exit();
   }
  ?>
  <html>
    <body>
    
        <form action = "<?php $_PHP_SELF ?>" method = "GET">
          Nombre: <input type = "text" name = "name" />
          Edad: <input type = "text" name = "age" />
          <input type = "submit" />
        </form>        
    </body>
  </html>
```

**Que ocurre si intentamos introducir un tag de javascript?**

![](http://veltrod.in/blog/wp-content/uploads/2016/02/XSS-Figure02.png)

# Script en python 

```python
  import mechanize
  import re
  import shelve
  br = mechanize.Browser()
  br.set_handle_robots( False )
  url = raw_input("Enter URL ")
  br.set_handle_equiv(True)
  br.set_handle_gzip(True)
  #br.set_handle_redirect(False)
  br.set_handle_referer(True)
  br.set_handle_robots(False)
  br.open(url)
  s = shelve.open("mohit.xss",writeback=True)
  for form in br.forms():
      print form
      att = raw_input("Enter the attack field ")
      non = raw_input("Enter the normal field ")
      br.select_form(nr=0)
      p =0
      flag = 'y'
      while flag =="y":
          br.open(url)
          br.select_form(nr=0)
          br.form[non] = 'aaaaaaa'
          br.form[att] = s['xss'][p]
          print s['xss'][p]
          br.submit()
          ch = raw_input("Do you continue press y ")
          p = p+1
          flag = ch.lower()
```