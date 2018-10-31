import Vuex from "vuex"
import { createLocalVue, mount, shallowMount } from "@vue/test-utils"
import Gallery from "@/patterns/Gallery.vue"
import Card from "@/elements/Card.vue"
import { galleryMutations } from "@/store/gallery"

// create an extended `Vue` constructor
const localVue = createLocalVue()
localVue.use(Vuex)

let wrapper
let store
let state
let mutations
let items = [
  { id: "1", title: "First", caption: "one", mediaUrl: "https://picsum.photos/600/300/?random" },
  { id: "2", title: "Second", caption: "two", mediaUrl: "https://picsum.photos/600/300/?random" },
  { id: "3", title: "Third", caption: "three", mediaUrl: "https://foo/bar" },
]
let reordered = [
  { id: "3", title: "Third", caption: "three", mediaUrl: "https://foo/bar" },
  { id: "2", title: "Second", caption: "two", mediaUrl: "https://picsum.photos/600/300/?random" },
  { id: "1", title: "First", caption: "one", mediaUrl: "https://picsum.photos/600/300/?random" },
]
const deselectStub = jest.fn()
const selectStub = jest.fn()

describe("Gallery.vue", () => {
  beforeEach(() => {
    state = {
      items: items,
      selected: [items[0]],
      cut: [],
      changeList: ["2"],
      ogItems: items,
    }

    store = new Vuex.Store({
      modules: {
        gallery: {
          state,
          mutations: galleryMutations,
        },
      },
    })

    wrapper = mount(Gallery, {
      localVue,
      store,
      propsData: {
        galleryItems: items,
      },
      stubs: ["card", "heading", "text-style", "media-image"],
    })
  })

  // Look into how to test setters to get this to work ...
  // it("should update the sort order of the cards on an input event from <draggable>", () => {
  //   wrapper.vm.$emit('input', reordered)
  //   expect(wrapper.vm.items[0].id).toBe(3)
  // })

  it("sizes the card correctly", () => {
    wrapper.setProps({ cardPixelWidth: 200 })
    const card = wrapper.find(".lux-galleryCard")
    expect(card.attributes().cardpixelwidth).toBe("200")
  })

  it("clicking on the gallery background should call our deslect method", () => {
    wrapper.setMethods({ deselect: deselectStub })
    wrapper.find(".lux-gallery").trigger("click")
    expect(deselectStub).toHaveBeenCalled()
  })

  it("getItemIndexById returns the correct index", () => {
    expect(wrapper.vm.getItemIndexById("3")).toBe(2)
  })

  it("getItemById returns the correct item", () => {
    const item = wrapper.vm.getItemById("3")
    expect(item.title).toBe("Third")
  })

  // These don't work in the new version... need to debug
  // it("hasChanged returns true for a changed item", () => {
  //   expect(wrapper.vm.hasChanged("2")).toBe(true)
  // })
  //
  // it("isSelected returns true for a selected item", () => {
  //   expect(wrapper.vm.isSelected(state.selected[0])).toBe(true)
  // })

  it("selects the correct items", () => {
    expect(wrapper.vm.isSelected(wrapper.vm.items[1])).toBe(false)
    wrapper.vm.select("2", { shiftKey: false, metaKey: false, target: { id: "2" } })
    expect(wrapper.vm.isSelected(wrapper.vm.items[1])).toBe(true)
    wrapper.vm.selectNone()
    expect(wrapper.vm.isSelected(wrapper.vm.items[1])).toBe(false)
    wrapper.vm.select("1", { shiftKey: false, metaKey: false, target: { id: "1" } })
    wrapper.vm.select("3", { shiftKey: true, metaKey: false, target: { id: "3" } })
    expect(wrapper.vm.isSelected(wrapper.vm.items[1])).toBe(true)
    wrapper.vm.selectNone()
    expect(wrapper.vm.isSelected(wrapper.vm.items[1])).toBe(false)
    wrapper.vm.select("1", { shiftKey: false, metaKey: false, target: { id: "1" } })
    wrapper.vm.select("3", { shiftKey: false, metaKey: true, target: { id: "3" } })
    expect(wrapper.vm.isSelected(wrapper.vm.items[0])).toBe(true)
    expect(wrapper.vm.isSelected(wrapper.vm.items[1])).toBe(false)
  })

  it("deselects the correct items", () => {
    wrapper.vm.select("1", { shiftKey: false, metaKey: false, target: { id: "1" } })
    expect(wrapper.vm.isSelected(wrapper.vm.items[0])).toBe(true)
    wrapper.vm.deselect({ shiftKey: false, metaKey: false, target: { className: "foo" } })
    expect(wrapper.vm.isSelected(wrapper.vm.items[0])).toBe(true)
    wrapper.vm.deselect({ shiftKey: false, metaKey: false, target: { className: "lux-gallery" } })
    expect(wrapper.vm.isSelected(wrapper.vm.items[0])).toBe(false)
  })

  it("sorts the items", () => {
    expect(wrapper.vm.items[0].id).toBe("1")
    wrapper.vm.items = reordered
    expect(wrapper.vm.items[0].id).toBe("3")
  })

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
