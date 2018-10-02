ARG TAGVERSION=6

FROM centos:${TAGVERSION}

LABEL maintainer="anandg112@gmail.com"

RUN yum update -y && \
    yum -y install httpd net-tools && \
    mkdir -p /run/httpd && \
    rm -rf /run/http/* /tmp/httpd*

COPY index.html /var/www/html/

CMD echo "Remember to check container IP address"

ENV ENVIRONMENT="production"

VOLUME /mymount

EXPOSE 8080

ENTRYPOINT ls -al / | wc -l
