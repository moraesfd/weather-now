describe('Weather Now - Testes', function () {
  it('Carregamento da página', function () {
    cy.visit('/')
  })
  it('Devem ter 3 cards de temperatura', function () {
    cy.get('.weather-component .weather-card').its('length').should('be', 3)
  })
  it('Primeiro Card de temperatura deve ser da cidade "Nuuk, GL"', function () {
    cy.get('.weather-component>.weather-card .weather-card-header__text')
      .eq(0)
      .should('contain', 'Nuuk, GL')
  })
  it('Segundo Card de temperatura deve ser da cidade "Urubici, BR"', function () {
    cy.get('.weather-component>.weather-card .weather-card-header__text')
      .eq(1)
      .should('contain', 'Urubici, BR')
  })
  it('Terceiro Card de temperatura deve ser da cidade "Nairobi, KE"', function () {
    cy.get('.weather-component>.weather-card .weather-card-header__text')
      .eq(2)
      .should('contain', 'Nairobi, KE')
  })
})
