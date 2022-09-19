import React, { useState } from 'react';
import { Notify, Person, PersonForm } from './components';
import { PhoneForm } from './components/PhoneForm';
import { usePersons } from './services';

export interface AppInterface {}


const App:React.FC<AppInterface> = () => {

  const [ errors, setErrors ] = useState('')
  const notifyError = (message: string) => {
    setErrors(message)
    setTimeout(() => setErrors(''), 5000)
  }

  const { data, error, loading } = usePersons()

  return (
    <div className="App">
      {loading
        ? <p>Loading ... </p>
        : <Person persons={data?.allPersons} />
      }
      <PhoneForm notifyError={notifyError} />
      <PersonForm notifyError={notifyError}>
        <Notify errorMessage={errors} />
      </PersonForm>
    </div>
  )
}

export default App
