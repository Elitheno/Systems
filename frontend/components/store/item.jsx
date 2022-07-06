import Lightbox from 'react-image-lightbox';
import Slider from 'react-slick';
import ReactHtmlParser from 'react-html-parser';

export default function StoreItem(props) {
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
				<h1 className='underline'>{props.title}</h1>

				{ReactHtmlParser(props.desc)}

				<div className=''>
					<p className='stock'>
						<b>{props.stock}</b> in stock
					</p>
					<a href={props.tindie_url} className='purchase-link'>
						<span className='font-bold'>{props.price}</span>
						<br/>
						<button className='p-1 border-4 border-background-dark bg-background-dark text-background-light
              hover:bg-background-light hover:text-background-dark transition-all'>
              Buy on <b>Tindie</b> →
						</button>
					</a>
				</div>
			</div>
		</div>
	);
}
