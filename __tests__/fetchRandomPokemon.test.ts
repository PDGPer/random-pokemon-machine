import fetchRandomPokemon from "../src/fetch";
import { test, expectTypeOf } from "vitest";

test("fetchRandomPokemon returns a string", async () => {
    const result = await fetchRandomPokemon();

    console.log(
        `Pokemon API returned "${result}". The typeOf the result is "${typeof result}"`
    );

    expectTypeOf(result).toBeString();
});
