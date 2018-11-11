FROM node:alpine

LABEL maintainer="anandg112@gmail.com"

#copy app to src folder
COPY . /src

WORKDIR /src

#install dependencies
RUN npm install 

EXPOSE 3000

ENTRYPOINT ["node", "./app.js"]
