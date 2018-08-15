import Vuex from "vuex"
import { createLocalVue, mount, shallowMount } from "@vue/test-utils"
import Gallery from "@/patterns/Gallery.vue"
import { resourceModule, galleryModule } from "@/store/modules"

// create an extended `Vue` constructor
const localVue = createLocalVue()
localVue.use(Vuex)

let wrapper
let store
let state
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

describe("Gallery.vue", () => {
  beforeEach(() => {
    state = {
      items: items,
      selected: [],
      cut: [],
      changeList: [],
      ogItems: items,
    }

    store = new Vuex.Store({
      modules: {
        // ordermanager: resourceModule,
        gallery: {
          state,
        },
      },
    })

    wrapper = mount(Gallery, {
      localVue,
      store,
      props: {
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

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
