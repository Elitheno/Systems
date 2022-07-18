import {useState, useContext} from 'react';
import {useForm} from 'react-hook-form';
import Layout from '../components/layout/layout.jsx';
import {registerUser} from '../lib/auth.js';
import AppContext from '../context/app-context.js';

const Register = () => {
	const {handleSubmit, register, formState: {errors}} = useForm();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState({});
	const appContext = useContext(AppContext);

	return (
		<Layout>
			<article className=''>
				{Object.entries(error).length > 0
          && error.constructor === Object
          && error.message.map(error =>
          	(
          		<div key={error.messages[0].id} className='mb-2'>
          			<small className='text-amarth-300'>
          				{error.messages[0].message}
          			</small>
          		</div>
          	),
          )}
				<h1 className='my-4 text-4xl md:text-6xl font-bold'>
          One of us~
				</h1>
				<div className='w-full max-w-xs'>
					<form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit(registerUser)}>
						<fieldset disabled={loading}>
							<section>
								<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>Username:</label>
								<input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
									{...register('username', {
										required: 'Required',
										validate: value => value !== 'admin' || 'Nice try!',
									})}
									{...errors.email && errors.email.message}
									type='username'
									disabled={loading}
								/>
							</section>
							<section className='mb-6'>
								<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>Email:</label>
								<input className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
									type='email'
									{...register('email', {
										required: 'Required',
										pattern: {
											value: /^[\w.%+-]+@[a-z\d.-]+\.[a-z]{2,}$/i,
											message: 'Invalid email address!',
										},
									})}
								/>
							</section>
							<section className='mb-6'>
								<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>Password:</label>
								<input className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
									placeholder='******************'
									type='password'
									{...register('password', {
										required: 'Required',
										validate: value => value !== 'password' || 'oh bloody hell, come on-',
									})}
								/>
							</section>
							<section className='m-auto'>
								<span>
									<button className='float-left' onClick={() => {
										window.alert('haha lol');
									}}>
										<small>Forgot Password?</small>
									</button>
								</span>
								<button
									type='submit'
									className='bg-primary float-right hover:bg-columbia-300 transition-all text-snow font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
									disabled={loading}
									onClick={() => {
										setLoading(true);
										registerUser()
											.then(response => {
												// Set authed user in global context object
												appContext.setUser(response.data.user);
												setLoading(false);
											})
											.catch(error => {
												setError(error.response.data);
												setLoading(false);
											});
									}}
								>
									{loading ? 'Loading..' : 'Submit'}
								</button>
							</section>
						</fieldset>
					</form>
				</div>
			</article>
		</Layout>);
};

export default Register;
