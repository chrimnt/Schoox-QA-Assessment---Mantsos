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
        // .click({multiple: true})
        // .each(($ele) => {
        //     cy.wrap($ele)
        //     .click()
        //     .children()
        //     .should('have.class','dot')
        // })
    }



}


