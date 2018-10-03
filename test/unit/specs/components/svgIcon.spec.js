jest.mock("@/utils/icon-loader", () => {
  return jest.fn(
    () =>
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZD0iTTEzLjk3NCA0LjIwNWEuMzMuMzMgMCAwIDAtLjA3Mi0uMTA4TDkuOTAzLjA5OGEuMzI3LjMyNyAwIDAgMC0uMTA4LS4wNzFBLjMyNi4zMjYgMCAwIDAgOS42NjcgMEgyLjMzNGEuMzMzLjMzMyAwIDAgMC0uMzMzLjMzM3YxNS4zMzNjMCAuMTg0LjE0OS4zMzMuMzMzLjMzM2gxMS4zMzNhLjMzMy4zMzMgMCAwIDAgLjMzMy0uMzMzVjQuMzMzYS4zMjUuMzI1IDAgMCAwLS4wMjYtLjEyOHpNMTAgMS4xMzhMMTIuODYyIDRIMTBWMS4xMzh6TTIuNjY3IDE1LjMzM1YuNjY2aDYuNjY3djMuNjY3YzAgLjE4NC4xNDkuMzMzLjMzMy4zMzNoMy42Njd2MTAuNjY3SDIuNjY3eiIvPjwvc3ZnPg=="
  )
})
import { createLocalVue, mount } from "@vue/test-utils"
import SvgIcon from "@/elements/SvgIcon.vue"

// create an extended `Vue` constructor
const localVue = createLocalVue()

describe("SvgIcon.vue", () => {
  let wrapper
  beforeEach(() => {
    jest.resetModules()
    wrapper = mount(SvgIcon, {
      localVue,
      propsData: {
        name: "foo",
        width: "16px",
        height: "16px",
        ariaLabel: "foo",
      },
    })
  })

  it("should be able to use an aria label", () => {
    const icon = wrapper.find(".lux-svg-icon")
    expect(icon.attributes()["aria-label"]).toBe("foo")
  })

  // one of these should work, but the icon svg is not getting injected asyncronously
  // not sure how to test
  //
  // it('verifies the icon upon mount', (done) => {
  //     wrapper.vm.$nextTick(() => {
  //       const icon = wrapper.find(".svg-icon")
  //       console.log(icon.html())
  //       done()
  //     })
  //   })

  // it('verifies the icon upon mount', async () => {
  //   await flushPromises()
  //   const icon = wrapper.find(".svg-icon")
  //   console.log(icon.html())
  // })

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
