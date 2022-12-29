import React from "react";

function ChartFilter(props) {
  const { handleChartType, isBarchart, isJoy, isDifficulty } = props;

  return (
    <div className="buttons_chartfilter">
      <button
        name="isBarchart"
        onClick={handleChartType}
        className="button_charttype"
      >
        {isBarchart ? "show linechart" : "show barchart"}
      </button>
      <button name="isJoy" onClick={handleChartType} className="button_joy">
        {isJoy ? "joy:on" : "joy:off"}
      </button>
      <button
        name="isDifficulty"
        onClick={handleChartType}
        className="button_difficulty"
      >
        {isDifficulty ? "difficulty:on" : "difficulty:off"}
      </button>
    </div>
  );
}

export default ChartFilter;
