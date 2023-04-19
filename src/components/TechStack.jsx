import React from 'react';
import angularIcon from '../assets/img/icons/angular.png';
import cssIcon from '../assets/img/icons/css.png';
import expressIcon from '../assets/img/icons/express.png';
import htmlIcon from '../assets/img/icons/html.png';
import jsIcon from '../assets/img/icons/js.png';
import reactIcon from '../assets/img/icons/react.png';
import sassIcon from '../assets/img/icons/sass.png';
import techStackStyles from '../assets/styles/components/techStack.module.css';
import tsIcon from '../assets/img/icons/ts.png';

function TechStack() {
	const techStackItems = [
		'HTML',
		'CSS',
		'SASS',
		'JavaScript',
		'React',
		'Angular',
		// 'TS',
	];

	const icons = {
		HTML: htmlIcon,
		CSS: cssIcon,
		SASS: sassIcon,
		JavaScript: jsIcon,
		React: reactIcon,
		Angular: angularIcon,
		// TS: tsIcon,
	};

	return (
		<div className={techStackStyles.container}>
			<h3 className={techStackStyles.title}>Tech Stack</h3>
			<ul className={techStackStyles.techStack}>
				{techStackItems.map((item, index) => (
					<li
						key={index}
						className={`${techStackStyles.techItem} ${
							techStackStyles[item.toLowerCase()]
						}`}
					>
						<img
							src={icons[item]}
							alt={item}
						/>
						{/* <h3>{item}</h3> */}
					</li>
				))}
			</ul>
		</div>
	);
}

export default TechStack;
