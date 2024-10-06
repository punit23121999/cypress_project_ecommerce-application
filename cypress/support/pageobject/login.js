class Login{

    enterurl(){
        Cypress.on('window:before:load', (win) => {
            Object.defineProperty(win.navigator, 'userAgent', {
                value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
            });
        });

        cy.visit('https://tutorialsninja.com/demo/', { failOnStatusCode: false });

        
       // cy.visit('https://tutorialsninja.com/demo/');

    }
    resgister(){
        cy.get('#top-links > ul > li.dropdown > a > span.caret').click();
    
        cy.get('.dropdown-menu > :nth-child(1) > a').click();

       cy.get('#input-firstname').type('punit');

       cy.get('#input-lastname').type('kumar');


       cy.get('#input-email').type('punitkumar24@gmail.com');//invalid email


       cy.get('#input-telephone').type('9472614291');


       cy.get('#input-password').type('punit@001');

       cy.get('#input-confirm').type('punit@001');

       cy.get('#content > form > fieldset:nth-child(3) > div > div > label:nth-child(1) > input[type=radio]').click();

       cy.get('#content > form > div > div > input[type=checkbox]:nth-child(2)').click();

       cy.get('#content > form > div > div > input.btn.btn-primary').click();

       cy.get('#content > h1').should('be.visible')//.and('have.text', 'Your Account Has Been Created!');
       


    }

    login(){
        cy.get('#top-links > ul > li.dropdown > a > span.caret').click();

        cy.get('.dropdown-menu > :nth-child(2) > a').click();

        cy.get('#input-email').type('asmitairone1@gmail.com');

        cy.get('#input-password').type('12345');

        cy.get('#content > div > div:nth-child(2) > div > form > input').click();

    }



   
}
export default Login;