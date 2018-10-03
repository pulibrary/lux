import { createLocalVue, mount } from "@vue/test-utils"
import Card from "@/elements/Card.vue"

// create an extended `Vue` constructor
const localVue = createLocalVue()

describe("Card.vue", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Card, {
      localVue,
      props: {
        id: "MyCard",
      },
    })
  })

  it("should have the appropriate class when selected", () => {
    wrapper.setProps({ selected: true })
    const card = wrapper.find(".lux-card")
    expect(card.is(".lux-card-selected")).toBe(true)
  })

  it("should have the appropriate class when editied", () => {
    wrapper.setProps({ edited: true })
    const card = wrapper.find(".lux-card")
    expect(card.is(".lux-card-edited")).toBe(true)
  })

  it("should have the appropriate class when disabled", () => {
    wrapper.setProps({ disabled: true })
    const card = wrapper.find(".lux-card")
    expect(card.is(".lux-card-disabled")).toBe(true)
  })

  it("should emit a card-click event when select() is called", () => {
    wrapper.vm.select()
    const emitted = wrapper.emitted()
    expect(Object.prototype.hasOwnProperty.call(emitted, "card-click")).toBe(true)
  })

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
