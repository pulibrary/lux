import { createLocalVue, mount } from "@vue/test-utils"
import Banner from "@/elements/Banner.vue"

// create an extended `Vue` constructor
const localVue = createLocalVue()

describe("Banner.vue", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Banner, {
      localVue,
      slots: {
        default: "Here's some info for you.",
      },
      stubs: ["wrapper"],
    })
  })

  it("should have an alert message", () => {
    const el = wrapper.find(".lux-banner")
    expect(el.text()).toBe("Here's some info for you.")
  })

  it("should have a button when dismissible", async () => {
    wrapper.setProps({ dismissible: true })
    await localVue.nextTick()
    const button = wrapper.find("button")
    expect(wrapper.vm.dismissible).toBe(true)
    expect(button.is("button")).toBe(true)
  })

  it("should be dismissible on click", async () => {
    wrapper.setProps({ dismissible: true })
    await localVue.nextTick()
    const button = wrapper.find("button")
    button.trigger("click")
    await localVue.nextTick()
    expect(wrapper.isEmpty()).toBe(true)
  })

  it("should hide banner when hideBanner() is called", () => {
    wrapper.vm.show = true
    wrapper.vm.hideBanner()
    expect(wrapper.vm.show).toBe(false)
  })

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
