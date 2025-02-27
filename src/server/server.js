const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let users = {}; // socket.id와 닉네임 매핑

// 클라이언트 파일은 src/client 폴더에서 제공
app.use(express.static(path.join(__dirname, '../client')));

io.on('connection', (socket) => {
  console.log('사용자 연결:', socket.id);

  // 닉네임 설정 이벤트
  socket.on('new user', (nickname) => {
    users[socket.id] = nickname;
    console.log(`새 사용자: ${nickname} (${socket.id})`);
    // 전체 사용자 목록 브로드캐스트
    io.emit('user list', Object.values(users));
  });

  // 채팅 메시지 처리 (닉네임과 함께 메시지 전송)
  socket.on('chat message', (msg) => {
    const nickname = users[socket.id] || 'Anonymous';
    const fullMsg = `${nickname}: ${msg}`;
    console.log('메시지:', fullMsg);
    io.emit('chat message', fullMsg);
  });

  // 사용자 연결 해제 시 처리
  socket.on('disconnect', () => {
    console.log('사용자 해제:', socket.id);
    delete users[socket.id];
    io.emit('user list', Object.values(users));
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`서버 실행 중 http://localhost:${PORT}`);
});

