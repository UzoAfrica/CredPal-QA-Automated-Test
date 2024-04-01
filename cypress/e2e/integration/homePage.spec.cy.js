import HomePage from '../pageObjects/HomePage.cy';


describe('Verify redirection to Home Page', () => {
    beforeEach(() => {
      HomePage.visit();
    });
  
    it('Clicking on the company logo redirects the user to the Home Page', () => {
      HomePage.clickOnLogo();
      cy.url().should('eq', 'https://www.credpal.com/');
    });


  
    it('Loads within an acceptable time frame', () => {
      const acceptableLoadTime = 3000; // Define your acceptable load time in milliseconds
      HomePage.verifyPageLoadTime(acceptableLoadTime);
    });



  
    it('Verifies Hero section is displayed correctly', () => {
      HomePage.verifyHeroSection();
    });
  
    it('Verifies Features section is displayed correctly', () => {
      HomePage.verifyFeaturesSection();
    });
  
    it('Verifies Blog section is displayed correctly', () => {
      HomePage.verifyBlogSection();
    });
  
    it('Verifies Footer section is displayed correctly', () => {
      HomePage.verifyFooterSection();
    });
  });


















// describe('CredPal Website Tests', () => {
//   beforeEach(() => {
//     HomePage.visit(); // Navigate to the homepage before each test
//   });

//   it('should verify the presence of logo on homepage', () => {
//     HomePage.getLogo().should('be.visible');
//   });

//   it('should navigate to Sign In page when Sign In button is clicked', () => {
//     HomePage.getSignInButton().click();
//     cy.url().should('include', '/login');
//   });

//   it('should sign in successfully with valid credentials', () => {
//     HomePage.getSignInButton().click();
//     SignInPage.getEmailInput().type('your-email@example.com');
//     SignInPage.getPasswordInput().type('your-password');
//     SignInPage.getSignInButton().click();
//     // Add assertions for successful sign-in
//   });

//   // Write more tests using POM approach
// });
