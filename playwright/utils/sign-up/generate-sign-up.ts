import type { ISignUp } from "./interfaces";

export const generateSignUp = (): ISignUp => ({
  firstName: "Test",
  lastName: "New",
  username: "testuser" + Math.floor(1 + Math.random() * 10000),
  password: "qwerty123",
});
