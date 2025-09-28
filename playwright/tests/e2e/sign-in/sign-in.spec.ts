import { expect, test } from "@playwright/test";
import { SignInPage } from "@pages/sign-in-page";
import { assertSignInPage } from "@asserts/sign-in-page";
import { assertHomePage, assertUsernameVisible } from "@asserts/home-page";
import { HomePage } from "@pages/home-page";
import { users } from "@test-data/users";
import type { ISignIn } from "@utils/sign-in/interfaces";

test.describe("Sign-in", () => {
  test("should successfully login", async ({ page }) => {
    const signInPage = new SignInPage(page);
    const user = users.find((u) => u.username === "Dina20") ?? ({} as ISignIn);
    await test.step("open Sign In page", async () => {
      await signInPage.goto();
      await assertSignInPage(signInPage);
    });

    await test.step("sign in with valid credentials", async () => {
      await signInPage.fill(user);
      await expect(signInPage.submitButton).toBeEnabled();
      await signInPage.submit();
    });

    await test.step("verify user logged in", async () => {
      const homePage = new HomePage(page);
      await assertHomePage(homePage);
      await assertUsernameVisible(homePage, user.username);
    });
  });
});
