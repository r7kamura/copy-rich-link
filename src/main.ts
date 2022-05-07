import "./style.css";

function copy({ html, plain }: { html: string; plain: string }) {
  const listener = (event: any) => {
    event.clipboardData.setData("text/html", html);
    event.clipboardData.setData("text/plain", plain);
    event.preventDefault();
  };
  document.addEventListener("copy", listener);
  document.execCommand("copy");
  document.removeEventListener("copy", listener);
}

chrome.tabs.query(
  {
    active: true,
    currentWindow: true,
  },
  (tabs) => {
    const { title, url } = tabs[0];
    copy({
      html: `<a href="${url}">${title}</a>`,
      plain: `"${title}" ${url}`,
    });
  }
);
