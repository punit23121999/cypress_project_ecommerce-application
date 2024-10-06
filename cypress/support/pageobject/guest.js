class Guest{
    newguest(){
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
    }
}
export default Guest