#!/bin/bash

export AUTH0_CLIENT_ID=A2N2G84NMeWSLypJ1HHgry85vGiL7uza
export AUTH0_DOMAIN=auth.staging.navushealth.com
export AUTH0_AUDIENCE=https://asor4lkbh5.execute-api.us-east-1.amazonaws.com
export API_BASE_URL=https://ve8g81z1tb.execute-api.us-east-1.amazonaws.com/v1
export REST_API_BASE_URL=https://asor4lkbh5.execute-api.us-east-1.amazonaws.com/dev/v1
export CONTAINER_REGISTRY=123020097607.dkr.ecr.us-east-1.amazonaws.com
export CONTAINER_IMAGE_VERSION=alpha

sh scripts/build-container-image.sh
