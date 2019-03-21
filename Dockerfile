FROM tiangolo/node-frontend:10 as build-stage
WORKDIR /front
COPY ./public/package*.json /front/
RUN npm install
COPY ./public /front/
ARG configuration=production
RUN npm run build -- --output-path=./dist/out

FROM maven:3.5.3-jdk-8

ENV JAR_NAME=teammanagementapi-0.0.1-SNAPSHOT.jar

RUN mkdir  /app && mkdir  /tmp/app

COPY ./  /tmp/app
COPY --from=build-stage /front/dist/out /tmp/app/src/main/resources/static/dist/test-app/

WORKDIR  /tmp/app


RUN mvn clean package -Dmaven.test.skip=true && cp ./target/${JAR_NAME} /app/${JAR_NAME} && cp devops/wait-for-it.sh /app/wait-for-it.sh && chmod +x /app/wait-for-it.sh

WORKDIR /app

CMD ./wait-for-it.sh $DB:5432 -- java -jar /app/${JAR_NAME}