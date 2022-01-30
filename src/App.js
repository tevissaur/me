import { SingleWork } from './components'
import { Works, Bio, Contact } from './pages'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import './assets/css/style.css';
import './assets/css/test.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout';



const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
})



function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
        <main className=".body">
          <Routes >

            <Route path="/*" element={<Layout />}>
              <Route index element={<Bio />} />
              <Route path="bio" element={<Bio />} />
              <Route path="contact-me" element={<Contact />} />
              <Route path="works" element={<Works />} />

              <Route path="works/netflix-and-grill" element={
                <SingleWork
                  title="Netflix and Grill"
                  desc="A web app to help you choose your movie and meal for a pleasant evening"
                  repoLink=""
                  demoLink=""
                  img="work-net-grill"
                  authors={["Linh Bui", "Alexander Leino", "Tevis Reilly"]}
                />
              } />
              <Route path="works/tic-tac-toe" element={
                <SingleWork
                  title="Tic Tac Toe"
                  desc="The classic game that everyone loves"
                  repoLink=""
                  demoLink=""
                  img="work-ttt"
                  authors={["Tevis Reilly"]}
                />
              } />
              <Route path="works/forene-wiki" element={
                <SingleWork
                  title="Forene Wiki"
                  desc="A web based wiki of my own homebrew DnD world"
                  repoLink=""
                  demoLink=""
                  img="work-forene"
                  authors={["Tevis Reilly"]}
                />
              } />
              <Route path="works/chicken-run" element={
                <SingleWork
                  title="Chicken Run"
                  desc="This web application gives you all the tools you need to organize your own garden."
                  repoLink=""
                  demoLink=""
                  img="work-chicken"
                  authors={["Tevis Reilly", "Adam Olsey", "Travis Schram", "Max Parks"]}
                />
              } />
            </Route>

          </Routes>
        </main>
      </Router>
    </ApolloProvider >

  );
}

export default App;
