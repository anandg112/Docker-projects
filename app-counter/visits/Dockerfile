FROM node:alpine

WORKDIR /app

COPY package.json app/package.json

RUN yarn install

COPY index.js app/index.js

EXPOSE 8081

CMD ["yarn" "start"]


