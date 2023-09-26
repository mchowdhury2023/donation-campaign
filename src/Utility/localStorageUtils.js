export const addCardToLocalStorage = (card) => {
    let cards = JSON.parse(localStorage.getItem("donatedCards") || "[]");
    if (!cards.some((c) => c.id === card.id)) {
      cards.push(card);
      localStorage.setItem("donatedCards", JSON.stringify(cards));
    }
  };
  
  export const getCardsFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("donatedCards") || "[]");
  };
  
  export const cardExistsInLocalStorage = (id) => {
    const cards = JSON.parse(localStorage.getItem("donatedCards") || "[]");
    return cards.some((c) => c.id === id);
  };
  