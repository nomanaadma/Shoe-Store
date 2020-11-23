import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Tooltip from '@material-ui/core/Tooltip';
import { useLocation } from 'react-router-dom';

function Footer() {

	const location = useLocation();
	const pathname = location.pathname.replace('/', '');

	return (
		<div className={styles.container+' '+pathname}>
			<p>
				Made with <FontAwesomeIcon className={styles.heart} icon={faHeart} /> by Noman Shoukat | Copyright &copy; { new Date().getFullYear() } All Rights Reserved.
			</p>
			<ul>
				<li>
					<Tooltip title="nomanaadma@gmail.com">
					<a
						href="mailto:nomanaadma@gmail.com"
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon className={styles.email+' fa-lg'} icon={faEnvelope} />
					</a>
					</Tooltip>
				</li>
				<li>
					<Tooltip title="LinkedIn">
					<a
						href="https://www.linkedin.com/in/nomanaadma/"
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon className={styles.linkedin+' fa-lg'} icon={faLinkedinIn} />
					</a>
					</Tooltip>
				</li>
				<li>
					<Tooltip title="Github">
					<a
						href="https://github.com/nomanaadma"
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon className={styles.github+' fa-lg'} icon={faGithub} />
					</a>
					</Tooltip>
				</li>
				<li>
					<Tooltip title="Facebook">
					<a
						href="https://www.facebook.com/NomanAadma"
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon className={styles.facebook+' fa-lg'} icon={faFacebookF} />
					</a>
					</Tooltip>
				</li>
			</ul>
		</div>
	);
}

export default Footer;
