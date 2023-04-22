import {getUserName} from "@/api/get_user_name";
import {fetchUser} from "@/api/fetch_user";

import {createUser} from "@/api/create_user";

import {resetDB} from "@/api/db/reset_db";
import {databaseManager} from "@/api/db";
import {User} from "./models/user";

describe("getUserName", () => {
  beforeEach(async () => {
    const db = await databaseManager.getInstance();
    await resetDB(db);
  });

  // createUser Test
  it("Create user with valid arguments", async () => {
    await createUser("Taka", "xxx@email.com");
  });

  it("Create user with invalid arguments", async () => {
    await createUser("", "");
  });

  // fetchUser Test
  it("Fetch user with exist user-id", async () => {
    await createUser("Taka", "xxx@email.com");
    const user = await fetchUser(1);
    expect(user).toBeInstanceOf(User);
  });
  it("fetch user with not exist user-id", async () => {
    const user = await fetchUser(0);
    expect(user).toBeInstanceOf(Error);
  });

  // getUserName Test
  it("Get user name with exist user-id", async () => {
    await createUser("Taka", "xxx@email.com");
    const name = await getUserName(1);
    expect(name).toBe("Taka");
  });
  it("Get user name with not exist user-id", async () => {
    const name = await getUserName(0);
    expect(name).toBeInstanceOf(Error);
  });
});
