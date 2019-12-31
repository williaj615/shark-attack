import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import studentData from '../helpers/data/studentData';
import SharkTank from '../components/SharkTank/SharkTank';
import GraveYard from '../components/GraveYard/GraveYard';

class App extends React.Component {
  state = {
    studentSurvivors: [],
    deceasedStudents: [],
  }

  componentDidMount() {
    const aliveStudents = studentData.livingStudents();
    const deadStudents = studentData.dearlyBeloved();
    this.setState({ studentSurvivors: aliveStudents });
    this.setState({ deceasedStudents: deadStudents });
  }

  killStudentEvent = () => {
    const studentsLeft = studentData.livingStudents();
    const randomLivingStudent = studentsLeft[Math.floor(Math.random() * studentsLeft.length)];

    studentData.followTheLight(randomLivingStudent.id);

    const deadStudents = studentData.dearlyBeloved();
    const aliveStudents = studentData.livingStudents();
    this.setState({ studentSurvivors: aliveStudents });
    this.setState({ deceasedStudents: deadStudents });
  }

  render() {
    return (
      <div className="App">
        SHARKS ARE SCARY
        <SharkTank propStudents={this.state.studentSurvivors}/>
        <GraveYard propStudents={this.state.deceasedStudents}/>
        <div className="btn btn-danger" onClick={this.killStudentEvent}>SHARK ATTACK!!</div>
      </div>
    );
  }
}
export default App;
