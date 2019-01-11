const Deck = require('./deck')

describe("The Deck", () => {
    it("has 52 cards", () => {
        const deck = new Deck()

        expect(deck.cards.length).toBe(52)
    })

    it("has 52 suits", () => {
        const deck = new Deck()
        const hearts = deck.cards.filter(c => c.suit === "Hearts")
        expect(hearts.length).toBe(13)
    })

    it("can be suffled", () => {
        const deck = new Deck()
        const card1 = deck.cards[0]
        deck.shuffle()
        const afterShuffle = deck.cards[0]

        expect(afterShuffle).not.toBe(card1)
    })
})