import { functions } from "./functions";

const initDatabase = () => console.log("Database init");
const closeDatabase = () => console.log("Database closed");

beforeEach(() => initDatabase());
afterEach(() => closeDatabase());

test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2 + 2 not equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test("Should return a null value", () => {
  expect(functions.isNull()).toBeNull();
});

test("Should be falsy", () => {
  expect(functions.checkValue(0)).toBeFalsy();
  expect(functions.checkValue(null)).toBeFalsy();
  expect(functions.checkValue(undefined)).toBeFalsy();
});

test("Should return the same value", () => {
  expect(functions.checkValue(5)).toBe(5);
});

test("Return a user", () => {
  expect(functions.createUser("Javier", "Garcia", 38)).toEqual({
    firstname: "Javier",
    lastname: "Garcia",
    age: 38,
  });
});

test("Should be less than 100", () => {
  expect(functions.sumResultMax10(99, 24)).toBeLessThanOrEqual(100);
  expect(functions.sumResultMax10(1, 2)).toBeLessThanOrEqual(100);
});

test("Regex. There is no i in team", () => {
  expect("team").not.toMatch(/I/i);
});

test("Arrays. Admin should be in usernames", () => {
  const usernames = ["Javi", "Ginny", "Azzu", "admin"];
  expect(usernames).toContain("admin");
});

describe("fetchUser", () => {
  it("returns a user object when given a valid ID", async () => {
    const user = await functions.fetchUser("1");
    expect(user).toBeDefined();
    expect(user.name).toBe("Leanne Graham");
    expect(user.email).toBe("Sincere@april.biz");
  });

  it("returns an error when given an invalid ID", async () => {
    const invalidId = "invalid";
    const expectedError = new Error("Request failed with status code 404");

    try {
      await functions.fetchUser(invalidId);
    } catch (error) {
      expect(error).toEqual(expectedError);
    }
  });
});

describe("Travery previous exercises tests", () => {
  it("returns a reverse tring", () => {
    expect(functions.reverseString("abcd")).toBe("dcba");
  });
});
