import React, { ReactElement } from 'react';
import {
	FieldHelperProps,
	FieldInputProps,
	FieldMetaProps,
	useField,
} from 'formik';
import styled from 'styled-components';
import Label from './Label';

const StyledField = styled.div`
	width: 100%;
	margin: 2rem 0;
	text-align: left;
`;

interface ChildrenProps {
	field: FieldInputProps<any>;
	meta: FieldMetaProps<any>;
	helpers: FieldHelperProps<any>;
}

interface Children {
	children(args: ChildrenProps): ReactElement;
}

export interface FieldProps {
	label: string;
	name: string;
}

const FieldAdapter: React.FC<FieldProps & Children> = ({
	label,
	name,
	children,
}) => {
	const [field, meta, helpers] = useField(name);

	return (
		<StyledField>
			<Label>{label}</Label>
			{children({ field, meta, helpers })}
		</StyledField>
	);
};

export default FieldAdapter;
