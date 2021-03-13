FROM node
WORKDIR /app
EXPOSE 3000
ENV PATH /app/node_modules/.bin:$PATH
COPY src/package.json ./
COPY src/package-lock.json ./
RUN git config user.name "xoneUpx"
RUN git config user.email "bobokuos@gmail.com"
RUN npm install -D
RUN npm install -D react-scripts
#COPY . ./
#CMD ["npm", "start"]
