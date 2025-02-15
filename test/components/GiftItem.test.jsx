import { render, screen } from "@testing-library/react";
import { GiftItem } from "../../src/components/GiftItem";

describe("testing in component GiftItem", () => {
  const name = "Dragon Ball";
  const url =
    "https://media2.giphy.com/media/26CSE3WZrMsVO/giphy.gif?cid=13c727d5ybdj0k9pc7plv75ayd5xu2srkaje6x1mz10n4ci3&ep=v1_gifs_search&rid=giphy.gif&ct=g";
  test("add match with  the Snapshot ", () => {
    const { container } = <GiftItem title={name} img={url} />;
    expect(container).toMatchSnapshot();
  });
  test("testing img from value Equal in const ", () => {
    render(<GiftItem title={name} img={url} />);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(name);
  });
  test("testing in <h5> from title ", () => {
    render(<GiftItem title={name} img={url} />);
    expect(screen.getByRole("heading", { level: 5 }).innerHTML).toBe(name);
  });
});
