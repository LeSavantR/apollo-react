import React, { useState } from 'react';
import { LoginForm } from './components/LoginForm';
import { Notify } from './components/Notify';
import { Person } from './components/Person';
import { PersonForm } from './components/PersonForm';
import { PhoneForm } from './components/PhoneForm';
import { usePersons } from './services/persons.query.service';

export interface AppInterface {}


const App:React.FC<AppInterface> = () => {

  const [ errors, setErrors ] = useState('');
  const [ token, setToken ] = useState<String | null>(null);

  const notifyError = (message: string) => {
    setErrors(message)
    setTimeout(() => setErrors(''), 5000)
  }

  const { data, error, loading } = usePersons()

  return (
    <div className="App">
      <LoginForm notifyError={notifyError} setToken={setToken} />
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
