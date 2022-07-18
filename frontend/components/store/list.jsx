import React from 'react';
import StoreItem from './item.jsx';

const StoreList = ({products}) => {
	const itemList = products.map((item, index) => (
		<StoreItem
			key={index}
			name={item.attributes.name}
			description={item.attributes.description}
			// Images={item.attributes.images.data}
			price={item.attributes.price}
			slug={item.attributes.slug}
			stock={item.attributes.stock}
		/>
	));

	return (
		<div className=''>{itemList}</div>
	);
};

export default StoreList;
