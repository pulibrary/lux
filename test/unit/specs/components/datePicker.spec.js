import { createLocalVue, mount } from "@vue/test-utils"
import DatePicker from "@/elements/DatePicker.vue"

// create an extended `Vue` constructor
const localVue = createLocalVue()

describe("DatePicker.vue", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(DatePicker, {
      localVue,
      stubs: ["input-text"],
    })
  })

  it("should make sure the date is valid", () => {
    expect(wrapper.vm.isValidDate(new Date())).toBe(true)
    expect(wrapper.vm.isValidDate("foo")).toBe(false)
  })

  it("should update the date value when a new date is input", () => {
    expect(wrapper.vm.date).toBe(null)
    wrapper.vm.updateDateInput("01/01/2019")
    const nd = new Date("2019-01-01")
    expect(wrapper.vm.date).toEqual(nd)
  })

  it("should not update the date value when the input is an invalid date", () => {
    expect(wrapper.vm.date).toBe(null)
    wrapper.vm.updateDateInput("foo")
    expect(wrapper.vm.date).toBe(null)
  })

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
