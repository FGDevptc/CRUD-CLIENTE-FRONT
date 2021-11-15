FROM node:latest as front-crudCliente
ENV NODE_ENV=production
WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . .
RUN npm run build



