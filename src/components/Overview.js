import React from "react";
import { Link } from "react-router-dom";

function Overview(props) {
  const { handleClick } = props;
  const overView = "overView";

  return (
    <div className="header">
      <Link className="link" onClick={() => handleClick(overView)} to={`/`}>
        <h2>Overview</h2>
      </Link>
    </div>
  );
}

export default Overview;
