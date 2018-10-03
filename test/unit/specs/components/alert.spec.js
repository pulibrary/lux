import { createLocalVue, mount } from "@vue/test-utils"
import Alert from "@/elements/Alert.vue"

// create an extended `Vue` constructor
const localVue = createLocalVue()

describe("Alert.vue", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Alert, {
      localVue,
      slots: {
        default: "Here's some info for you.",
      },
      // if props are set here, buttons aren't rendered
      // props: {
      //   dismissible: true,
      // }
    })
  })

  it("should have an alert message", () => {
    const el = wrapper.find(".lux-alert")
    expect(el.text()).toBe("Here's some info for you.")
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

  it("should be accessible", () => {
    const el = wrapper.find(".lux-alert")
    expect(el.attributes().role).toBe("alert")
  })

  it("should default to info type", () => {
    expect(wrapper.vm.isInfo).toBe(true)
  })

  it("should hide alert when hideAlert() is called", () => {
    expect(wrapper.vm.show).toBe(true)
    wrapper.vm.hideAlert()
    expect(wrapper.vm.show).toBe(false)
  })

  it("should hide after 2 seconds when autoclear is true", () => {
    wrapper.setProps({ autoclear: true })
    const el = wrapper.find(".lux-alert")
    expect(wrapper.vm.show).toBe(true)
    // wait 3 seconds and see if it's hidden
    setTimeout(() => {
      expect(wrapper.vm.show).toBe(false)
    }, 3000)
  })

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
