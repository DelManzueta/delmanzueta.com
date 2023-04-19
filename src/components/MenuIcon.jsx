import React from 'react';
import menuIconStyles from '../assets/styles/components/menuIcon.module.css';

function MenuIcon() {
	return (
		<button className={menuIconStyles.menuIcon}>
			<span className={menuIconStyles['menuIcon-bar']}></span>
			<span className={menuIconStyles['menuIcon-bar']}></span>
			<span className={menuIconStyles['menuIcon-bar']}></span>
		</button>
	);
}

export default MenuIcon;
