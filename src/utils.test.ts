const utils = require("./utils")

describe("getByPath Tests", () => {
  const data = {
    foo: {
      bar: {
        baz: 1,
      },
    },
  }
  test("getByPath gets existing value", () => {
    expect(utils.getByPath(data, "foo.bar.baz")).toBe(1)
  })
  test("getByPath returns undefined on path not found", () => {
    expect(utils.getByPath(data, "foo.bar.none")).toBeUndefined()
  })
  test("getByPath returns specified defaultValue on path not found", () => {
    expect(utils.getByPath(data, "foo.bar.none", 2)).toBe(2)
  })
  test("getByPath gets existing value, with defaultValue passed", () => {
    expect(utils.getByPath(data, "foo.bar.baz", 2)).toBe(1)
  })
})

describe("removeByPath Tests", () => {
  test("removeByPath removes value", () => {
    expect(
      utils.removeByPath(
        {
          foo: {
            bar: {
              baz: {
                bat: 4,
                qux: 5,
              },
            },
          },
        },
        "foo.bar.baz.bat"
      )
    ).toEqual({
      foo: {
        bar: {
          baz: {
            qux: 5,
          },
        },
      },
    })
  })

  test("removeByPath returns original object on path not found", () => {
    const data = {
      foo: {
        bar: {
          baz: {
            bat: 4,
            qux: 5,
          },
        },
      },
    }
    expect(utils.removeByPath(data, "foo.bar.none")).toEqual(data)
  })

  test("removeByPath removes empty parents after delete", () => {
    expect(
      utils.removeByPath(
        {
          foobar: 10,
          foo: {
            barbar: 20,
            bar: {
              baz: 5,
            },
          },
        },
        "foo.bar.baz"
      )
    ).toEqual({
      foobar: 10,
      foo: {
        barbar: 20,
      },
    })

    expect(
      utils.removeByPath(
        {
          foobar: 10,
          foo: {
            bar: {
              baz: 5,
            },
          },
        },
        "foo.bar.baz"
      )
    ).toEqual({
      foobar: 10,
    })

    expect(
      utils.removeByPath(
        {
          foo: {
            bar: {
              baz: 5,
            },
          },
        },
        "foo.bar.baz"
      )
    ).toEqual({})
  })
})

describe("hover override paths", () => {
  test("setByPath writes nested &:hover keys", () => {
    const result = utils.setByPath(
      {},
      "overrides.MuiButton.root.&:hover.color",
      "#fff"
    )
    expect(result).toEqual({
      overrides: {
        MuiButton: {
          root: {
            "&:hover": {
              color: "#fff",
            },
          },
        },
      },
    })
  })

  test("getByPath reads nested &:hover keys", () => {
    const data = {
      overrides: {
        MuiButton: {
          root: {
            "&:hover": {
              color: "#fff",
            },
          },
        },
      },
    }
    expect(
      utils.getByPath(data, "overrides.MuiButton.root.&:hover.color")
    ).toBe("#fff")
  })

  test("removeByPath prunes empty &:hover objects", () => {
    const data = {
      overrides: {
        MuiButton: {
          root: {
            "&:hover": {
              color: "#fff",
            },
          },
        },
      },
    }
    expect(
      utils.removeByPath(data, "overrides.MuiButton.root.&:hover.color")
    ).toEqual({})
  })

  test("removeByPath deletes an entire component override key", () => {
    const data = {
      palette: { type: "light" },
      overrides: {
        MuiButton: {
          root: { backgroundColor: "#f00" },
        },
        MuiAccordion: {
          root: { color: "#00f" },
        },
      },
    }
    expect(utils.removeByPath(data, "overrides.MuiButton")).toEqual({
      palette: { type: "light" },
      overrides: {
        MuiAccordion: {
          root: { color: "#00f" },
        },
      },
    })
  })
})

describe("isSetEq Tests", () => {
  test("Equal Sets return true", () => {
    expect(
      utils.isSetEq(new Set([1, 2, 3, 4]), new Set([1, 2, 3, 4]))
    ).toBeTruthy()
  })
  test("Inequal Sets return false", () => {
    expect(
      utils.isSetEq(new Set([1, 2, 3, 4]), new Set([5, 6, 7, 8]))
    ).toBeFalsy()
  })
})
