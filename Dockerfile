## bak_20190214: docker file备份

# FROM node:10.15.0-alpine
# ADD . /build
# WORKDIR /build
# RUN yarn config set registry https://registry.npm.taobao.org -g \
#     && yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g \
#     && yarn && yarn run build

# FROM nginx:1.15.3-alpine
# LABEL app="expo" maintainer="Jerry Chan <chenjj@7moor.com>"
# WORKDIR /www
# LABEL app="expo"
# COPY --from=0 /build/dist/ ./

FROM reg.qiniu.com/library/nginx:1.15.3-alpine
LABEL app="LeeBlogBE" maintainer="leehaitao <1775814590@qq.com>"
COPY docker/default.conf /etc/nginx/conf.d/
COPY ./dist/ /usr/share/nginx/html/
VOLUME /var/log/nginx
