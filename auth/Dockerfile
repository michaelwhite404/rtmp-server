FROM node:12
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY config.env ./
COPY dist/server.js ./
CMD ["npm", "start"]