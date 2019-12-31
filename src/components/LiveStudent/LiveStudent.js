import React from 'react';
// import PropTypes from 'prop-types';
import studentShape from '../../helpers/propz/studentShape';

class LiveStudent extends React.Component {
  static propTypes = {
    student: studentShape.studentShape,
  }

  render() {
    const { student } = this.props;
    return (
      <div className="card">
        <h5>I'm alive!</h5>
        <p className="student-name">{student.firstName} {student.lastName}</p>
      </div>
    );
  }
}

export default LiveStudent;
