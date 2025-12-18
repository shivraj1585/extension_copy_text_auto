document.addEventListener("mouseup", () => {
  const selectedText = window.getSelection().toString().trim();

  if (selectedText.length > 0) {
    navigator.clipboard.writeText(selectedText)
      .then(() => {
        console.log("Text copied:", selectedText);
      })
      .catch(err => {
        console.error("Copy failed", err);
      });
  }
});