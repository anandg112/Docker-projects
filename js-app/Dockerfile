FROM node:alpine

LABEL maintainer="anandg112@gmail.com"

COPY . /src

WORKDIR /src

RUN npm install 

EXPOSE 8080

ENTRYPOINT ["node", "./app.js"]
