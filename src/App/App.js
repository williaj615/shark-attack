import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import studentData from '../helpers/data/studentData';
import SharkTank from '../components/SharkTank/SharkTank';
// import GraveYard from '../components/GraveYard/GraveYard';

class App extends React.Component {
  state = {
    studentSurvivors: [],
    deceasedStudents: [],
  }

  componentDidMount() {
    const aliveStudents = studentData.livingStudents();
    this.setState({ studentSurvivors: aliveStudents });
  }

  // killStudent = (studentId) => {
  //   studentData.followTheLight(studentId);
  //   const deadStudents = studentData.dearlyBeloved();
  //   const aliveStudents = studentData.livingStudents();
  //   this.setState({ studentSurvivors: aliveStudents });
  //   this.setState({ deceasedStudents: deadStudents });
  // }

  render() {
    return (
      <div className="App">
        SHARKS ARE SCARY
        <SharkTank propStudents={this.state.studentSurvivors}/>
        {/* <GraveYard propStudents={this.state.deceasedStudents}/> */}
      </div>
    );
  }
}
export default App;
