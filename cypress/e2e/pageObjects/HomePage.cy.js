/// <reference types="cypress" />


class HomePage {
    visit() {
      cy.visit('https://www.credpal.com/');
    }
  
    getLogo() {
      return cy.get('.navbar-brand img');
    }
  

    clickOnLogo() {
        this.getLogo().click();
      }

      verifyPageLoadTime(acceptableLoadTime) {
        cy.window().then((win) => {
          const pageLoadTime = win.performance.timing.domContentLoadedEventEnd - win.performance.timing.navigationStart;
          cy.log(`Page Load Time: ${pageLoadTime}ms`);
          expect(pageLoadTime).to.be.lessThan(acceptableLoadTime);
        });
      }

      // Function to verify the presence and visibility of the hero section
  verifyHeroSection() {
    cy.get('.hero-section').should('be.visible');
  }

  // Function to verify the presence and visibility of the features section
  verifyFeaturesSection() {
    cy.get('.features-section').should('be.visible');
  }

  // Function to verify the presence and visibility of the Blog section
  verifyBlogSection() {
    cy.get('.blog-section').should('be.visible');
  }

  // Function to verify the presence and visibility of the Footer section
  verifyFooterSection() {
    cy.get('.footer-section').should('be.visible');
  }

  }
  
  export default new HomePage();
  