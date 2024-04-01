/// <reference types="cypress" />

class SignUpPage {
    // Define page elements
    static firstNameField() {
      return cy.get('[data-testid="first-name"]');
    }
  
    static lastNameField() {
      return cy.get('[data-testid="last-name"]');
    }
  
    static addressField() {
      return cy.get('[data-testid="address"]');
    }
  
    static emailField() {
      return cy.get('[data-testid="email"]');
    }
  
    static phoneNumberField() {
      return cy.get('[data-testid="phone-number"]');
    }
  
    static submitButton() {
      return cy.get('[data-testid="submit-button"]');
    }
  
    // Define page actions
    static fillSignUpForm(firstName, lastName, address, email, phoneNumber) {
      this.firstNameField().type(firstName);
      this.lastNameField().type(lastName);
      this.addressField().type(address);
      this.emailField().type(email);
      this.phoneNumberField().type(phoneNumber);
    }
  
    static submitSignUpForm() {
      this.submitButton().click();
    }
  }
  
  export default SignUpPage;
  