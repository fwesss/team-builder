import React, { useState } from 'react';
import 'bulma';

import TeamList from './components/TeamList';
import Form from './components/Form';


const App = () => {
  const [teamList, setTeamList] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState({
    id: 0,
    name: '',
    email: '',
    role: '',
  });

  const editMember = (edit, changedMember) => {
    setTeamList(teamList.map((member) => {
      if (member === edit) return { ...changedMember };
      return member;
    }));

    setMemberToEdit({
      id: 0,
      name: '',
      email: '',
      role: '',
    });
  };

  return (
    <>
      <TeamList teamList={teamList} setMemberToEdit={setMemberToEdit} />
      <Form
        teamList={teamList}
        setTeamList={setTeamList}
        memberToEdit={memberToEdit}
        editMember={editMember}
      />
    </>
  );
};

export default App;
