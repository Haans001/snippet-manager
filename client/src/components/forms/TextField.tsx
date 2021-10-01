import React, { InputHTMLAttributes } from 'react';
import Input from './Input';
import Field, { FieldProps } from './Field';

const TextField: React.FC<FieldProps & InputHTMLAttributes<HTMLInputElement>> =
	({ label, id, name, ...props }) => (
		<Field label={label} name={name}>
			{({ field }) => <Input type='text' id={id} {...field} {...props} />}
		</Field>
	);

export default TextField;
