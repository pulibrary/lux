import { createLocalVue, mount } from "@vue/test-utils"
import DataTable from "@/elements/DataTable.vue"

// create an extended `Vue` constructor
const localVue = createLocalVue()

describe("DataTable.vue", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(DataTable, {
      localVue,
      stubs: [
        "input-button",
        "lux-icon-base",
        "lux-icon-unsorted",
        "lux-icon-ascending",
        "lux-icon-descending",
      ],
      propsData: {
        caption: "This is a caption.",
        columns: [
          { name: "id", display_name: "Select Items", align: "center", checkbox: true },
          "name",
          { name: "email", display_name: "Email Address", align: "center", sortable: true },
          { name: "age", datatype: "number", summary_value: "33", sortable: true },
          { name: "birthday", datatype: "date", sortable: true },
        ],
        jsonData: [
          {
            id: 1,
            name: { value: "foo", link: "https://example.com" },
            email: "foo@xxx.xxx",
            age: 42,
            birthday: "May 5, 2000",
          },
          { id: 2, name: "bar", email: "bar@xxx.xxx", age: 23, birthday: "April 5, 2000" },
          { id: 3, name: "fez", email: "fez@xxx.xxx", age: 34, birthday: "January 5, 2000" },
          { id: 4, name: "hey", email: "hey@xxx.xxx", age: 4, birthday: "March 5, 2000" },
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
    const th = wrapper.findAll("th").at(2)
    expect(th.text()).toBe("Email Address")
    const th2 = wrapper.findAll("th").at(1)
    expect(th2.text()).toBe("name")
  })

  it("should render a checkbox when checkbox is true", () => {
    const td1 = wrapper.find("input")
    expect(td1.exists()).toBe(true)
    const td2 = wrapper.findAll("td").at(1)
    expect(td2.text()).toBe("foo")
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
    expect(cols[1].name).toBe("name")
    expect(cols[2].name).toBe("email")
  })

  it("should return true for the appropriate boolean functions for alignment", () => {
    expect(wrapper.vm.isLeft("left")).toBe(true)
    expect(wrapper.vm.isCenter("left")).toBe(false)
    expect(wrapper.vm.isRight("right")).toBe(true)
  })

  it("should show tfoot if summaryLabel is present", () => {
    wrapper.setProps({ summaryLabel: "Average" })
    const th = wrapper.find("tfoot th")
    expect(th.text()).toBe("Average")
  })

  it("should remove the first column from the footerColumns, which is reserved for summaryLabel", () => {
    expect(wrapper.vm.footerColumns.length).toBe(4)
    expect(wrapper.vm.footerColumns[1].name).toBe("email")
  })

  it("should sort the table appropriately", () => {
    wrapper.vm.sortTable(wrapper.vm.parsedColumns[3]) // age ascending
    expect(wrapper.vm.rows[0].age.value).toBe(4)
    wrapper.vm.sortTable(wrapper.vm.parsedColumns[3]) // age descending
    expect(wrapper.vm.rows[0].age.value).toBe(42)
    expect(wrapper.vm.rows[0].name.link).toBe("https://example.com")
    wrapper.vm.sortTable(wrapper.vm.parsedColumns[2]) // email ascending
    expect(wrapper.vm.rows[0].email.value).toBe("bar@xxx.xxx")
    expect(wrapper.vm.parsedColumns[3].ascending).toBe(null) // age ascending should be reset to null

    wrapper.vm.sortTable(wrapper.vm.parsedColumns[4]) // birthday ascending
    expect(wrapper.vm.rows[0].birthday.value).toBe("January 5, 2000")
  })

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
