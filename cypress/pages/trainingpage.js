

export class TrainingPage{

    categoryButton = '.category_item'
    courseTitle = '.course_title'


    getCourseTitle(){
        return this.courseTitle
    }

    clickCategory(){
        cy.get(this.categoryButton)
        .contains('QA')
        .click()

    }



}