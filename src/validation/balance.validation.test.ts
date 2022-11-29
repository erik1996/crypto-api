import { getBalance } from "./balance.validation";

describe("GetBalance Validation", () => {
  it("Error should be undefined", () => {
    const { error } = getBalance.validate({
      address: ["0xBcFE52fEF72A70AD09245e40AEAcCE4B1e851320"],
    });
    expect(error).toBeUndefined();
  });

  it("Error should be defined", () => {
    const { error } = getBalance.validate({});
    expect(error).toBeDefined();
  });
});
