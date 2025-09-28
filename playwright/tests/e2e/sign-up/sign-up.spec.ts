import test, { expect } from "@playwright/test";
import { SignUpPage } from "@pages/sign-up-page";
import { generateSignUp } from "@utils/sign-up/generate-sign-up";
import { SignInPage } from "@pages/sign-in-page";
import { assertSignInPage } from "@asserts/sign-in-page";

test.describe("Sign Up", () => {
  test("should successfully register", async ({ page }) => {
    const signUpPage = new SignUpPage(page);
    const signInPage = new SignInPage(page);

    await test.step("open Sign Up page", async () => {
      await signUpPage.goto();
      await expect(signUpPage.heading).toBeVisible();
    });

    await test.step("fill sign up info", async () => {
      const signUpInfo = generateSignUp();
      await signUpPage.fill(signUpInfo);
      await signUpPage.submit();
    });
    
    await test.step("login with new user", async () => {
      await assertSignInPage(signInPage);
    })
  });
});
