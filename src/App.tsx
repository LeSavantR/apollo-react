import { gql, useQuery } from '@apollo/client';
import React, { CSSProperties } from 'react';
import './App.css';
import { Person } from './components';
import { Grid } from './components/Grid';
import { Persons } from './Models/person';

const ALL_PERSONS = gql`
  query {
    allPersons {
      id
      name
      phone
      address {
        street
        city
      }
    }
  }
`;

const er = 'color: red;' as CSSProperties

export interface AppInterface {}

const App:React.FC<AppInterface> = () => {

  const { data, error, loading } = useQuery(ALL_PERSONS)

  if(error) return <span style={er}>Hubo un Error por favor intente luego</span>

  return (
    <div className="App">
      {loading
        ? <p>Loading ... </p>
        : <>
            <p>Apollo + TSX + React!</p>
            {
              data && data.allPersons.map((person: { id: React.Key | null | undefined; }): Persons => (<Grid>
                <Person key={person.id} person={person} />
              </Grid>)
            }
          </>
      }
    </div>
  )
}

export default App
