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

  it("should have the appropriate class to define the columns", () => {
    wrapper.setProps({ columns: "lg-9 sm-6" })
    const gridItem = wrapper.find(".lux-col")
    expect(gridItem.is(".lg-9.sm-6")).toBe(true)
  })

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
