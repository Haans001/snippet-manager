import { Container } from 'assets/styles';
import { Select, TextField } from 'components/forms';
import { Formik, Form } from 'formik';
import modes from 'config/modes.json';
import EditorField from 'components/forms/EditorField';
import Button from 'components/Button';

const defaultLanguage = {
	label: 'Javascript',
	value: 'javascript',
};

const Create = () => (
	<Container>
		<Formik
			initialValues={{
				language: defaultLanguage.value,
				code: '',
				title: '',
			}}
			onSubmit={values => console.log(values)}
		>
			{({ values }) => (
				<Form>
					<h2>Create new snippet</h2>
					<Select
						label='Pick a language...'
						name='language'
						defaultValue={defaultLanguage}
						options={modes}
						placeholder='Language...'
					/>
					<EditorField
						label='Write some code...'
						name='code'
						options={{ mode: values.language }}
					/>
					<TextField label='Select a proper title...' id='title' name='title' />
					<Button type='submit'>Submit</Button>
				</Form>
			)}
		</Formik>
	</Container>
);

export default Create;
