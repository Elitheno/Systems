import {useContext} from 'react';
import ReactHtmlParser from 'react-html-parser';
import AppContext from '../../context/app-context.js';

const StoreItem = props => {
	const appContext = useContext(AppContext);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<div className='py-4 store-item'>
			<div className='info'>
				<h1 className='underline'>{props.name}</h1>

				{ReactHtmlParser(props.description)}

				<div className=''>
					<p className='stock'>
						<b>{props.stock}</b> in stock
					</p>
					<span className='font-bold'>£{props.price.toFixed(2)}</span>
					<br/>
					{/* <Image src={props.image} width={144} height={144}/> */}
					<button
						className='p-1 border-4 border-background-dark bg-background-dark text-background-light
            hover:bg-background-light hover:text-background-dark transition-all'
						onClick={() => appContext.addItem(props)}
					> Add to cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default StoreItem;

