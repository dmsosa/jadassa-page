import { useEffect, useState } from "react";
import quotesFile from "../../assets/quotes.json";
import { translate } from "../../services/translate";
function Message() {
  const [quote, setQuote] = useState("");
  const [translatedMessage, setTranslatedMessage] = useState();
  const [author, setAuthor] = useState();

  //zufalliges Seite griffen
  //von Seite set zufallige Zitaten

  useEffect(() => {
    let quotesJSON = JSON.parse(localStorage.getItem("quotesJSON"));
    if (!quotesJSON) {
      localStorage.setItem("quotesJSON", JSON.stringify(quotesFile));
      quotesJSON = JSON.parse(localStorage.getItem("quotesJSON"));
    }
    let pageIndex = Math.floor(Math.random() * quotesJSON.pages.length);
    const quotePage = quotesJSON.pages[pageIndex];

    const results = quotePage.results;
    let randIndex = Math.floor(Math.random() * results.length);

    var selectedQuote;

    if (typeof results[randIndex] === "string") {
      selectedQuote = JSON.parse(results[randIndex]);
    } else {
      selectedQuote = results[randIndex];
    }

    if (!quote.length > 0) {
      setAuthor(selectedQuote.author);
      setQuote(selectedQuote.text);
    }

    if (selectedQuote.translatedText.length > 0) {
      setTranslatedMessage(selectedQuote.translatedText);
    } else {
      translate({ text: selectedQuote.text })
        .then((res) => res.json())
        .then((data) => {
          setTranslatedMessage(data.translatedText);
          var quoteCopy = JSON.parse(
            quotesJSON.pages[pageIndex].results[randIndex],
          );
          quoteCopy.translatedText = data.translatedText;
          quotesJSON.pages[pageIndex].results[randIndex] =
            JSON.stringify(quoteCopy);

          localStorage.setItem("quotesJSON", JSON.stringify(quotesJSON));
          console.log(
            "Das neue Ubertsetzung gespeichert ist!",
            pageIndex,
            randIndex,
          );
        })
        .catch((error) => console.log(error));
    }

    setInterval(() => {
      if (quote && quote.length > 0) {
        setQuote("");
      }
    }, 180000);
  }, []);

  return (
    <div className="message-wrapper">
      <p className="message-content">{quote}</p>
      <p className="message-content translated">{translatedMessage}</p>
      <span>{author}</span>
    </div>
  );
}

export default Message;
