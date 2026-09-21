import reducer from "./reducers"

describe("component customize state", () => {
  test("opens and closes the customize panel", () => {
    let state = reducer(undefined, { type: "@@INIT" })
    expect(state.customizingSampleId).toBeNull()
    expect(state.themeConfigOpen).toBe(false)

    state = reducer(state, {
      type: "OPEN_COMPONENT_CUSTOMIZE",
      sampleId: "Buttons",
    })
    expect(state.customizingSampleId).toBe("Buttons")
    expect(state.themeConfigOpen).toBe(true)

    state = reducer(state, {
      type: "OPEN_COMPONENT_CUSTOMIZE",
      sampleId: "Accordion",
    })
    expect(state.customizingSampleId).toBe("Accordion")

    state = reducer(state, { type: "CLOSE_COMPONENT_CUSTOMIZE" })
    expect(state.customizingSampleId).toBeNull()
  })
})
