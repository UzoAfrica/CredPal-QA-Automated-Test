import SignUpPage from "../pageObjects/SignUpPage.cy";

describe('SignUp Page', () => {
  it('Fills out the signup form with valid data', () => {
    // Visit the signup page
    cy.visit('https://www.credpal.com/signup');

    // Fill out the signup form with valid data
    SignUpPage.fillSignUpForm(
      'John',
      'Doe',
      '123 Main St',
      'john.doe@example.com',
      '1234567890'
    );

    // Submit the signup form
    SignUpPage.submitSignUpForm();

    // Add assertions here if needed
  });
});
