FROM mysql:8
ENV MYSQL_ROOT_PASSWORD=rootpass
ENV MYSQL_DATABASE=chatdb
ENV MYSQL_USER=chatuser
ENV MYSQL_PASSWORD=chatpass
COPY db/init.sql /docker-entrypoint-initdb.d/
EXPOSE 3306