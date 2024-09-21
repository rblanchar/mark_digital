# Usa una imagen base oficial de Node.js
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Recompila bcrypt dentro del entorno Docker
RUN npm rebuild bcrypt --build-from-source

# Copia el resto de los archivos del proyecto
COPY . .

# Expone el puerto en el que corre la app
EXPOSE 3000

# Comando para iniciar la app
CMD ["npm", "start"]
