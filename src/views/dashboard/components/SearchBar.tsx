import * as React from 'react'
import { MagnifyingGlassIcon } from '~components/icons'

export function SearchBar() {
  return (
    <div className="field has-addons">
      <p className="control has-icons-left is-expanded">
        <input className="input is-big is-primary" type="text" placeholder="Search..." />
        <span className="icon is-small is-left is-flex is-align-items-center is-justify-content-center">
          <MagnifyingGlassIcon />
        </span>
      </p>
      <div className="control">
        <button type="submit" className="button is-primary">Search</button>
      </div>
    </div>
  )
}
