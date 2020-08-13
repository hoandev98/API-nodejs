# Docker Image to be used
FROM node
# Create a working directory within NodeJS Docker container
MAINTAINER nonaem@gmail.com
RUN git clone -b master https://7dd7c748e8c0f376920911952fffc7210e03b6db:x-oauth-basic@github.com/jagadish12/SampleTest.git /myapp/
WORKDIR custom-manaty-snapchat/api
RUN npm install > /dev/null
EXPOSE 8082
CMD ["npm","start"]