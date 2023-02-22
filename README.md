# Prueba Angular

## Home

La pantalla de inicio mostrará el mensaje Bienvenido a nuestra tienda Pepito, siendo Pepito el nombre del usuario que ha iniciado sesión. Si no tiene la sesión iniciada no mostrará el nombre.

## Módulo shop

Crear un módulo shop con dos componentes:

- Categories: mostrará las categorías de la API, siendo cada categoria un enlace a la ruta de productos (categories/products?categoria=[id de la categoria]) que mostrará todos los productos de dicha categoría.
  
- AddCategory: un formulario para añadir una categoría a la API. Al rellenar dicho formulario y enviarlo, se añadirá la categoría a la API. Para poder añadir la categoría será necesario enviar el token en la petición.
  
- Products: mostrará todos los productos de la categoría pasada como query param en la ruta.
  

Este módulo se cargará de forma diferida (lazy loading) en la ruta categories. En su ruta principal mostrará el componente Categories, en la ruta con un parámetro, mostrará todos los productos de la categoría cuya id se pase como parámetro y en la ruta add nos mostrará el componente AddCategory para añadir una nueva categoría.

Cualquier usuario puede ver los productos y las categorías, pero solo los usuarios con sesión iniciada podrán añadir categorías. Si un usuario intenta añadir una categoría y no tiene iniciada la sesión, se le redirigirá a la página de login.

## Login

Se accederá mediante la ruta account/login. Mostrará un formulario con dos campos.

El formulario de login deberá ser de tipo template y tendrá las siguientes validaciones:

- El email debe ser de tipo email.
  
- El password es obligatorio.
  

Si no se cumplen las restricciones el botón de enviar estará deshabilitado.

El formulario dispondrá de un enlace al formulario de regitro.

## Añadir usuarios

En la ruta users se cargará el componente list. Además de una lista de los usuarios, existirá un botón Add que solo se mostrará si el usuario tiene el rol ADMIN_ROLE y nos llevará a la ruta users/add y cargará el componente add-edit. Será un formulario de tipo reactivo y tendrá las siguientes validaciones:

- El nombre debe tener más de 4 caracteres.
  
- El email será obligatorio y será de tipo email.
  
- La contraseña debe cumplir con un patrón.
  
- El rol será un campo select y deberemos seleccionar uno de los roles válidos [ADMIN_ROLE, USER_ROLE].
  

Se deben mostrar errores de validación, pero solo cuando el usuario hay interactuado con un campo.

Si se le da a enviar y se incumple alguna validación se mostrarán todos los errores que existan en los campos.

## Interceptor

Añade un interceptor que añada automáticamente el token a las peticiones necesarias.

## EXTRAS

- Protege la ruta users/add para que solo los usuarios con el role ADMIN_ROLE puedan acceder a ella.
  
- Dale funcionalidad al botón delete de la lista de usuarios, para que borre el usuario al que corresponde.
  
- Crea una nueva ruta users/edit/:id que a cargue el componente add-edit y nos permita editar un usuario, para ello en la lista de usuarios existirá un botón edit que nos llevará allí.