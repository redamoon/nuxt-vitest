import { describe, it, expect, vi } from "vitest";
import { regex } from "./regex";

describe("matchRegex", () => {
  it('Telのテスト', () => {
    const result = regex('tel:0000');
    expect(result)
  });
  // const regexPattern = /^(http|https|tel):\/\//
  // it('tel:', () => {
  //   const mock = vi.fn()
  //   mock.mockReturnValue('tel:0000')
  //   mock()
  // })
})
