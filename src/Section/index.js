import React from "react";
import "./style.css";

const Section = (props) => (
    <section className="section">
        <div className="section__container">
            <h2 className="section__header">{props.title}</h2>
            {props.extraHeaderContent}
        </div>
        <div className="section__body">
            {props.body}
        </div>
    </section>
);

export default Section;
