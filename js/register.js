const registerForm = document.getElementById("registerForm");
const registerMsg = document.getElementById("register-msg");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const fullname = document.getElementById("fullname").value.trim();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Validasi sederhana
  if (password !== confirmPassword) {
    registerMsg.style.color = "red";
    registerMsg.textContent = "Kata sandi dan konfirmasi tidak cocok!";
    return;
  }

  if (username.length < 4) {
    registerMsg.style.color = "red";
    registerMsg.textContent = "Nama pengguna minimal 4 karakter.";
    return;
  }

  // Simpan data ke localStorage (simulasi database)
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Cek apakah username sudah dipakai
  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    registerMsg.style.color = "red";
    registerMsg.textContent = "Nama pengguna sudah digunakan.";
    return;
  }

  // Tambah user baru
  users.push({ fullname, username, password });
  localStorage.setItem("users", JSON.stringify(users));

  registerMsg.style.color = "green";
  registerMsg.textContent = "Pendaftaran berhasil! Silakan login.";

  setTimeout(() => {
    window.location.href = "index.html";
  }, 2000);
});
