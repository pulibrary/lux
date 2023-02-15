import { createLocalVue, mount } from "@vue/test-utils"
import LuxSelect2 from "@/elements/LuxSelect2.vue"

// create an extended `Vue` constructor
const localVue = createLocalVue()

describe("LuxSelect2.vue", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(LuxSelect2, {
      localVue,
      stubs: ["wrapper", "input-text"],
      propsData: {
        id: "test_id",
        options: [
          { name: "Vue.js", code: "vu" },
          { name: "Javascript", code: "js" },
          { name: "Open Source", code: "os" },
        ],
        value: [],
      },
    })
  })

  it("should accept an optional label", () => {
    expect(wrapper.find("label").exists()).toBe(false)
    wrapper.setProps({ inputLabel: "Multiple choice:" })
    expect(wrapper.find("label").exists()).toBe(true)
    expect(wrapper.find("label").text()).toBe("Multiple choice:")
  })

  it("should connect the label to the field using the id", () => {
    wrapper.setProps({ inputLabel: "Multiple choice:" })
    expect(wrapper.find("label").attributes("for")).toBe("test_id")
    expect(wrapper.find("input").attributes("id")).toBe("test_id")
  })
})
