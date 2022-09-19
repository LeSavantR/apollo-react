import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'
import ReactDOM from 'react-dom/client'
import App from './App'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000'
  })
})

const root = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(root).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
