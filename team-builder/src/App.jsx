import React, { useState } from 'react';

import TeamList from './components/TeamList';
import TeamForm from './components/TeamForm';


const App = () => {
  const [teamList, setTeamList] = useState([{
    id: 0,
    name: '',
    email: '',
    role: '',
  }]);

  return (
    <>
      <TeamList teamList={teamList} />
      <TeamForm teamList={teamList} setTeamList={setTeamList} />
    </>
  );
};

export default App;
