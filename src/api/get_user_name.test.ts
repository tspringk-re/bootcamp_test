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
    // await createUser("John Doe", "xxx@email.com");
  });

  it("create user", async () => {
    const db = await databaseManager.getInstance();
    await resetDB(db);
    await createUser("Taka", "xxx@email.com");

    const user = await fetchUser(1);
    const name = await getUserName(1);
    expect(name).toBe(user.name);
  });
  // it("should return the user's name", async () => {
  //   const user = await fetchUser(0);
  //   expect(user.name).toBe("John Doe");
  //   // const name = await getUserName(1);
  //   // expect(name).toBe("John Doe");
  // });
});