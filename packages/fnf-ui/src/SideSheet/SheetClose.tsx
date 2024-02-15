import { memo } from "react";
import { ActionCrossIcon } from "../../../fnf-icons/src";
import * as Styled from "./SideSheet.styled";
import { SideCloseProps } from "./SideSheet.types";
import React from "react";

const SheetClose = memo(({ onClick, state }: SideCloseProps) => {
  return (
    <Styled.Close
      display="flex"
      alignItems="center"
      justifyContent="center"
      data-state={state}
      onClick={onClick}
    >
      <ActionCrossIcon />
    </Styled.Close>
  );
});

export default SheetClose;
