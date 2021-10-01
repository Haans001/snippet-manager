import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from 'assets/styles';
import { ReactComponent as DropdownIcon } from 'assets/Icons/DropdownIcon.svg';
import { ReactComponent as UserIcon } from 'assets/Icons/UserIcon.svg';
import { ReactComponent as LogoutIcon } from 'assets/Icons/LogoutIcon.svg';
import { Link } from 'react-router-dom';

const { colors } = theme;

const StyledProfileDropdownTrigger = styled.button`
	background: ${colors.blue400};
	display: flex;
	padding-right: 0;
	align-items: center;
	padding-left: 1rem;
	position: relative;
	z-index: 10;
	box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);
`;

const StyledDropdownMenu = styled.div<{ open?: boolean }>`
	position: absolute;
	width: 100%;
	background: ${colors.blue400};
	overflow: hidden;
	height: ${({ open }) => (open ? '120px' : '0px')};
	z-index: -1;
	top: 20px;
	left: 0;
	border-radius: 0 0 25px 25px;
	transition: height 0.2s;
	box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);
	text-align: left;
	cursor: default;
`;

const StyledProfileImage = styled.img`
	height: 40px;
	border-radius: 1000px;
	aspect-ratio: 1 / 1;
	position: relative;
	margin-left: 0.5rem;
`;

const StyledDropdownMenuContent = styled.ul`
	margin: 0;
	list-style-type: none;
	padding: 2rem 1.5rem;
`;

const StyledDropdownIcon = styled(DropdownIcon)`
	width: 16px;
	margin-right: 1rem;
`;

const StyledDropdownItem = styled(Link)`
	margin: 1rem 0;
	color: ${colors.blue200};
	display: flex;
	align-items: center;

	svg {
		margin-right: 0.5rem;
		width: 20px;
	}

	a {
		color: ${colors.blue200};
		text-decoration: none;
	}
`;

const ProfileDropdown = () => {
	const [open, setOpen] = useState(false);

	return (
		<StyledProfileDropdownTrigger type='button' onClick={() => setOpen(!open)}>
			<StyledDropdownIcon />
			Jan Rapacz
			<StyledProfileImage
				src='https://i.pravatar.cc/150?u=adasd112'
				alt='avatar'
			/>
			<StyledDropdownMenu open={open}>
				<StyledDropdownMenuContent>
					<StyledDropdownItem to='/profile'>
						<UserIcon />
						Profile
					</StyledDropdownItem>
					<StyledDropdownItem to='/'>
						<LogoutIcon />
						Log Out
					</StyledDropdownItem>
				</StyledDropdownMenuContent>
			</StyledDropdownMenu>
		</StyledProfileDropdownTrigger>
	);
};

export default ProfileDropdown;
