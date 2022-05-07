import "./style.css";

chrome.tabs.query(
  {
    active: true,
    currentWindow: true,
  },
  (tabs) => {
    const { title, url } = tabs[0];
    const htmlLink = `<a href="${url}">${title}</a>`;
    const plainLink = `"${title}" ${url}`;

    navigator.clipboard.write([
      new ClipboardItem({
        "text/plain": new Blob([plainLink], { type: "text/plain" }),
        "text/html": new Blob([htmlLink], { type: "text/html" }),
      }),
    ]);
  }
);
