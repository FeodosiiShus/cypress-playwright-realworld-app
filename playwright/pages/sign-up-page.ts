import { AbstractPage } from "@pages/abstract-page";
import { type Locator, Page } from "@playwright/test";
import { ISignUp } from "@utils/sign-up/interfaces";

export class SignUpPage extends AbstractPage {
  readonly #firstName: Locator;
  readonly #lastName: Locator;
  readonly #username: Locator;
  readonly #password: Locator;
  readonly #confirmPassword: Locator;
  readonly #signUp: Locator;
  readonly #heading: Locator;

  constructor(page: Page) {
    super(page);
    this.#firstName = page.getByRole("textbox", { name: "First Name" });
    this.#lastName = page.getByRole("textbox", { name: "Last Name" });
    this.#username = page.getByRole("textbox", { name: "Username" });
    this.#password = page.getByRole("textbox", { name: "Password", exact: true });
    this.#confirmPassword = page.getByRole("textbox", { name: "Confirm Password", exact: true });
    this.#signUp = page.getByRole("button", { name: "SIGN UP" });
    this.#heading = page.getByRole("heading", { name: "Sign Up" });
  }

  async goto() {
    return super.goto("/signup");
  }

  async fill(signUp: ISignUp) {
    await this.#firstName.click();
    await this.#firstName.fill(signUp.firstName);

    await this.#lastName.click();
    await this.#lastName.fill(signUp.lastName);

    await this.#username.click();
    await this.#username.fill(signUp.username);

    await this.#password.click();
    await this.#password.fill(signUp.password);

    await this.#confirmPassword.click();
    await this.#confirmPassword.fill(signUp.password);
  }

  async submit() {
    await this.#signUp.click();
  }

  get heading() {
    return this.#heading;
  }
}
