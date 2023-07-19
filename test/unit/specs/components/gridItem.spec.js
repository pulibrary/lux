import { createLocalVue, mount } from "@vue/test-utils"
import GridItem from "@/elements/GridItem.vue"

// create an extended `Vue` constructor
const localVue = createLocalVue()

describe("GridItem.vue", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(GridItem, {
      localVue,
      props: {
        columns: "lg-9 sm-6",
      },
    })
  })

  it("should have the appropriate class to define the columns", async () => {
    wrapper.setProps({ columns: "lg-9 sm-6" })
    await localVue.nextTick()
    const gridItem = wrapper.find(".lux-col")
    expect(gridItem.is(".lg-9.sm-6")).toBe(true)
  })

  it("should have the appropriate class to define the vertical alignment", async () => {
    wrapper.setProps({ vertical: "start" })
    await localVue.nextTick()
    const gridItem = wrapper.find(".lux-col")
    expect(gridItem.is(".start")).toBe(true)
  })

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
