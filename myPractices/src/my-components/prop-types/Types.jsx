import React from "react";
//PropType Type safety control
import PropTypes from "prop-types";

export const Types = (props) => {
	return (
		<>
			<p>
				{props.name} is {props.age} years old
			</p>
		</>
	);
};

//PropType Type safety control
Types.propTypes = {
    name: PropTypes.string.isRequired, 
    age: PropTypes.number.isRequired
}

//Default Prop
Types.defaultProps = {
    name: "Ali",
    age: 18
}