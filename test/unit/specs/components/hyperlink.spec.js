import { createLocalVue, mount } from "@vue/test-utils"
import Hyperlink from "@/elements/Hyperlink.vue"

// create an extended `Vue` constructor
const localVue = createLocalVue()

describe("Hyperlink.vue", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Hyperlink, {
      localVue,
      props: {
        href: "https://library.princeton.edu",
      },
      slots: {
        default: "I'll take you places",
      },
    })
  })

  it("should render the appropriate level heading", () => {
    wrapper.setProps({ href: "https://library.princeton.edu" })
    const link = wrapper.find("a")
    expect(link.is("a")).toBe(true)
    expect(link.text()).toBe("I'll take you places")
  })

  it("should render the appropriate class name", () => {
    wrapper.setProps({ href: "https://library.princeton.edu", variation: "button" })
    const link = wrapper.find("a")
    expect(link.is("a")).toBe(true)
    expect(link.is(".button"))
  })

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
