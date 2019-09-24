import { createLocalVue, mount } from "@vue/test-utils"
import DatePicker from "@/elements/DatePicker.vue"

// create an extended `Vue` constructor
const localVue = createLocalVue()

describe("DatePicker.vue", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(DatePicker, {
      localVue,
      stubs: ["wrapper", "input-text"],
      propsData: {
        id: "startDate",
        label: "Start Date",
        name: "start",
      },
    })
  })

  it("should make sure the date is valid", () => {
    expect(wrapper.vm.isValidFormat("1/1/2019")).toBe(true)
    expect(wrapper.vm.isValidFormat("foo")).toBe(false)
  })

  it("should update the date value when a new date is input", () => {
    expect(wrapper.vm.date).toBe(null)
    wrapper.vm.updateInput("01/01/2019")
    const nd = new Date("2019-01-01")
    expect(wrapper.vm.date).toEqual(nd)
  })

  it("should not update the date value when the input is an invalid date", () => {
    expect(wrapper.vm.date).toBe(null)
    wrapper.vm.updateInput("foo")
    expect(wrapper.vm.date).toBe(null)
  })

  // This function works in the app, but for some reason the range.start value is not getting updated in the test
  it("should update the date range value when a new date range is input", () => {
    wrapper.setProps({ mode: "range" })
    expect(wrapper.vm.range).toBe(null)
    wrapper.vm.updateRangeInput("01/01/2019 - 01/02/2019")
    const s = new Date(Date.UTC(2019, 0, 1, 0, 0, 0))
    const e = new Date(Date.UTC(2019, 0, 2, 0, 0, 0))
    console.log(wrapper.vm.range.start)
    expect(wrapper.vm.range.start).toEqual(s)
    expect(wrapper.vm.range.end).toEqual(e)
  })

  it("should not update the date range value when the input is an invalid date range", () => {
    wrapper.setProps({ mode: "range" })
    expect(wrapper.vm.range).toBe(null)
    wrapper.vm.updateRangeInput("foo")
    expect(wrapper.vm.range).toBe(null)
  })

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
