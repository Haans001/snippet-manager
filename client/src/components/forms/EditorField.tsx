import { IReactCodemirror } from '@uiw/react-codemirror';
import Editor from 'components/Editor';
import React from 'react';
import Field, { FieldProps } from './Field';

const EditorField: React.FC<FieldProps & IReactCodemirror> = ({
	label,
	name,
	...props
}) => (
	<Field label={label} name={name}>
		{({ field, helpers }) => (
			<Editor
				value={field.value}
				onChange={editor => helpers.setValue(editor.getValue())}
				{...props}
			/>
		)}
	</Field>
);

export default EditorField;
