import {LoginPage} from "../pages/loginpage.js"
import {HomePage} from "../pages/homepage.js"
import { TrainingPage } from "../pages/trainingpage.js"

const trainingPage = new TrainingPage
const homePage = new HomePage
const loginPage = new LoginPage

describe('template spec', () => {
  beforeEach(() =>{
    cy.visit('http://qatest.schoox.com/login ')
  })

  it('script1',()=> {

    loginPage.setEmail('admin@schoox.com')
    loginPage.setPassword(123456)
    loginPage.clickSubmit()

    homePage.clickTraining()
    
    trainingPage.clickCategory()
    cy.get(trainingPage.getCourseTitle()).should(($lis) => {
      expect($lis).to.have.length(4)
      expect($lis.eq(0)).to.contain('QA course')
      expect($lis.eq(1)).to.contain('ΒΑ course')
      expect($lis.eq(2)).to.contain('Μάθημα για τους Devs')
      expect($lis.eq(3)).to.contain('Μάθημα για automation')
    })
  })


})