import React from "react";
import "components/InterviewerList.scss";
// const classNames = require("classnames");

export default function InterviewerList(props) {

  // const dayClass = classNames("day-list__item", {
  //   "day-list__item--selected": props.selected,
  //   "day-list__item--full": props.spots === 0
  // })
  


  return (
    <section className="interviewers">
    <h4 className="interviewers__header text--light">Interviewer</h4>
    <ul className="interviewers__list"></ul>
    </section>
  );
}