import React from 'react';
import { theme } from 'assets/styles';
import Select, { StylesConfig, Props } from 'react-select';
import styled from 'styled-components';
import Field, { FieldProps } from './Field';

const { colors } = theme;

type OptionType = {
	label: string;
	value: string;
};

const classNamePrefix = 'select';

const styles: StylesConfig<OptionType, false> = {
	option: (provided, state) => ({
		...provided,
		background:
			state.isFocused || state.isSelected ? colors.blue300 : colors.blue400,
	}),
};

const SelectAdapter: React.FC<Props> = ({ className, ...props }) => (
	<Select
		styles={styles}
		className={className}
		classNamePrefix={classNamePrefix}
		{...props}
	/>
);

const StyledSelectAdapter = styled(SelectAdapter)`
	.${classNamePrefix} {
		&__control {
			background: ${colors.blue400};
			border: 0;
			border-radius: 1rem;
			box-shadow: none;
			padding: 0.5rem 1.5rem;
			cursor: pointer;

			&:hover,
			&:focus {
				border: none;
				box-shadow: none;
			}
		}

		&__single-value {
			color: ${colors.blue200};
		}

		&__indicator {
			color: ${colors.blue300};
		}

		&__indicator-separator {
			display: none;
		}

		&__placeholder {
			color: ${colors.blue300};
		}

		&__input {
			color: ${colors.white};
		}

		&__menu {
			border-radius: 1rem;
			overflow: hidden;
			background: ${colors.blue400};
		}
	}
`;

const SelectField: React.FC<FieldProps & Props> = ({
	label,
	id,
	name,
	options,
	...props
}) => (
	<Field name={name} label={label}>
		{({ field, helpers }) => (
			<StyledSelectAdapter
				id={id}
				name={field.name}
				options={options}
				value={options[field.value]}
				onChange={(option: OptionType) => helpers.setValue(option.value)}
				onBlur={field.onBlur}
				{...props}
			/>
		)}
	</Field>
);

export default SelectField;
