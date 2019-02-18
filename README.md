# Docker projects

## Various projects built with Dockerfile and docker-compose

### Building the image

Change directories into relevant project and build the image

```
docker build -t imageName .
```

If there is a docker-compose yaml file, use the following command to run the services

```
docker-compose up --build
```
