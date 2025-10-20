const loginForm = document.getElementById("loginForm");
const errorMsg = document.getElementById("error-msg");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  // Ambil data user dari localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    alert(`Login berhasil! Selamat datang, ${user.fullname}.`);
    window.location.href = "dashboard.html";
  } else {
    errorMsg.textContent = "Nama pengguna atau kata sandi salah!";
  }
});
