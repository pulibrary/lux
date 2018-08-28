import { createLocalVue, mount } from "@vue/test-utils"
import DropdownMenu from "@/patterns/DropdownMenu.vue"

// create an extended `Vue` constructor
const localVue = createLocalVue()

let wrapper

describe("DropdownMenu.vue", () => {
  beforeEach(() => {
    wrapper = mount(DropdownMenu, {
      localVue,
    })
  })

  it("should be of the element type that is passed in as a prop", () => {
    expect(wrapper.find("div").exists()).toBe(true)
    expect(wrapper.find("form").exists()).toBe(false)
    // can't setProps here because the component must be regenerated to change its wrapper
    const wrapper2 = mount(DropdownMenu, {
      localVue,
      propsData: {
        type: "form",
      },
    })
    expect(wrapper2.find("div").exists()).toBe(false)
    expect(wrapper2.find("form").exists()).toBe(true)
  })

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
