import React from 'react';
import TechStack from './TechStack';
import hand from '../assets/img/waving-hand.png';
import heroStyles from '../assets/styles/components/hero.module.css';
import me from '../assets/img/me.jpg';

function Hero() {
	return (
		<div className={heroStyles.heroContainer}>
			<section className={heroStyles.hero}>
				<div className={heroStyles.heroContent}>
					<img
						className={heroStyles.hand}
						src={hand}
						alt=''
					/>
					<h1>
						I'm <span>Del</span>. A creative engineer hand crafting
						user experiences, one pixel at a time.
					</h1>
					<h5>
						I've been designing and developing interfaces that
						redefine how we interact with technology for the last
						two decades. I like to draw too.
					</h5>
					<div className={heroStyles.socialLinks}>
						<a
							href='https://github.com/DelManzueta'
							target='_blank'
							rel='delwing manzueta'
						>
							<svg
								viewBox='0 0 24 24'
								className={heroStyles.socialGit}
							>
								<path
									fill='currentColor'
									d='M12 0a12 12 0 0 0-3.82 23c.6.11.82-.26.82-.58v-2.01c-3.34.72-4-1.61-4-1.61-.54-1.37-1.33-1.74-1.33-1.74-1.08-.73.08-.72.08-.72 1.2.08 1.84 1.23 1.84 1.23 1.08 1.85 2.84 1.31 3.53 1 .11-.78.41-1.31.75-1.61-2.64-.3-5.42-1.32-5.42-5.86 0-1.3.46-2.37 1.23-3.21-.13-.3-.54-1.52.1-3.17 0 0 1-.32 3.3 1.23.96-.27 2-.41 3.02-.41s2.06.14 3.02.41c2.3-1.55 3.3-1.23 3.3-1.23.64 1.65.23 2.87.11 3.17.77.84 1.23 1.9 1.23 3.21 0 4.55-2.78 5.57-5.43 5.87.43.36.82 1.08.82 2.18v3.23c0 .32.21.69.83.58A12 12 0 0 0 12 0z'
								/>
							</svg>
						</a>

						<a
							href='https://www.linkedin.com/in/delwingmanzueta/'
							target='_blank'
							rel='delwing manzueta'
						>
							<svg
								viewBox='0 0 24 24'
								className={heroStyles.socialLinked}
							>
								<path
									fill='currentColor'
									d='M20.25 0H3.75C1.678 0 0 1.677 0 3.75v16.5C0 22.323 1.677 24 3.75 24h16.5c2.073 0 3.75-1.677 3.75-3.75V3.75C24 1.677 22.323 0 20.25 0zM7.125 19.125h-3v-9.75h3v9.75zM5.625 8.963C4.568 8.963 3.75 8.143 3.75 7.087c0-1.055.818-1.875 1.875-1.875 1.056 0 1.875.82 1.875 1.875 0 1.056-.819 1.876-1.875 1.876zM19.125 19.125h-2.999v-4.989c0-1.201-.024-2.744-1.674-2.744-1.675 0-1.932 1.309-1.932 2.657v5.076h-2.999v-9.75h2.902v1.416h.04c.404-.763 1.387-1.563 2.863-1.563 3.056 0 3.62 2.011 3.62 4.625v5.272z'
								/>
							</svg>
						</a>
					</div>
				</div>
				<div className={heroStyles.img}>
					<img
						src={me}
						alt='Del Manzueta'
					/>
				</div>
			</section>
			<TechStack />
		</div>
	);
}

export default Hero;
