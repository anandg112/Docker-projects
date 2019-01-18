FROM hashicorp/terraform:light

RUN terraform init -backend=false -input=false && \
    apk add --no-cache libc6-compat

RUN apk add --no-cache python3 && \
    python3 -m ensurepip && \
    rm -r /usr/lib/python*/ensurepip && \
    pip3 install --upgrade pip setuptools && \
    rm -r /root/.cache 

RUN pip install awscli --upgrade && \
    rm -rf /var/cache/apk/*

ENTRYPOINT []