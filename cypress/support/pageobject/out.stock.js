class Outstock{
    iphone(){
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


    }
}
export default Outstock