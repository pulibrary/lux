const { AxePuppeteer } = require("axe-puppeteer")
const { percySnapshot } = require("@percy/puppeteer")

describe("Alerts", () => {
  beforeAll(async () => {
    await page.goto(`http://localhost:6060/#/Elements/Alert`)
  })

  it("visually looks correct", async () => {
    await percySnapshot(page, "Alerts")
  })

  it("is accessible", async () => {
    await page.waitForSelector("title")

    const results = await new AxePuppeteer(page).include('[class^="rsg--preview"]').analyze()

    if (results.violations.length > 0) {
      for (let i = 0; i < results.violations.length; i++) {
        console.log(results.violations[i])
      }
    } else {
      console.log("All accessibility tests have passed!")
    }
  })
})
