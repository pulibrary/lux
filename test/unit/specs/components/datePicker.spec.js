import { createLocalVue, mount } from "@vue/test-utils"
// import VCalendar from "v-calendar"
import DatePicker from "@/elements/DatePicker.vue"

// create an extended `Vue` constructor
const localVue = createLocalVue()
// localVue.use(VCalendar, { popoverVisibility: "focus" })

describe("DatePicker.vue", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(DatePicker, {
      localVue,
    })
  })

  it("should make sure the date is valid", () => {
    expect(wrapper.vm.isValidDate(new Date())).toBe(true)
  })

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
