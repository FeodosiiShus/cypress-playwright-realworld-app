import { test } from "@playwright/test";
import { SignInPage } from "@pages/sign-in-page";
import { assertHeadingVisible } from "@asserts/sign-in-page";

test.describe("Sign-in", () => {
  test("successfully login", async ({ page }) => {
    const signInPage = new SignInPage(page);
    await signInPage.goto();
    await assertHeadingVisible(signInPage);
  });
});
