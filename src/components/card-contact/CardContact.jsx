import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';

import './cardContact.css';

const CardContact = ({ img, name, nickname, group, handleClick }) => (
  <FlatButton className="CardContact" fullWidth onClick={handleClick}>
    <div
      className="CardContact-img"
      style={{ backgroundImage: `url(${img})` }}
    />
    <h2 className="CardContact-name">{name}</h2>
    <h3 className="CardContact-nickname">{nickname}</h3>
    <span className="CardContact-group">{group}</span>
  </FlatButton>
);

CardContact.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default CardContact;
