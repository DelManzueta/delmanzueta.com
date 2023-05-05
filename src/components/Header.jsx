import { Link, animateScroll as scroll } from 'react-scroll';
import React, { useState } from 'react';

import DownloadForm from './DownloadForm';
import MenuIcon from './MenuIcon';
import headerStyles from '../assets/styles/components/header.module.css';

function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [showModal, setShowModal] = useState(false);

	const handleDownloadSubmit = (email) => {
		const formData = require('form-data');
		const Mailgun = require('mailgun.js');
		const mailgun = new Mailgun(formData);
		const mg = mailgun.client({
			username: 'api',
			key: process.env.MAILGUN_API_KEY || 'key-yourkeyhere',
		});

		mg.messages
			.create('sandbox-123.mailgun.org', {
				from: 'Excited User <mailgun@sandbox-123.mailgun.org>',
				to: ['test@example.com'],
				subject: 'Hello',
				text: 'Testing some Mailgun awesomeness!',
				html: '<h1>Testing some Mailgun awesomeness!</h1>',
			})
			.then((msg) => console.log(msg)) // logs response data
			.catch((err) => console.log(err)); // logs any error
	};

	const handleResumeClick = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	return (
		<>
			<header
				className={`${headerStyles.header} ${
					isScrolled ? headerStyles.scrolled : ''
				}`}
			>
				<Link
					to='top'
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
					className={headerStyles.headerBrand}
					onClick={() => scroll.scrollToTop()}
				>
					Del Manzueta
				</Link>
				<nav className={headerStyles.headerNav}>
					<button
						className={headerStyles.resumeLink}
						onClick={handleResumeClick}
					>
						Resumé
					</button>
				</nav>
				<div className={headerStyles.headerMenuIcon}>
					<MenuIcon />
				</div>
			</header>
			{showModal && (
				<div
					className={headerStyles.modalOverlay}
					onClick={handleCloseModal}
				>
					<div
						className={headerStyles.modalContent}
						onClick={(e) => e.stopPropagation()}
					>
						<DownloadForm onSubmit={handleDownloadSubmit} />
					</div>
				</div>
			)}
		</>
	);
}

export default Header;
