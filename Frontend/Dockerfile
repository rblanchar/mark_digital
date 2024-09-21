# Usa una imagen base de Node.js para construir la aplicación
FROM node:18 AS build

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia todo el contenido del proyecto
COPY . .

# Construye la aplicación React
RUN npm run build

# Usa una imagen de nginx para servir la aplicación
FROM nginx:alpine

# Copia los archivos de construcción de la aplicación a la carpeta html de nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exponer el puerto en el que correrá la app
EXPOSE 80

# Comando para correr Nginx
CMD ["nginx", "-g", "daemon off;"]
