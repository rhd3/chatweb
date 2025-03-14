const socket = io();
let nickname = null;

socket.on("nicknameCheck", (savedNickname) => {
    if (savedNickname) {
        nickname = savedNickname;
        document.getElementById("nicknameModal").style.display = "none";
        document.getElementById("chatArea").style.display = "block";
    }
});

function setNickname() {
    let inputNickname = document.getElementById("nicknameInput").value;
    socket.emit("setNickname", inputNickname);
}

socket.on("nicknameExists", () => {
    alert("이미 사용 중인 닉네임입니다.");
});

socket.on("nicknameSaved", (savedNickname) => {
    nickname = savedNickname;
    document.getElementById("nicknameModal").style.display = "none";
    document.getElementById("chatArea").style.display = "block";
});

