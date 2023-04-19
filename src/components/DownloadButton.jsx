import React, { useState } from 'react';

function DownloadButton() {
	const [showDownload, setShowDownload] = useState(false);
	const [showQuestions, setShowQuestions] = useState(true);
	const [showPhone, setShowPhone] = useState(false);
	const [question1, setQuestion1] = useState(0);
	const [question2, setQuestion2] = useState(0);
	const [question3, setQuestion3] = useState(0);
	const [answer1, setAnswer1] = useState(0);
	const [answer2, setAnswer2] = useState(0);
	const [answer3, setAnswer3] = useState(0);
	const [phoneNumber, setPhoneNumber] = useState('');

	const checkAnswers = () => {
		if (
			answer1 === question1 + question2 &&
			answer2 === question2 - question3 &&
			answer3 === question3 * question1
		) {
			setShowQuestions(false);
			setShowPhone(true);
		} else {
			alert('Sorry, your answers are incorrect. Please try again.');
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// Check phone number is valid (10 digits, US only)
		const phoneRegex = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
		if (phoneRegex.test(phoneNumber)) {
			// Send email with phone number
			console.log('Sending email with phone number: ' + phoneNumber);
			// Show download button
			setShowDownload(true);
			setShowPhone(false);
		} else {
			alert('Please enter a valid US phone number.');
		}
	};

	return (
		<div>
			{showDownload ? (
				<a
					href='path/to/download/file.pdf'
					download
				>
					Download My Resume
				</a>
			) : (
				<>
					{showQuestions && (
						<>
							<h3>Please answer the following math questions:</h3>
							<form>
								<label>
									{question1} + {question2} =
									<input
										type='number'
										value={answer1}
										onChange={(e) =>
											setAnswer1(e.target.value)
										}
									/>
								</label>
								<br />
								<label>
									{question2} - {question3} =
									<input
										type='number'
										value={answer2}
										onChange={(e) =>
											setAnswer2(e.target.value)
										}
									/>
								</label>
								<br />
								<label>
									{question3} x {question1} =
									<input
										type='number'
										value={answer3}
										onChange={(e) =>
											setAnswer3(e.target.value)
										}
									/>
								</label>
								<br />
								<button
									type='button'
									onClick={checkAnswers}
								>
									Submit Answers
								</button>
							</form>
						</>
					)}
					{showPhone && (
						<>
							<h3>Please enter your US phone number:</h3>
							<form onSubmit={handleSubmit}>
								<label>
									Phone Number:
									<input
										type='tel'
										pattern='[2-9]{1}[0-9]{9}'
										required
										value={phoneNumber}
										onChange={(e) =>
											setPhoneNumber(e.target.value)
										}
									/>
								</label>
								<br />
								<button type='submit'>Download</button>
							</form>
						</>
					)}
				</>
			)}
		</div>
	);
}

export default DownloadButton;
