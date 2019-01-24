
FROM maven:3.6.0-jdk-8-alpine AS build

RUN mkdir -p src/main/java/hello
WORKDIR /src/main/java/hello
COPY HelloWorld.java HelloWorld.java
COPY Greeter.java Greeter.java
WORKDIR /
COPY pom.xml .
RUN mvn install && cp target/gs-maven-0.1.0.jar app.jar


FROM openjdk:8-jdk-alpine

WORKDIR /app
COPY --from=build /target/gs-maven-0.1.0.jar ./app.jar
CMD ["java", "-jar", "/app/app.jar"]