FROM nginx

RUN apt-get update -qq && apt-get -y install curl

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY certificates /etc/nginx/certificates

# Use the "exec" form of CMD so Nginx shuts down gracefully on SIGTERM (i.e. `docker stop`)
CMD [ "nginx", "-g", "daemon off;" ]
