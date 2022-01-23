import { main } from "../../index";

describe("Lambda Handler", () => {
  it("invokes lambda handler", async () => {
    const response = await main();

    expect(response.statusCode).toBe(200);
    expect(response.body).toBe("Successfull response from Lambda!");
  });
});
