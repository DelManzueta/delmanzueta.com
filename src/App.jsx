import './assets/styles/index.css';

import React, { useEffect, useState } from 'react';

import About from './components/About'
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';

function App() {
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
		<div className={`app-container ${isScrolled ? 'scrolled' : ''}`}>
			<Header id='header' />
			<div className='app-body'>
				<Hero /> 
			</div>
		</div>
	);
}

export default App;
