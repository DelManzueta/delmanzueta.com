import React, { useState } from 'react';

import contactStyles from '../assets/styles/pages/contact.module.css';

function Contact() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form submitted:', name, email, message);
		// Here you can add the code to send the form data to the server or do whatever you want
	};

	return (
		<div className={contactStyles.container} id='contact'>
			<h1>Contact Us</h1>
			<form onSubmit={handleSubmit}>
				<div className={contactStyles.formGroup}>
					<label htmlFor='name'>Name:</label>
					<input
						type='text'
						id='name'
						name='name'
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
				</div>
				<div className={contactStyles.formGroup}>
					<label htmlFor='email'>Email:</label>
					<input
						type='email'
						id='email'
						name='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div className={contactStyles.formGroup}>
					<label htmlFor='message'>Message:</label>
					<textarea
						id='message'
						name='message'
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						required
					></textarea>
				</div>
				<div className={contactStyles.formGroup}>
					<button type='submit'>Send Message</button>
				</div>
			</form>
		</div>
	);
}

export default Contact;
