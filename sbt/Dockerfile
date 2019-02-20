ARG OPENJDK_TAG=8u181

FROM openjdk:${OPENJDK_TAG}

ARG SBT_VERSION=1.2.8

RUN curl -L -o sbt-$SBT_VERSION.deb https://dl.bintray.com/sbt/debian/sbt-$SBT_VERSION.deb && \
    dpkg -i sbt-$SBT_VERSION.deb && \
    rm sbt-$SBT_VERSION.deb && \
    apt-get update && \
    apt-get install sbt && \
    sbt sbtVersion

RUN apt-get install -y python3-dev python3-pip libffi-dev libssl-dev && \
    pip3 install awscli --upgrade
