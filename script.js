const copyBtn = document.getElementById("copyBtn");
const msg = document.getElementById("msg");

copyBtn?.addEventListener("click", async () => {
try {
    await navigator.clipboard.writeText(window.location.href);
    msg.textContent = "Copied ✦";
    setTimeout(() => (msg.textContent = ""), 1200);
  } catch {
    msg.textContent = "Copy didn’t work—copy from the address bar.";
    setTimeout(() => (msg.textContent = ""), 2000);
  }
});