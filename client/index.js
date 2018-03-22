import './main.scss'
import Header from 'components/header'
import Overview from 'components/overview'
import React from 'react'
import ReactDOM from 'react-dom'

const CONFERENCES = [
  {
    divisions: [
      {
        id: 1,
        name: 'AFC East',
        teams: [
          {
            id: 1,
            name: 'New York Jets'
          },
          {
            id: 2,
            name: 'New England Patriots'
          },
          {
            id: 3,
            name: 'Miami Dolphins'
          },
          {
            id: 4,
            name: 'Buffalo Bills'
          }
        ]
      },
      {
        id: 2,
        name: 'AFC West',
        teams: [
          {
            id: 5,
            name: 'F New York Jets'
          },
          {
            id: 6,
            name: 'F New England Patriots'
          },
          {
            id: 7,
            name: 'F Miami Dolphins'
          },
          {
            id: 8,
            name: 'F Buffalo Bills'
          }
        ]
      }
    ],
    id: 1,
    name: 'AFC'
  },
  {
    divisions: [
      {
        id: 3,
        name: 'NFC East',
        teams: [
          {
            id: 9,
            name: 'New York Jets 2'
          },
          {
            id: 10,
            name: 'New England Patriots 2'
          },
          {
            id: 11,
            name: 'Miami Dolphins 2'
          },
          {
            id: 12,
            name: 'Buffalo Bills 2'
          }
        ]
      },
      {
        id: 4,
        name: 'NFC West',
        teams: [
          {
            id: 13,
            name: 'F New York Jets 2'
          },
          {
            id: 14,
            name: 'F New England Patriots 2'
          },
          {
            id: 15,
            name: 'F Miami Dolphins 2'
          },
          {
            id: 16,
            name: 'F Buffalo Bills 2'
          }
        ]
      }
    ],
    id: 2,
    name: 'NFC'
  }
]

ReactDOM.render(
  <div>
    <Header />
    <Overview conferences={CONFERENCES} />
  </div>,
  document.getElementById('app')
)
