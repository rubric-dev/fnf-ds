import { forwardRef } from "react";
import { ActionSmallTickIcon } from "../../../fnf-icons/src";
import * as Styled from "./Checkbox.styled";
import { CheckboxProps } from "./Checkbox.types";
import { CHECKBOX_ICON_BOX } from "../constant";
import React from "react";

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, indeterminate, ...props }, ref) => {
    return (
      <Styled.LabelContainer>
        <Styled.Input
          ref={ref}
          type="checkbox"
          {...props}
          data-indeterminate={indeterminate}
        />
        <Styled.IconBox
          display="flex"
          alignItems="center"
          justifyContent="center"
          flex="1"
          id={CHECKBOX_ICON_BOX}
        >
          {indeterminate ? (
            <Styled.Indeterminate />
          ) : (
            <ActionSmallTickIcon size={16} />
          )}
        </Styled.IconBox>
        {label && <Styled.Label>{label}</Styled.Label>}
      </Styled.LabelContainer>
    );
  }
);

Checkbox.displayName = "Checkbox";
