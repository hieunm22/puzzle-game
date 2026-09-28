FROM node:24-alpine as build-stage
COPY . .
RUN yarn
RUN yarn build

FROM nginx:alpine
COPY ./deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage ./build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
