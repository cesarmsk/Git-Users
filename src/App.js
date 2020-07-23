import React from 'react'
import AddPersonForm from './components/AddPersonForm'
import ReposList from './components/ReposList'


function App() {
  const [ repos, setRepos ] = React.useState([])
  
  React.useEffect(() => {
      setRepos([ { name: "cesarmsk" }])
  }, [])
  
  function addPerson(newPerson) {
     setRepos([newPerson])
  }



  try{

     

          return (
   
      <div>
          <AddPersonForm addPerson={addPerson} />
          <ReposList repos={repos} />
      </div>)

          
      } catch (error) {

          return (
   
      <div>
          <AddPersonForm addPerson={addPerson} />
     
      </div>)

          
      }
  
  }


export default App