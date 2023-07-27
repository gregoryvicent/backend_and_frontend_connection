# backend_and_frontend_connection
**Mira el proyecto completo en youtube [aquí](https://youtu.be/ftgTplCFb8s).**
<br />
Proyecto que, junto al video en youtube, enseña como se realiza la conexion entre un Frontend echo en React.js y un Backend en FastAPI tomando datos de una base de datos MySQL.
## Instalación de los Proyectos:
### Frontend:
1) Desde una terminal ve a la carpeta Frontend y una vez dentro usa el comando:
  ```
  npm install
  ```
2) Inicia el servidor de React.js con el comando:
   ```
   npm start
   ```
3) Dirigete a tu navegador web y ve a la dirección "http://localhost:3000"

### Backend:
**Nota:** Para ejecutar este Backend debes tener corriendo una base de datos Mysql a la que pueda conectarse, sigue el tutorial del video en youtube que esta arriba para entender como hacer esto.
1) Desde una terminal ve a la carpeta Backend y una vez dentro usa el comando:
  ```
  pip install -r requirements.txt
  ```
2) Inicia el servidor web de Uvicorn con el comando:
   ```
   uvicorn main:app --reload
   ```
3) Dirigete a tu navegador web y ve a la dirección "http://localhost:8000/docs"
