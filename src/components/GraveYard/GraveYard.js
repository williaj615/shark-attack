import React from 'react';
import StudentGS from '../GraveStone/GraveStone';
import dearlybeloved from '../../helpers/data/studentData';

class GraveYard extends React.Component {
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
