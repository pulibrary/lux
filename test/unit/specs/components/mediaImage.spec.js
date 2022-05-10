import Vuex from "vuex"
import { createLocalVue, mount, shallowMount } from "@vue/test-utils"
import MediaImage from "@/elements/MediaImage.vue"

// create an extended `Vue` constructor
const localVue = createLocalVue()

let wrapper

describe("MediaImage.vue", () => {
  beforeEach(() => {
    wrapper = buildWrapper({
      src: "",
      height: "medium",
      alt: "alt text",
      cover: true,
      contain: false,
    })
  })

  function buildWrapper(props) {
    return mount(MediaImage, {
      localVue,
      context: {
        props: props,
      },
      stubs: ["lux-icon-base", "lux-icon-file"],
    })
  }

  it("displays svg icon when src is bad or non-existent", () => {
    const mediaimg = wrapper.find(".lux-media-image")
    expect(mediaimg.classes()).toContain("medium")
    let newWrapper = buildWrapper({
      src: "",
      height: "large",
      alt: "alt text",
      cover: true,
      contain: false,
    })
    expect(newWrapper.find(".lux-media-image").classes()).toContain("large")
    expect(newWrapper.find('[icon-name="file"]').exists()).toBe(true)
    expect(newWrapper.find("img").exists()).toBe(false)
  })

  it("displays image when src exists", () => {
    const wrapper2 = mount(MediaImage, {
      localVue,
      context: {
        props: {
          src: "https://picsum.photos/400/300/?random",
          height: "medium",
          alt: "alt text",
          cover: false,
          contain: true,
        },
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
