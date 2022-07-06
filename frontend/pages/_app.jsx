import '../styles/globals.css';
import Header from '../components/header/header.jsx';
import Footer from '../components/footer/footer.jsx';

function MyApp({Component, pageProps}) {
	return <Component {...pageProps} />;
}

export default MyApp;

