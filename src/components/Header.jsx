import { Link, animateScroll as scroll } from 'react-scroll';
import React, { useEffect, useState } from 'react';

import MenuIcon from './MenuIcon';
import headerStyles from '../assets/styles/components/header.module.css';

function Header() {
	const [isScrolled, setIsScrolled] = useState(false);

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

	return (
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
				<Link
					to='about'
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
				>
					About
				</Link>
				<Link
					to='projects'
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
				>
					Projects
				</Link>
				<Link
					to='contact'
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
				>
					Contact
				</Link>
			</nav>
			<div className={headerStyles.headerMenuIcon}>
				<MenuIcon />
			</div>
		</header>
	);
}

export default Header;
