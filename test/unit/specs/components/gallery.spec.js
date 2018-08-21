import Vuex from "vuex"
import { createLocalVue, mount, shallowMount } from "@vue/test-utils"
import Gallery from "@/patterns/Gallery.vue"
import Card from "@/elements/Card.vue"
import { resourceModule, galleryModule } from "@/store/modules"

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
  { id: "3", title: "Third", caption: "three", mediaUrl: "https://picsum.photos/600/300/?random" },
]
let reordered = [
  { id: "3", title: "Third", caption: "three", mediaUrl: "https://picsum.photos/600/300/?random" },
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

    mutations = {
      SET_GALLERY: jest.fn(),
    }

    store = new Vuex.Store({
      modules: {
        // ordermanager: resourceModule,
        gallery: {
          state,
          mutations,
        },
      },
    })

    // const Card = createStub("Card")
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
    const card = wrapper.find(".galleryCard")
    expect(card.attributes().cardpixelwidth).toBe("200")
  })

  it("clicking on the gallery background should call our deslect method", () => {
    wrapper.setMethods({ deselect: deselectStub })
    wrapper.find(".gallery").trigger("click")
    expect(deselectStub).toHaveBeenCalled()
  })

  it("getItemIndexById returns the correct index", () => {
    expect(wrapper.vm.getItemIndexById("3")).toBe(2)
  })

  it("getItemById returns the correct item", () => {
    const item = wrapper.vm.getItemById("3")
    expect(item.title).toBe("Third")
  })

  it("hasChanged returns true for a changed item", () => {
    expect(wrapper.vm.hasChanged("2")).toBe(true)
  })

  it("isSelected returns true for a selected item", () => {
    expect(wrapper.vm.isSelected(wrapper.vm.items[0])).toBe(true)
  })

  // it("selects the correct items", () => {
  //   wrapper.setMethods({ select: selectStub })
  //   // console.log(wrapper.find(Card))
  //   const card1 = wrapper.findAll(".galleryCard").at(0)
  //   const card2 = wrapper.findAll(".galleryCard").at(1)
  //   console.log(card1.attributes())
  //   console.log(card2.attributes())
  //   // const foo = wrapper.findAll(".galleryCard")
  //   // expect(wrapper.find(".galleryCard").length).to.equal(1)
  //   wrapper.vm.$emit('card-click', { shiftkey: false, target: { id: '1' } })
  //   wrapper.vm.$emit('card-click', { shiftkey: true, target: { id: '2' } })
  //   // card1.trigger('card-click')
  //   // card2.trigger('card-click', {
  //   //   shiftKey: true
  //   // })
  //   // // wrapper.findAll('.galleryCard').at(1).trigger('click', {
  //   // //   metaKey: true
  //   // // })
  //   console.log(selectStub.mock)
  //   //
  //   // // the first click selects one element, while the second sekects two (with Shift+Click)
  //   // expect(selectStub.mock.calls[0][1].length).toBe(1)
  //   // expect(selectStub.mock.calls[1][1].length).toBe(2)
  //   // expect(selectStub.mock.calls.length).toBe(2)
  // })

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
