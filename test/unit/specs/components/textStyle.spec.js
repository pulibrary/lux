import { createLocalVue, mount } from "@vue/test-utils"
import TextStyle from "@/elements/TextStyle.vue"

// create an extended `Vue` constructor
const localVue = createLocalVue()

describe("TextStyle.vue", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(TextStyle, {
      localVue,
      slots: {
        default: "foo",
      },
    })
  })

  it("should be of the element type that is passed in as a prop", () => {
    expect(wrapper.find("p").exists()).toBe(true)
    expect(wrapper.find("span").exists()).toBe(false)
    // can't setProps here because the component must be regenerated to change its wrapper
    const wrapper2 = mount(TextStyle, {
      localVue,
      slots: {
        default: "foo",
      },
      propsData: {
        type: "span",
      },
    })
    expect(wrapper2.find("p").exists()).toBe(false)
    expect(wrapper2.find("span").exists()).toBe(true)
  })

  it("should render slotted text", () => {
    const text = wrapper.find("p")
    expect(text.text()).toBe("foo")
  })

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
