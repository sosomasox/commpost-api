
docker-build:
	docker build --no-cache -t commpost-api:arm64 .
	docker tag commpost-api:arm64 sosomasox/commpost-api:arm4
	docker push sosomasox/commpost-api:arm64
