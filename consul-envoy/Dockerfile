FROM consul:latest AS consul

FROM envoyproxy/envoy:v1.8.0

COPY --from=consul /bin/consul /bin/consul

ENTRYPOINT [""]