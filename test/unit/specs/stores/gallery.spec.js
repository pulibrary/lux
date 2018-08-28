import { createLocalVue } from "@vue/test-utils"
import Vuex from "vuex"
import storeConfig from "../../gallery-store-config.spec.js"
import { cloneDeep } from "lodash"

const items = [
  {
    id: "foo",
    title: "example.tif",
    caption: "FileSet : 8ffd7a03-ec0e-46c1-a347-e4b19cb7839f",
    mediaUrl: "https://picsum.photos/600/300/?random",
  },
  {
    id: "bar",
    title: "example.tif",
    caption: "FileSet : 8f0a0908-317f-414e-a78a-c38a4a3b28e3",
    mediaUrl: "https://picsum.photos/600/300/?random",
  },
  {
    id: "baz",
    title: "example.tif",
    caption: "FileSet : ea01019e-f644-4416-b99c-1b44bf49d060",
    mediaUrl: "https://picsum.photos/600/300/?random",
  },
]

const paste_items = [
  {
    id: "bar",
    title: "example.tif",
    caption: "FileSet : 8f0a0908-317f-414e-a78a-c38a4a3b28e3",
    mediaUrl: "https://picsum.photos/600/300/?random",
  },
  {
    id: "foo",
    title: "example.tif",
    caption: "FileSet : 8ffd7a03-ec0e-46c1-a347-e4b19cb7839f",
    mediaUrl: "https://picsum.photos/600/300/?random",
  },
  {
    id: "baz",
    title: "example.tif",
    caption: "FileSet : ea01019e-f644-4416-b99c-1b44bf49d060",
    mediaUrl: "https://picsum.photos/600/300/?random",
  },
]

const changes = ["foo"]

it("updates item count when UPDATE_ITEMS is commited", () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  const store = new Vuex.Store(cloneDeep(storeConfig))
  expect(store.state.items.length).toBe(0)
  store.commit("UPDATE_ITEMS", items)
  expect(store.state.items.length).toBe(3)
})

it("updates cut count when CUT is commited", () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  const store = new Vuex.Store(cloneDeep(storeConfig))
  expect(store.state.cut.length).toBe(0)
  store.commit("CUT", items)
  expect(store.state.cut.length).toBe(3)
})

it("replaces items when PASTE is commited", () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  const store = new Vuex.Store(cloneDeep(storeConfig))
  store.commit("UPDATE_ITEMS", items)
  expect(store.state.items[0].id).toBe("foo")
  store.commit("PASTE", paste_items)
  expect(store.state.items[0].id).toBe("bar")
})

it("changes order when SORT_ITEMS is commited", () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  const store = new Vuex.Store(cloneDeep(storeConfig))
  store.commit("UPDATE_ITEMS", items)
  expect(store.state.items[0].id).toBe("foo")
  store.commit("SORT_ITEMS", paste_items)
  expect(store.state.items[0].id).toBe("bar")
})

it("selects items when SELECT is commited", () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  const store = new Vuex.Store(cloneDeep(storeConfig))
  expect(store.state.selected.length).toBe(0)
  store.commit("SELECT", items)
  expect(store.state.selected.length).toBe(3)
})

it("adds items to both items and ogItems when SET_GALLERY is commited", () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  const store = new Vuex.Store(cloneDeep(storeConfig))
  expect(store.state.items.length).toBe(0)
  expect(store.state.ogItems.length).toBe(0)
  store.commit("SET_GALLERY", items)
  expect(store.state.items.length).toBe(3)
  expect(store.state.ogItems.length).toBe(3)
})

it("adds changed items to changeList UPDATE_CHANGES is commited", () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  const store = new Vuex.Store(cloneDeep(storeConfig))
  expect(store.state.changeList.length).toBe(0)
  store.commit("UPDATE_CHANGES", changes)
  expect(store.state.changeList.length).toBe(1)
})
