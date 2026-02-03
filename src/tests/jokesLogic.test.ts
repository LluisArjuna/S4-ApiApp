import { voteJoke, reportJokes } from "../scripts/jokes/jokesLogic";

import { describe, it, expect} from "vitest";

describe("voteJoke", () => {
  it("stores joke vote", () => {
    voteJoke(2, "Funny");

    expect(reportJokes.length).toBe(1);
    expect(reportJokes[0]!.score).toBe(2);
  });
});