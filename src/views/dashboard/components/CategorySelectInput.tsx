import * as React from "react";
import {
  ChangeEvent,
  FocusEvent,
  MouseEvent, RefObject, TouchEvent,
  useRef,
  useState
} from "react";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import "./CategorySelectInput.sass";

enum DropdownState {
  Active = "is-active",
  Inactive = "",
}

type Options = Array<{ id: string; category: string }>;

type Props = {
  initialOptions: Options;
};

type ClickEvent<T> = MouseEvent<T> | TouchEvent<T>;

function useSelectInput(ref: RefObject<HTMLElement>, initialOptions: Options) {
  const [isActiveClass, setIsActiveClass] = useState<DropdownState>(
    DropdownState.Inactive
  );
  const [inputValue, setInputValue] = useState<string>("");
  const [options, setOptions] = useState<Options>(initialOptions);

  useOnClickOutside(ref, hideCategoryDropdown);

  function hideCategoryDropdown() {
    setIsActiveClass(DropdownState.Inactive);
  }

  function handleInputFocus(e: FocusEvent<HTMLInputElement>): void {
    if (!isActiveClass) setIsActiveClass(DropdownState.Active);
  }

  function handleSelection(e: ClickEvent<HTMLAnchorElement>): void {
    e.preventDefault();
    const value = e.currentTarget.getAttribute("data-selected");
    setInputValue(value || "");
    setIsActiveClass(DropdownState.Inactive);
    setOptions(initialOptions);
  }

  function handleOnChange(e: ChangeEvent<HTMLInputElement>): void {
    const value = e.currentTarget.value;
    if (value.length > 0) {
      const options = filter(initialOptions, value);
      setOptions(options);
    } else {
      setOptions(initialOptions);
    }
    setInputValue(value);
  }

  function filter(options: Options, text: string): Options {
    return options.filter((o) => o.category.match(text) !== null);
  }

  return {
    inputValue,
    isActiveClass,
    handleInputFocus,
    handleSelection,
    handleOnChange,
    options
  };
}

export default function CategorySelectInput({ initialOptions }: Props) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const {
    inputValue,
    isActiveClass,
    handleInputFocus,
    handleSelection,
    handleOnChange,
    options
  } = useSelectInput(dropdownRef, initialOptions);

  function showOptions() {
    if (options.length > 0) {
      return options.map((o, i) => (
        <a
          className={"dropdown-item " + (o.category === inputValue ? "is-active" : "")}
          key={i}
          data-selected={o.category}
          onClick={handleSelection}
        >
          {o.category}
        </a>
      ));
    }

    return (
      <div className="dropdown-item">
        No category found. On submit, the resource will be added to the new
        &nbsp;<strong>{inputValue}</strong> category.
      </div>
    );
  }

  return (
    <>
      <div className="category-select-input field">
        <label className="label" htmlFor="category">
          Category
        </label>
        <div ref={dropdownRef} className={"dropdown control " + isActiveClass}>
          <div className="dropdown-trigger">
            <input
              onFocus={handleInputFocus}
              onChange={handleOnChange}
              id="category"
              name="category"
              className="input"
              type="text"
              placeholder="e.g. Software Engineering"
              aria-haspopup="true"
              aria-controls="dropdown-menu"
              value={inputValue}
            />
          </div>
          <div className="dropdown-menu" id="dropdown-menu" role="menu">
            <div className="dropdown-content">
              {showOptions()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
