import React from 'react';
import testimonialStyles from '../assets/styles/components/testimonials.module.css';

function Testimonials() {
	const testimonials = [
		{
			name: 'John Doe',
			quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum vehicula nulla, sit amet malesuada quam maximus vitae. Integer bibendum felis ac ipsum euismod, vel eleifend felis sagittis. Etiam laoreet eros id arcu egestas, eu iaculis elit efficitur.',
		},
		{
			name: 'Jane Doe',
			quote: 'Nullam eu nisl fermentum, venenatis nisi id, iaculis tellus. Sed sed nisl in sapien egestas tristique. Fusce malesuada, augue sit amet interdum hendrerit, justo metus commodo ante, sit amet vulputate enim turpis a purus.',
		},
		{
			name: 'Bob Smith',
			quote: 'Vestibulum finibus lobortis lectus a luctus. Donec pharetra, ipsum sit amet commodo hendrerit, arcu nunc fringilla lacus, sit amet fermentum enim dolor at ipsum. Sed commodo, nibh vel commodo congue, odio neque porttitor sapien, vel tincidunt lorem lacus eget magna.',
		},
	];

	return (
		<div className={testimonialStyles.container}>
			<h2>What People Are Saying</h2>
			{testimonials.map((testimonial, index) => (
				<div
					key={index}
					className={testimonialStyles.testimonial}
				>
					<p>{testimonial.quote}</p>
					<p className={testimonialStyles.name}>{testimonial.name}</p>
				</div>
			))}
		</div>
	);
}

export default Testimonials;
