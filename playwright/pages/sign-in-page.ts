import type { Locator, Page } from "@playwright/test";
import { AbstractPage } from "@pages/abstract-page";

export class SignInPage extends AbstractPage {
  readonly #heading: Locator;
  readonly #username: Locator;
  readonly #password: Locator;
  readonly #submit: Locator;

  constructor(page: Page) {
    super(page);
    this.#heading = page.getByRole("heading", { name: "Sign in" });
    this.#username = page.getByRole("textbox", { name: "Username" });
    this.#password = page.getByRole("textbox", { name: "Password" });
    this.#submit = page.getByRole("button", { name: "SIGN IN" });
  }

  async goto() {
    return super.goto("/signin");
  }

  get heading() {
    return this.#heading;
  }

  get username() {
    return this.#username;
  }

  get password() {
    return this.#password;
  }

  async fillUsername(username: string) {
    await this.#username.click();
    await this.#username.fill(username);
  }

  async fillPassword(password: string) {
    await this.#password.click();
    await this.#password.fill(password);
  }

  async fill(signInData: { username: string; password: string }) {
    await this.fillUsername(signInData.username);
    await this.fillPassword(signInData.password);
  }

  get submitButton() {
    return this.#submit;
  }

  async submit() {
    await this.#submit.click();
  }
}
