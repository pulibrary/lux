import { createLocalVue, mount } from "@vue/test-utils"
import DataTable from "@/elements/DataTable.vue"

// create an extended `Vue` constructor
const localVue = createLocalVue()

describe("DataTable.vue", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(DataTable, {
      localVue,
      propsData: {
        caption: "This is a caption.",
        columns: [
          "name",
          { name: "email", display_name: "Email Address" },
          { name: "age", datatype: "number" },
        ],
        jsonData: [
          { id: 1, name: "foo", email: "foo@xxx.xxx", age: 42 },
          { id: 2, name: "bar", email: "bar@xxx.xxx", age: 23 },
          { id: 3, name: "fez", email: "fez@xxx.xxx", age: 34 },
        ],
      },
    })
  })

  it("should render a caption", () => {
    const caption = wrapper.find("caption")
    expect(caption.is("caption")).toBe(true)
    expect(caption.text()).toBe("This is a caption.")
  })

  it("should render the Display Name", () => {
    const th = wrapper.findAll("th").at(1)
    expect(th.text()).toBe("Email Address")
    const th2 = wrapper.findAll("th").at(0)
    expect(th2.text()).toBe("name")
  })

  it("evaluates isNum correctly", () => {
    expect(wrapper.vm.isNum("string")).toBe(false)
    expect(wrapper.vm.isNum("number")).toBe(true)
  })

  it("evaluates isObject correctly", () => {
    expect(wrapper.vm.isObject("string")).toBe(false)
    expect(wrapper.vm.isObject({ foo: "bar" })).toBe(true)
  })

  it("parses columns correctly", () => {
    const cols = wrapper.vm.parsedColumns
    expect(cols[0].name).toBe("name")
    expect(cols[1].name).toBe("email")
  })

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
