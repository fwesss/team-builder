import React from 'react';
import PropTypes from 'prop-types';


const TeamList = ({ teamList }) => (
  <>
    {teamList.map((teamMember) => (
      <div key={teamMember.id}>
        <p>{teamMember.name}</p>
        <p>{teamMember.email}</p>
        <p>{teamMember.role}</p>
      </div>
    ))}
  </>
);

TeamList.propTypes = {
  teamList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default TeamList;
