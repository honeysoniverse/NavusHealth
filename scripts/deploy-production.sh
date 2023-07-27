#!/bin/bash

export CONTAINER_REGISTRY=123020097607.dkr.ecr.us-east-1.amazonaws.com

sh scripts/deploy-login.sh
docker pull "${CONTAINER_REGISTRY}"/nhportal:latest
docker stack deploy --compose-file docker/docker-compose.staging.yml --compose-file docker/docker-compose.production.yml --with-registry-auth --prune navus-health-cloud
