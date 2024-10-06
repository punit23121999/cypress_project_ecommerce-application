class Project{
    mainfunction(){
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
         cy.get('.pull-right > .btn').click({force: true});
         cy.xpath('(//a[@href="https://tutorialsninja.com/demo/index.php?route=common/home"])[3]').click();
 
    }
}
export default Project;