import { Formik, Form } from 'formik';
import Button from '../Button';
import { TextField } from '../forms';
import FormContainer from './FormContainer';

const LoginForm = () => (
	<FormContainer>
		<h2>Create an Account</h2>
		<Formik
			initialValues={{
				email: '',
				password: '',
			}}
			onSubmit={values => console.log(values)}
		>
			<Form>
				<TextField label='User Name' id='username' name='username' type='text' />
				<TextField label='Email' id='email' name='email' type='email' />
				<TextField label='Password' id='password' name='password' type='password' />
				<TextField
					label='Confirm Password'
					id='confirmPassword'
					name='confirmPassword'
					type='password'
				/>
				<Button type='submit'>Submit</Button>
			</Form>
		</Formik>
	</FormContainer>
);

export default LoginForm;
