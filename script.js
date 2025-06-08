function generateQR() {
  const qrText = document.getElementById("qrText").value.trim();
  const qrImage = document.getElementById("qrImage");
  const downloadLink = document.getElementById("downloadLink");

  if (!qrText) {
    alert("Please enter text or a URL");
    return;
  }

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrText)}`;
  qrImage.src = qrUrl;
  downloadLink.href = qrUrl;
  downloadLink.style.display = "inline-block";
}