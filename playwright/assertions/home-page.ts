import { HomePage } from "@pages/home-page";
import { expect } from "@playwright/test";

export async function assertHomePage(homePage: HomePage) {
  await expect(homePage.bankAccounts).toBeVisible();
  await expect(homePage.home).toBeVisible();
  await expect(homePage.myAccount).toBeVisible();
  await expect(homePage.notifications).toBeVisible();
}

export async function assertUsernameVisible(homePage: HomePage, username: string) {
  await expect(homePage.username).toContainText(username);
}
