
import AffiliatesPage from '../pageObjects/AffiliatesPage.cy';


describe('Affiliates Page', () => {
  it('Redirects to Affiliates Page when "Affiliates" link is clicked', () => {
    // Visit the Home Page
    cy.visit('https://www.credpal.com/');

    // Click on the "Affiliates" link in the navigation menu
    AffiliatesPage.clickAffiliatesLink();

    // Verify that the URL matches the Affiliates Page URL
    AffiliatesPage.verifyAffiliatesPageUrl();
  });


    it('Contains relevant information about the affiliate program', () => {
      // Visit the Affiliates Page
      cy.visit('https://www.credpal.com/');
      AffiliatesPage.clickAffiliatesLink();
  
      // Verify that the URL matches the Affiliates Page URL
      AffiliatesPage.verifyAffiliatesPageUrl();
  
      // Verify that the benefits section exists
      AffiliatesPage.verifyBenefitsSectionExists();
  
      // Verify that the requirements section exists
      AffiliatesPage.verifyRequirementsSectionExists();
  
      // Verify that the contact details section exists
      AffiliatesPage.verifyContactDetailsSectionExists();
    });
  });
