import React from 'react';
import PropTypes from 'prop-types';


const TeamList = ({ teamList, setMemberToEdit }) => (
  <section className="section">
    <div className="container">
      <div className="columns is-centered">
        {teamList.map((teamMember) => (
          <div className="column is-4" key={teamMember.id}>
            <div className="container card">
              <header className="card-header">
                <h2 className="card-header-title title">{teamMember.name}</h2>
              </header>
              <div className="card-content">
                <ul>
                  <li>{`Email: ${teamMember.email}`}</li>
                  <li>{`Role: ${teamMember.role}`}</li>
                </ul>
              </div>
              <footer className="card-footer">
                <button
                  type="submit"
                  className="button is-light"
                  onClick={() => (setMemberToEdit(teamMember))}
                  onKeyPress={() => (setMemberToEdit(teamMember))}
                >
                  Edit
                </button>
              </footer>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

TeamList.propTypes = {
  teamList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ).isRequired,
  setMemberToEdit: PropTypes.func.isRequired,
};

export default TeamList;
