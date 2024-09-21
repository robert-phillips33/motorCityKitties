/* eslint-disable no-undef */
describe('TeamViewMain', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.sportsdata.io/v3/mlb/stats/json/PlayerSeasonStatsByTeam/2024/DET*',
      { fixture: 'teamData.json' }).as('getTeamData');

    cy.visit('http://localhost:5173');
  });

  it('should correctly display pitcher stats on component mount', () => {
    cy.wait('@getTeamData');
    cy.get('table').within(() => {
      cy.contains('Shelby Miller').should('be.visible');
      cy.contains('4.4').should('be.visible');
      cy.contains('47').should('be.visible');
      cy.contains('51').should('be.visible');
      cy.contains('5.6').should('be.visible');
      cy.contains('7.4').should('be.visible');
    });
  });

  it('should render batter stats correctly when clicked', () => {
    cy.get('.peer').click();
    cy.get('table').within(() => {
      cy.contains('Kerry Carpenter').should('be.visible');
      cy.contains('.300').should('be.visible');
      cy.contains('14').should('be.visible');
      cy.contains('48').should('be.visible');
    });
  });

  it('should sort stats low to high on toggle, displaying lowest pitcher ERA when clicked', () => {
    cy.get('table').within(() => {
      cy.get('.\\[\\&_tr\\]\\:border-b > .border-b > :nth-child(3)').click();
      cy.get('.\\[\\&_tr\\:last-child\\]\\:border-0 > :nth-child(1) > :nth-child(3)').should('contain', '2.8')
    });
  });
  it('should sort stats high to low on toggle, displaying highest strikeout count when clicked', () => {
    cy.get('table').within(() => {
      cy.get('.\\[\\&_tr\\]\\:border-b > .border-b > :nth-child(4)').click().click();
      cy.get('.\\[\\&_tr\\:last-child\\]\\:border-0 > :nth-child(1) > :nth-child(4)').should('contain', '120.5')
    });
  });
});



