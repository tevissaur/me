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
                  desc="This web app allows the user to select some criteria to generate a random movie and meal to have a nice night inside. The user can save suggestions, and change the criteria as well. It communicates with a few third-party APIs to get the movie and recipe data. Developed in a team of three junior web developers as the first group project in the program. My responsibilities included developing the web apps API calls, error handling, and DOM manipulation."
                  repoLink=""
                  demoLink=""
                  img="work-net-grill"
                  authors={["Linh Bui", "Alexander Leino", "Tevis Reilly"]}
                />
              } />
              <Route path="works/tic-tac-toe" element={
                <SingleWork
                  title="Tic Tac Toe"
                  desc="The classic game that everyone loves. My first attempt to build something with javascript. Learned a lot about how to manipulate the DOM, conditional statements, and data management."
                  repoLink=""
                  demoLink=""
                  img="work-ttt"
                  authors={["Tevis Reilly"]}
                />
              } />
              <Route path="works/forene-wiki" element={
                <SingleWork
                  title="Forene Wiki"
                  desc="A web based wiki of my own homebrew DnD world. This was a first attempt at creating something with HTML and CSS only. Gained a complete understanding of the box model, grid layouts, flex layouts, accessibility, and basic web design. Currently transforming this into a React app that generates a wiki similar to this one, after the user creates the world with the tools available to them. "
                  repoLink=""
                  demoLink=""
                  img="work-forene"
                  authors={["Tevis Reilly"]}
                />
              } />
              <Route path="works/chicken-run" element={
                <SingleWork
                  title="Chicken Run"
                  desc="This full-stack web application gives you all the tools you need to organize your own garden. The first full-stack app made by a group of four web developers. I took the role of front-end developer, designing UI to gather data and send that over an API call and handle server responses. Used Handlebars.js, an express server, and MySQL to save data to a SQL database, created API routes to handle requests and responses, and rendered views with the data requested through the routses, all inside of the MVC architecture."
                  repoLink=""
                  demoLink=""
                  img="work-chicken"
                  authors={["Tevis Reilly", "Adam Olsey", "Travis Schram", "Max Parks"]}
                />
              } />
              <Route path="works/your-local-farmers" element={
                <SingleWork
                  title="Your Local Farmers"
                  desc="This web application gives you all the tools you need to organize your own garden. "
                  repoLink=""
                  demoLink=""
                  img="work-farmers"
                  authors={["Tevis Reilly", "Alexander Leino", "Linh Bui", "Quentin Hnilica"]}
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
