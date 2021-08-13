#!/bin/bash

docker build --no-cache -t commpost-api:amd64 .
docker tag commpost-api:amd64 sosomasox/commpost-api:amd4
docker push sosomasox/commpost-api:amd64

exit 0
