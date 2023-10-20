export class HomePage{

    trainingButton = '[href="/training"]'


    clickTraining(){
        cy.get(this.trainingButton).should('exist')
        .click()
    }




}