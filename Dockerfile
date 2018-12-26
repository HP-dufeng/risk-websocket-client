FROM node:8.11.2-slim

RUN cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime  && echo 'Asia/Shanghai' >/etc/timezone

COPY . /app
WORKDIR /app

ENV PORT 8087
EXPOSE 8087
CMD ["node", "server.js"]
