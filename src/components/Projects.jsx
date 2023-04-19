import React from 'react';
import projectStyles from '../assets/styles/pages/projects.module.css';

function Projects() {
	const projects = [
		{
			title: 'Haven Technologies',
			description:
				'Developed and implemented intuitive and visually appealing user interfaces for web and mobile applications. Collaborated with the design team to build reusable, accessible, and well-tested UI components based on clickable prototypes.',
			skills: ['React', 'HTML', 'CSS', 'JavaScript'],
		},
		{
			title: 'Probe Point Media',
			description:
				"Built and managed an entire department responsible for designing and developing marketing campaigns through innovative mobile apps for local real estate companies. Designed and developed front-end and mobile PWA's using web technologies including HTML5, CSS3, Es6 JavaScript, Node JS, React JS, and React-Native/Redux.",
			skills: ['React', 'HTML', 'CSS', 'JavaScript', 'React Native'],
		},
		{
			title: 'Publishers Clearing House',
			description:
				'Led efforts to improve engineering efficiency and code quality by identifying and addressing technical debt. Worked with the platform team to build out key components of CK Containers, an internal platform for config-driven cross-platform experiences. Designed and implemented GraphQL schemas for complex client-facing features.',
			skills: ['React', 'HTML', 'CSS', 'JavaScript', 'GraphQL'],
		},
	];

	return (
		<div className={projectStyles.projects} id='projects'>
			{projects.map((project) => (
				<div
					key={project.title}
					className={projectStyles.project}
				>
					<h2 className={projectStyles.title}>{project.title}</h2>
					<p className={projectStyles.description}>
						{project.description}
					</p>
					<div className={projectStyles.skills}>
						{project.skills.map((skill) => (
							<span
								key={skill}
								className={projectStyles.skill}
							>
								{skill}
							</span>
						))}
					</div>
				</div>
			))}
		</div>
	);
}

export default Projects;
