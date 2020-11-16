FROM node
WORKDIR /app
EXPOSE 3000
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install 
RUN npm install react-scripts
#COPY . ./
#CMD ["npm", "start"]
