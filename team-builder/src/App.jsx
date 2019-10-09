import React, { useState } from 'react';
import 'bulma';

import TeamList from './components/TeamList';
import Form from './components/Form';


const App = () => {
  const [teamList, setTeamList] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState({});

  return (
    <>
      <TeamList teamList={teamList} setMemberToEdit={setMemberToEdit} />
      <Form teamList={teamList} setTeamList={setTeamList} memberToEdit={memberToEdit} />
    </>
  );
};

export default App;
