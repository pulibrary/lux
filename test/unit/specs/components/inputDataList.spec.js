import { createLocalVue, mount } from "@vue/test-utils"
import InputDataList from "@/elements/InputDataList.vue"

// create an extended `Vue` constructor
const localVue = createLocalVue()

describe("InputText.vue", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(InputDataList, {
      localVue,
      propsData: {
        id: "foo",
        value: "bar",
        name: "pass this",
        list: [
          { value: "Code4Lib", label: "Code4Lib Annual Conference" },
          { value: "ALA", label: "American Library Association Annual" },
          { value: "DLF", label: "Digital Library Federation" },
          { value: "SAA", label: "Society of American Archivists Annual Conference" },
          { value: "Access", label: "Access Annual Conference" },
        ],
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

  it("should have a label if passed in", async () => {
    expect(wrapper.find("label").exists()).toBe(false)
    wrapper.setProps({ label: "Fill in the blank:" })
    await localVue.nextTick()
    expect(wrapper.find("label").exists()).toBe(true)
    expect(wrapper.find("label").text()).toBe("Fill in the blank:")
  })

  it("should display an errormessage with the proper role when passed in as a prop", async () => {
    expect(wrapper.find(".lux-error").exists()).toBe(false)
    wrapper.setProps({ errormessage: "Something went wrong." })
    await localVue.nextTick()
    expect(wrapper.find(".lux-error").exists()).toBe(true)
    expect(wrapper.find(".lux-error").attributes().role).toBe("alert")
  })

  it("should have the value that is passed in as a prop", () => {
    const input = wrapper.find("input")
    expect(input.element.value).toBe("bar")
  })

  it("should have the name value that is passed in as a prop", () => {
    const input = wrapper.find("input")
    expect(input.element.name).toBe("pass this")
  })

  it("should have a data-list that works with the text input", () => {
    const dl = wrapper.find("datalist")
    expect(dl.element.id).toBe("foo-list")
    const option = wrapper.find("option") // finds the first option element
    expect(option.element.value).toBe("Code4Lib")
  })

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
