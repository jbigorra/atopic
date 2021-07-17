import * as React from "react";
import {
  ChangeEvent,
  FocusEvent,
  MouseEvent,
  TouchEvent,
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

function filter(options: Options, text: string): Options {
  return options.filter((o) => o.category.match(text) !== null);
}

export default function CategorySelectInput({ initialOptions }: Props) {
  const [isActiveClass, setIsActiveClass] = useState<DropdownState>(
    DropdownState.Inactive
  );
  const [inputValue, setInputValue] = useState<string>("");
  const [isFiltering, setIsFiltering] = useState<boolean>(false);
  const [filteredOptions, setFilteredOptions] = useState<Options>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(dropdownRef, hideCategoryDropdown);

  function hideCategoryDropdown() {
    setIsActiveClass(DropdownState.Inactive);
  }

  function handleInputFocus(e: FocusEvent<HTMLInputElement>): void {
    if (!isActiveClass) setIsActiveClass(DropdownState.Active);
  }

  function handleSelection(e: ClickEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const value = e.currentTarget.getAttribute("data-category");
    setInputValue(value || "");
    setIsActiveClass(DropdownState.Inactive);
    setFilteredOptions([]);
    setIsFiltering(false);
  }

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    if (value.length > 0) {
      const options = filter(initialOptions, value);
      setFilteredOptions(options);
      setIsFiltering(true);
    } else {
      setIsFiltering(false);
    }
    setInputValue(value);
  }

  function showFilteredOptions() {
    if (filteredOptions.length > 0) {
      return filteredOptions.map((o, i) => (
        <a
          className={"dropdown-item " + (o.category === inputValue ? "is-active" : "")}
          key={i}
          data-category={o.category}
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
              {isFiltering
                ? showFilteredOptions()
                : initialOptions.map((o, i) => (
                    <a
                      className={"dropdown-item " + (o.category === inputValue ? "is-active" : "")}
                      key={i}
                      data-category={o.category}
                      onClick={handleSelection}
                    >
                      {o.category}
                    </a>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
