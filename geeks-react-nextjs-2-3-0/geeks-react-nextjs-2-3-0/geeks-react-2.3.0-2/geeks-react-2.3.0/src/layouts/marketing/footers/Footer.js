// import node module libraries
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';

const Footer = ({ bgColor = 'bg-transparent' }) => {
	return (
		<footer className={`footer ${bgColor}`}>
			<Container>
				<Row className="align-items-center g-0 border-top py-2">
					{/* Desc */}
					<Col md={6} sm={12} className="text-center text-md-start">
						<span>© 2024 Geeks. All Rights Reserved.</span>
					</Col>
					{/* Links */}
					<Col md={6} sm={12}>
						<nav className="nav nav-footer justify-content-center justify-content-md-end">
							<Link className="nav-link active ps-0" to="#">
								Privacy
							</Link>
							<Link className="nav-link" to="#">
								Terms{' '}
							</Link>
							<Link className="nav-link" to="#">
								Feedback
							</Link>
							<Link className="nav-link" to="#">
								Support
							</Link>
						</nav>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

// Typechecking With PropTypes
Footer.propTypes = {
	bgColor: PropTypes.string
};

export default Footer;
