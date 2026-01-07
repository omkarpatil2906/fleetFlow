"use client";

import React from "react";
import { FormControl, TextField, TextFieldProps } from "@mui/material";
import { Controller, Control, FieldError } from "react-hook-form";

interface InputFieldProps {
  name: string;
  label: string;
  control: Control<any>;
  error?: FieldError;
  defaultValue?: any;
  type?: string;
  disabled?: boolean;
  focused?: boolean;
  variant?: TextFieldProps["variant"];
  inputRef?: React.Ref<any>;
  inputProps?: any;
  InputProps?: TextFieldProps["InputProps"];
  sx?: any;
  onKeyDown?: React.KeyboardEventHandler;
  onFocusCapture?: React.FocusEventHandler;
  onBlurCapture?: React.FocusEventHandler;
  dontCapitalize?: boolean;
  color?: TextFieldProps["color"];
  isMandatory?: boolean;
  id?: string;
  placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  sx,
  focused,
  variant = "outlined",
  defaultValue,
  inputProps,
  type = "text",
  disabled = false,
  inputRef,
  name,
  label,
  error,
  onKeyDown,
  control,
  dontCapitalize = false,
  color,
  isMandatory = false,
  id,
  onFocusCapture,
  onBlurCapture,
  InputProps = {},
  placeholder,
}) => {
  return (
    <FormControl fullWidth sx={sx}>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <TextField
            {...field}
            id={id}
            label={isMandatory ? `${label} *` : label}
            placeholder={
              placeholder ?? (isMandatory ? `${label} *` : label)
            }
            type={type}
            autoComplete="off"
            disabled={disabled}
            error={!!error?.message}
            color={color}
            fullWidth
            variant={variant}
            autoFocus={focused}
            inputRef={inputRef}
            onBlurCapture={onBlurCapture}
            onFocusCapture={onFocusCapture}
            onKeyDown={onKeyDown}
            InputProps={{
              ...InputProps,
              ...inputProps,
              style: {
                textTransform: dontCapitalize ? "none" : "capitalize",
                height: "44px",
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                backgroundColor: "white",
                transition: "all 0.2s ease-in-out",
                "&.Mui-error": {
                  borderColor: "#ef4444",
                },
              },

              "& .MuiInputBase-input": {
                fontSize: "12px",
                padding: 0,
                display: "flex",
                alignItems: "center",
                height: "100%",
                paddingLeft: "16px",
              },

              "& .MuiInputLabel-root": {
                fontSize: "12px",
                color: "#6b7280",
                left: "16px",
                top: "50%",
                transform: "translateY(-50%)",
                position: "absolute",
                backgroundColor: "white",
                paddingX: "4px",
                transition: "all 0.2s ease-in-out",
                pointerEvents: "none",
                fontFamily: "Poppins, sans-serif",
                "&.Mui-error": {
                  color: "#ef4444",
                },
              },

              "& .MuiInputLabel-shrink": {
                top: 1,
                transform: "translateY(-50%) scale(0.85)",
                backgroundColor: "white",
                zIndex: 1,
                fontFamily: "Poppins, sans-serif",
              },

              "& input::-webkit-outer-spin-button": {
                WebkitAppearance: "none",
                margin: 0,
              },
              "& input::-webkit-inner-spin-button": {
                WebkitAppearance: "none",
                margin: 0,
              },
              "& input[type=number]": {
                MozAppearance: "textfield",
              },
            }}
          />
        )}
      />
    </FormControl>
  );
};

export default InputField;
