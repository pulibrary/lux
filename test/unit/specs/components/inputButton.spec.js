import { createLocalVue, mount } from "@vue/test-utils"
import InputButton from "@/elements/InputButton.vue"

// create an extended `Vue` constructor
const localVue = createLocalVue()

describe("InputButton.vue", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(InputButton, {
      localVue,
      slots: {
        default: "Apply Changes.",
      },
      propsData: {
        variation: "text",
      },
    })
  })

  it("should emit the correct event when clicked", () => {
    const button1 = wrapper.find("button")
    button1.trigger("click")
    const emitted1 = wrapper.emitted()
    expect(Object.prototype.hasOwnProperty.call(emitted1, "button-clicked")).toBe(true)
    expect(Object.prototype.hasOwnProperty.call(emitted1, "system-alert")).toBe(false)
    wrapper.setProps({ customAlertEvent: { alertStatus: "success", alertMessage: "This is my message." } })
    const button2 = wrapper.find("button")
    button2.trigger("click")
    const emitted2 = wrapper.emitted()
    expect(Object.prototype.hasOwnProperty.call(emitted2, "system-alert")).toBe(true)
  })

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
