import React, { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import ToolPanel from "../ToolPanel"
import {
  getComponentCustomizeEntry,
  getComponentOverrideResetConfigs,
} from "./catalog"
import MuiComponentAccordion from "./MuiComponentAccordion"
import { removeThemeOptions } from "src/state/actions"
import { RootState } from "src/state/types"
import { getByPath } from "src/utils"
import { ThemeValueChangeEvent } from "../events"

type ComponentCustomizeToolsProps = {
  sampleId: string
  onClose: () => void
}

export default function ComponentCustomizeTools({
  sampleId,
  onClose,
}: ComponentCustomizeToolsProps) {
  const dispatch = useDispatch()
  const entry = getComponentCustomizeEntry(sampleId)
  const panelTitle = entry?.title || sampleId
  const targets = entry?.targets

  const hasOverrides = useSelector((state: RootState) => {
    if (!targets?.length) {
      return false
    }
    return targets.some(
      target =>
        getByPath(state.themeOptions, `overrides.${target.muiKey}`) !==
        undefined
    )
  })

  const handleReset = useCallback(() => {
    if (!targets?.length) {
      return
    }
    const result = dispatch(
      removeThemeOptions(getComponentOverrideResetConfigs(targets))
    )
    if (result) {
      document.dispatchEvent(ThemeValueChangeEvent())
    }
  }, [dispatch, targets])

  return (
    <ToolPanel
      panelTitle={panelTitle}
      onClose={onClose}
      onReset={handleReset}
      resetDisabled={!hasOverrides}
    >
      {targets?.map((target, index) => (
        <MuiComponentAccordion
          key={target.muiKey}
          target={target}
          defaultExpanded={index === 0}
        />
      ))}
    </ToolPanel>
  )
}
