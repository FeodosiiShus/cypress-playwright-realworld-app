import { expect } from "@playwright/test";
import { SignInPage } from "../pages/sign-in-page";

export async function assertSignInPage(signInPage: SignInPage) {
  await expect(signInPage.heading).toBeVisible();
  await expect(signInPage.submitButton).toBeVisible();
  await expect(signInPage.username).toBeVisible();
  await expect(signInPage.password).toBeVisible();
}
