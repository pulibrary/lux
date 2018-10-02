import { createLocalVue, mount } from "@vue/test-utils"
import InputSelect from "@/elements/InputSelect.vue"

// create an extended `Vue` constructor
const localVue = createLocalVue()

describe("InputSelect.vue", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(InputSelect, {
      localVue,
      propsData: {
        id: "foo",
        value: "two",
        options: [
          {
            name: "opt 1",
            value: "one",
            id: "select-opt1",
          },
          {
            name: "opt 2",
            value: "two",
            id: "select-opt2",
          },
        ],
      },
    })
  })

  it("should emit a change event with the correct value when changed", () => {
    const select = wrapper.find("select")
    select.trigger("change")
    const emitted = wrapper.emitted()
    expect(Object.prototype.hasOwnProperty.call(emitted, "change")).toBe(true)
    expect(emitted.change[0]).toEqual(["two"])
  })

  it("should emit an inputblur event with the correct value when focus is blurred", () => {
    const select = wrapper.find("select")
    select.trigger("focus")
    select.trigger("blur")
    const emitted = wrapper.emitted()
    expect(Object.prototype.hasOwnProperty.call(emitted, "inputblur")).toBe(true)
  })

  it("should have a label if passed in", () => {
    expect(wrapper.find("label").exists()).toBe(false)
    wrapper.setProps({ label: "Multiple choice:" })
    expect(wrapper.find("label").exists()).toBe(true)
    expect(wrapper.find("label").text()).toBe("Multiple choice:")
  })

  it("should display an errormessage with the proper role when passed in as a prop", () => {
    expect(wrapper.find(".lux-error").exists()).toBe(false)
    wrapper.setProps({ errormessage: "Something went wrong." })
    expect(wrapper.find(".lux-error").exists()).toBe(true)
    expect(wrapper.find(".lux-error").attributes().role).toBe("alert")
  })

  it("should have the value that is passed in as a prop", () => {
    const select = wrapper.findAll("option").at(1)
    expect(select.attributes().value).toBe("two")
  })

  // it("snakeToTitleCase method should return all CAPS given a snake_case string", () => {
  //   expect(wrapper.vm.snakeToTitleCase("snake_case_example")).toBe("SNAKECASEEXAMPLE")
  // })

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
