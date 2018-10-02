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
    const overlay = wrapper.find(".lux-overlay")
    expect(overlay.classes()).not.toContain("lux-fullscreen")
    wrapper.setProps({ fullscreen: true })
    const fs_overlay = wrapper.find(".lux-overlay")
    expect(fs_overlay.classes()).toContain("lux-fullscreen")
  })

  it("should default to medium size", () => {
    const loader = wrapper.find(".lux-loader")
    expect(loader.attributes().size).toBe("medium")
  })

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
