FROM node:18
WORKDIR /app

# 패키지 설치
COPY server/package.json server/package-lock.json ./
RUN npm install

# 백엔드 코드 복사
COPY server ./server

# 실행 포트
EXPOSE 3000

# 실행 명령
CMD ["node", "server/server.js"]
