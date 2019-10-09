import React from 'react';
import PropTypes from 'prop-types';


const TeamList = ({ teamList }) => (
  <section className="section">
    <div className="container">
      <div className="columns">
        {teamList.map((teamMember) => (
          <div
            className="container card column is-4"
            key={teamMember.id}
          >
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
              >
                    Edit
              </button>
            </footer>
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
};

export default TeamList;
