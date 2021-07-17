import * as React from "react";
import { FocusEvent, MouseEvent, TouchEvent, useRef, useState } from "react";
import useOnClickOutside from "../../../hooks/useOnClickOutside";

enum DropdownState {
  Active = "is-active",
  Inactive = "",
}

type Props = {
  options: Array<{ id: string, category: string }>
}

type ClickEvent<T> = MouseEvent<T> | TouchEvent<T>;

export default function CategorySelectInput({ options }: Props) {
  const [isActiveClass, setIsActiveClass] = useState<DropdownState>(
    DropdownState.Inactive
  );
  const [inputValue, setInputValue] = useState<string>("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(dropdownRef, hideCategoryDropdown);

  function hideCategoryDropdown() {
    setIsActiveClass(DropdownState.Inactive);
  }

  function handleInputFocus(e: FocusEvent<HTMLInputElement>): void {
    if (!isActiveClass) setIsActiveClass(DropdownState.Active);
  }

  function handleSelection(e: ClickEvent<HTMLDivElement>) {
    const value = e.currentTarget.getAttribute('data-category');
    console.log(value);
    setInputValue(value || "");
    setIsActiveClass(DropdownState.Inactive);
  }

  return (
    <>
      <div ref={dropdownRef} className={"dropdown " + isActiveClass}>
        <div className="dropdown-trigger">
          <div className="field">
            <label className="label" htmlFor="category">
              Category
            </label>
            <div className="control">
              <input
                onFocus={handleInputFocus}
                id="category"
                name="category"
                className="input"
                type="text"
                placeholder="e.g. Software Engineering"
                aria-haspopup="true"
                aria-controls="dropdown-menu"
                defaultValue={inputValue}
              />
            </div>
          </div>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            { options.map((o,i) => (
              <div className="dropdown-item" key={i} data-category={o.category} onClick={handleSelection}>
                {o.category}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
