FROM node:alpine AS build

WORKDIR /app

COPY package.json .

RUN ["yarn", "install"]

COPY . .

RUN ["yarn", "build"]

FROM nginx:latest AS run

COPY --from=build /app/build/ /usr/share/nginx/html