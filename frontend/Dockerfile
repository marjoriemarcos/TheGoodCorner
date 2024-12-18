FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY vite.config.ts vite.config.ts
COPY eslint.config.js eslint.config.js
COPY tsconfig* ./
COPY index.html index.html
COPY eslint.config.js eslint.config.js
COPY codegen.ts codegen.ts
COPY src src
COPY public public
COPY bower_components bower_components

CMD npm run dev
