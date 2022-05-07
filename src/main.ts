import "./style.css";

chrome.tabs.query(
  {
    active: true,
    currentWindow: true,
  },
  (tabs) => {
    const { title, url } = tabs[0];
    const app = document.querySelector<HTMLDivElement>("#app")!;
    const html = `<a href="${url}">${title}</a>`;
    app.innerHTML = `
      Copied ${html}
    `;
    navigator.clipboard.write([
      new ClipboardItem({
        "text/plain": new Blob([title || ""], { type: "text/plain" }),
        "text/html": new Blob([html], { type: "text/html" }),
      }),
    ]);
  }
);
