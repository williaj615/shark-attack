import React from 'react';
import PropTypes from 'prop-types';
import Student from '../LiveStudent/LiveStudent';
import studentShape from '../../helpers/propz/studentShape';

class SharkTank extends React.Component {
  static propTypes = {
    propStudents: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const theStudents = this.props.propStudents;
    const liveStudentCards = theStudents.map((student) => (<Student key={student.id} student={student}/>));

    return (
      <div className="shark-tank">
        {liveStudentCards}
      </div>
    );
  }
}

export default SharkTank;
