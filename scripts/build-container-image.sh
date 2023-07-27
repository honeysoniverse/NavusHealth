#!/bin/bash

sudo aws ecr get-login-password --profile nhportal-web-app-container-images-pusher | sudo docker login --username AWS --password-stdin "${CONTAINER_REGISTRY}"
docker build -f docker/Dockerfile --build-arg AUTH0_CLIENT_ID="${AUTH0_CLIENT_ID}" --build-arg AUTH0_DOMAIN="${AUTH0_DOMAIN}" --build-arg AUTH0_AUDIENCE="${AUTH0_AUDIENCE}" --build-arg API_BASE_URL="${API_BASE_URL}" --build-arg REST_API_BASE_URL="${REST_API_BASE_URL}" -t nhportal:"${CONTAINER_IMAGE_VERSION}" .
docker image tag nhportal:"${CONTAINER_IMAGE_VERSION}" "${CONTAINER_REGISTRY}"/nhportal:"${CONTAINER_IMAGE_VERSION}"
docker push "${CONTAINER_REGISTRY}"/nhportal:"${CONTAINER_IMAGE_VERSION}"
