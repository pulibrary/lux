import { createLocalVue, mount } from "@vue/test-utils"
import Card from "@/elements/Card.vue"

// create an extended `Vue` constructor
const localVue = createLocalVue()

describe("Card.vue", () => {
  let wrapper

  function buildWrapper(props) {
    return mount(Card, {
      localVue,
      context: {
        props: props,
      },
      stubs: ["lux-icon-base", "lux-icon-file"],
    })
  }

  it("should have the appropriate class when selected", () => {
    const wrapper = buildWrapper({ selected: true })
    const card = wrapper.find(".lux-card")
    expect(card.is(".lux-card-selected")).toBe(true)
  })

  it("should have the appropriate class when editied", () => {
    const wrapper = buildWrapper({ edited: true })
    const card = wrapper.find(".lux-card")
    expect(card.is(".lux-card-edited")).toBe(true)
  })

  it("should have the appropriate class when disabled", () => {
    const wrapper = buildWrapper({ disabled: true })
    const card = wrapper.find(".lux-card")
    expect(card.is(".lux-card-disabled")).toBe(true)
  })

  it("should have the appropriate class when sized", () => {
    const wrapper = buildWrapper({ size: "full-width" })
    const card = wrapper.find(".lux-card")
    expect(card.is(".full-width")).toBe(true)
  })

  it("has the expected html structure", () => {
    const wrapper = buildWrapper({ id: "MyCard" })
    expect(wrapper.element).toMatchSnapshot()
  })
})
