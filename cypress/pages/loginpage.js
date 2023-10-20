

export class LoginPage{

    emailName = '[type="email"]'
    passName = '[type="password"]'
    submitButton = '[type="submit"]'

    setEmail(email){
        cy.get(this.emailName).should('exist')
        .click()
        .type(email)
    }

    setPassword(pass){
        cy.get(this.passName)
        .click()
        .type(pass)
    }

    clickSubmit(){
        cy.get(this.submitButton)
        .click()
    }



}