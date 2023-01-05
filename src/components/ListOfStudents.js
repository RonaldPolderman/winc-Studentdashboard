import Student from "./Student";
import React from "react";

function ListOfStudents(props) {
  const { students, handleClick } = props;

  const studentsList = students.map((student) => (
    <Student
      handleClick={handleClick}
      studentName={student}
      key={students.indexOf(student)}
    />
  ));

  return (
    <div className="navbar">
      <h4 className="student_specifics">
        select a student for studentspecific information
      </h4>
      <h3 className="studentlist">{studentsList}</h3>
    </div>
  );
}

export default ListOfStudents;
