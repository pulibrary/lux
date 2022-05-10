import { createLocalVue, mount } from "@vue/test-utils"
import Heading from "@/elements/Heading.vue"

// create an extended `Vue` constructor
const localVue = createLocalVue()

describe("Heading.vue", () => {
  let wrapper

  function buildWrapper(props) {
    return mount(Heading, {
      localVue,
      slots: {
        default: "Here's a heading.",
      },
      context: {
        props: props,
      },
    })
  }

  it("should render the appropriate level heading", () => {
    let wrapper = buildWrapper({})
    const heading1 = wrapper.find("h1")
    expect(heading1.is("h1")).toBe(true)
    wrapper = buildWrapper({ level: "h3" })
    const heading3 = wrapper.find("h3")
    expect(heading3.is("h3")).toBe(true)
    expect(heading3.text()).toBe("Here's a heading.")
  })

  it("should render the appropriate class name", () => {
    let wrapper = buildWrapper({ level: "h3", size: "h2" })
    const heading3 = wrapper.find("h3")
    expect(heading3.is("h3")).toBe(true)
    expect(heading3.is(".h2"))
  })

  it("should display the slotted text", () => {
    let wrapper = buildWrapper({ level: "h2" })
    const heading2 = wrapper.find("h2")
    expect(heading2.is("h2")).toBe(true)
    expect(heading2.text()).toBe("Here's a heading.")
  })

  it("has the expected html structure", () => {
    let wrapper = buildWrapper({})
    expect(wrapper.element).toMatchSnapshot()
  })
})
