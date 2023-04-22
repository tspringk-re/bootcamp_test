import {createUser} from "@/api/create_user";

import {resetDB} from "@/api/db/reset_db";
import {databaseManager} from "@/api/db";
import {User} from "./models/user";

describe("createUser", () => {
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

  it("Create user with UserRawData", async () => {
    const userRawData = {
      name: "Taka",
      email: "xxx@email.com"
    };
    const user = User.fromRawData(userRawData);
    await user.save();
  });
  it("Create user with UserRawDataWithId", async () => {
    const userRawDataWithId = {
      id: 1,
      name: "Taka",
      email: "xxx@email.com"
    };
    const user = User.fromRawDataWithId(userRawDataWithId);
    await user.save();
  });
  it("Find user with exist user-id", async () => {
    const userRawDataWithId = {
      id: 1,
      name: "Taka",
      email: "xxx@email.com"
    };
    const user = User.fromRawDataWithId(userRawDataWithId);
    await user.save();
    const searchUser = await User.find(1);
    expect(searchUser).toEqual(user);
  });
  it("Find user with not exist user-id", async () => {
    const user = await User.find(0);
    expect(user).toBeUndefined();
  });
});
