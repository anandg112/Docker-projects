#First Real Dockerfile

FROM centos:6

LABEL maintainer="anandg112@gmail.com"

RUN yum update -y && \
    yum -y install httpd net-tools && \
    mkdir -p /run/httpd && \
    rm -rf /run/http/* /tmp/httpd*

CMD echo "Remember to check container IP address"

ENV ENVIRONMENT="production"

EXPOSE 80

ENTRYPOINT apachectl "-DFOREGROUND"
