export class CoursePage{


    enrollButton = '.enroll'
    completeButton = '.course_steps_right'
    progressText = '.top_course_progress'


    getProgresstext(){
        return this.progressText
    }

    clickEnroll(){
        cy.get(this.enrollButton)
        .click()
    }

    clickComplete(){
        cy.get(this.completeButton)
        .eq(0).click()
        cy.get(this.completeButton)
        .eq(1).click()
        cy.get(this.completeButton)
        .eq(2).click()
        cy.get(this.completeButton)
        .eq(3).click()
        cy.get('.dot_completed')
        .should('have.length', 4)
    }



}


