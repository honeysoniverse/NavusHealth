#!/bin/bash

sudo aws ecr get-login-password --profile nhportal-web-app-container-images-puller | sudo docker login --username AWS --password-stdin "${CONTAINER_REGISTRY}"