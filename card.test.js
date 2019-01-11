const Card = require('./card')

describe("The Card", () => {
  it("We can make a card", () => {
    const card = new Card("10", "diamonds")
    
    
    expect(card instanceof Card).toBe(true)
    expect(card.value).toStrictEqual("10")
    expect(card.suit).toBe('diamonds')
    expect(card.point).toBe(10)
  })

  it("We can make a card", () => {
    const card = new Card("1", "diamonds")

    expect(card.point).toBe(11)
  })

})