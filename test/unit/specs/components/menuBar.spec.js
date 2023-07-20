import { createLocalVue, mount } from "@vue/test-utils"
import MenuBar from "@/patterns/MenuBar.vue"

// create an extended `Vue` constructor
const localVue = createLocalVue()

let wrapper

describe("MenuBar.vue", () => {
  beforeEach(() => {
    wrapper = mount(MenuBar, {
      localVue,
      propsData: {
        active: "Foo",
        menuItems: [
          {
            name: "Foo",
            component: "Foo",
            href: "/example/",
            children: [{ name: "Baz", component: "Baz", href: "/example/" }],
          },
          { name: "Bar", component: "Bar", href: "/example/" },
        ],
      },
    })
  })

  it("should be a nav element if the type prop value is 'links'", async () => {
    expect(wrapper.find("nav").exists()).toBe(true)
    expect(wrapper.find("div").exists()).toBe(false)
    wrapper.setProps({ type: "buttons" })
    await localVue.nextTick()
    expect(wrapper.find("nav").exists()).toBe(false)
    expect(wrapper.find("div").exists()).toBe(true)
  })

  it("should emit the correct event when nav-item is clicked", () => {
    const navItem = wrapper.find(".lux-nav-item")
    navItem.trigger("click")
    const emitted1 = wrapper.emitted()
    expect(Object.prototype.hasOwnProperty.call(emitted1, "menu-item-clicked")).toBe(true)
  })

  it("should emit the correct event when menu-item is clicked", async () => {
    wrapper.setProps({ type: "buttons" })
    await localVue.nextTick()
    const menuItem = wrapper.find(".lux-menu-item")
    menuItem.trigger("click")
    const emitted2 = wrapper.emitted()
    expect(Object.prototype.hasOwnProperty.call(emitted2, "menu-item-clicked")).toBe(true)
  })

  it("should emit the correct event when active menu-item changes", () => {
    wrapper.vm.localActive = "Bar"
    const e = wrapper.emitted()
    expect(Object.prototype.hasOwnProperty.call(e, "input")).toBe(true)
  })
  /* eslint-disable quotes */
  it("should properly parse menu items into a hierarchy", () => {
    const menuItemsList = [
      {
        name: "Foo",
        component: "Foo",
        href: "/example/",
        children: [{ name: "Baz", component: "Baz", href: "/example/" }],
      },
      { name: "Bar", component: "Bar", href: "/example/" },
    ]
    expect(wrapper.vm.menuItems).toEqual(menuItemsList)
  })

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
