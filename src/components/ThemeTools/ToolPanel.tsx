import React from "react"
import Typography from "@material-ui/core/Typography"
import {
  makeStyles,
  Theme,
  createStyles,
  Box,
  Grid,
  IconButton,
  Button,
} from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolPanel: {
      backgroundColor: "#212121",
      flexGrow: 1,
      overflowX: "hidden",
      display: "flex",
      flexDirection: "column",
    },
    toolPanelTitle: {
      paddingLeft: 16,
      paddingRight: 8,
      borderBottom: `1px solid ${theme.palette.divider}`,
      borderTop: "1px solid grey",
      minHeight: 40,
    },
    toolPanelContent: {
      flex: 1,
      overflowY: "auto",
      overflowX: "hidden",
    },
    resetButton: {
      textTransform: "capitalize",
      marginRight: theme.spacing(0.5),
    },
    disabledButton: {
      fontStyle: "italic",
    },
    titleActions: {
      flexShrink: 0,
    },
  })
)

export const toolPanelId = "theme-tool-panel"

type ToolPanelProps = {
  panelTitle: string
  children: React.ReactNode
  onClose?: () => void
  onReset?: () => void
  resetDisabled?: boolean
}

function ToolPanel({
  panelTitle,
  children,
  onClose,
  onReset,
  resetDisabled = false,
}: ToolPanelProps) {
  const classes = useStyles()
  return (
    <Box id={toolPanelId} className={classes.toolPanel}>
      <Grid
        container
        justify="space-between"
        alignItems="center"
        wrap="nowrap"
        className={classes.toolPanelTitle}
      >
        <Typography variant="overline" noWrap>
          {panelTitle}
        </Typography>
        {(onReset || onClose) && (
          <Grid item className={classes.titleActions}>
            {onReset && (
              <Button
                size="small"
                onClick={onReset}
                disabled={resetDisabled}
                classes={{
                  root: classes.resetButton,
                  disabled: classes.disabledButton,
                }}
              >
                Reset
              </Button>
            )}
            {onClose && (
              <IconButton size="small" onClick={onClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
            )}
          </Grid>
        )}
      </Grid>
      <Box className={classes.toolPanelContent}>{children}</Box>
    </Box>
  )
}

export default ToolPanel
