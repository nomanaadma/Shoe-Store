import { Typography } from '@material-ui/core';

function NotFound() {
	return (		
		<div style={{ textAlign: 'center', height: 'calc(100vh - 317px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
			<div>
				<img src={require('../../images/404.png').default} alt="404" style={{ marginBottom: '30px' }} />
				<Typography variant="h4" gutterBottom>404 - Page Not Found</Typography>
				<p>The page you are looking for might have been removed <br /> had its name changed or is temporarily unavailable</p>
			</div>
		</div>
	);
}

export default NotFound;
