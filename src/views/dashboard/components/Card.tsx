import * as React from 'react';

export interface IResource {
  url: string;
}

export interface ICards {
  id: string;
  category: string;
  tags: string[];
  resources: IResource[];
}

export function Card(props: ICards) {
  const {category, tags, resources} = props;

  const hashedTags = tags.map(t => `#${t.toUpperCase()}`).join(" ");

  return (
    <div className="column is-2 is-mobile">
      <div className="card">
        <div className="card-header">
          <p className="card-header-title">{category}</p>
        </div>
        <div className="card-content">
          <div className="content">
            Resources: {resources.length}
            <br></br>
            Tags: {hashedTags}
          </div>
        </div>
        <div className="card-footer">
          <button className="button is-link is-fullwidth">Edit</button>
        </div>
      </div>
    </div>
  )
}
