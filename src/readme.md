# Aplicación para agendar Turnos en Google Calendar

Esta aplicación te permite agendar y listar turnos automáticamente en tu calendario de Google utilizando la API de Google Calendar.

## Requisitos Previos

1. Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu computadora.

## Paso 1: Configuración Inicial

1. Crea un proyecto en la [Consola de Desarrolladores de Google](https://console.developers.google.com/).

2. Habilita la API de Google Calendar para tu proyecto y crea credenciales de Account Service.

3. Descarga el archivo JSON de las credenciales y guárdalo en la carpeta de este proyecto (Credentials.json)

## Paso 2: Instalación

1. Ejecuta el siguiente comando para instalar las dependencias:


   npm install  -D -E typescript ts-node 

   tsc 


editar linea 3 del index.ts con tu mail 

const calendarController = new CalendarController("ghe.guillermina.b@gmail.com");

ejemplos:

node dist/index.js obtenerListaDeEventos "2023-09-16" "2023-09-18"

node dist/index.js crearEvento "nuevo evento" "2023-09-09 22:00" "2023-09-09 23:00"