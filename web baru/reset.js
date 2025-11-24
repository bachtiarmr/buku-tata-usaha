const resetForm = document.getElementById("resetForm");
const resetMsg = document.getElementById("reset-msg");

// Contoh akun terdaftar (sementara)
const registeredUsers = ["adminTU", "petugasTU"];

resetForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();

  if (registeredUsers.includes(username)) {
    resetMsg.style.color = "green";
    resetMsg.textContent =
      "Permintaan reset berhasil dikirim. Silakan hubungi admin untuk kata sandi baru.";
  } else {
    resetMsg.style.color = "red";
    resetMsg.textContent =
      "Nama pengguna tidak ditemukan. Silakan periksa kembali.";
  }
});
