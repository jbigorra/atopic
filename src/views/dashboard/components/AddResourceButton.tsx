import { PlusFilledIcon } from "@components/icons";
import * as React from "react";
import "./AddResourceButton.sass";

export function AddResourceButton() {
  return (
    <div className="add-resource-button">
      <a className="button is-rounded is-large" href="#">
        <span className="icon is-medium">
          <PlusFilledIcon />
        </span>
      </a>
    </div>
  );
}
