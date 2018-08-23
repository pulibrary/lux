import { createLocalVue, mount } from "@vue/test-utils"
import LoginForm from "@/patterns/LoginForm.vue"

// create an extended `Vue` constructor
const localVue = createLocalVue()

let wrapper

describe("LoginForm.vue", () => {
  beforeEach(() => {
    wrapper = mount(LoginForm, {
      localVue,
      stubs: ["input-text", "input-button", "alert"],
    })
  })

  it("should validate both email and password fields", () => {
    wrapper.vm.validate({ id: "email", value: "foo" })
    expect(wrapper.vm.errormessageEmail).toBe("You need to supply an email.")
    wrapper.vm.validate({ id: "email", value: "foo@bar.com" })
    expect(wrapper.vm.errormessageEmail).toBe("")
    wrapper.vm.validate({ id: "pwd", value: "" })
    expect(wrapper.vm.errormessagePwd).toBe("You need to supply a password.")
    wrapper.vm.validate({ id: "pwd", value: "foo" })
    expect(wrapper.vm.errormessagePwd).toBe("")
  })

  it("should show an alert component when showAlert is called", () => {
    expect(wrapper.vm.alert).toBe(false)
    wrapper.vm.showAlert({ alertMessage: "Success!", alertStatus: "success" })
    expect(wrapper.vm.alertMessage).toBe("Success!")
    expect(wrapper.vm.alertStatus).toBe("success")
    expect(wrapper.vm.alert).toBe(true)
  })

  it("has the expected html structure", () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
