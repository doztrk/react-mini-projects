import React from "react";
import { List } from "./my-components/flower-list/List.jsx";
import { flowers } from "./assets/flowers.js";
import { flowers2 } from "./assets/flowers2.js";
import { Types } from "./my-components/prop-types/Types.jsx";
import { Select } from "./my-components/select/Select.jsx";
import { ColorPicker } from "./my-components/color-picker/ColorPicker.jsx";
import { Login } from "./my-components/login/Login.jsx";
import { ProductCard } from "./my-components/product-card/product-card.jsx";
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
			<Login />
			*/}

			<div className="product-card-container">
				<ProductCard title="MEN'S T-SHIRT" price="65.90" discount={null} rate={4} image="../../images/Tshirt1.png" />
				<ProductCard title="WOMEN'S TOP" price="70.00" discount={10} rate={5} image="../../images/Tshirt2.jpg" />
			</div>
		</>
	);
}

export default App;
