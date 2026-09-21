import React from "react"
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import OverrideInput from "./OverrideInput"
import { MuiOverrideTarget } from "./catalog"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    accordionDetails: {
      flexDirection: "column",
      padding: 0,
    },
    classKeyDetails: {
      flexDirection: "column",
      "&> *": {
        marginBottom: theme.spacing(2),
      },
    },
    hoverTitle: {
      marginTop: theme.spacing(1),
    },
  })
)

const slotProperties: Array<{
  property: string
  label: string
  inputType: "color" | "text"
}> = [
  { property: "color", label: "Color", inputType: "color" },
  {
    property: "backgroundColor",
    label: "Background Color",
    inputType: "color",
  },
  { property: "borderColor", label: "Border Color", inputType: "color" },
  { property: "padding", label: "Padding", inputType: "text" },
  { property: "margin", label: "Margin", inputType: "text" },
  { property: "fontSize", label: "Font Size", inputType: "text" },
  { property: "fontWeight", label: "Font Weight", inputType: "text" },
  { property: "borderRadius", label: "Border Radius", inputType: "text" },
  { property: "border", label: "Border", inputType: "text" },
  { property: "boxShadow", label: "Box Shadow", inputType: "text" },
]

const hoverProperties = [
  { property: "color", label: "Color" },
  { property: "backgroundColor", label: "Background Color" },
  { property: "borderColor", label: "Border Color" },
]

function ClassKeyAccordion({
  muiKey,
  classKey,
  defaultExpanded,
}: {
  muiKey: string
  classKey: string
  defaultExpanded: boolean
}) {
  const classes = useStyles()
  const slotPath = `overrides.${muiKey}.${classKey}`

  return (
    <Accordion defaultExpanded={defaultExpanded}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        onClick={event => event.stopPropagation()}
      >
        <Typography variant="body2">{classKey}</Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.classKeyDetails}>
        {slotProperties.map(({ property, label, inputType }) => (
          <OverrideInput
            key={`${slotPath}.${property}`}
            label={label}
            path={`${slotPath}.${property}`}
            inputType={inputType}
          />
        ))}
        <Typography className={classes.hoverTitle} variant="body2">
          Hover
        </Typography>
        {hoverProperties.map(({ property, label }) => (
          <OverrideInput
            key={`${slotPath}.&:hover.${property}`}
            label={label}
            path={`${slotPath}.&:hover.${property}`}
            inputType="color"
          />
        ))}
      </AccordionDetails>
    </Accordion>
  )
}

export default function MuiComponentAccordion({
  target,
  defaultExpanded = false,
}: {
  target: MuiOverrideTarget
  defaultExpanded?: boolean
}) {
  const classes = useStyles()
  const hasRoot = target.classKeys.includes("root")

  return (
    <Accordion defaultExpanded={defaultExpanded}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="body2">{target.label}</Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
        {target.classKeys.map(classKey => (
          <ClassKeyAccordion
            key={`${target.muiKey}.${classKey}`}
            muiKey={target.muiKey}
            classKey={classKey}
            defaultExpanded={
              classKey === "root" ||
              (!hasRoot && classKey === target.classKeys[0])
            }
          />
        ))}
      </AccordionDetails>
    </Accordion>
  )
}
