// untuk login
document.getElementById("loginButton").addEventListener("submit", function (e) {
  e.preventDefault();

  // Simpan username dan password ke dalam variabel
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Cek apakah username dan password sesuai
  if (username === "merahputih" && password === "bersinar") {
    alert("Login berhasil! Redirect ke halaman produk...");
    window.location.href = "product.html";
  } else {
    alert("Username atau password salah. Silakan coba lagi.");
  }
});
