import { Header } from './components'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import './assets/css/style.css';
import './assets/css/test.css';
import { BrowserRouter as Router } from 'react-router-dom';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
})



function App() {

  return (
    <ApolloProvider client={client}>
      <Router>

        <main className=".body">
          <Header />
        </main>
      </Router>
    </ApolloProvider >

  );
}

export default App;
