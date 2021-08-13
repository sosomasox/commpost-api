FROM ubuntu:18.04

ENV ENDPOINT=

EXPOSE 3000

RUN apt-get update && \
    apt-get -y upgrade && \
    apt-get install -y git nodejs npm

RUN git clone https://github.com/sosomasox/commpost-api.git && \
    cd commpost-api && \
    npm install

WORKDIR commpost-api

ADD ./scripts/entrypoint.sh ./

CMD ["./entrypoint.sh"]
