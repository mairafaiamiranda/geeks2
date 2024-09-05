
// import node module libraries
import Link from 'next/link'
import { Card, Col, Container, Row } from 'react-bootstrap'

// import data files
import MentorsCategoriesData from 'data/marketing/mentor/MentorsCategoriesData'

const ExploreMentors = () => {
    return (
        <section className="py-lg-8 pb-6 bg-white">
            <Container className="pb-lg-6">
                <Row>
                    <Col xs={12}>
                        <div className="text-center mb-6">
                            <h2 className="mb-0 h1">Explore Mentors by Category</h2>
                        </div>
                    </Col>
                </Row>

                <Row className="gy-4">
                    {MentorsCategoriesData.map((category, index) => {
                        return (
                            <Col key={index} xxl={2} md={4} xs={12}>
                                <Link href="#!" className="card card-border-primary rounded-4">
                                    <Card.Body className="d-flex flex-column gap-4 text-center">
                                        <div>
                                            <div className={`icon-shape icon-xxl bg-light-${category.bgColor} rounded-circle`}
                                                dangerouslySetInnerHTML={{ __html: category.icon }}
                                            />
                                        </div>
                                        <div>
                                            <h3 className="mb-0">{category.name}</h3>
                                            <span>{category.totalMentors} Mentors</span>
                                        </div>
                                    </Card.Body>
                                </Link>
                            </Col>
                        )
                    })}

                    <Col xxl={2} md={4} xs={12}>
                        <Link href="#!" className="card card-border-primary rounded-4">
                            <Card.Body className="d-flex flex-column gap-4 text-center">
                                <div>
                                    <div className="icon-shape icon-xxl bg-light-primary rounded-circle">
                                        <svg fill="none" height="24" viewBox="0 0 22 22" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.2925 13.2925L4 16.5863L1.7075 14.2925C1.56764 14.1525 1.38939 14.0571 1.19531 14.0185C1.00122 13.9798 0.800033 13.9996 0.61721 14.0754C0.434387 14.1511 0.278151 14.2794 0.16828 14.444C0.0584092 14.6086 -0.000155428 14.8021 3.09801e-07 15V21C3.09801e-07 21.2652 0.105357 21.5196 0.292894 21.7071C0.48043 21.8946 0.734784 22 1 22H7C7.1979 22.0002 7.39139 21.9416 7.55598 21.8317C7.72058 21.7218 7.84887 21.5656 7.92462 21.3828C8.00038 21.2 8.02018 20.9988 7.98153 20.8047C7.94288 20.6106 7.84751 20.4324 7.7075 20.2925L5.41375 18L8.7075 14.7075C8.89514 14.5199 9.00056 14.2654 9.00056 14C9.00056 13.7346 8.89514 13.4801 8.7075 13.2925C8.51986 13.1049 8.26536 12.9994 8 12.9994C7.73464 12.9994 7.48014 13.1049 7.2925 13.2925ZM2 20V17.4137L4.58625 20H2ZM5.41375 4L7.7075 1.7075C7.84751 1.56764 7.94288 1.38939 7.98153 1.19531C8.02018 1.00122 8.00038 0.800033 7.92462 0.61721C7.84887 0.434387 7.72058 0.278151 7.55598 0.16828C7.39139 0.0584092 7.1979 -0.000155428 7 3.09801e-07H1C0.734784 3.09801e-07 0.48043 0.105357 0.292894 0.292894C0.105357 0.48043 3.09801e-07 0.734784 3.09801e-07 1V7C-0.000155428 7.1979 0.0584092 7.39139 0.16828 7.55598C0.278151 7.72058 0.434387 7.84887 0.61721 7.92462C0.800033 8.00038 1.00122 8.02018 1.19531 7.98153C1.38939 7.94288 1.56764 7.84751 1.7075 7.7075L4 5.41375L7.2925 8.7075C7.48014 8.89514 7.73464 9.00056 8 9.00056C8.26536 9.00056 8.51986 8.89514 8.7075 8.7075C8.89514 8.51986 9.00056 8.26536 9.00056 8C9.00056 7.73464 8.89514 7.48014 8.7075 7.2925L5.41375 4ZM2 4.58625V2H4.58625L2 4.58625ZM21 3.09801e-07H15C14.8021 -0.000155428 14.6086 0.0584092 14.444 0.16828C14.2794 0.278151 14.1511 0.434387 14.0754 0.61721C13.9996 0.800033 13.9798 1.00122 14.0185 1.19531C14.0571 1.38939 14.1525 1.56764 14.2925 1.7075L16.5863 4L13.2925 7.2925C13.1049 7.48014 12.9994 7.73464 12.9994 8C12.9994 8.26536 13.1049 8.51986 13.2925 8.7075C13.4801 8.89514 13.7346 9.00056 14 9.00056C14.2654 9.00056 14.5199 8.89514 14.7075 8.7075L18 5.41375L20.2925 7.7075C20.4324 7.84751 20.6106 7.94288 20.8047 7.98153C20.9988 8.02018 21.2 8.00038 21.3828 7.92462C21.5656 7.84887 21.7218 7.72058 21.8317 7.55598C21.9416 7.39139 22.0002 7.1979 22 7V1C22 0.734784 21.8946 0.48043 21.7071 0.292894C21.5196 0.105357 21.2652 3.09801e-07 21 3.09801e-07ZM20 4.58625L17.4137 2H20V4.58625ZM21.3825 14.0763C21.1998 14.0005 20.9987 13.9805 20.8047 14.019C20.6107 14.0575 20.4324 14.1527 20.2925 14.2925L18 16.5863L14.7075 13.2925C14.5199 13.1049 14.2654 12.9994 14 12.9994C13.7346 12.9994 13.4801 13.1049 13.2925 13.2925C13.1049 13.4801 12.9994 13.7346 12.9994 14C12.9994 14.2654 13.1049 14.5199 13.2925 14.7075L16.5863 18L14.2925 20.2925C14.1525 20.4324 14.0571 20.6106 14.0185 20.8047C13.9798 20.9988 13.9996 21.2 14.0754 21.3828C14.1511 21.5656 14.2794 21.7218 14.444 21.8317C14.6086 21.9416 14.8021 22.0002 15 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21V15C22 14.8022 21.9413 14.6089 21.8314 14.4445C21.7214 14.28 21.5652 14.1519 21.3825 14.0763ZM20 20H17.4137L20 17.4137V20Z" fill="#754FFE" /></svg>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="mb-0">Explore All</h3>
                                    <span>700+ Mentors</span>
                                </div>
                            </Card.Body>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ExploreMentors