context('Login Correcto', () => {

    it('Autenticación fallida', () => {
        cy.visit('https://habitica.com/static/home');
        cy.get('.login-button').click();
        cy.get('#usernameInput').type('belmanesenet@gmail.com').should('have.value', 'belmanesenet@gmail.com');
        cy.get('#passwordInput').type('Habi8Belm4');
        cy.get('.btn-info[type="submit"]').click();
        cy.contains("Battle Monsters With Friends").should('be.visible')
      })
});
context('Cuenta existente', () => {

    it('Cuenta ya existente', () => {
        cy.visit('https://habitica.com/static/home');
        cy.get('#usernameInput').type('belmanese').should('have.value', 'belmanese');
        cy.contains("Username already taken.").should('be.visible')
      })
});
context('Crear un desafio', () => {

    it('Crear un desafio', () => {
        cy.visit('https://habitica.com/static/home');
        cy.get('.login-button').click();
        cy.get('#usernameInput').type('belmanesenet@gmail.com').should('have.value', 'belmanesenet@gmail.com');
        cy.get('#passwordInput').type('Habi8Belm4');
        cy.get('.btn-info[type="submit"]').click();
        cy.get('a[href*="/challenges/myChallenges"]').contains('Challenges').click();
        cy.get('.create-challenge-button').click(); 
        cy.get('.form').find('input').first().type('Challenge name');
        cy.get('.form').find('input').last().type('Challenge Short name');
        cy.get('.summary-textarea').type('Summary');
        cy.get('.description-textarea').type('Description');
        cy.get('select').select('Public Challenges');
        cy.get('.footer-wrap .btn').click();
      })
});
context('Crear habito', () => {

    it('Crear habito', () => {
        cy.visit('https://habitica.com/static/home');
        cy.get('.login-button').click();
        cy.get('#usernameInput').type('belmanesenet@gmail.com').should('have.value', 'belmanesenet@gmail.com');
        cy.get('#passwordInput').type('Habi8Belm4');
        cy.get('.btn-info[type="submit"]').click();
        cy.get('.habit .tasks-list .quick-add').type('New Habit').type('{enter}');
      })
});
context('Crear Tarea', () => {

    it('Crear tarea', () => {
        cy.visit('https://habitica.com/static/home');
        cy.get('.login-button').click();
        cy.get('#usernameInput').type('belmanesenet@gmail.com').should('have.value', 'belmanesenet@gmail.com');
        cy.get('#passwordInput').type('Habi8Belm4');
        cy.get('.btn-info[type="submit"]').click();
        cy.get('.daily .tasks-list .quick-add').type('New daily task').type('{enter}');
      })
});











