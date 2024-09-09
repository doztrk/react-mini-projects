import React from "react";
import { List } from "./my-components/flower-list/List.jsx";
import { flowers } from "./assets/flowers.js";
import { flowers2 } from "./assets/flowers2.js";
import { Types } from "./my-components/prop-types/Types.jsx";
import { Select } from "./my-components/select/Select.jsx";
import { ColorPicker } from "./my-components/color-picker/ColorPicker.jsx";
import { Login } from "./my-components/login/Login.jsx";
function App() {
	return (
		<>
			{/* <div classßName="app-container">
				<div className="list-container">
					<List flowerArr={flowers} />
				</div>
				<List /> //Gives Null Error because List doesn't have Default Prop defined
				<div className="list-container"> 
					<List flowerArr={flowers2} />
				</div>
			</div> 


			<Types name="Ayşe" age={30} />
			<Types name="Ayşe" age={35}  age = "35" />
			<Types  Created with Default Prop  />
			
			<Select />
			<ColorPicker />
			*/}

			<Login />

			

			
		</>
	);
}

export default App;
