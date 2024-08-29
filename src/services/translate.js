export async function translate({ text }) {
  const url = "https://dmsosa.com/translate";
  const body = JSON.stringify({
    text: text,
    targetLang: "ES",
  });
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  };
  return fetch(url, config);
}
