import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Testimonial17 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="testimonial17-max-width thq-section-max-width">
          <div className="testimonial17-container10">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="testimonial17-text34 thq-heading-2">
                    Testimonials
                  </h2>
                </Fragment>
              )}
            </h2>
            <span>
              {props.content1 ?? (
                <Fragment>
                  <span className="testimonial17-text33 thq-body-small">
                    Read what our users have to say about our polling platform.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="thq-grid-2">
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial17-card1"
                >
                  <div className="testimonial17-container12">
                    <img
                      alt={props.author1Alt}
                      src={props.author1Src}
                      className="testimonial17-image1"
                    />
                    <div className="testimonial17-container13">
                      <strong>
                        {props.author1Name ?? (
                          <Fragment>
                            <strong className="testimonial17-text29 thq-body-large">
                              John Doe
                            </strong>
                          </Fragment>
                        )}
                      </strong>
                      <span>
                        {props.author1Position ?? (
                          <Fragment>
                            <span className="testimonial17-text26 thq-body-small">
                              Marketing Manager
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <span>
                    {props.review1 ?? (
                      <Fragment>
                        <span className="testimonial17-text30 thq-body-small">
                          Great tool for gathering opinions quickly and
                          efficiently.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial17-card2"
                >
                  <div className="testimonial17-container14">
                    <img
                      alt={props.author2Alt}
                      src={props.author2Src}
                      className="testimonial17-image2"
                    />
                    <div className="testimonial17-container15">
                      <strong>
                        {props.author2Name ?? (
                          <Fragment>
                            <strong className="testimonial17-text25 thq-body-large">
                              Jane Smith
                            </strong>
                          </Fragment>
                        )}
                      </strong>
                      <span>
                        {props.author2Position ?? (
                          <Fragment>
                            <span className="testimonial17-text37 thq-body-small">
                              Product Designer
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <span>
                    {props.review2 ?? (
                      <Fragment>
                        <span className="testimonial17-text28 thq-body-small">
                          Easy to use interface and helpful for decision-making
                          processes.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial17-card3"
                >
                  <div className="testimonial17-container16">
                    <img
                      alt={props.author3Alt}
                      src={props.author3Src}
                      className="testimonial17-image3"
                    />
                    <div className="testimonial17-container17">
                      <strong>
                        {props.author3Name ?? (
                          <Fragment>
                            <strong className="testimonial17-text24 thq-body-large">
                              Alice Johnson
                            </strong>
                          </Fragment>
                        )}
                      </strong>
                      <span>
                        {props.author3Position ?? (
                          <Fragment>
                            <span className="testimonial17-text36 thq-body-small">
                              HR Specialist
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <span>
                    {props.review3 ?? (
                      <Fragment>
                        <span className="testimonial17-text27 thq-body-small">
                          Polls have improved our team communication and
                          engagement.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial17-card4"
                >
                  <div className="testimonial17-container18">
                    <img
                      alt={props.author4Alt}
                      src={props.author4Src}
                      className="testimonial17-image4"
                    />
                    <div className="testimonial17-container19">
                      <strong>
                        {props.author4Name ?? (
                          <Fragment>
                            <strong className="testimonial17-text35 thq-body-large">
                              Michael Brown
                            </strong>
                          </Fragment>
                        )}
                      </strong>
                      <span>
                        {props.author4Position ?? (
                          <Fragment>
                            <span className="testimonial17-text31 thq-body-small">
                              IT Manager
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <span>
                    {props.review4 ?? (
                      <Fragment>
                        <span className="testimonial17-text32 thq-body-small">
                          Highly recommend this platform for collecting feedback
                          from employees.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .testimonial17-max-width {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .testimonial17-container10 {
            gap: var(--dl-space-space-unit);
            display: flex;
            max-width: 600px;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .testimonial17-container12 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial17-image1 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial17-container13 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial17-container14 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial17-image2 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial17-container15 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial17-container16 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial17-image3 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial17-container17 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial17-container18 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial17-image4 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial17-container19 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial17-text24 {
            display: inline-block;
          }
          .testimonial17-text25 {
            display: inline-block;
          }
          .testimonial17-text26 {
            display: inline-block;
          }
          .testimonial17-text27 {
            display: inline-block;
            text-align: left;
          }
          .testimonial17-text28 {
            display: inline-block;
            text-align: left;
          }
          .testimonial17-text29 {
            display: inline-block;
          }
          .testimonial17-text30 {
            display: inline-block;
            text-align: left;
          }
          .testimonial17-text31 {
            display: inline-block;
          }
          .testimonial17-text32 {
            display: inline-block;
            text-align: left;
          }
          .testimonial17-text33 {
            display: inline-block;
            text-align: center;
          }
          .testimonial17-text34 {
            display: inline-block;
          }
          .testimonial17-text35 {
            display: inline-block;
          }
          .testimonial17-text36 {
            display: inline-block;
          }
          .testimonial17-text37 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .testimonial17-container10 {
              margin-bottom: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .testimonial17-container10 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .testimonial17-card1 {
              width: 100%;
            }
            .testimonial17-card2 {
              width: 100%;
            }
            .testimonial17-card3 {
              width: 100%;
            }
            .testimonial17-card4 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Testimonial17.defaultProps = {
  author3Alt: 'Alice Johnson Image',
  author3Name: undefined,
  author2Name: undefined,
  author1Position: undefined,
  author2Src:
    'https://images.unsplash.com/27/winter-view.jpeg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDMzNjc1M3w&ixlib=rb-4.0.3&q=80&w=1080',
  author4Alt: 'Michael Brown Image',
  review3: undefined,
  review2: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDMzNjc1M3w&ixlib=rb-4.0.3&q=80&w=1080',
  author1Name: undefined,
  review1: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1719165432651-1ef63642ac18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDMzNjc1Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Position: undefined,
  author2Alt: 'Jane Smith Image',
  author1Alt: 'John Doe Image',
  review4: undefined,
  content1: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDMzNjc1M3w&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
  author4Name: undefined,
  author3Position: undefined,
  author2Position: undefined,
}

Testimonial17.propTypes = {
  author3Alt: PropTypes.string,
  author3Name: PropTypes.element,
  author2Name: PropTypes.element,
  author1Position: PropTypes.element,
  author2Src: PropTypes.string,
  author4Alt: PropTypes.string,
  review3: PropTypes.element,
  review2: PropTypes.element,
  author4Src: PropTypes.string,
  author1Name: PropTypes.element,
  review1: PropTypes.element,
  author1Src: PropTypes.string,
  author4Position: PropTypes.element,
  author2Alt: PropTypes.string,
  author1Alt: PropTypes.string,
  review4: PropTypes.element,
  content1: PropTypes.element,
  author3Src: PropTypes.string,
  heading1: PropTypes.element,
  author4Name: PropTypes.element,
  author3Position: PropTypes.element,
  author2Position: PropTypes.element,
}

export default Testimonial17
