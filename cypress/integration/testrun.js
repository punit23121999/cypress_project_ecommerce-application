describe('', () => {
    it('', () => {
        cy.visit('https://tutorialsninja.com/demo/');

        cy.get('#search > input').type('I PHONE');

        cy.get('#search > span > button').click();

        cy.get('#content > div:nth-child(8) > div > div > div:nth-child(2) > div.button-group > button:nth-child(1)').click();
        
        cy.get('#product-search > div.alert.alert-success.alert-dismissible > a:nth-child(3)').click();

       

        cy.get('#checkout-cart > div.alert.alert-danger.alert-dismissible').should('be.visible')
        cy.get(5000)
        //cy.get('#checkout-cart > div.alert.alert-danger.alert-dismissible').should('have.text','Products marked with *** are not available in the desired quantity or not in stock!')
        // cy.screenshot('#checkout-cart > div.alert.alert-danger.alert-dismissible')
        
        // cy.get('div.alert.alert-danger.alert-dismissible')
        // .invoke('text')
        // .then((text) => text.trim())
        // .should('eq', 'Products marked with *** are not available in the desired quantity or not in stock!');


    
        
    });

    it('', () => {
        cy.visit('https://tutorialsninja.com/demo/');

        cy.get('#search > input').type('hp');

        cy.get('#search > span > button').click();

        cy.get('#content > div:nth-child(8) > div > div > div:nth-child(2) > div.button-group > button:nth-child(1) > i').click();

        cy.get('#button-cart').click();

        cy.get('#product-product > div.alert.alert-success.alert-dismissible > a:nth-child(2)').click();

        cy.get('#content > div.buttons.clearfix > div.pull-right > a').click();

        cy.get('#collapse-checkout-option > div > div > div:nth-child(1) > div:nth-child(4) > label > input[type=radio]').click();

        cy.get('#button-account').click();

        cy.get('#input-payment-firstname').type('punit');

        cy.get('#input-payment-lastname').type('kumar');

        cy.get('#input-payment-email').type('punitkumar@01.com');

        cy.get('#input-payment-telephone').type('942614296');

        cy.get('#input-payment-company').type('AIRone');

        cy.get('#input-payment-address-1').type('laxmi nagar');

        cy.get('#input-payment-address-2').type('south block');

        cy.get('#input-payment-city').type('delhi');

        cy.get('#input-payment-postcode').type('110092');

        cy.get('#input-payment-country').select('India');

        cy.get('#input-payment-zone').select('Delhi');

        cy.get('#button-guest').click();

        cy.get('#collapse-shipping-method > div > p:nth-child(5) > textarea').type('can I get a discount  30%');

        cy.get('#button-shipping-method').click();

        cy.get('#collapse-payment-method > div > div.buttons > div > input[type=checkbox]:nth-child(2)').click();

        cy.get('#button-payment-method').click();

        cy.get('#button-confirm').click();

        cy.get('#content > h1').should('be.visible').and('text', 'Your order has been placed!');

        cy.get('#content > div > div > a').click();

        




        
    });

    it.only('main project', () => {

        cy.visit('https://tutorialsninja.com/demo/');

        cy.get('#top-links > ul > li.dropdown > a > span.caret').click();
    
        cy.get('.dropdown-menu > :nth-child(1) > a').click();

       cy.get('#input-firstname').type('punit');

       cy.get('#input-lastname').type('kumar');


       cy.get('#input-email').type('punitkumar16@gmail.com');//invalid email


       cy.get('#input-telephone').type('9472614291');


       cy.get('#input-password').type('punit@001');

       cy.get('#input-confirm').type('punit@001');

       cy.get('#content > form > fieldset:nth-child(3) > div > div > label:nth-child(1) > input[type=radio]').click();

       cy.get('#content > form > div > div > input[type=checkbox]:nth-child(2)').click();

       cy.get('#content > form > div > div > input.btn.btn-primary').click();

       cy.get('#content > h1').should('be.visible').and('have.text', 'Your Account Has Been Created!');
       
       cy.get('.list-inline > .dropdown > .dropdown-toggle').click();

       cy.contains('Logout').click();

        cy.get('.pull-right > .btn').click({force: true});

       cy.get('#top-links > ul > li.dropdown > a > span.caret').click();

       cy.get('.dropdown-menu > :nth-child(2) > a').click();

       cy.get('#input-email').type('asmitairone1@gmail.com');

       cy.get('#input-password').type('12345');

       cy.get('#content > div > div:nth-child(2) > div > form > input').click();

       cy.get('#search > input').type('hp');

       cy.get('#search > span > button').click();

       cy.get('#content > div:nth-child(8) > div > div > div:nth-child(2) > div.button-group > button:nth-child(1) > i').click();

       cy.get('#button-cart').click();

       cy.get('#product-product > div.alert.alert-success.alert-dismissible > a:nth-child(2)').click();

       cy.get('#content > div.buttons.clearfix > div.pull-right > a').click();

       cy.get('#button-payment-address').click({force: true});

       cy.get('#button-shipping-address').click({force: true});

       cy.get('#collapse-shipping-method > div > p:nth-child(5) > textarea').type('can I get a discount  30%');

        cy.get('#button-shipping-method').click({force: true});

        cy.get('#collapse-payment-method > div > p:nth-child(4) > textarea').type('can I get a discount  30%');
        
        cy.get('[type="checkbox"]').check();

        cy.get('#button-payment-method').click({force: true});

        cy.get('#button-confirm').click({force: true});

        cy.get('#content > :nth-child(5) > a').click();

        cy.get('#input-enquiry').type('hellohellowyaar');
        cy.wait(6000)

        cy.xpath('(//a[@href="https://tutorialsninja.com/demo/index.php?route=common/home"])[3]').click();

        
        
    });
});