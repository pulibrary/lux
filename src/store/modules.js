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
  state: { resource: { id: "", label: "Resource not available." } },

  mutations: {
    SET_RESOURCE(state, resource) {
      state.resource = resource
    },
  },

  // actions: {
  //   async getResourceById({ commit }, id) {
  //     console.time(`getResourceById ${id}`)
  //
  //     if(typeof gql !== "undefined") {
  //       const query = gql`
  //         query GetResource($id: ID!) {
  //           resource(id: $id) {
  //             id,
  //             label
  //           }
  //         }`
  //
  //       const variables = {
  //         id: id
  //       }
  //
  //       const response = await apollo.query({
  //         query, variables
  //       })
  //
  //       // const { getResource } = response.data
  //       // commit('SET_RESOURCE', { getResource })
  //       const resource = response.data
  //       commit('SET_RESOURCE', resource)
  //     } else {
  //       // This is for demo purposes on LUX Docs site.
  //       const resource = {id: id, label: "Resource with ID: " + id }
  //       commit('SET_RESOURCE', resource )
  //     }
  //
  //     console.timeEnd(`getResourceById ${id}`)
  //   },
  // },

  getters: {
    label: state => {
      return state.resource.label
    },
  },
}

let modules
export default (modules = { counterModule, resourceModule })
