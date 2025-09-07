# Dockerfile for React project

FROM node:latest AS frontend

WORKDIR /var/www/frontend

COPY package*.json ./

# Install all dependencies as specified in package.json
# This single command ensures all direct and peer dependencies are installed correctly.
RUN npm install

# Copy the rest of the application code
COPY . .

# Run the build command
RUN npm run build

FROM golang:latest AS backend

WORKDIR  /var/www/backend

COPY ./backend .


RUN ["go", "build", "-o", "app", "."]

FROM debian:stable AS production

COPY --from=frontend /var/www/frontend/dist /var/www/dist

COPY --from=backend /var/www/backend/app /var/www/app

RUN ["apt", "update"]
RUN ["apt", "install", "-y", "apache2", "openssl", "certbot", "python3-certbot-apache"]

EXPOSE 5080

RUN ["chmod", "+x", "/var/www/app"]

CMD ["/var/www/app"]