export const counterModule = {
  state: { count: 10 },

  mutations: {
    increment(state) {
      // `state` is the local module state
      state.count++
    },
  },

  getters: {
    count: state => {
      return state.count
    },
  },
}

export const galleryModule = {
  // namespaced: true,

  state: {
    items: [],
    selected: [],
    cut: [],
    changeList: [],
  },

  mutations: {
    SELECT(state, itemArray) {
      state.selected = [...itemArray]
    },
    SET_GALLERY(state, items) {
      state.items = items
    },
    SORT_ITEMS(state, value) {
      state.items = [...value]
    },
    UPDATE_CHANGES(state, changeList) {
      state.changeList = [...changeList]
    },
    UPDATE_ITEMS(state, items) {
      state.items = [...items]
    },
  },
}

export const resourceModule = {
  state: {
    resource: {
      id: "",
      bibId: "",
      label: "Resource not available.",
      thumbnail: "",
      startCanvas: "",
      isMultiVolume: false,
      viewingHint: null,
      viewingDirection: null,
      members: [],
      loadState: "NOT_LOADED",
    },
  },

  mutations: {
    CHANGE_RESOURCE_LOAD_STATE(state, loadState) {
      state.resource.loadState = loadState
    },
    SET_RESOURCE(state, resource) {
      state.resource.id = resource.id
      state.resource.label = resource.label
      state.resource.members = resource.members
      state.gallery.items = resource.members.map(member => ({
        id: member.id,
        title: member.label,
        viewingHint: member.viewingHint,
        caption: member.__typename + " : " + member.id,
        mediaUrl: "https://picsum.photos/600/300/?random",
      }))
      state.resource.viewingHint = resource.viewingHint
      state.resource.loadState = "LOADED"
    },
    UPDATE_STARTCANVAS(state, startCanvas) {
      state.resource.startCanvas = startCanvas
    },
    UPDATE_THUMBNAIL(state, thumbnail) {
      state.resource.thumbnail = thumbnail
    },
    UPDATE_VIEWDIR(state, viewDir) {
      state.resource.viewingDirection = viewDir
    },
    UPDATE_VIEWHINT(state, viewHint) {
      state.resource.viewingHint = viewHint
    },
  },

  // actions: any async actions are should be handled by the host app

  getters: {
    getMemberCount: state => {
      return state.resource.members.length
    },
    isMultiVolume: state => {
      const volumes = state.resource.members.filter(member => member.__typename === "ScannedResource")
      return volumes.length > 0 ? true : false
    },
  },
  modules: {
    gallery: galleryModule,
  },
}

let modules
export default (modules = { counterModule, galleryModule, resourceModule })
