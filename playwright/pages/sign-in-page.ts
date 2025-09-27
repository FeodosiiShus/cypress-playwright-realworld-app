import type { Locator, Page } from "@playwright/test";

export class SignInPage {
  readonly page: Page;
  readonly #heading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.#heading = page.getByRole("heading", { name: "Sign in" });
  }

  async goto() {
    await this.page.goto("/");
  }

  get heading() {
    return this.#heading;
  }
}
