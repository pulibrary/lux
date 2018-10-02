import { createLocalVue, mount } from "@vue/test-utils"
import InputCheckbox from "@/elements/InputCheckbox.vue"

// create an extended `Vue` constructor
const localVue = createLocalVue()

describe("InputCheckbox.vue", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(InputCheckbox, {
      localVue,
      slots: {
        default: "Apply Changes.",
      },
      propsData: {
        options: [
          {
            name: "opt 1",
            value: "one",
            id: "checkbox-opt1",
            checked: true,
          },
          {
            name: "opt 2",
            value: "two",
            id: "checkbox-opt2",
            checked: false,
          },
        ],
      },
    })
  })

  it("should emit a change event with the correct value when clicked", () => {
    const checkbox = wrapper.findAll("input").at(1)
    checkbox.trigger("click")
    const emitted = wrapper.emitted()
    expect(Object.prototype.hasOwnProperty.call(emitted, "change")).toBe(true)
    expect(emitted.change[0]).toEqual([true])
  })

  it("should emit an inputblur event with the correct value when focus is blurred", () => {
    const checkbox = wrapper.findAll("input").at(1)
    checkbox.trigger("focus")
    checkbox.trigger("blur")
    const emitted = wrapper.emitted()
    expect(Object.prototype.hasOwnProperty.call(emitted, "inputblur")).toBe(true)
  })

  it("should have a label for the correct id", () => {
    const label = wrapper.findAll("label").at(1)
    expect(label.text()).toBe("two")
    expect(label.attributes().for).toBe("checkbox-opt2")
  })

  it("should stack if vertical is true", () => {
    const checkbox = wrapper.findAll(".lux-checkbox").at(0)
    expect(checkbox.classes()).toContain("lux-inline")
    wrapper.setProps({ vertical: true })
    expect(checkbox.classes()).not.toContain("lux-inline")
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
    const checkbox = wrapper.findAll("input").at(1)
    expect(checkbox.attributes().id).toBe("checkbox-opt2")
  })

  it("should have a fieldset wrapper if groupLabel is passed in as a prop", () => {
    expect(wrapper.find(".lux-input").is("fieldset")).toBe(false)
    // can't setProps here because the component must be regenerated to change its wrapper
    const wrapper2 = mount(InputCheckbox, {
      localVue,
      slots: {
        default: "Apply Changes.",
      },
      propsData: {
        groupLabel: "Multiple choice:",
        options: [
          {
            name: "opt 1",
            value: "one",
            id: "checkbox-opt1",
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
  //       id: "checkbox-opt1",
  //       disabled: true,
  //       checked: false
  //     }
  //   ] })
  //   const checkbox = wrapper.findAll(".checkbox").at(0)
  //   checkbox.trigger("click")
  //   expect(checkbox.attributes().checked).toBe(false)
  // })

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
