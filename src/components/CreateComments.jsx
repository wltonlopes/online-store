import React from 'react';
import propTypes from 'prop-types';

class CreateComments extends React.Component {
  render() {
    const { email, text } = this.props;
    return (
      <div>
        <h4>{email}</h4>
        <p>{text}</p>
      </div>
    );
  }
}

CreateComments.propTypes = {
  email: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
};

export default CreateComments;
