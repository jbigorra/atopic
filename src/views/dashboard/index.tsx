import * as React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import { AddResourceButton, Card, SearchBar } from "./components";

const fakeCards = [
  {
    id: "1",
    category: "Category 1",
    tags: ["software", "ddd", "tdd"],
    resources: ["https://youtube.com/?v=someYoutubeVideo"],
  },
  {
    id: "2",
    category: "Category 2",
    tags: ["software", "ddd", "tdd"],
    resources: ["https://youtube.com/?v=someYoutubeVideo"],
  },
];

export function DashboardView() {
  let { path } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route exact path={path}>
          <div className="container is-fluid">
            <div className="columns">
              <div className="column">
                <SearchBar />
              </div>
              {fakeCards.map((c) => (
                <Card key={c.id} {...c} />
              ))}
            </div>
          </div>
        </Route>

        <Route path={`${path}/resource/add`}>
          <div className="container is-fluid">
            <div className="columns">
              <div className="is-fullwidth">
                <p>/resource/add</p>
                <Link to="/dashboard">Return</Link>
              </div>
            </div>
          </div>
        </Route>
      </Switch>
      <AddResourceButton />
    </>
  );
}
