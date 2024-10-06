class Logout{
    newlogout(){
        cy.get('.list-inline > .dropdown > .dropdown-toggle').click();

        cy.contains('Logout').click();

        cy.get('.pull-right > .btn').click({force: true});

    }
}

export default Logout