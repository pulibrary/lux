import { createLocalVue, mount } from "@vue/test-utils"
import Tag from "@/elements/Tag.vue"

// create an extended `Vue` constructor
const localVue = createLocalVue()

describe("Tag.vue", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Tag, {
      localVue,
      propsData: {
        tagItems: [
          { name: "Foo", href: "/example/" },
          { name: "Bar", href: "/example/" },
          { name: "Baz", href: "/example/" },
        ],
      },
    })
  })

  it("should render the correct type", () => {
    const tag = wrapper.find(".lux-tag.tag")
    expect(tag.is("ul")).toBe(true)
    wrapper.setProps({ type: "filter" })
    const filter = wrapper.find(".lux-tag.filter")
    expect(filter.is("ul")).toBe(true)
  })
})
