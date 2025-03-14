FROM node:18 AS builder
WORKDIR /app

# 패키지 설치
COPY src/client/package.json src/client/package-lock.json ./
RUN npm install

# 프론트엔드 빌드
COPY src/client ./
RUN npm run build

# Nginx 설정 및 정적 파일 복사
FROM nginx:latest
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
