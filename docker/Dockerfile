FROM node:14 AS ui-build
ARG AUTH0_CLIENT_ID
ENV REACT_APP_AUTH0_CLIENT_ID=${AUTH0_CLIENT_ID}
ARG AUTH0_DOMAIN
ENV REACT_APP_AUTH0_DOMAIN=${AUTH0_DOMAIN}
ARG AUTH0_AUDIENCE
ENV REACT_APP_AUTH0_AUDIENCE=${AUTH0_AUDIENCE}
ARG API_BASE_URL
ENV REACT_APP_NAVUS_API_DOMAIN=${API_BASE_URL}
ARG REST_API_BASE_URL
ENV REACT_APP_FORMS_API_DOMAIN=${REST_API_BASE_URL}
RUN npm install -g serve
COPY . /usr/local/application/
WORKDIR /usr/local/application
RUN npm install
RUN npm run build
WORKDIR /usr/local/application/build
HEALTHCHECK CMD curl -f http://localhost:3000/ || exit 1
EXPOSE 3000
CMD ["serve", "-s", "-n"]