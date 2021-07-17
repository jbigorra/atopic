import * as React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { InMemoryCardsApi } from "~modules/api-clients/cards-api/cards-api.client";
import { AddResourceButton, Card, SearchBar } from "./components";
import { ICards } from "./components/Card";
import ResourceCreationView from "./ResourceCreationView";

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
          <ResourceCreationView />
        </Route>
      </Switch>
      <AddResourceButton />
    </>
  );
}
