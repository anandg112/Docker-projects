FROM node:alpine

RUN mkdir app/

COPY package.json app/package.json
COPY index.js app/index.js

WORKDIR /app

RUN yarn install

EXPOSE 8080

CMD ["yarn", "start"]
