FROM python:2.7-slim

LABEL Anand Gautam

RUN apt-get update && apt-get install -y build-essential libpq-dev --fix-missing --no-install-recommends

ENV INSTALL_PATH /mobydock

RUN mkdir -p $INSTALL_PATH

WORKDIR $INSTALL_PATH

COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt

COPY . .

