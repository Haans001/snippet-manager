import { theme } from 'assets/styles';
import React from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';

const { easing } = theme;

const closeTimeout = 300;

interface ModalProps {
	isOpen: boolean;
	className?: string;
	handleClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
	isOpen,
	handleClose,
	className = 'modal',
	children,
}) => {
	const contentClassName = `${className}__content`;
	const overlayClassName = `${className}__overlay`;

	return (
		<ReactModal
			isOpen={isOpen}
			shouldCloseOnOverlayClick
			onRequestClose={handleClose}
			portalClassName={className}
			className={contentClassName}
			overlayClassName={overlayClassName}
			closeTimeoutMS={closeTimeout}
			style={{
				overlay: {},
			}}
		>
			{children}
		</ReactModal>
	);
};

const StyledModal = styled(Modal)`
	&__overlay {
		position: fixed;
		top: 0px;
		left: 0px;
		right: 0px;
		bottom: 0px;
		background-color: rgba(0, 0, 0, 0.75);
		opacity: 0;
		transition: opacity ${closeTimeout}ms ${easing.easeInOutCubic};
		display: grid;
		place-items: center;

		&.ReactModal__Overlay--after-open {
			opacity: 1;
		}
		&.ReactModal__Overlay--before-close {
			opacity: 0;
		}
	}

	&__content {
		overflow: auto;
		-webkit-overflow-scrolling: touch;

		padding: 1rem;
	}
`;

export default StyledModal;
