import { Link, animateScroll as scroll } from 'react-scroll';
import React, { useEffect, useState } from 'react';

import MenuIcon from './MenuIcon';
import headerStyles from '../assets/styles/components/header.module.css';

import resume from '../assets/docs/dm.pdf';

function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		function handleScroll() {
			if (window.scrollY > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		}

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

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
				<div className={headerStyles.modalOverlay}>
					<div className={headerStyles.modalContent}>
						<button
							className={headerStyles.closeButton}
							onClick={handleCloseModal}
						>
							X
						</button>
						<iframe
							src={resume}
							title='Resume'
						/>
						<a
							href={resume}
							download
						>
							Download
						</a>
					</div>
				</div>
			)}
		</>
	);
}

export default Header;
