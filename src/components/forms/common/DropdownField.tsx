"use client";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import { FormControl } from "@mui/material";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Controller } from "react-hook-form";
import ReactSelect, { components, createFilter } from "react-select";

type OptionType = {
  label: string;
  value: string | number;
};

interface DropdownFieldProps {
  name: string;
  control: any;
  dataArray: OptionType[];
  placeholder?: string;
  error?: any;
  isDisabled?: boolean;
  isMulti?: boolean;
  isClearable?: boolean;
  isSearchable?: boolean;
  isMandatory?: boolean;
  className?: string;
  defaultValue?: any;
  menuPlacement?: "auto" | "top" | "bottom";
  menuShouldBlockScroll?: boolean;
  searchIcon?: boolean;
}

export default function DropdownField({
  name,
  control,
  dataArray,
  placeholder,
  error,
  isDisabled = false,
  isMulti = false,
  isClearable = false,
  isSearchable = true,
  isMandatory = false,
  className = "",
  defaultValue,
  menuPlacement = "bottom",
  menuShouldBlockScroll = false,
  searchIcon = false,
}: DropdownFieldProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [menuPortalTarget, setMenuPortalTarget] = useState<HTMLElement | null>(null);
  const isError = !!error?.message;

  useEffect(() => {
    setMenuPortalTarget(document.body);
  }, []);

  const selectStyles = {
    control: (base: any) => ({
      ...base,
      borderRadius: "12px",
      minHeight: "44px",
      fontSize: "12px",
      borderColor: isError ? "#ef4444" : base.borderColor,
      boxShadow: "none",
      "&:hover": {
        borderColor: "#6366f1",
      },
    }),
    menuPortal: (base: any) => ({
      ...base,
      zIndex: 9999,
    }),
  };

  const { ValueContainer, Placeholder } = components;

  const CustomValueContainer = ({ children, ...props }: any) => (
    <ValueContainer {...props}>
      <Placeholder {...props}>
        {props.selectProps.placeholder}
      </Placeholder>
      {React.Children.map(children, (child) =>
        child && child.type !== Placeholder ? child : null
      )}
    </ValueContainer>
  );

  return (
    <div ref={ref} className="w-full">
      <FormControl fullWidth>
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue}
          render={({ field }) => (
            <ReactSelect
              {...field}
              options={dataArray}
              isDisabled={isDisabled}
              isMulti={isMulti}
              isClearable={isClearable}
              isSearchable={isSearchable}
              placeholder={isMandatory ? `${placeholder} *` : placeholder}
              className={className}
              styles={selectStyles}
              menuPlacement={menuPlacement}
              menuPortalTarget={menuPortalTarget}
              menuShouldBlockScroll={menuShouldBlockScroll}
              filterOption={createFilter({ matchFrom: "any" })}
              components={{
                DropdownIndicator: () =>
                  searchIcon ? (
                    <SearchIcon className="mx-2 text-gray-500" />
                  ) : (
                    <KeyboardArrowDownIcon className="mx-2 text-gray-500" />
                  ),
                ValueContainer: CustomValueContainer,
              }}
            />
          )}
        />
      </FormControl>
    </div>
  );
}
