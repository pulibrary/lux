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
  state: { resource: { id: "", label: "Resource not available.", isMultiVolume: false, members: [] } },

  mutations: {
    SET_RESOURCE(state, resource) {
      state.resource.id = resource.id
      state.resource.label = resource.label
      state.resource.members = resource.members
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