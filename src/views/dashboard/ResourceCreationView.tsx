import * as React from 'react';
import { Link } from 'react-router-dom';
import CategorySelectInput from './components/CategorySelectInput';

const fakeOptions = [
  { id: Date.now().toString(), category: "Software Craftsmanship" },
  { id: Date.now().toString(), category: "Longboarding" },
  { id: Date.now().toString(), category: "Clean code" },
];

export default function ResourceCreationView() {
  return (
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
            <CategorySelectInput options={fakeOptions}/>
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
  )
}
