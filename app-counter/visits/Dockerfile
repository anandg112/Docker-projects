FROM node:alpine

WORKDIR /app

COPY package.json .

RUN yarn install

COPY index.js .

EXPOSE 8081

CMD ["yarn", "start"]


