import React, { useCallback } from "react"
import ColorInput from "src/components/ColorInput"
import { useDispatch } from "react-redux"
import { setThemeOption, removeThemeOption } from "src/state/actions"
import {
  Grid,
  Button,
  TextField,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core"
import { useThemeValueInfo } from "src/state/selectors"
import { ThemeValueChangeEvent } from "../events"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    resetButton: {
      textTransform: "capitalize",
    },
    disabledButton: {
      fontStyle: "italic",
    },
    inputContainer: {
      flex: 1,
    },
  })
)

type OverrideInputType = "color" | "text"

type OverrideInputProps = {
  label: string
  path: string
  inputType: OverrideInputType
}

function parseCssValue(raw: string) {
  const trimmed = raw.trim()
  if (trimmed === "") {
    return ""
  }
  if (/^-?\d+(\.\d+)?$/.test(trimmed)) {
    return Number(trimmed)
  }
  return raw
}

export default function OverrideInput({
  label,
  path,
  inputType,
}: OverrideInputProps) {
  const classes = useStyles()
  const themeValueInfo = useThemeValueInfo(path)
  const dispatch = useDispatch()

  const handleReset = useCallback(() => {
    dispatch(removeThemeOption(path))
    document.dispatchEvent(ThemeValueChangeEvent())
  }, [dispatch, path])

  const handleColorChange = useCallback(
    color => dispatch(setThemeOption(path, color)),
    [dispatch, path]
  )

  const handleTextChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const raw = event.target.value
      if (raw.trim() === "") {
        dispatch(removeThemeOption(path))
        return
      }
      dispatch(setThemeOption(path, parseCssValue(raw)))
    },
    [dispatch, path]
  )

  const handleTextBlur = useCallback(() => {
    document.dispatchEvent(ThemeValueChangeEvent())
  }, [])

  const displayValue =
    themeValueInfo.value === undefined || themeValueInfo.value === null
      ? ""
      : String(themeValueInfo.value)

  return (
    <Grid container justify="space-between" alignItems="flex-end">
      <Grid item className={classes.inputContainer}>
        {inputType === "color" ? (
          <ColorInput
            label={label}
            color={displayValue}
            onColorChange={handleColorChange}
          />
        ) : (
          <TextField
            label={label}
            size="small"
            fullWidth
            value={displayValue}
            onChange={handleTextChange}
            onBlur={handleTextBlur}
            InputLabelProps={{ shrink: true }}
          />
        )}
      </Grid>
      <Grid item>
        <Button
          size="small"
          disabled={!themeValueInfo.modifiedByUser}
          classes={{
            root: classes.resetButton,
            disabled: classes.disabledButton,
          }}
          onClick={handleReset}
        >
          {themeValueInfo.modifiedByUser ? "Reset" : "auto"}
        </Button>
      </Grid>
    </Grid>
  )
}
