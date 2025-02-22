import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


const Form = ({
  teamList, setTeamList, memberToEdit, editMember,
}) => {
  const [teamMember, addTeamMember] = useState({
    name: '',
    email: '',
    role: '',
  });

  useEffect(() => {
    addTeamMember({ ...memberToEdit });
  }, [memberToEdit]);

  const handleChange = (evt) => {
    addTeamMember({ ...teamMember, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let formIsValid = true;

    if (!teamMember.name) {
      formIsValid = false;
      alert('Name cannot be empty.');
    }

    if (typeof teamMember.name !== 'undefined') {
      if (!teamMember.name.match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        alert('Name can only have letters in it.');
      }
    }

    if (!teamMember.email) {
      formIsValid = false;
      alert('Email cannot be empty.');
    }

    if (formIsValid) {
      if (memberToEdit.name) {
        editMember(memberToEdit, teamMember);
      } else {
        setTeamList([...teamList, teamMember]);
        addTeamMember({
          ...teamMember,
          name: '',
          email: '',
          role: '',
        });
      }
    }
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
            <button className="button is-primary" type="submit" value="Submit">Submit</button>
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
  memberToEdit: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
  }).isRequired,
  editMember: PropTypes.func.isRequired,
};

export default Form;
