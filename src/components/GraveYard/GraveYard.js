import React from 'react';
// import PropTypes from 'prop-types';
import StudentGS from '../GraveStone/GraveStone';
// import studentShape from '../../helpers/propz/studentShape';
import dearlybeloved from '../../helpers/data/studentData';

class GraveYard extends React.Component {
  // static propTypes = {
  //   // propStudents: PropTypes.arrayOf(studentShape.studentShape),
  // }

  render() {
    const studentsToBury = dearlybeloved.dearlyBeloved();
    const studentGraveStones = studentsToBury.map((student) => (<StudentGS key={student.id} student={student}/>));

    return (
      <div className="graveyard">
        {studentGraveStones}
      </div>
    );
  }
}

export default GraveYard;
