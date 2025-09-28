import { expect, test } from "@playwright/test";
import { SignInPage } from "@pages/sign-in-page";
import { assertSignInPage } from "@asserts/sign-in-page";
import { assertHomePage, assertUsernameVisible } from "@asserts/home-page";
import { HomePage } from "@pages/home-page";

test.describe("Sign-in", () => {
  test("successfully login", async ({ page }) => {
    const signInPage = new SignInPage(page);

    await test.step("open Sign In page", async () => {
      await signInPage.goto();
      await assertSignInPage(signInPage);
    });

    await test.step("sign in with valid credentials", async () => {
      await signInPage.fill({ username: "Dina20", password: "s3cret" });
      await expect(signInPage.submitButton).toBeEnabled();
      await signInPage.submit();
    });

    await test.step("verify user logged in", async () => {
      const homePage = new HomePage(page);
      await assertHomePage(homePage);
      await assertUsernameVisible(homePage, "Dina20");
    });
  });
});
