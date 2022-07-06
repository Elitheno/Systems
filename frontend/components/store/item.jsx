import Lightbox from 'react-image-lightbox';
import Slider from 'react-slick';
import ReactHtmlParser from 'react-html-parser';

const StoreItem = props => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
  console.log(props)

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
					<button className='p-1 border-4 border-background-dark bg-background-dark text-background-light
            hover:bg-background-light hover:text-background-dark transition-all'>
            <a href={props.url}> Buy on <b>Tindie</b> → </a>
					</button>
				</div>
			</div>
		</div>
	);
}

export default StoreItem;

