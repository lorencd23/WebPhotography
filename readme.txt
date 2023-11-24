Necesario tener instalado en version global minimo
 -Angular 15
 -NodeJS 18

Bajar el repositorio y hacer "npm install"

Para ejecutar la API:
 -Estando dentro de la carpeta "WebPhotography", escribir "npm run dev"

Para abrir el proyecto Angular:
-Cambiar en el archivo pics.service.ts en la funcion getImagenesByApart cambiar la URL por const URL = 'http://localhost:8080/api/pics' + apart
 -En otro terminal, dentro de la carpeta "WebFotography", escribir ng serve -o