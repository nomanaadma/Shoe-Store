import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function Footer() {
	return (
		<div className={styles.container}>
			<p>
				Made with <FontAwesomeIcon className={styles.heart} icon={faHeart} /> by Noman Shoukat | Copyright &copy; { new Date().getFullYear() } All Rights Reserved.
			</p>
			<ul>
				<li>
					<a
						href="mailto:nomanaadma@gmail.com"
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon className={styles.email+' fa-lg'} icon={faEnvelope} />
					</a>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/in/nomanaadma/"
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon className={styles.linkedin+' fa-lg'} icon={faLinkedinIn} />
					</a>
				</li>
				<li>
					<a
						href="https://github.com/nomanaadma"
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon className={styles.github+' fa-lg'} icon={faGithub} />
					</a>
				</li>
				<li>
					<a
						href="https://www.facebook.com/NomanAadma"
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon className={styles.facebook+' fa-lg'} icon={faFacebookF} />
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Footer;
