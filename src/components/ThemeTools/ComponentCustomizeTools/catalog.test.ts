import {
  componentCustomizeCatalog,
  muiClassKeys,
  getComponentCustomizeEntry,
  getComponentOverrideResetConfigs,
} from "./catalog"

const sampleIds = [
  "Accordion",
  "Appbar",
  "Avatar",
  "Badge",
  "BottomNavigation",
  "Buttons",
  "Card",
  "Checkboxes",
  "Chip",
  "Dialog",
  "FloatingActionButton",
  "Icon",
  "List",
  "Menu",
  "Progress",
  "Radio",
  "Select",
  "Slider",
  "Snackbar",
  "Stepper",
  "Switch",
  "Table",
  "Tabs",
  "TextField",
  "Tooltip",
  "Typography",
]

describe("componentCustomizeCatalog", () => {
  test("covers every sample id", () => {
    const catalogIds = componentCustomizeCatalog.map(entry => entry.sampleId)
    expect(catalogIds).toEqual(sampleIds)
  })

  test("every target has class keys", () => {
    componentCustomizeCatalog.forEach(entry => {
      expect(entry.targets.length).toBeGreaterThan(0)
      entry.targets.forEach(target => {
        expect(muiClassKeys[target.muiKey]).toBeDefined()
        expect(target.classKeys.length).toBeGreaterThan(0)
        expect(target.classKeys).toEqual(muiClassKeys[target.muiKey])
      })
    })
  })

  test("reset configs cover every family key", () => {
    const accordion = getComponentCustomizeEntry("Accordion")
    expect(getComponentOverrideResetConfigs(accordion!.targets)).toEqual([
      { path: "overrides.MuiAccordion", value: null },
      { path: "overrides.MuiAccordionSummary", value: null },
      { path: "overrides.MuiAccordionDetails", value: null },
      { path: "overrides.MuiAccordionActions", value: null },
    ])
  })
})
