export async function translate({ text }) {
    const url = "http://localhost:3001/translate";
    const body = JSON.stringify({
        text: text,
        targetLang: "ES"
    })
    const config = {
        method: "POST",
        headers: { 
            "Content-Type": "application/json", 
        },
        body: body,
    }
    return fetch(url, config);
}