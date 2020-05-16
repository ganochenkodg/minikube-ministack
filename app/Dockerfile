FROM node:10
WORKDIR /app
ENV ENVIRONMENT prod
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
HEALTHCHECK --interval=10s --timeout=2s --start-period=5s \  
    CMD node healthcheck.js
CMD [ "node", "main.js" ]
