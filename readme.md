# Adopt-me

Adopt-me es una aplicación desarrollada en **Express** que permite manejar usuarios y sus sesiones para facilitar la adopción de mascotas.

## Características

- **Registro y autenticación de usuarios**: Los usuarios pueden registrarse, iniciar sesión y mantener su sesión activa.
- **Manejo de sesiones**: La app gestiona las sesiones de usuario para facilitar una experiencia de adopción segura.
- **Adopción de mascotas**: Los usuarios pueden buscar y adoptar mascotas disponibles en el sistema.

## Requisitos previos

- Node.js (versión 18 o superior)
- Docker (para ejecutar la imagen de Docker de esta aplicación)

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/felipearias94/coder-adopt-me
   cd adopt-me
   ```

2. Instala las dependencias

   ```bash
   npm install
   ```

3. Configura las variables de entorno creando un archivo `.env` en la raíz del proyecto:

   ```bash
   PORT=<PUERTO>
   MONGODB_URI=<STRING_CONNECTION>
   JWT_SECRET=<JWT_SECRETO>
   ```

4. Inicie el servidor:
   ```bash
   npm run dev
   ```

## Uso

Para utilizar la aplicación:

1. Regístrate como usuario o inicia sesión.
2. Explora las mascotas disponibles para adopción.
3. Selecciona una mascota para comenzar el proceso de adopción.

## Ejecución con Docker

La aplicación está disponible como una imagen de Docker en Docker Hub. Puedes ejecutarla utilizando el siguiente comando:

```bash
docker run -p 3000:3000 -d <usuario>/adopt-me
```

Recuerda sustituir <usuario> por el nombre de usuario de Docker Hub que contiene la imagen de la app Adopt-me.

## Link a la imagen de Docker Hub

Puedes encontrar la imagen de Docker de la aplicación aquí:
https://hub.docker.com/repository/docker/ariasfelipe/adopt-me/general

## Scripts

- `npm run start`: Inicia el servidor en modo producción.
- `npm run dev`: Inicia el servidor en modo de desarrollo con recarga automática.
- `npm run test`: Ejecuta las pruebas unitarias.
