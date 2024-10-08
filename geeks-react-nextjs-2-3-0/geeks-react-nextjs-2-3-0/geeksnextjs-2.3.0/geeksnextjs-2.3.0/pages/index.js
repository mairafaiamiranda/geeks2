// import node module libraries
import { Fragment, useEffect } from 'react';
import { Col, Row, Container } from 'react-bootstrap';

// import widget/custom components
import { CourseSlider, FeaturesList, HeroHeader } from 'widgets';

const Home = () => {
	useEffect(() => {
		document.body.className = 'bg-light';
	});
	return (
		<Fragment>
			{/*  Page Content  */}
			<HeroHeader />

			{/*  Features list  */}
			<FeaturesList />

			<section className="pt-lg-12 pb-lg-3 pt-8 pb-6">
				<Container>
					<Row className="mb-4">
						<Col>
							<h2 className="mb-0 mx-2">Recommended to you</h2>
						</Col>
					</Row>
					<div className="position-relative">
						<CourseSlider recommended={true} />
					</div>
				</Container>
			</section>

			<section className="pb-lg-3 pt-lg-3">
				<Container>
					<Row className="mb-4">
						<Col>
							<h2 className="mb-0 mx-2">Most Popular</h2>
						</Col>
					</Row>
					<div className="position-relative">
						<CourseSlider popular={true} />
					</div>
				</Container>
			</section>

			<section className="pb-lg-8 pt-lg-3 py-6">
				<Container>
					<Row className="mb-4">
						<Col>
							<h2 className="mb-0 mx-2">Trending</h2>
						</Col>
					</Row>
					<div className="position-relative">
						<CourseSlider trending={true} />
					</div>
				</Container>
			</section>

		</Fragment>
	);
};

export default Home;
