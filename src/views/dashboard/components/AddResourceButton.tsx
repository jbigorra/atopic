import * as React from "react";
import { Link } from "react-router-dom";
import { PlusFilledIcon } from "~components/icons";
import "./AddResourceButton.sass";

export function AddResourceButton() {
  return (
    <div className="add-resource-button">
      <Link to={`/dashboard/resource/add`} className="button is-rounded is-medium" href="#">
        <span className="icon is-medium">
          <PlusFilledIcon height="28" width="28" />
        </span>
      </Link>
    </div>
  );
}
