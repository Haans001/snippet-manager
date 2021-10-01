import { media } from 'assets/styles';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Input } from './forms';
import Button from './Button';
import Logo from './Logo';
import Modal from './Modal';
import { LoginForm } from './auth';
import ProfileDropdown from './profile-dropdown/ProfileDropdown';

const StyledNav = styled.nav`
	padding: 3rem 5rem;
	display: grid;
	grid-template-columns: 12;
	align-items: center;

	${media.netbook`
        padding: 2rem 1.5rem;
    `}
`;

const StyledLogo = styled(Logo)`
	grid-column: 1 / 3;
	justify-self: start;
`;

const StyledInput = styled(Input)`
	grid-column: 3 / 10;

	${media.netbook`
        order:3;
        grid-column: 1 / 12;
        margin-top: 2rem;
    `}
`;

const StyledButtonContainer = styled.div`
	grid-column: 11 / 12;
	justify-self: end; ;
`;

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const [loggedIn] = useState(false);
	return (
		<StyledNav>
			<StyledLogo />
			<StyledInput placeholder='Search for snippets...' />
			<StyledButtonContainer>
				{loggedIn ? (
					<ProfileDropdown />
				) : (
					<Button onClick={() => setOpen(true)}>Log In</Button>
				)}
			</StyledButtonContainer>
			<Modal isOpen={open} handleClose={() => setOpen(false)}>
				<LoginForm />
			</Modal>
		</StyledNav>
	);
};

export default Navbar;
