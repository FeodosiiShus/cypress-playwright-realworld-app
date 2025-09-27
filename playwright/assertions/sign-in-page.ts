import { expect } from "@playwright/test";
import { SignInPage } from "../pages/sign-in-page";

export async function assertHeadingVisible(signInPage: SignInPage) {
  await expect(signInPage.heading).toBeVisible();
}
