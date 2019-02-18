FROM ruby:2.3-slim

LABEL maintainer anand_gautam

RUN apt-get update && \
    apt-get install -y build-essential nodejs libpq-dev libsqlite3-dev --fix-missing --no-install-recommends

ENV INSTALL_PATH /opt/app

RUN mkdir -p $INSTALL_PATH

WORKDIR $INSTALL_PATH

COPY Gemfile Gemfile

RUN bundle install

COPY . .