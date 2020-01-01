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
        <h1>SHARKS ARE SCARY</h1>
        <div className="btn btn-danger" onClick={this.killStudentEvent}>SHARK ATTACK!!</div>
        <h2 className="heading1 text-left ml-5">Neighborhood Pool</h2>
        <div className="shark-tank-wrapper">
        <SharkTank propStudents={this.state.studentSurvivors}/>
        </div>
        <h2 className="heading2 text-center">Rest In Peace</h2>
        <div className="grave-yard-wrapper">
        <GraveYard propStudents={this.state.deceasedStudents}/>
        </div>
      </div>
    );
  }
}
export default App;
