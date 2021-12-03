import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const card = document.createElement("div");
  const cHeadline = document.createElement("div");
  const authorDiv = document.createElement("div");
  const IMGDiv = document.createElement("div");
  const cIMG = document.createElement("img");
  const cAuthor = document.createElement("span");

  card.classList.add("card");
  cHeadline.classList.add("headline");
  authorDiv.classList.add("author");
  IMGDiv.classList.add("img-container");

  cHeadline.textContent = article.headline;
  cIMG.src = article.authorPhoto;
  cAuthor.textContent = article.authorName;

  card.appendChild(cHeadline);
  card.appendChild(authorDiv);
  authorDiv.appendChild(IMGDiv);
  IMGDiv.appendChild(cIMG);
  authorDiv.appendChild(cAuthor);

  card.addEventListener("click", () => {
    console.log(article.headline);
  });

  return card;
};

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.

  const el = document.querySelector(selector);

  axios
    .get(`http://localhost:5000/api/articles`)
    .then((response) => {
      response.data.articles.bootstrap.forEach((article, i) => {
        let articleCards = Card(article);
        el.appendChild(articleCards);
      });
      response.data.articles.javascript.forEach((article) => {
        let articleCards = Card(article);
        el.appendChild(articleCards);
      });
      response.data.articles.jquery.forEach((article, i) => {
        let articleCards = Card(article);
        el.appendChild(articleCards);
      });
      response.data.articles.node.forEach((article, i) => {
        let articleCards = Card(article);
        el.appendChild(articleCards);
      });
      response.data.articles.technology.forEach((article, i) => {
        let articleCards = Card(article);
        el.appendChild(articleCards);
      });
    })
    .catch((error) => console.error(error));
};

export { Card, cardAppender };
