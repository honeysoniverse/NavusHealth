#!/bin/bash

export AUTH0_CLIENT_ID=eVXcw5oYPo2g1ovwKSn7V0HRfbW50QM8
export AUTH0_DOMAIN=auth.navushealth.com
export AUTH0_AUDIENCE=https://bv0ibjf9e1.execute-api.us-east-2.amazonaws.com
export API_BASE_URL=https://dk1lviiu5g.execute-api.us-east-2.amazonaws.com/v1
export REST_API_BASE_URL=https://bv0ibjf9e1.execute-api.us-east-2.amazonaws.com/prod/v1
export CONTAINER_REGISTRY=123020097607.dkr.ecr.us-east-1.amazonaws.com
export CONTAINER_IMAGE_VERSION=latest

sh scripts/build-container-image.sh
