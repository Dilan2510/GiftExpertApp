import { getGifts } from "../../src/helpers/getGifts";

/* eslint-disable no-undef */
describe("testing in component getGifts", () => {
  test("debe de return  la data del api ", async () => {
    const gif = await getGifts();
    expect(gif.length).toBeGreaterThan(0);
    expect(gif[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      img: expect.any(String),
    });
  });
});
