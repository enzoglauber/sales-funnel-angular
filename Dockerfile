FROM node:10.3.0-slim
ENV INSTALL_PATH /base-client
RUN npm install -g @angular/cli
RUN mkdir -p $INSTALL_PATH
WORKDIR $INSTALL_PATH
COPY . .
RUN npm install
RUN npm rebuild node-sass
CMD ["npm", "start"]