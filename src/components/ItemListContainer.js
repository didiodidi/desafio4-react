import "./NavBar.css"

const ItemListContainer = (props) => {
	console.log(props);
	const itemContainer = [];
	return (
		<div className="text">
			<h1>{props.text}</h1>
			<h2>{props.text2}</h2>
		</div>
	);
};

export default ItemListContainer;