import { AbstractPage } from "@pages/abstract-page";
import type { Locator, Page } from "@playwright/test";

export class HomePage extends AbstractPage {
  readonly #username: Locator;
  readonly #home: Locator;
  readonly #myAccount: Locator;
  readonly #bankAccounts: Locator;
  readonly #notifications: Locator;

  constructor(page: Page) {
    super(page);
    this.#username = page.locator('[data-test="sidenav-username"]');
    this.#home = page.locator('[data-test="sidenav-home"]');
    this.#myAccount = page.locator('[data-test="sidenav-user-settings"]');
    this.#bankAccounts = page.locator('[data-test="sidenav-bankaccounts"]');
    this.#notifications = page.locator('[data-test="sidenav-notifications"]');
  }

  get username() {
    return this.#username;
  }

  get home() {
    return this.#home;
  }

  get myAccount() {
    return this.#myAccount;
  }

  get bankAccounts() {
    return this.#bankAccounts;
  }

  get notifications() {
    return this.#notifications;
  }
}
