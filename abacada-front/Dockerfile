FROM node:18-alpine as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json /app
RUN npm ci --silent
COPY . /app
RUN npm run build

CMD ["npm", "start"]
