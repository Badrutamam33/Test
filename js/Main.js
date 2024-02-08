function generateQR() {
  var qrInput = document.getElementById("qrInput").value;
  
  // Hapus QR code sebelumnya jika ada
  document.getElementById("qrCode").innerHTML = "";
  
  // Membuat QR code menggunakan QRCode.js
  var qrCode = new QRCode(document.getElementById("qrCode"), {
    text: qrInput,
    width: 200,
    height: 200
  });

  // Tampilkan QR code
  document.getElementById("qrCode").style.display = "block";

  // Tampilkan pesan alert
  alert("QR code berhasil dibuat! Klik OK untuk mengunduh.");

  // Memanggil fungsi untuk mengunduh QR code
  downloadQR();
}

// Fungsi untuk mengunduh QR code
function downloadQR() {
  var qrCodeCanvas = document.querySelector("#qrCode canvas");
  var qrDataURL = qrCodeCanvas.toDataURL("image/png");

  // Buat elemen <a> untuk mengunduh QR code
  var downloadLink = document.createElement("a");
  downloadLink.href = qrDataURL;
  downloadLink.download = "QR_code.png";
  downloadLink.click();
}
