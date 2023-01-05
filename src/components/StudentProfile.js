import React from "react";

const StudentProfile = (props) => {
  if (props.studentProfile.length > 0) {
    const {
      studentProfile: [{ first_name, last_name, year_of_birth, email }],
    } = props;
    return (
      <div>
        <div className="studentprofile_container">
          <h4 className="student_header">Information about the student</h4>
          <div className="student_list">
            <ul>
              <li>
                firstname:
                {first_name}
              </li>
              <li>
                lastname:
                {last_name}
              </li>
              <li>
                year of birth:
                {year_of_birth}
              </li>
              <li>email:{email}</li>
            </ul>
          </div>
        </div>
        <h6 className="studentinfo_additional">
          No real persons where harmed making this fake data.
        </h6>
      </div>
    );
  } else {
    return (
      <h4 className="Overview_profiles">
        Select a student above for more personal information and personal
        charts.
      </h4>
    );
  }
};

export default StudentProfile;
