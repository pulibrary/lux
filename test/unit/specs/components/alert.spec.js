import { createLocalVue, mount } from "@vue/test-utils"
import Alert from "@/elements/Alert.vue"

// create an extended `Vue` constructor
const localVue = createLocalVue()

const wrapper = mount(Alert, {
  localVue,
  slots: {
    default: "Here's some dismissible info for you.",
  },
})

describe("Alert.vue", () => {
  it("should have an alert message", () => {
    const el = wrapper.find(".alert")
    expect(el.text()).toBe("Here's some dismissible info for you.")
  })

  it("should have a button when dismissible", () => {
    wrapper.setProps({ dismissible: true })
    const button = wrapper.find("button")
    expect(wrapper.vm.dismissible).toBe(true)
    expect(button.is("button")).toBe(true)
  })

  it("should be dismissible on click", () => {
    wrapper.setProps({ dismissible: true })
    const button = wrapper.find("button")
    button.trigger("click")
    expect(wrapper.isEmpty()).toBe(true)
  })
})
