import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Baseboard from './components/Baseboard';

function App() {
  
  const teams = [
    {
      name: '',
      primaryColor: '',
      secondColor: ''
    },
    {
      name: 'Programação',
      primaryColor: '#D9F7E9',
      secondColor: '#57C278'
    },
    {
      name: 'Front-end',
      primaryColor: '#E8F8FF',
      secondColor: '#82CFFA'
    },
    {
      name: 'Data Science',
      primaryColor: '#F0F8E2',
      secondColor: '#A6D157'
    },
    {
      name: 'Devops',
      primaryColor: '#FDE7E8',
      secondColor: '#E06B69'
    },
    {
      name: 'Ux e Design',
      primaryColor: '#FAE9F5',
      secondColor: '#DB6EBF'
    },
    {
      name: 'Mobile',
      primaryColor: '#FFF5D9',
      secondColor: '#FFBA05'
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FFEEDF',
      secondColor: '#FF8A29'
    }
  ]

  const [collaborators, setCollaborators] = useState([])

  const newCollaboratorsAdded = (collaborator) => {
    console.log(collaborator)
    setCollaborators([...collaborators, collaborator])  
  }

  return (
    <div className="App">
      <Banner/>
      <Form teams={teams.map(team => team.name)} registeredCollaborators={collaborators => newCollaboratorsAdded(collaborators)}/>

      {teams.map(
        team => 
        <Team key={team.name} 
        name={team.name} primaryColor={team.primaryColor} 
        secondColor={team.secondColor}
        collaborators={collaborators.filter(collaborator => collaborator.team === team.name)}
      />)}

     <Baseboard/> 
    </div>

  );
}

export default App;
