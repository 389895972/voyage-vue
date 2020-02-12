FROM node:lts-alpine3.11 AS builder
WORKDIR /daas_vue/
COPY ./ /daas_vue
RUN mkdir -p /root/.npm/node-sass/4.13.0/ && cp docker/linux_musl-x64-72_binding.node /root/.npm/node-sass/4.13.0/
RUN npm install && npm run build

FROM tomcat:9.0-jdk8-corretto
WORKDIR /usr/local/tomcat/
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo'Asia/Shanghai'>/etc/timezone
RUN cp /usr/local/tomcat/webapps.dist/* /usr/local/tomcat/webapps/ -r
RUN rm webapps/ROOT/index.jsp
COPY --from=builder /daas_vue/dist/ /usr/local/tomcat/webapps/daas_vue/
COPY --from=builder /daas_vue/docker/index.jsp /usr/local/tomcat/webapps/ROOT/
CMD catalina.sh run
