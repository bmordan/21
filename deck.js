const Card = require('./card')
const R = require('ramda')

const suits = [
    "Hearts",
    "Spades",
    "Diamonds",
    "Clubs"
]

function createMinorCards (suit) {
    return new Array(10).fill(0).map((_, i) => {
        const value = i + 1
        return new Card(value, suit)
    })
}

function createCourtCards (suit) {
    return [
        "King",
        "Queen",
        "Jack"
    ].map(value => new Card(value, suit))
}

class Deck {
    constructor() {
        this.cards = R.pipe(
          R.map(createMinorCards),
          R.concat(R.map(createCourtCards)(suits)),
          R.flatten
        )(suits)
        
    }

    /**
     * Shuffles array in place.
     * @param {Array} a items An array containing the items.
     */
    shuffle() {
        const a = this.cards
        let j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        this.cards = a;
    }
}

module.exports = Deck