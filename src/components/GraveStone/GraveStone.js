import React from 'react';
import studentShape from '../../helpers/propz/studentShape';
import './GraveStone.scss';

class GraveStone extends React.Component {
  static propTypes = {
    student: studentShape.studentShape,
  }

  render() {
    const { student } = this.props;
    return (
      <div className="card grave-stone">
        <h5>RIP</h5>
        <p className="student-name">{student.firstName} {student.lastName}</p>
      </div>
    );
  }
}

export default GraveStone;
