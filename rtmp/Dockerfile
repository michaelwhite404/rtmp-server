FROM tiangolo/nginx-rtmp

COPY nginx.conf /etc/nginx/nginx.conf
COPY index.html /www/
RUN mkdir /tmp/live

RUN chmod 777 -R /tmp/live