/* eslint-disable no-undef */
describe('Home', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.sportsdata.io/v3/mlb/stats/json/PlayerSeasonStatsByTeam/2024/DET*', {
      fixture: 'teamData.json'
    }).as('getTeamData');
  });

  it('should navigate users to TeamDisplayMain', () => {
    cy.visit('http://localhost:5173/')
    cy.get('.inline-flex').should('be.visible').click()
    cy.wait('@getTeamData');
    cy.get('table').should('be.visible');
    cy.get('.peer').should('be.visible');
  });
});
