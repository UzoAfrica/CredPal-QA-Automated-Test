/// <reference types="cypress" />

class AffiliatesPage {
    // Define page elements
    static affiliatesLink() {
      return cy.contains('Affiliates');
    }
  
    // Define page actions
    static clickAffiliatesLink() {
      this.affiliatesLink().click();
    }
  
    static verifyAffiliatesPageUrl() {
      cy.url().should('include', '/affiliates');
    }




    static affiliatesLink() {
        return cy.contains('Affiliates');
      }
    
      static benefitsSection() {
        return cy.get('[data-testid="benefits-section"]');
      }
    
      static requirementsSection() {
        return cy.get('[data-testid="requirements-section"]');
      }
    
      static contactDetailsSection() {
        return cy.get('[data-testid="contact-details-section"]');
      }
    
      // Define page actions
      static clickAffiliatesLink() {
        this.affiliatesLink().click();
      }
    
      static verifyAffiliatesPageUrl() {
        cy.url().should('include', '/affiliates');
      }
    
      static verifyBenefitsSectionExists() {
        this.benefitsSection().should('be.visible');
      }
    
      static verifyRequirementsSectionExists() {
        this.requirementsSection().should('be.visible');
      }
    
      static verifyContactDetailsSectionExists() {
        this.contactDetailsSection().should('be.visible');
      }
    }
    


  
  
  export default AffiliatesPage;
  