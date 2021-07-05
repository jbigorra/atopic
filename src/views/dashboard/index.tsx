import { SearchBar } from '@components/forms/SearchBar'
import * as React from 'react'
import { Card } from './components/Card'

const fakeCards = [
  { id: "1", category: 'Category 1', tags: ['software', 'ddd', 'tdd'], resources: ["https://youtube.com/?v=someYoutubeVideo"] },
  { id: "2", category: 'Category 2', tags: ['software', 'ddd', 'tdd'], resources: ["https://youtube.com/?v=someYoutubeVideo"] },
]

export function DashboardView() {
  return (
    <div className="container is-fluid">
      <div className="columns">
        <div className="column">
          <SearchBar />
        </div>
        {fakeCards.map(c => (<Card key={c.id} {...c} />))}
      </div>
    </div>
  )
}
