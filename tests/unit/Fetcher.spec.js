import { shallowMount } from "@vue/test-utils";
import Fetcher from "@/components/Fetcher";

describe("Fetcher.vue", () => {
  it("should call api method passed as prop when created", () => {
    const apiMethod = jest.fn();
    shallowMount(Fetcher, {
      propsData: { apiMethod },
    });
    expect(apiMethod).toHaveBeenCalled();
  });
});
