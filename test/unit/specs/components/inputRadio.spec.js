import { createLocalVue, mount } from "@vue/test-utils"
import InputRadio from "@/elements/InputRadio.vue"

// create an extended `Vue` constructor
const localVue = createLocalVue()

describe("InputRadio.vue", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(InputRadio, {
      localVue,
      slots: {
        default: "Apply Changes.",
      },
      propsData: {
        id: "foo",
        options: [
          {
            name: "opt 1",
            value: "one",
            id: "radio-opt1",
            checked: true,
          },
          {
            name: "opt 2",
            value: "two",
            id: "radio-opt2",
            checked: false,
          },
        ],
      },
    })
  })

  it("should emit a change event with the correct value when clicked", () => {
    const radio = wrapper.findAll("input").at(1)
    radio.trigger("click")
    const emitted = wrapper.emitted()
    expect(Object.prototype.hasOwnProperty.call(emitted, "change")).toBe(true)
    expect(emitted.change[0]).toEqual(["two"])
  })

  it("should emit an inputblur event with the correct value when focus is blurred", () => {
    const radio = wrapper.findAll("input").at(1)
    radio.trigger("focus")
    radio.trigger("blur")
    const emitted = wrapper.emitted()
    expect(Object.prototype.hasOwnProperty.call(emitted, "inputblur")).toBe(true)
  })

  it("should have a label for the correct id", () => {
    const label = wrapper.findAll("label").at(1)
    expect(label.text()).toBe("two")
    expect(label.attributes().for).toBe("radio-opt2")
  })

  it("should stack if vertical is true", () => {
    const radio = wrapper.findAll(".lux-radio").at(0)
    expect(radio.classes()).toContain("lux-inline")
    wrapper.setProps({ vertical: true })
    expect(radio.classes()).not.toContain("lux-inline")
  })

  it("should display an errormessage with the proper role when passed in as a prop", () => {
    expect(wrapper.find(".lux-error").exists()).toBe(false)
    wrapper.setProps({ errormessage: "Something went wrong." })
    expect(wrapper.find(".lux-error").exists()).toBe(true)
    expect(wrapper.find(".lux-error").attributes().role).toBe("alert")
  })

  it("should display a legend if groupLabel is passed in as a prop", () => {
    expect(wrapper.find("legend").exists()).toBe(false)
    wrapper.setProps({ groupLabel: "Multiple choice:" })
    expect(wrapper.find("legend").exists()).toBe(true)
  })

  it("should have the id that is passed in as a prop", () => {
    const radio = wrapper.findAll("input").at(1)
    expect(radio.attributes().id).toBe("radio-opt2")
  })

  it("should have a fieldset wrapper if groupLabel is passed in as a prop", () => {
    expect(wrapper.find(".lux-input").is("fieldset")).toBe(false)
    // can't setProps here because the component must be regenerated to change its wrapper
    const wrapper2 = mount(InputRadio, {
      localVue,
      slots: {
        default: "Apply Changes.",
      },
      propsData: {
        id: "bar",
        groupLabel: "Multiple choice:",
        options: [
          {
            name: "opt 1",
            value: "one",
            id: "radio-opt1",
            checked: true,
          },
        ],
      },
    })
    expect(wrapper2.find(".lux-input").is("fieldset")).toBe(true)
  })

  // checked and disabled are not showing up in snapshots
  // cannot seem to test
  //
  // it("should not be clickable if disabled", () => {
  //   wrapper.setProps({ options: [
  //     {
  //       name: "opt 1",
  //       value: "one",
  //       id: "radio-opt1",
  //       disabled: true,
  //       checked: false
  //     }
  //   ] })
  //   const radio = wrapper.findAll(".radio").at(0)
  //   radio.trigger("click")
  //   expect(radio.attributes().checked).toBe(false)
  // })

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
