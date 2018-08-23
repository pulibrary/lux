import Vuex from "vuex"
import { createLocalVue, mount, shallowMount } from "@vue/test-utils"
import OrderManager from "@/patterns/OrderManager.vue"
import { resourceModule, galleryModule } from "@/store/modules"

// create an extended `Vue` constructor
const localVue = createLocalVue()
localVue.use(Vuex)

let wrapper
let store
let galleryState
let state
let mutations
let items = [
  { id: "a", title: "A", caption: "a", mediaUrl: "https://picsum.photos/600/300/?random" },
  { id: "b", title: "B", caption: "b", mediaUrl: "https://picsum.photos/600/300/?random" },
  { id: "c", title: "C", caption: "c", mediaUrl: "https://picsum.photos/600/300/?random" },
]
let resourceObject = {
  id: "aea40813-e0ed-4307-aae9-aec53b26bdda",
  label: "Resource with 3 files",
  viewingHint: "individuals",
  viewingDirection: "LEFTTORIGHT",
  startPage: "8ffd7a03-ec0e-46c1-a347-e4b19cb7839f",
  thumbnail: {
    id: "8ffd7a03-ec0e-46c1-a347-e4b19cb7839f",
    thumbnailUrl:
      "http://localhost:3000/image-service/8ffd7a03-ec0e-46c1-a347-e4b19cb7839f/full/!200,150/0/default.jpg",
    iiifServiceUrl: "http://localhost:3000/image-service/8ffd7a03-ec0e-46c1-a347-e4b19cb7839f",
  },
  __typename: "ScannedResource",
  members: [
    {
      id: "8ffd7a03-ec0e-46c1-a347-e4b19cb7839f",
      label: "a",
      viewingHint: null,
      thumbnail: {
        iiifServiceUrl:
          "https://libimages1.princeton.edu/loris/figgy_prod/f7%2F67%2Ffe%2Ff767fe4247524c5f96e16eba2ff93301%2Fintermediate_file.jp2",
      },
      __typename: "FileSet",
    },
    {
      id: "8f0a0908-317f-414e-a78a-c38a4a3b28e3",
      label: "b",
      viewingHint: null,
      thumbnail: {
        iiifServiceUrl:
          "https://libimages1.princeton.edu/loris/figgy_prod/a5%2F15%2F62%2Fa515627580594c978ce5352653c9442a%2Fintermediate_file.jp2",
      },
      __typename: "FileSet",
    },
    {
      id: "ea01019e-f644-4416-b99c-1b44bf49d060",
      label: "c",
      viewingHint: null,
      thumbnail: {
        iiifServiceUrl:
          "https://libimages1.princeton.edu/loris/figgy_prod/d9%2Fb5%2F8c%2Fd9b58c8f3e554706bec4d977b12cd4e4%2Fintermediate_file.jp2",
      },
      __typename: "FileSet",
    },
  ],
}
//
describe("OrderManager.vue", () => {
  //   beforeEach(() => {
  //     galleryState = {
  //       items: items,
  //       selected: [items[0]],
  //       cut: [],
  //       changeList: ["2"],
  //       ogItems: items,
  //     }
  //
  //     state = {
  //       id: "",
  //       resourceClassName: "",
  //       bibId: "",
  //       label: "Resource not available.",
  //       thumbnail: "",
  //       startCanvas: "",
  //       isMultiVolume: false,
  //       viewingHint: null,
  //       viewingDirection: null,
  //       members: [],
  //       loadState: "NOT_LOADED",
  //       saveState: "NOT_SAVED",
  //       ogState: {},
  //     }
  //
  //     mutations = {
  //       SET_RESOURCE: jest.fn(),
  //     }
  //
  //     store = new Vuex.Store({
  //       modules: {
  //         ordermanager: {
  //           state
  //         },
  //         // gallery: {
  //         //   galleryState
  //         // },
  //       },
  //     })
  //
  //     // const Card = createStub("Card")
  //     wrapper = mount(OrderManager, {
  //       localVue,
  //       store,
  //       propsData: {
  //         resourceObject: resourceObject,
  //       },
  //       // stubs: ["card", "heading", "text-style", "media-image"],
  //     })
  //   })

  it("slug", () => {
    expect(true).toBe(true)
  })

  // it("has the expected html structure", () => {
  //   expect(wrapper.element).toMatchSnapshot()
  // })
})
