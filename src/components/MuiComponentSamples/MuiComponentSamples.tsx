import React from "react"
import { Typography, makeStyles, Button, Grid, Box } from "@material-ui/core"
import { useDispatch } from "react-redux"

import componentSamples from "./Samples"
import { openComponentCustomize } from "src/state/actions"

const useStyles = makeStyles(theme => ({
  sampleItem: {
    marginBottom: theme.spacing(10),
    width: "100%",
    maxWidth: 1000,
    paddingLeft: theme.spacing(4),
    margin: "auto",
  },
  inset: {},
  docsButton: {
    marginLeft: theme.spacing(2),
  },
  sampleContainer: {
    maxWidth: 1000,
    padding: theme.spacing(),
    margin: "auto",
  },
}))

const MuiComponentSamples = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  return (
    <Box className={classes.sampleContainer}>
      <Typography variant="h4" gutterBottom>
        Material-UI Components
      </Typography>
      {componentSamples.map(({ id, title, component, docs }) => (
        <Box key={id} id={id}>
          <Grid container justify="space-between" alignItems="center">
            <Typography variant="h5" gutterBottom>
              {title}
            </Typography>
            <Grid item>
              <Button
                variant="outlined"
                color="secondary"
                size="small"
                className={classes.docsButton}
                onClick={() => dispatch(openComponentCustomize(id))}
              >
                Customize
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                size="small"
                className={classes.docsButton}
                href={docs}
                target="_blank"
                rel="noreferrer"
              >
                Docs
              </Button>
            </Grid>
          </Grid>
          <Box className={classes.sampleItem}>{component}</Box>
        </Box>
      ))}
    </Box>
  )
}

export default MuiComponentSamples
