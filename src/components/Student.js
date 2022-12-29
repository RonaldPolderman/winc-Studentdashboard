import React from "react";
import { Link } from "react-router-dom";

function Student(props) {
  const { handleClick, studentName } = props;
  return (
    <div className="student">
      <Link onClick={() => handleClick(studentName)} to={`/${studentName}`}>
        {studentName}
      </Link>
    </div>
  );
}

export default Student;
