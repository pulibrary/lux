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
          },
        ],
      },
    })
  })

  it("should emit a change event with the correct value when clicked", () => {
    const checkbox = wrapper.findAll("input").at(1)
    checkbox.trigger("click")
    const emitted = wrapper.emitted()
    console.log(emitted)
    expect(Object.prototype.hasOwnProperty.call(emitted, "change")).toBe(true)
    expect(emitted.change[0]).toEqual([true])
  })

  it("should have a label for the correct id", () => {
    const label = wrapper.findAll("label").at(1)
    expect(label.text()).toBe("two")
    expect(label.attributes().for).toBe("checkbox-opt2")
  })

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
