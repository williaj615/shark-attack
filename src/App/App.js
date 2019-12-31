import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import studentData from '../helpers/data/studentData';

class App extends React.Component {
  state = {
    studentSurvivors: [],
    deceasedStudents: [],
  }

  componentDidMount() {
    const aliveStudents = studentData.livingStudents();
    this.setState({ studentSurvivors: aliveStudents });
  }

  killStudent = (studentId) => {
    studentData.followTheLight(studentId);
    const deadStudents = studentData.dearlyBeloved();
    const aliveStudents = studentData.livingStudents();
    this.setState({ studentSurvivors: aliveStudents });
    this.setState({ deceasedStudents: deadStudents });
  }

  render() {
    return (
      <div className="App">
        <div> 

        </div>
      </div>
    );
  }
}
export default App;
