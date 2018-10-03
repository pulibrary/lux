import { createLocalVue, mount } from "@vue/test-utils"
import InputText from "@/elements/InputText.vue"

// create an extended `Vue` constructor
const localVue = createLocalVue()

describe("InputText.vue", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(InputText, {
      localVue,
      propsData: {
        id: "foo",
        value: "bar",
      },
    })
  })

  it("should emit an input event with the correct value when text is input", () => {
    const input = wrapper.find("input")
    input.trigger("input")
    const emitted = wrapper.emitted()
    expect(Object.prototype.hasOwnProperty.call(emitted, "input")).toBe(true)
    expect(emitted.input[0]).toEqual(["bar"])
  })

  it("should emit an inputblur event with the correct value when focus is blurred", () => {
    const input = wrapper.find("input")
    input.trigger("focus")
    input.trigger("blur")
    const emitted = wrapper.emitted()
    expect(Object.prototype.hasOwnProperty.call(emitted, "inputblur")).toBe(true)
  })

  it("should have a label if passed in", () => {
    expect(wrapper.find("label").exists()).toBe(false)
    wrapper.setProps({ label: "Fill in the blank:" })
    expect(wrapper.find("label").exists()).toBe(true)
    expect(wrapper.find("label").text()).toBe("Fill in the blank:")
  })

  it("should display an errormessage with the proper role when passed in as a prop", () => {
    expect(wrapper.find(".lux-error").exists()).toBe(false)
    wrapper.setProps({ errormessage: "Something went wrong." })
    expect(wrapper.find(".lux-error").exists()).toBe(true)
    expect(wrapper.find(".lux-error").attributes().role).toBe("alert")
  })

  it("should have the value that is passed in as a prop", () => {
    const input = wrapper.find("input")
    expect(input.element.value).toBe("bar")
  })

  // it("snakeToTitleCase method should return all CAPS given a snake_case string", () => {
  //   expect(wrapper.vm.snakeToTitleCase("snake_case_example")).toBe("SNAKECASEEXAMPLE")
  // })

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
