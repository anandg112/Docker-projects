FROM node:alpine

COPY package.json app/package.json
RUN yarn install

COPY index.js app/index.js

WORKDIR /app

EXPOSE 8080

CMD ["yarn", "start"]
