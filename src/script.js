export function handleButtonClick() {
    const quoteEndpoint = "https://api.quotable.io/random";
    fetch(quoteEndpoint)
      .then((response) => response.json())
      .then((data) => {
        const quoteEl = document.querySelector(".quote");
        const authorEl = document.querySelector(".author");
  
        if (quoteEl && authorEl) {
          quoteEl.textContent = data.content;
          authorEl.textContent = `— ${data.author}`;
        }
      })
      .catch((error) => {
        console.error("Error fetching quote:", error);
      });
  }
  