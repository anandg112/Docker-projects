FROM node:alpine

WORKDIR /app

COPY package.json .

RUN yarn install

COPY index.js .

EXPOSE 8080

CMD ["yarn", "start"]
