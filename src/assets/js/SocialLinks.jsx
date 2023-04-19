import PropTypes from 'prop-types';
import React from 'react';
import gitLogo from '../img/icons/git.svg';
import linkedinLogo from '../img/icons/linkedin.svg';
import socialStyles from '../styles/components/social.module.css'

function SocialLinks(props) {
	const { logo } = props;

	const getLogoSrc = () => {
		switch (logo) {
			case 'github':
				return gitLogo;
			case 'linkedin':
				return linkedinLogo;
			default:
				return '';
		}
	};

	const logoSrc = getLogoSrc();

	if (!logoSrc) {
		return null;
	}

	return (
		<img className={socialStyles.logo} src={logoSrc} alt={logo} />
	);
}

SocialLinks.propTypes = {
	logo: PropTypes.oneOf(['github', 'linkedin']).isRequired,
};

export default SocialLinks;
