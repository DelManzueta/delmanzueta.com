import HavenTech from '../components/HavenTech';
// src/pages/About.jsx
import React from 'react';
import TimelineItem from '../assets/js/timelineItems';
import aboutStyles from '../assets/styles/pages/about.module.css';

function About() {
	return (
		<div>
			<section
				id='about'
				className={aboutStyles.about}
			>
				<div className={aboutStyles.aboutContent}>
					<h1>About me:</h1>
					<p>
						As a Frontend Engineer, I have experience translating UI
						designs into well-organized HTML5/CSS3 code and
						developing single-page application components using
						open-source tools and frameworks. I have also built and
						maintained design systems and implemented WCAG
						Guidelines and WAI-ARIA to ensure the best user
						experience. Additionally, I have worked as a full stack
						engineer and designer, leading the production and
						modification of website properties, developing mobile
						applications, and executing marketing campaigns with
						impressive engagement rates.
					</p>
				</div>
				
			</section>
		</div>
	);
}

export default About;
