import * as React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import { InMemoryCardsApi } from "~modules/api-clients/cards-api/cards-api.client";
import { AddResourceButton, Card, SearchBar } from "./components";
import { ICards } from "./components/Card";

const cardsApi = new InMemoryCardsApi();

export function DashboardView() {
  const { path } = useRouteMatch();
  const queryClient = useQueryClient();
  const cardsQuery = useQuery<ICards[], Error>('cards', cardsApi.getAll);
  const mutation = useMutation(cardsApi.createOne, {
    onSuccess: () => {
      queryClient.invalidateQueries('cards')
    },
  });

  function renderCards() {
    if (cardsQuery.isFetching)
      return (
        <div className="column">
          <p className="title">Loading cards...</p>
        </div>
      );

    if (cardsQuery.isError)
      return (
        <div className="column">
          <p className="title is-danger">{cardsQuery.error}</p>
        </div>
      );

    return (
      cardsQuery.data?.map((c) => (
        <Card key={c.id} {...c} />
      ))
    )
  }

  return (
    <>
      <Switch>
        <Route exact path={path}>
          <div className="container is-fluid">
            <div className="columns">
              <div className="column">
                <SearchBar />
              </div>
              {renderCards()}
            </div>
          </div>
        </Route>

        <Route path={`${path}/resource/add`}>
          <div className="container is-fluid">
            <div className="columns">
              <div className="is-fullwidth">
                <form>
                  <div className="field">
                    <label className="label" htmlFor="resource-url">Resource URL</label>
                    <div className="control">
                      <input id="resource-url" name="resource-url" className="input" type="url" placeholder="e.g. https://www.youtube.com/watch?v=someVideoId..." />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor="category">Category</label>
                    <div className="control">
                      <input id="category" name="category" className="input" type="text" placeholder="e.g. Software Engineering" />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor="select-category">Select Category</label>
                    <div className="control">
                      <div className="select is-fullwidth">
                        <select id="select-category" name="select-category">
                          <option defaultChecked defaultValue="none">None</option>
                          <option>Software Engineering</option>
                          <option>Skateboarding</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor="tags">Tags</label>
                    <div className="control">
                      <input id="tags" name="tags" className="input" type="text" placeholder="e.g. Software Engineering" />
                    </div>
                  </div>
                </form>
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
