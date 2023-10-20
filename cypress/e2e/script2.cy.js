import {LoginPage} from "../pages/loginpage.js"
import { CoursePage } from "../pages/coursepage.js"

const loginPage = new LoginPage
const coursePage = new CoursePage

describe('template spec', () => {
    beforeEach(() =>{
      cy.visit('http://qatest.schoox.com/login ')
    })


    it('script2',()=> {

        loginPage.setEmail('admin@schoox.com')
        loginPage.setPassword(123456)
        loginPage.clickSubmit()

        cy.visit('qatest.schoox.com/6/steps')
        
        coursePage.clickEnroll()
        coursePage.clickComplete()
        cy.get(coursePage.getProgresstext()).should(($el) => {
            expect($el).to.contain('100.00%')
        })
        
    })

})