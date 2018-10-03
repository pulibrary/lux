import Vuex from "vuex"
import { createLocalVue, mount, shallowMount } from "@vue/test-utils"
import MediaImage from "@/elements/MediaImage.vue"

// create an extended `Vue` constructor
const localVue = createLocalVue()

let wrapper

describe("MediaImage.vue", () => {
  beforeEach(() => {
    wrapper = mount(MediaImage, {
      localVue,
      propsData: {
        src: "",
        height: "medium",
        alt: "alt text",
        cover: true,
        contain: false,
      },
      stubs: ["lux-icon-base", "lux-icon-file"],
    })
  })

  it("displays svg icon when src is bad or non-existent", () => {
    const mediaimg = wrapper.find(".lux-media-image")
    expect(mediaimg.classes()).toContain("medium")
    wrapper.setProps({ height: "large" })
    expect(mediaimg.classes()).toContain("large")
    const svg = wrapper.find('[name="pul-icon-file"]')
    expect(wrapper.find('[icon-name="file"]').exists()).toBe(true)
    expect(wrapper.find("img").exists()).toBe(false)
  })

  it("displays image when src exists", () => {
    const wrapper2 = mount(MediaImage, {
      localVue,
      propsData: {
        src: "https://picsum.photos/400/300/?random",
        height: "medium",
        alt: "alt text",
        cover: false,
        contain: true,
      },
    })
    expect(wrapper2.find('[name="pul-icon-file"]').exists()).toBe(false)
    expect(wrapper2.find("img").exists()).toBe(true)
    const img = wrapper2.find("img")
    expect(img.attributes().alt).toBe("alt text")
    expect(img.classes()).toContain("lux-contain")
  })

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
