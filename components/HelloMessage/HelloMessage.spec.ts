import { describe, test, expect } from "vitest";
// @ts-ignore
import { mount } from "@vue/test-utils";
import HelloMessage from "./HelloMessage.vue";

describe("HelloMessage", () => {
  test("メッセージが表示される", () => {
    const wrapper = mount(HelloMessage, {
      props: {
        name: "World",
      },
    });
    expect(wrapper.text()).toContain("Hello, World!");
  });
});
