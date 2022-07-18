import Head from 'next/head';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';

const Layout = ({children}) => (
	<>
		<Head>
			<title>elith.systems</title>
			<meta name='description' content='Storefront of Elith.' />
			<link rel='icon' href='/favicon.ico' />
		</Head>
		<Header />
		  {children}
		<Footer />
	</>
);

export default Layout;

