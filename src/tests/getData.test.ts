import { getData } from "../scripts/asyncronApiCall";
import { describe, it, expect, vi, beforeEach } from "vitest";

beforeEach(() => {
  vi.restoreAllMocks();
});

describe("getData", () => {
  it("returns JSON data when response is ok", async () => {
    const mockData = { name: "Lluis", age: 22 };

    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockData),
    } as Response);

    const result = await getData("/api/succes");

    expect(fetch).toHaveBeenCalledOnce();
    expect(result).toEqual(mockData);
  });

  it("throws error when response is not ok", async () => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 404,
    } as Response);

    await expect(getData("/api/missing")).rejects.toThrow(
      "Response status: 404"
    );
  });
});
