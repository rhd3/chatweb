const socket = io();

const nicknameModal = document.getElementById('nickname-modal');
const nicknameForm = document.getElementById('nickname-form');
const nicknameInput = document.getElementById('nickname-input');
const chatContainer = document.getElementById('chat-container');
const chatForm = document.getElementById('chat-form');
const msgInput = document.getElementById('msg');
const chatMessages = document.getElementById('chat-messages');
const usersList = document.getElementById('users');

let myNickname = '';

// 닉네임 입력 폼 제출 이벤트 처리
nicknameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  myNickname = nicknameInput.value.trim();
  if (myNickname) {
    // 서버에 새로운 사용자 이벤트 전송
    socket.emit('new user', myNickname);
    // 닉네임 모달 숨기고 채팅 컨테이너 표시
    nicknameModal.style.display = 'none';
    chatContainer.style.display = 'block';
  }
});

// 메시지 전송 이벤트 처리
chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const msg = msgInput.value;
  socket.emit('chat message', msg);
  msgInput.value = '';
  msgInput.focus();
});

// 서버로부터 채팅 메시지 수신 시 메시지 출력
socket.on('chat message', (msg) => {
  outputMessage(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

// 서버로부터 업데이트된 사용자 목록 수신 시 업데이트
socket.on('user list', (users) => {
  updateUserList(users);
});

// 메시지를 화면에 출력하는 함수
function outputMessage(message) {
  const div = document.createElement('div');
  div.classList.add('message');
  const time = new Date().toLocaleTimeString();
  div.innerHTML = `<p class="meta">${time}</p>
                   <p class="text">${message}</p>`;
  chatMessages.appendChild(div);
}

// 좌측 사용자 목록 업데이트 함수
function updateUserList(users) {
  usersList.innerHTML = '';
  users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = user;
    usersList.appendChild(li);
  });
}
const socket = io();

const nicknameModal = document.getElementById('nickname-modal');
const nicknameForm = document.getElementById('nickname-form');
const nicknameInput = document.getElementById('nickname-input');
const chatContainer = document.getElementById('chat-container');
const chatForm = document.getElementById('chat-form');
const msgInput = document.getElementById('msg');
const chatMessages = document.getElementById('chat-messages');
const usersList = document.getElementById('users');

let myNickname = '';

// 닉네임 입력 폼 제출 이벤트 처리
nicknameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  myNickname = nicknameInput.value.trim();
  if (myNickname) {
    // 서버에 새로운 사용자 이벤트 전송
    socket.emit('new user', myNickname);
    // 닉네임 모달 숨기고 채팅 컨테이너 표시
    nicknameModal.style.display = 'none';
    chatContainer.style.display = 'block';
  }
});

// 메시지 전송 이벤트 처리
chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const msg = msgInput.value;
  socket.emit('chat message', msg);
  msgInput.value = '';
  msgInput.focus();
});

// 서버로부터 채팅 메시지 수신 시 메시지 출력
socket.on('chat message', (msg) => {
  outputMessage(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

// 서버로부터 업데이트된 사용자 목록 수신 시 업데이트
socket.on('user list', (users) => {
  updateUserList(users);
});

// 메시지를 화면에 출력하는 함수
function outputMessage(message) {
  const div = document.createElement('div');
  div.classList.add('message');
  const time = new Date().toLocaleTimeString();
  div.innerHTML = `<p class="meta">${time}</p>
                   <p class="text">${message}</p>`;
  chatMessages.appendChild(div);
}

// 좌측 사용자 목록 업데이트 함수
function updateUserList(users) {
  usersList.innerHTML = '';
  users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = user;
    usersList.appendChild(li);
  });
}
const socket = io();

const nicknameModal = document.getElementById('nickname-modal');
const nicknameForm = document.getElementById('nickname-form');
const nicknameInput = document.getElementById('nickname-input');
const chatContainer = document.getElementById('chat-container');
const chatForm = document.getElementById('chat-form');
const msgInput = document.getElementById('msg');
const chatMessages = document.getElementById('chat-messages');
const usersList = document.getElementById('users');

let myNickname = '';

// 닉네임 입력 폼 제출 이벤트 처리
nicknameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  myNickname = nicknameInput.value.trim();
  if (myNickname) {
    // 서버에 새로운 사용자 이벤트 전송
    socket.emit('new user', myNickname);
    // 닉네임 모달 숨기고 채팅 컨테이너 표시
    nicknameModal.style.display = 'none';
    chatContainer.style.display = 'block';
  }
});

// 메시지 전송 이벤트 처리
chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const msg = msgInput.value;
  socket.emit('chat message', msg);
  msgInput.value = '';
  msgInput.focus();
});

// 서버로부터 채팅 메시지 수신 시 메시지 출력
socket.on('chat message', (msg) => {
  outputMessage(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

// 서버로부터 업데이트된 사용자 목록 수신 시 업데이트
socket.on('user list', (users) => {
  updateUserList(users);
});

// 메시지를 화면에 출력하는 함수
function outputMessage(message) {
  const div = document.createElement('div');
  div.classList.add('message');
  const time = new Date().toLocaleTimeString();
  div.innerHTML = `<p class="meta">${time}</p>
                   <p class="text">${message}</p>`;
  chatMessages.appendChild(div);
}

// 좌측 사용자 목록 업데이트 함수
function updateUserList(users) {
  usersList.innerHTML = '';
  users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = user;
    usersList.appendChild(li);
  });
}
const socket = io();

const nicknameModal = document.getElementById('nickname-modal');
const nicknameForm = document.getElementById('nickname-form');
const nicknameInput = document.getElementById('nickname-input');
const chatContainer = document.getElementById('chat-container');
const chatForm = document.getElementById('chat-form');
const msgInput = document.getElementById('msg');
const chatMessages = document.getElementById('chat-messages');
const usersList = document.getElementById('users');

let myNickname = '';

// 닉네임 입력 폼 제출 이벤트 처리
nicknameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  myNickname = nicknameInput.value.trim();
  if (myNickname) {
    // 서버에 새로운 사용자 이벤트 전송
    socket.emit('new user', myNickname);
    // 닉네임 모달 숨기고 채팅 컨테이너 표시
    nicknameModal.style.display = 'none';
    chatContainer.style.display = 'block';
  }
});

// 메시지 전송 이벤트 처리
chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const msg = msgInput.value;
  socket.emit('chat message', msg);
  msgInput.value = '';
  msgInput.focus();
});

// 서버로부터 채팅 메시지 수신 시 메시지 출력
socket.on('chat message', (msg) => {
  outputMessage(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

// 서버로부터 업데이트된 사용자 목록 수신 시 업데이트
socket.on('user list', (users) => {
  updateUserList(users);
});

// 메시지를 화면에 출력하는 함수
function outputMessage(message) {
  const div = document.createElement('div');
  div.classList.add('message');
  const time = new Date().toLocaleTimeString();
  div.innerHTML = `<p class="meta">${time}</p>
                   <p class="text">${message}</p>`;
  chatMessages.appendChild(div);
}

// 좌측 사용자 목록 업데이트 함수
function updateUserList(users) {
  usersList.innerHTML = '';
  users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = user;
    usersList.appendChild(li);
  });
}

