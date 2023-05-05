import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import headerStyles from '../assets/styles/components/header.module.css';

import resume from '../assets/docs/dm.pdf';

function Header() {
	return (
		<header className={headerStyles.header}>
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
				<nav className={headerStyles.headerNav}>
					<a
						href={resume}
						target='_blank'
						rel='noopener noreferrer'
					>
						Resumé
					</a>
				</nav>
			</nav>
		</header>
	);
}

export default Header;
