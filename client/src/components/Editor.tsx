import React from 'react';
import CodeMirror, { IReactCodemirror } from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/material.css';
import styled from 'styled-components';
import { theme } from 'assets/styles';

const { colors, fonts } = theme;

const StyledEditorContainer = styled.div`
	padding: 1rem 0;
	background: ${colors.blue400};
	border-radius: 5px;
	.CodeMirror {
		background: ${colors.blue400};
		font-family: ${fonts.primary};

		&-scroll {
			min-height: 300px;
			overflow: auto;
		}

		&-gutters {
			background: ${colors.blue400};
		}
	}
`;

interface EditorProps extends IReactCodemirror {
	mode?: string;
}

const Editor: React.FC<EditorProps> = ({ options, ...props }) => {
	console.log(options);
	return (
		<StyledEditorContainer>
			<CodeMirror
				options={{
					theme: 'material',
					keyMap: 'sublime',
					...options,
				}}
				{...props}
			/>
		</StyledEditorContainer>
	);
};

export default Editor;
