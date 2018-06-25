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

export const resourceModule = {
  state: {
    resource: {
      id: "",
      label: "Resource not available.",
      isMultiVolume: false,
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
      state.resource.loadState = "LOADED"
    },
  },

  // actions: any async actions are should be handled by the host app

  getters: {
    isMultiVolume: state => {
      const volumes = state.resource.members.filter(member => member.__typename === "ScannedResource")
      return volumes.length > 0 ? true : false
    },
  },
}

let modules
export default (modules = { counterModule, resourceModule })
