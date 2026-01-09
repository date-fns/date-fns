FROM node:20-bullseye
WORKDIR /app
COPY . .
RUN npm ci
CMD ["/bin/bash"]
