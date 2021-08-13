FROM nginx:alpine
WORKDIR /app
COPY ./build /app/html
COPY ./deploy /etc/nginx
RUN ln -s /etc/nginx/sites-available/puzzle-game /etc/nginx/sites-enabled
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
