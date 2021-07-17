import * as React from 'react';
import { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import CategorySelectInput from './components/CategorySelectInput';

const fakeOptions = [
  { id: Date.now().toString(), category: "Software Craftsmanship" },
  { id: Date.now().toString(), category: "Longboarding" },
  { id: Date.now().toString(), category: "Clean code" },
];

function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const form = new FormData(e.currentTarget);
  console.log(form);
}

export default function ResourceCreationView() {
  return (
    <div className="container is-fluid">
      <div className="columns">
        <div className="is-fullwidth">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label" htmlFor="resource-url">Resource URL</label>
              <div className="control">
                <input id="resource-url" name="resource-url" className="input" type="url" placeholder="e.g. https://www.youtube.com/watch?v=someVideoId..." required/>
              </div>
            </div>
            <CategorySelectInput initialOptions={fakeOptions}/>
            <div className="field">
              <label className="label" htmlFor="tags">Tags</label>
              <div className="control">
                <input id="tags" name="tags" className="input" type="text" placeholder="e.g. Software Engineering" />
              </div>
            </div>
            <div className="field is-grouped">
              <p className="control">
                <Link className="button is-danger is-outlined" to="/dashboard">Cancel</Link>
              </p>
              <p>
                <button type="submit" className="button is-primary">Save</button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
