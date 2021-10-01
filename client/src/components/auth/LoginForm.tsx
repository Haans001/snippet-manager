import { TextField } from 'components/forms';
import { Formik, Form } from 'formik';
import Button from '../Button';
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
				<TextField label='Email' id='email' name='email' type='email' />
				<TextField label='Password' id='password' name='password' type='password' />
				<Button type='submit'>Log In</Button>
			</Form>
		</Formik>
	</FormContainer>
);

export default LoginForm;
