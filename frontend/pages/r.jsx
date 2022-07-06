import Head from 'next/head';
import {forwardRef} from 'react';
import {useForm} from 'react-hook-form';
import {RiTwitterLine as TwtIco} from 'react-icons/ri';
import Layout from '../components/layout/layout.jsx';

// The following component is an example of your existing Input Component
const Input = ({label, register, required}) => (
	<>
		<label>{label}</label>
		<input {...register(label, {required})} />
	</>
);

// You can use React.forwardRef to pass the ref too
const Select = forwardRef(({onChange, onBlur, name, label}, ref) => (
	<>
		<label>{label}</label>
		<select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
			<option value='20'>20</option>
			<option value='30'>30</option>
		</select>
	</>
));

const Reach = () => {
	const {register, handleSubmit} = useForm();

	const onSubmit = data => {
		alert(JSON.stringify(data));
	};

	return (
		<Layout>
			<Head>
				<title>contact | elith.systems</title>
				<meta name='description' content='connect with elith.systems uwu~'/>
			</Head>
			<article className='justify-center items-center px-16'>
				<h2> Forms are so dated. Heres some contact links too. </h2>
				<a href='https://twitter.com/elithenza'>
					<TwtIco />
				</a>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Input label='First Name' register={register} required />
					<Select label='Age' {...register('Age')} />
					<input type='submit' />
				</form>
			</article>
		</Layout>
	);
};

export default Reach;
