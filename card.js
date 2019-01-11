function getPoint (value) {
    const courtCards = ["Jack", "Queen", "King"]
    if (courtCards.indexOf(value) > -1) {
        return parseInt(10)
    } else if (value === "1") {
        return parseInt(11)
    } else {
        return parseInt(value)
    }
}

class Card {
    constructor(value, suit) {
      this.point = getPoint(value)
      this.value = value
      this.suit = suit
    }
}

module.exports = Card