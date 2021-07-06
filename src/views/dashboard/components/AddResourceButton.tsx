import { PlusFilledIcon } from "@components/icons";
import * as React from "react";
import { Link } from "react-router-dom";
import "./AddResourceButton.sass";

export function AddResourceButton() {
  return (
    <div className="add-resource-button">
      <Link to={`/dashboard/resource/add`} className="button is-rounded is-large" href="#">
        <span className="icon is-medium">
          <PlusFilledIcon />
        </span>
      </Link>
    </div>
  );
}
