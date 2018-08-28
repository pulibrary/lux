import { createLocalVue, mount } from "@vue/test-utils"
import Loader from "@/elements/Loader.vue"

// create an extended `Vue` constructor
const localVue = createLocalVue()

describe("Loader.vue", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Loader, {
      localVue,
    })
  })

  it("should be full screen when fullscreen prop is true", () => {
    const overlay = wrapper.find(".overlay")
    expect(overlay.classes()).not.toContain("fullscreen")
    wrapper.setProps({ fullscreen: true })
    const fs_overlay = wrapper.find(".overlay")
    expect(fs_overlay.classes()).toContain("fullscreen")
  })

  it("should default to medium size", () => {
    const loader = wrapper.find(".loader")
    expect(loader.attributes().size).toBe("medium")
  })

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
