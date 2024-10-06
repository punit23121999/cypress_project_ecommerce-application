describe('', () => {
    it('', () => {

        cy.visit('https://tutorialsninja.com/demo/');

        cy.get('#top-links > ul > li.dropdown > a > span.caret').click();

        cy.get('.dropdown-menu > :nth-child(1) > a').click();

       cy.get('#input-firstname').type('punit');

       cy.get('#input-lastname').type('kumar');


       cy.get('#input-email').type('punitkumar00@gmail.com');


       cy.get('#input-telephone').type('9472614291');


       cy.get('#input-password').type('punit@');

       cy.get('#input-confirm').type('punit@');

       cy.get('#content > form > fieldset:nth-child(3) > div > div > label:nth-child(1) > input[type=radio]').click();

       cy.get('#content > form > div > div > input[type=checkbox]:nth-child(2)').click();

       cy.get('#content > form > div > div > input.btn.btn-primary').click();

       cy.get('.alert').should('be.visible').and('have.text','Warning: E-Mail Address is already registered!');

     
         });

         it('', () => {

            cy.visit('https://tutorialsninja.com/demo/');

            cy.get('#top-links > ul > li.dropdown > a > span.caret').click();
    
            cy.get('.dropdown-menu > :nth-child(1) > a').click();
    
           cy.get('#input-firstname').type('punit');
    
           cy.get('#input-lastname').type('kumar');
    
    
           cy.get('#input-email').type('punitkumar13@gmail.com');//invalid email
    
    
           cy.get('#input-telephone').type('9472614291');
    
    
           cy.get('#input-password').type('punit@001');
    
           cy.get('#input-confirm').type('punit@001');
    
           cy.get('#content > form > fieldset:nth-child(3) > div > div > label:nth-child(1) > input[type=radio]').click();
    
           cy.get('#content > form > div > div > input[type=checkbox]:nth-child(2)').click();
    
           cy.get('#content > form > div > div > input.btn.btn-primary').click();
    
           cy.get('#content > h1').should('be.visible').and('have.text', 'Your Account Has Been Created!');
           
          
           //logout

           cy.get('.list-inline > .dropdown > .dropdown-toggle').click();

           cy.contains('Logout').click();

           cy.get('.pull-right > .btn').click({force: true});

           


            
         });

         it.only('', () => {
            cy.visit('https://tutorialsninja.com/demo/');

            cy.get('#top-links > ul > li.dropdown > a > span.caret').click();

            cy.get('.dropdown-menu > :nth-child(2) > a').click();

            cy.get('#input-email').type('asmitairone1@gmail.com');

            cy.get('#input-password').type('12345');

            cy.get('#content > div > div:nth-child(2) > div > form > input').click();
            // when wrong email and password
            //cy.get('.alert').should('be.visible').and('have.text', 'Warning: No match for E-Mail Address and/or Password.');
            cy.get('#menu > div.collapse.navbar-collapse.navbar-ex1-collapse > ul > li:nth-child(7) > a').click();//add to compare

            cy.get('#content > div:nth-child(3) > div:nth-child(1) > div > div:nth-child(2) > div.button-group > button:nth-child(3)').click();//add to compare

            cy.get('#content > div:nth-child(3) > div:nth-child(2) > div > div:nth-child(2) > div.button-group > button:nth-child(3)').click();//add to compare

            cy.get('#product-category > div.alert.alert-success.alert-dismissible > a:nth-child(3)').click();

            cy.get('#content > table > tbody:nth-child(3) > tr > td:nth-child(2) > input').click({force: true});

            cy.get('#button-cart').click();
         });

         it('compare two product camera', () => {

            cy.get('#menu > div.collapse.navbar-collapse.navbar-ex1-collapse > ul > li:nth-child(7) > a').click();//add to compare

            cy.get('#content > div:nth-child(3) > div:nth-child(1) > div > div:nth-child(2) > div.button-group > button:nth-child(3)').invoke().click();//add to compare

            cy.get('#content > div:nth-child(3) > div:nth-child(2) > div > div:nth-child(2) > div.button-group > button:nth-child(3)').invoke().click();//add to compare

            cy.get('#product-category > div.alert.alert-success.alert-dismissible > a:nth-child(3)').click();

            cy.get('#content > table > tbody:nth-child(3) > tr > td:nth-child(2) > input').click({force: true});
            //
            cy.get('#button-cart').click();


            
         });
});