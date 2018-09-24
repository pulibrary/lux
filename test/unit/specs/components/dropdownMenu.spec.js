import { createLocalVue, mount } from "@vue/test-utils"
import DropdownMenu from "@/patterns/DropdownMenu.vue"
import InputButton from "@/elements/InputButton.vue"
import MenuBar from "@/patterns/MenuBar.vue"

// create an extended `Vue` constructor
const localVue = createLocalVue()

let wrapper

describe("DropdownMenu.vue", () => {
  beforeEach(() => {
    wrapper = mount(DropdownMenu, {
      localVue,
      props: {
        buttonLabel: "Dropdown",
        menuItems: [
          { name: "All", component: "All" },
          { name: "None", component: "None" },
          { name: "Alternate", component: "Alternate", disabled: true },
          { name: "Inverse", component: "Inverse" },
        ],
      },
      stubs: ["input-button", "menu-bar"],
    })
  })

  it("should be of the element that is passed in as a prop", () => {
    expect(wrapper.find("div").exists()).toBe(true)
    expect(wrapper.find("form").exists()).toBe(false)
    // can't setProps here because the component must be regenerated to change its wrapper
    const wrapper2 = mount(DropdownMenu, {
      localVue,
      propsData: {
        element: "form",
        buttonLabel: "Dropdown",
        menuItems: [
          { name: "All", component: "All" },
          { name: "None", component: "None" },
          { name: "Alternate", component: "Alternate", disabled: true },
          { name: "Inverse", component: "Inverse" },
        ],
      },
      stubs: ["input-button", "menu-bar"],
    })
    expect(wrapper2.find("div").exists()).toBe(false)
    expect(wrapper2.find("form").exists()).toBe(true)
  })

  it("should hide menu on button click", () => {
    expect(wrapper.vm.isVisible).toBe(false)
    wrapper.vm.buttonClicked()
    expect(wrapper.vm.isVisible).toBe(true)
  })

  it("should hide menu on menu item click", () => {
    wrapper.vm.buttonClicked()
    expect(wrapper.vm.isVisible).toBe(true)
    wrapper.vm.menuItemClicked()
    expect(wrapper.vm.isVisible).toBe(false)
  })

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
