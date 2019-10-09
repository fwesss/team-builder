import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Form = ({ teamList, setTeamList }) => {
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
    setTeamMember({
      ...teamMember, name: '', email: '', role: '',
    });
  };

  return (
    <section className="section columns">
      <div className="container column is-3">
        <form className="field" onSubmit={handleSubmit}>
          <label className="label" htmlFor="name">
            Name:
            <div className="control">
              <input className="input" id="name" type="text" name="name" value={teamMember.name} onChange={handleChange} />
            </div>
          </label>

          <label className="label" htmlFor="email">
            Email:
            <div className="control">
              <input className="input" id="email" type="email" name="email" value={teamMember.email} onChange={handleChange} />
            </div>
          </label>

          <label className="label" htmlFor="role">
            Role:
            <div className="control">
              <input className="input" id="role" type="text" name="role" value={teamMember.role} onChange={handleChange} />
            </div>
          </label>

          <div className="control">
            <button className="button is-primary" type="submit" value="Submit">Add Team Member</button>
          </div>
        </form>
      </div>
    </section>
  );
};

Form.propTypes = {
  teamList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ).isRequired,
  setTeamList: PropTypes.func.isRequired,
};

export default Form;
