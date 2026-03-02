document.addEventListener("DOMContentLoaded", () => {
  const chatBtn = document.querySelector(".float-chat");
  if (chatBtn) {
    chatBtn.addEventListener("click", () => {
      // Opening WhatsApp chat with the company's support number
      window.open("https://wa.me/8801919983924", "_blank");
    });
  }
});
