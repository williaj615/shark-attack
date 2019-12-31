import React from 'react';
// import PropTypes from 'prop-types';
import StudentCard from '../LiveStudent/LiveStudent';
// import studentShape from '../../helpers/propz/studentShape';
import livingStudents from '../../helpers/data/studentData';

class SharkTank extends React.Component {
  // static propTypes = {
  //   // propStudents: PropTypes.arrayOf(studentShape.studentShape),
  // }

  render() {
    const theLivingStudents = livingStudents.livingStudents();
    const liveStudentCards = theLivingStudents.map((student) => (<StudentCard key={student.id} student={student}/>));

    return (
      <div className="shark-tank">
        {liveStudentCards}
      </div>
    );
  }
}

export default SharkTank;
