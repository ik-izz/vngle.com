import React from "react";
import { Link } from "gatsby";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Button,
  Image,
  Badge,
} from "react-bootstrap";
import styled from "styled-components";

import Layout from "@components/Layouts/MainLayout";
import Seo from "@components/Seo";
import NewsSubCard from "@components/NewsSubCard";
import StorySlider from "@components/StoryCarousel";
import SimpleSubForm from "@components/SubForm";
import ActionCard from "@components/landing/ActionCard";
import ClientLogoGrid from "@components/PartnerLogoGrid";

import GaFlag from "@images/ga-flag.svg";
import Culture from "@images/about/culture.svg";
import Transparent from "@images/about/transparent.svg";
import Search from "@images/about/search.svg";
import Request from "@images/about/request.svg";
import Capture from "@images/about/capture.svg";
import Distribute from "@images/about/distribute.svg";

const OldHomePage = () => {
  const heroBtn = [
    {
      value: "Request a Story",
      href: "https://vngle.typeform.com/to/zwc2R2og",
    },
    {
      value: "Report a Story",
      href: "https://docs.google.com/forms/d/1s6VKLzBLnfLDjUn5IWHwezZmQJZK-SBHjGGvTY27XSQ/viewform?edit_requested=true",
    },
  ];
  const mainFeatureData = [
    {
      imgSrc: Culture,
      title: "Cross-Cultural Authenticity",
      description:
        "Reporting on stories from all sides of cities to ensure holistic representation.",
    },
    {
      imgSrc: Transparent,
      title: "Credible & Verifiable Transparency",
      description:
        "There’s no agenda, just real stories from real people on the communities they love.",
    },
    {
      imgSrc: Search,
      title: "Aggregated Vetted Sources",
      description:
        "Our verified reporters are vetted and their stories are verified by communities.",
    },
  ];
  const processData = [
    {
      title: "Local coverage requested",
      description:
        "Know something that’s going under reported? Whether it’s a local election, a protest, or just a high school game, Vngle’s got you covered.",
      imgSrc: Request,
    },
    {
      title: "Reporters assigned",
      description:
        "After a request is accepted, we match it with a local verified reporter based on their location and area of expertise.",
      imgSrc: Capture,
    },
    {
      title: "Stories captured + circulated",
      description:
        "After a story is captured, it’s made public and distributed across its home community and any others that would benefit from the information.",
      imgSrc: Distribute,
    },
  ];
  const actionCardData = [
    {
      title: "I need coverage",
      text: (
        <>
          Know a topic that's underreported near you? <br /> Text "STORY" to{" "}
          <b>(678) 995-5121</b> OR
        </>
      ),
      btn: {
        to: "https://blake680703.typeform.com/to/zwc2R2og",
        text: "Request a Story",
      },
    },
    {
      title: "I want to report",
      text: (
        <>
          Want to be a grassroots reporter for your community?
          <br />
          Click the button below.
        </>
      ),
      btn: {
        to: "/report",
        text: "Report a story",
      },
    },
  ];

  return (
    <Layout>
      <Seo title="Nonpartisan Grassroots Verified News" />

      <HeroContainer>
        <Row className="row-intro">
          <Col className="col-intro text-md-left text-center" md={6} sm={12}>
            <h1 className="display-4 fw-bolder mb-4">
              Cities need various angles of more inclusive coverage
              <br />
              <span className="highlight">That's why we created Vngle</span>
            </h1>
            <Row>
              {heroBtn.map(({ value, href }, i) => (
                <Col className="mb-4" xl={6} lg={12} key={i}>
                  <Button href={href}>{value}</Button>
                </Col>
              ))}
            </Row>
            <Subtitle className="mb-4">
              We’re a grassroots verified news network curating more
              comprehensive & verifiable insights for local communities. We give
              locals the training & tools needed to create a more diverse news
              ecosystem for their area.{" "}
              <Badge variant="primary">
                <a
                  href="http://eepurl.com/g1cJk5"
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{ color: "black" }}
                >
                  Sign up today
                </a>
              </Badge>
            </Subtitle>
          </Col>
          <Col className="col-hook">
            <div className="ratio ratio-4x3">
              <iframe
                src="https://www.youtube.com/embed/nRzsnAdlqOc?autoplay=1&modestbranding=1&mute=1"
                title="Vngle promo video"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            {/* Consider hiding form in small screen sizes */}
            <NewsSubCard
              title="Get the nonpartisan pulse on what's going on near you."
              subtitle="Sign up for balanced coverage on everything from local campaigns, state politics, to COVID-19 updates."
            />
          </Col>
        </Row>
      </HeroContainer>

      <Jumbotron className="bg-primary py-5 mb-5">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col md={1} sm={2} xs={3}>
              <img
                src={GaFlag}
                alt="flag of the state of Georgia"
                width="100%"
              />
            </Col>
            <Col xs="auto">
              <Subtitle className="mb-sm-0 mb-4 mx-auto">
                Check out our Georgia coverage!
              </Subtitle>
            </Col>
            <Col xs="auto">
              <Button variant="outline-dark" size="md" as={Link} to="/georgia">
                See Coverage Now
              </Button>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <TopFeatureContainer>
        <Title className="display-3">
          Get the real scoop from real locals, sharing their truth on what’s
          happening.
        </Title>
        <Subtitle>
          We bring you authentic on-the-ground perspectives that mainstream
          media won’t. Our cross-cultural video coverage highlights the diverse
          experiences and realities people face. It puts you in the shoes of
          people from all walks of life.
        </Subtitle>
        <StorySlider />
      </TopFeatureContainer>

      <MainFeatureContainer className="my-5">
        <Title className="display-3 mb-5">
          Bring you “various angles” of coverage through
        </Title>
        <Row>
          {mainFeatureData.map(({ imgSrc, title, description, offset }, i) => (
            <Col key={i} md={4} sm={8} className="mb-md-0 mb-5">
              <img src={imgSrc} alt="feature" width="80%" className="mb-3" />
              <h3 className="fw-bold">{title}</h3>
              <p>{description}</p>
            </Col>
          ))}
        </Row>
      </MainFeatureContainer>

      <ProcessContainer>
        <Jumbotron className="bg-primary shadow">
          <h1 className="display-4">How Your Community is Covered</h1>
          {processData.map(({ title, description, imgSrc }, i) => (
            <Row className="text-center text-md-left" key={i}>
              <Col md={{ offset: i % 2 !== 0 && 1 }}>
                <Image src={imgSrc} alt="Process image" width="100%" />
              </Col>
              <Col
                md={{
                  span: 6,
                  offset: i % 2 === 0 && 1,
                  order: i % 2 !== 0 && "first",
                }}
              >
                <h3 className="bg-secondary rounded-circle mx-auto">{i + 1}</h3>
                <h2>{title}</h2>
                <p>{description}</p>
              </Col>
            </Row>
          ))}
        </Jumbotron>
      </ProcessContainer>

      <Container className="my-5">
        <Title className="display-3 mb-5 text-center">
          <i style={{ fontWeight: "100" }}>Your Community Needs You:</i>
          <br />
          Get Involved
        </Title>
        <SimpleSubForm />
        <Row className="card-row text-center">
          {actionCardData.map((props, i) => (
            <Col lg={6} sm={12} key={i}>
              <ActionCard {...props}>{props.text}</ActionCard>
            </Col>
          ))}
        </Row>
      </Container>

      <Container as="section" className="my-4">
        <Row as={Col} className="justify-content-center">
          <h1 className="mb-4">Who We've Worked With</h1>
        </Row>
        <ClientLogoGrid />
      </Container>
    </Layout>
  );
};

const HeroContainer = styled(Container)`
  margin-top: 2rem;
  margin-bottom: 5rem;

  h1 {
    line-height: 1.4em;
  }

  .row {
    justify-content: center;
  }

  .row-intro {
    margin-bottom: 3rem;
  }

  .col-intro {
    .btn {
      font-size: 1.3rem;
      padding: 0.5rem 2rem;
      border-radius: 50px;
      font-weight: bold;
    }
  }

  .col-hook {
    display: flex;
    align-items: center;
  }

  .col-hook:hover {
    filter: drop-shadow(0 1rem 3rem rgba(0, 0, 0, 0.175));
    border-radius: 0px;
    transition: all 0.2s;
  }
`;

const TopFeatureContainer = styled(Container)`
  text-align: center;
  margin-bottom: 7rem;

  & > img {
    width: 100%;
    margin-top: -15vw;
  }
`;

const MainFeatureContainer = styled(Container)`
  text-align: center;

  h2 {
    font-weight: 800;
  }

  .row {
    justify-content: center;
  }
`;

const ProcessContainer = styled(Container)`
  margin-bottom: 7rem;

  .jumbotron {
    border-radius: 1.25rem;
    padding: 3rem;

    h1 {
      font-weight: 800;
      margin-bottom: 3rem;
    }

    .row {
      align-items: center;
      margin-bottom: 1rem;
      padding: 1rem;
      background: white;
      border-radius: 1.25rem;

      h3 {
        margin-bottom: 1rem;
        width: 1.5em;
        height: 1.5em;
        text-align: center;
        color: white;
      }
    }
  }
`;

const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-weight: 800;
`;

const Subtitle = styled.h2`
  font-family: "Inter", sans-serif;
  font-size: clamp(1rem, 2vw, 1.5rem);
  line-height: 1.5em;
`;

export default OldHomePage;
