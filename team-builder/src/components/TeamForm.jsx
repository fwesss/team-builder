import React, { useState } from 'react';
import PropTypes from 'prop-types';


const TeamForm = ({ teamList, setTeamList }) => {
  const [teamMember, setTeamMember] = useState({
    id: 0,
    name: '',
    email: '',
    role: '',
  });

  const handleChange = (evt) => {
    setTeamMember({ ...teamMember, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setTeamMember({ ...teamMember, id: teamMember.id += 1 });
    setTeamList([...teamList, teamMember]);
    setTeamMember({ name: '', email: '', role: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name:
        <input id="name" type="text" name="name" value={teamMember.name} onChange={handleChange} />
      </label>

      <label htmlFor="email">
        Email:
        <input id="email" type="email" name="email" value={teamMember.email} onChange={handleChange} />
      </label>

      <label htmlFor="role">
        Role:
        <input id="role" type="text" name="role" value={teamMember.role} onChange={handleChange} />
      </label>

      <button type="submit" value="Submit">Add Team Member</button>
    </form>
  );
};

TeamForm.propTypes = {
  teamList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ).isRequired,
  setTeamList: PropTypes.func.isRequired,
};

export default TeamForm;
