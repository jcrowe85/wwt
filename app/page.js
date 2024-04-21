'use client';

import Image from "next/image";
import styles from "./page.module.css";
import mergeClasses from 'classnames'
import { IoMdCheckmarkCircle } from "react-icons/io";
import { motion, stagger } from "framer-motion"
import Slideshow from "@/components/slide-show";
import { IoMdCheckmark } from "react-icons/io";
import React, { useState, useRef, useEffect } from 'react';

export default function Home() {

  const videoRefMobile = useRef();
  const videoRefDesktop = useRef();

  const [activeDay, setActiveDay] = useState(0);
  const [activeVideo, setActiveVideo] = useState();
  const [activePhoto, setActivePhoto] = useState('https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/Screenshot+2024-03-10+225323+copy+copy+copy+copy+copy.jpg');
  const [width, setWidth] = useState(window.innerWidth);
  const [activeFaq, setActiveFaq] = useState(null);

  function changeDayHandler(e, index) {
    setActiveDay(index)
  }

  function setActiveVideoHandler(event) {
    videoRefMobile.current.pause();
    videoRefDesktop.current.pause();

    setActiveVideo(event.currentTarget.dataset.src);
    videoRefMobile.current.load();
    videoRefDesktop.current.load();

    if (isMobile) {
      videoRefMobile.current.play();
    } else {
      videoRefDesktop.current.play();
    }
  }

  function setActivePhotoHandler(event) {
    setActivePhoto(event.currentTarget.dataset.src);
  }

  function faqHandler(event, faqNumber) {
    setActiveFaq(faqNumber)
  }

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const isMobile = width <= 768;

  return (
    <main className={styles.main}>
      {/** section 1 - mobile */}
      <section className="section-1 mobile-wrapper d-md-block d-lg-none mobile">
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {/** mobile logo */}
          <div className="logo d-xs-block d-sm-none">
            <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/logo-desktop+(1).png" />
          </div>
          {/** desktop logo */}
          <div className="container">
            <div className="logo d-sm-block d-none">
              <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/logo-desktop+(1).png" />
            </div>
          </div>
        </motion.header>
        {/** mobile hero and cta */}
        <section className="d-block d-lg-none center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }} className="dean">
            <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/dean-mobile+(1).png" alt="" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "anticipate", duration: 1 }}
            className="headline">
            BUILD YOUR KILIMANJARO TRIP WITH <span style={{ fontWeight: "normal" }}>RENOWN GUIDE</span> DEAN
            CARDINALE
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "anticipate", duration: 1 }}
            className="cta-and-arrow">
            <div className="cta">
              <button className="red">
                SCHEDULE ZOOM MEETING
                <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/icons/zoom-icon-white-mobile.png" alt="" />
              </button>
            </div>
            <div className="cta-arrow">
              <img src="./imgs/cta-arrow-desktop.png" alt="" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "anticipate", duration: 1 }}
            className="checkmarks">
            <div className="checkmark">
              <div className="checkmark-icon">
                <IoMdCheckmarkCircle />
              </div>
              Free to schedule
            </div>
            <div className="checkmark">
              <div className="checkmark-icon">
                <IoMdCheckmarkCircle />
              </div>
              No sales pressure
            </div>
          </motion.div>
        </section>
      </section>
      {/** section-1 - desktop */}
      <div
        className="section-1 desktop d-none d-lg-block">
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {/** mobile logo */}
          <div className="logo d-xs-block d-sm-none">
            <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/logo-desktop+(1).png" />
          </div>
          {/** desktop logo */}
          <div className="container">
            <div className="logo d-sm-block d-none">
              <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/logo-desktop+(1).png" />
            </div>
          </div>
        </motion.header>
        <section className="container d-none d-lg-block">
          <div className="row">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              className="left col-lg-6 col-xl-7">
              <h1 className="desktop headline">BUILD YOUR KILIMANJARO TRIP WITH RENOWN GUIDE DEAN CARDINALE</h1>
              <p className="sub-head">
                Schedule a one-on-one zoom call with the owner of World Wide Trekking, Dean Cardinale,
                about
                the
                details of your trip and how he can work to get you to the top of one of the world’s
                highest
                summits.
              </p>
              <div className="cta-and-arrow">
                <div className="cta">
                  <button className="red">
                    SCHEDULE ZOOM MEETING
                    <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/icons/zoom-icon-white-mobile.png" alt="" />
                  </button>
                </div>
                <div className="cta-arrow">
                  <img src="./imgs/cta-arrow-desktop.png" alt="" />
                </div>
              </div>
              <div className="checkmarks">
                <div className="checkmark">
                  <div className="checkmark-icon">
                    <IoMdCheckmarkCircle />

                  </div>
                  Free to schedule
                </div>
                <div className="checkmark">
                  <div className="checkmark-icon">
                    <IoMdCheckmarkCircle />

                  </div>
                  No sales pressure
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }} className="right col-lg-6 col-xl-5">
              <div className="dean">
                <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/dean-desktop+(2).png"
                  alt="" />
              </div>
            </motion.div>
          </div>
        </section>
      </div >
      {/* page break - mobile */}
      < section className="page-break center d-md-block d-lg-none mobile" >
        <h6>A Free 45 Minute Session with a World className Guide</h6>
        <div className="container">
          <div className="row highlights">
            <div className="col-3">
              <h5><span id="accolade1Mobile"></span>+</h5>
              <p>Kilimanjaro Summits</p>
            </div>
            <div className="col-3">
              <h5><span id="accolade2Mobile"></span> Yrs.</h5>
              <p>Intl. Adventure Guide</p>
            </div>
            <div className="col-3">
              <h5><span id="accolade3Mobile"></span>%</h5>
              <p>Guests Success Rate</p>
            </div>
            <div className="col-3">
              <h5><span id="accolade4Mobile"></span>'s</h5>
              <p>Summits Incl. Evererest</p>
            </div>
          </div>
        </div>
      </section >
      {/* page break - desktop */}
      < section className="page-break container d-none d-lg-block" >
        <div className="row highlights justify-content-center">
          <h3 className="col-4">A Free 45 Minute Session with a World className Guide</h3>
          <div className="col-2">
            <h3><span id="accolade1"></span>+</h3>
            <p>Kilimanjaro Summits</p>
          </div>
          <div className="col-2">
            <h3><span id="accolade2"></span>Years</h3>
            <p>Intl. Adventure Guide</p>
          </div>
          <div className="col-2">
            <h3><span id="accolade3"></span>%</h3>
            <p>Guests Success Rate</p>
          </div>
          <div className="col-2">
            <h3><span id="accolade4"></span>'s</h3>
            <p>Summits Incl. Everest</p>
          </div>
        </div>
      </section >
      {/* section 2 - mobile */}
      <section className="section-2 mobile-wrapper center d-md-block d-lg-none mobile" >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -50 }
          }}
          className="discussed" >
          <div>
            <IoMdCheckmark color="#C62034" />
          </div>
          <p>Discussed During Your Call with Dean</p>
        </motion.div>
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -50 }
          }}
          className="headline">Talk About <span style={{ color: "#C62034" }}>Why</span> You Want to<span
            style={{ color: "#C62034" }}> Climb Kilimanjaro</span>
        </motion.h1>
        <div className="carousel mobile">
          <div className="carousel-inner">
            <Slideshow src={"https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-2-carousel-desktop-img-5+(1).jpg"} />
          </div>
        </div>
        <p className="sub-head">Dean knows everyone has a reason and expectation for their climb, and he’d like you
          to share yours with
          him, so he can focus on making your experience unforgettable.</p>
        <div className="cta">
          <button className="red">
            SCHEDULE WITH DEAN
            <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/icons/zoom-icon-white-mobile.png" alt="" width="25px" />
          </button>
        </div>
      </section >
      {/* section 2 - desktop */}
      < section className="section-2 container-fluid d-lg-block d-none desktop" >
        <div className="row">
          <div className="left col-6">
            <div className="carousel">
              <div className="carousel-inner">
                <Slideshow src={"https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-2-carousel-desktop-img-5+(1).jpg"} />
              </div>
            </div>
          </div>
          <div className="right col-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: .5 }}
              variants={{
                visible: { opacity: 1, scale: 1, },
                hidden: { opacity: 0, scale: 0 }
              }}
            >
              <div className="discussed">
                <div>
                  <IoMdCheckmark color="#C62034" />
                </div>
                <p>Discussed During Your Call with Dean</p>
              </div>
              <h1 className="headline">Talk About <span style={{ color: "#C62034" }}>Why</span> You Want to<span
                style={{ color: "#C62034" }}> Climb Kilimanjaro</span></h1>
              <p className="sub-head">Dean knows everone has a reason and expectation for their climb, and
                he'd
                like you to share yours with him, so he can focus on making your experience
                unforgettable.
              </p>
              <div className="cta">
                <button className="red">
                  SCHEDULE WITH DEAN
                  <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/icons/zoom-icon-white-mobile.png" alt="" width="25px" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section >
      {/* section 3 - mobile  */}
      < section className="section-3 mobile-wrapper center d-md-block d-lg-none mobile" >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -50 }
          }}
          className="discussed" >
          <div>
            <IoMdCheckmark color="#C62034" />
          </div>
          <p>Discussed During Your Call with Dean</p>
        </motion.div>
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -50 }
          }}>
          Discuss What It Will Take to Get You to the Summit
        </motion.h1>
        <p className="sub-head">As Africa’s tallest standing mountain at 19,341 feet, Mt. Kilimanjaro is a strenuous
          but achievable climb. Dean will combine his years of experience with your goals to discuss the big
          picture including costs, equipment, health, timeline, and so forth.
        </p>
        <ul className="items">
          <li className="item">
            <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/icons/calendar-icon.png" alt="" />
            <p>Trip duration, pacing the mountain, acclimatization, the amount of time it will it take for
              our
              team to guide you safely to the summit.</p>
          </li>
          <li className="item">
            <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/icons/sleep-icon.png" alt="" />
            <p>Sleep, dining, and accommodations, beautiful off-site lodging, spacious on-site tenting,
              over-sized dining tents, flushable and private toileting, etc.</p>
          </li>
          <li className="item">
            <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/icons/health-icon.png" alt="" />
            <p>Health and safety measures, daily medical checks, proper hydration, daily calorie
              consumption,
              emergency exit routes, taking the trip in strides.</p>
          </li>
          <li className="item">
            <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/icons/clothing-icon.png" alt="" />
            <p>Climbing gear and equipment, undergarments and top-coats, footwear, keeping warm and
              comfortable
              on the mountain.</p>
          </li>
          <li className="item">
            <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/icons/team-icon.png" alt="" />
            <p>Full-time team and support, 65+ on-demand staff members at your service, cooks, tent crew,
              guides, medical team, all bases covered.</p>
          </li>
          <li className="item">
            <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/icons/costs-icon.png" alt="" />
            <p>Group size, dates, and trip costs, minimizing group size and dates to provide a focused
              service,
              discuss all-inclusive trip costs, and possible add-ons. </p>
          </li>
        </ul>
        <div className="cta">
          <button className="red">
            SCHEDULE WITH DEAN
            <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/icons/zoom-icon-white-mobile.png" alt="" width="25px" />
          </button>
        </div>
      </section >
      {/* section 3 - desktop  */}
      <section className="section-3 container-fluid d-lg-block d-none desktop" >
        <div className="row">
          <div className="left col-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 1 }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -100 }
              }}
            >
              <div className="discussed">
                <div>
                  <i className="fa-solid fa-check fa-md"></i>
                </div>
                <p>Discussed During Your Call with Dean</p>
              </div>
              <h1 className="headline">Discuss What It Will Take to Get You to the Summit</h1>
              <p className="sub-head">As Africa’s tallest standing mountain at 19,341 feet, Mt. Kilimanjaro is
                a
                strenuous
                but achievable climb. Dean will combine his years of experience with your goals to
                discuss
                the
                big
                picture including costs, equipment, health, timeline, and so forth.
              </p>
              <div className="cta">
                <button className="red">
                  SCHEDULE WITH DEAN
                  <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/icons/zoom-icon-white-mobile.png" alt="" width="25px" />
                </button>
              </div>
            </motion.div>
          </div>
          <div className="right col-6">
            <div>
              <ul className="items">
                <li className="item">
                  <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/icons/calendar-icon.png" alt="" />
                  <p>Trip duration, pacing the mountain, acclimatization, the amount of time it will
                    it
                    take
                    for
                    our
                    team to guide you safely to the summit.</p>
                </li>
                <li className="item">
                  <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/icons/sleep-icon.png" alt="" />
                  <p>Sleep, dining, and accommodations, beautiful off-site lodging, spacious on-site
                    tenting,
                    over-sized dining tents, flushable and private toileting, etc.</p>
                </li>
                <li className="item">
                  <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/icons/health-icon.png" alt="" />
                  <p>Health and safety measures, daily medical checks, proper hydration, daily calorie
                    consumption,
                    emergency exit routes, taking the trip in strides.</p>
                </li>
                <li className="item">
                  <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/icons/clothing-icon.png" alt="" />
                  <p>Climbing gear and equipment, undergarments and top-coats, footwear, keeping warm
                    and
                    comfortable
                    on the mountain.</p>
                </li>
                <li className="item">
                  <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/icons/team-icon.png" alt="" />
                  <p>Full-time team and support, 65+ on-demand staff members at your service, cooks,
                    tent
                    crew,
                    guides, medical team, all bases covered.</p>
                </li>
                <li className="item">
                  <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/icons/costs-icon.png" alt="" />
                  <p>Group size, dates, and trip costs, minimizing group size and dates to provide a
                    focused
                    service,
                    discuss all-inclusive trip costs, and possible add-ons. </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section >
      {/* section-4 - mobile */}
      <section className="section-4 mobile-wrapper center d-md-block d-lg-none mobile" >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -50 }
          }}>
          <div className="discussed">
            <div>
              <i className="fa-solid fa-check fa-md"></i>
            </div>
            <p>Discussed During Your Call with Dean</p>
          </div>
          <h1 className="headline">Review the <span style={{ color: "#C62034" }}>Route</span> and <span
            style={{ color: "#C62034" }}>Itinerary</span></h1>
        </motion.div>
        <motion.img
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 }
          }}
          src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/map+(1).png" alt="" className="map" />
        <motion.h6
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 }
          }}
        >The<span style={{ color: "#C62034" }}> Machame</span> Route</motion.h6>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 }
          }}
          className="container">
          <div className="row highlights">
            <div className="col-3">
              <h5>Type</h5>
              <p>Mountain Trek</p>
            </div>
            <div className="col-3">
              <h5>Activity</h5>
              <p>Strenuous</p>
            </div>
            <div className="col-3">
              <h5>Length</h5>
              <p>10d / 9N</p>
            </div>
            <div className="col-3">
              <h5>Persons</h5>
              <p>Up to 14</p>
            </div>
          </div>
        </motion.div>
        <div className="itinerary mobile">
          <h5>Welcom to Tanzania</h5>
          <ul className={`day1 items ${activeDay === 0 ? 'active' : ''}`}>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>Arrive at Kilimanjaro International Airport (JRO) Tanzania Africa.</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>A World Wide Trekking representative will meet you and transfer to the lodge in Arusha,
                Tanzania, where we will hold a private welcome reception.</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>Overnight: Serena Lodge or comparable</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>Meals included: Welcome Reception</p>
            </li>
          </ul>
          <ul className={`day2 items ${activeDay === 1 ? 'active' : ''}`}>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>After breakfast this morning, your guide(s) will conduct a trip briefing to go over the
                itinerary and what to expect on your trek.</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>We will then explore the foothill villages surrounding Kilimanjaro, stopping to take a tour
                of a coffee plantation along the way.</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>In the afternoon we will conduct individual gear checks to ensure guest preparedness before
                our hike begins the next day.</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>You will pack one duffel for your porter to carry on the mountain and pack another to leave
                at the hotel with your travel and safari gear.</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>Overnight: Serena Lodge or comparable</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>Meals included: Breakfast, Lunch, and Dinner</p>
            </li>
          </ul>
          <ul className={`day3 items ${activeDay === 2 ? 'active' : ''}`}>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>Today we will travel to the Machame trailhead, winding through coffee fields, small villages,
                and forests of ferns and flowers.</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>At the trailhead, we will meet the rest of our crew and mountain team and register with the
                Kilimanjaro Park Service.</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>We will trek underneath a beautiful rainforest canopy to the Machame Camp, stopping for a
                sit-down lunch along the way.</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>Overnight: Machame Camp</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>Meals included: Breakfast, Lunch, and Dinner</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>Ecozone: Rainforest</p>
            </li>
          </ul>
          <ul className={`day4 items ${activeDay === 3 ? 'active' : ''}`}>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>This morning we will leave the Machame camp to cross the valley and continue our ascent.</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>The environment changes from heath forest to moorlands.</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>Halfway up the trail we meet the river gorge and ascend across the Shira Plateau.</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>Each day along the trail, we stop for a sit-down lunch in our large dining dome outfitted
                with tables and chairs, as well as setting up our private, flushing toilet tents.</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>Overnight: Shira Camp</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>Meals included: Breakfast, Lunch, and Dinner</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>Ecozone: Heath | Moorland</p>
            </li>
          </ul>
          <ul className={`day5 items ${activeDay === 4 ? 'active' : ''}`}>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>Today we will ascend from the Shira Camp up the Shira Plateau.</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>While crossing the ridge at the Lava Tower, we will have great views of the African plains
                far below.</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>Here we will eat lunch, acclimate, and admire the ancient glacier ice of the Breach Wall from
                the Lava Tower.</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>We will then descend about 2,000 feet into Barranco Camp for the night.</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>Overnight: Barranco Camp</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>Meals included: Breakfast, Lunch, and Dinner</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>Ecozone: Alpine Desert | Moorland</p>
            </li>
          </ul>
          <ul className={`day6 items ${activeDay === 5 ? 'active' : ''}`}>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>Today after breakfast, we will climb the Great Barranco Wall, also known as the Breakfast
                Wall.</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>We will top out at about 14,500 feet before traversing across the Karanga Valley to our camp
                at the Karanga River.</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>This completes another day of acclimatization as we pass below the famous Breach Wall, the
                largest ice and rock face in Africa.</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>Overnight: Karanga Valley Camp.</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>Meals included: Breakfast, Lunch, and Dinner</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>Ecozone: Moorland | Alpine Desert</p>
            </li>
          </ul>
          <ul className={`day7 items ${activeDay === 6 ? 'active' : ''}`}>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>From the Karanga Valley camp, we trek to Barafu (Ice) Camp, where we will enjoy a sit-down
                lunch and a short rest.</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>Afterwards, we will wind through a sparsely traveled high desert plateau, littered with
                volcanic boulders. Looking south, we view the desert plains as the pinnacles of Mawenzi Peak
                tower before us.</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>After lunch, we will continue up to the Kosovo Camp. Staying at the Kosovo Camp puts us
                roughly 1.5 hours closer to Uhuru Peak than most other trekkers. This makes our trek to and
                from the summit an even more enjoyable experience.</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>While our cook staff prepares our dinner, we will spend our time packing and preparing for
                our midnight departure, the final push for a sunrise summit of Mount Kilimanjaro.</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>Overnight: Kosovo Camp</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>Meals included: Breakfast, Lunch, and Dinner</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>Ecozone: Moorland | Alpine Desert</p>
            </li>
          </ul>
          <ul className={`day8 items ${activeDay === 7 ? 'active' : ''}`}>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>We climb wearing headlamps until the predawn light is reflected off the African plains and
                high mountain glaciers.</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>Following a distinct ridge, we approach the crater’s rim, then traverse northwest along the
                rim to the main summit of Uhuru Peak!</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>We are now on the highest freestanding mountain in the world, as well as the highest point on
                the African Continent!</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>After enjoying the view from the “Roof of Africa”, we descend to Kosovo Camp where we will
                rest, eat lunch, break camp, and begin our trek down the Mweka route on the southern side of
                the mountain..</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>We descend into the jungle to the Millennium Camp for our last night on the mountain.</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>Overnight: Millennium Camp</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>Meals included: Breakfast, Lunch, and Dinner</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>Ecozone: Alpine Desert | Arctic | Alpine Desert</p>
            </li>
          </ul>
          <ul className={`day9 items ${activeDay === 8 ? 'active' : ''}`}>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>The sun’s rays congratulate us with a spectacular light show as we awake below the towering
                mountain on the final day of our Kilimanjaro journey.</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>We descend through the lush green landscape of the Mweka Route into the thickest jungle we
                have encountered yet.</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>The environment becomes primordial, with 20-foot-tall fern trees creating a prehistoric
                atmosphere. </p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>After reaching the Mweka Gate we say our farewells to the mountain staff and drive back to
                our lodge for a well-deserved shower and celebration dinner.</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>Overnight: Serena Lodge or comparable</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>Meals included: Breakfast, Lunch, and Private Celebration Dinner</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>Ecozone: Rainforest</p>
            </li>
          </ul>
          <ul className={`day10 items ${activeDay === 9 ? 'active' : ''}`}>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>After breakfast, you can relax at the lodge and prepare for your departure flights home.
                (JRO)</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>Meals included: Breakfast</p>
            </li>
            <li className="item">
              {/* <i className="fa-solid fa-plane"></i> */}
              <p>Ecozone: Cultivation</p>
            </li>
          </ul>
          <div className="mobile days">
            <h6>Days</h6>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((day, index) => { return (<span key={day} className={activeDay === index && 'active'} onClick={(e) => { changeDayHandler(e, index) }}>{day}</span>) })}
            {/* <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span> */}
          </div>
        </div>
      </section >
      {/* section-4 - desktop */}
      <section className="section-4 container d-lg-block d-none desktop" >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: .5 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -50 }
          }}>
          <div className="discussed">
            <div>
              <i className="fa-solid fa-check fa-md"></i>
            </div>
            <p>Discussed During Your Call with Dean</p>
          </div>
          <h1 className="headline">Review the <span style={{ color: "#C62034" }}>Route</span> and <span
            style={{ color: "#C62034" }}>Itinerary</span></h1>
        </motion.div>
        <div className="row">
          <div className="left col-7">
            <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: .5 }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -100 }
              }}
              src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/map-desktop+(1).png" alt="" />
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: .5 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 100 }
            }}
            className="right col-5">
            <div className="itinerary">
              <h5>Welcome to Beautiful Tanzania, Africa</h5>
              <ul className={`day1 items ${activeDay === 0 ? 'active' : ''}`}>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>Arrive at Kilimanjaro International Airport (JRO) Tanzania Africa.</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>A World Wide Trekking representative will meet you and transfer to the lodge in Arusha,
                    Tanzania, where we will hold a private welcome reception.</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>Overnight: Serena Lodge or comparable</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>Meals included: Welcome Reception</p>
                </li>
              </ul>
              <ul className={`day2 items ${activeDay === 1 ? 'active' : ''}`}>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>After breakfast this morning, your guide(s) will conduct a trip briefing to go over the
                    itinerary and what to expect on your trek.</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>We will then explore the foothill villages surrounding Kilimanjaro, stopping to take a tour
                    of a coffee plantation along the way.</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>In the afternoon we will conduct individual gear checks to ensure guest preparedness before
                    our hike begins the next day.</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>You will pack one duffel for your porter to carry on the mountain and pack another to leave
                    at the hotel with your travel and safari gear.</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>Overnight: Serena Lodge or comparable</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>Meals included: Breakfast, Lunch, and Dinner</p>
                </li>
              </ul>
              <ul className={`day3 items ${activeDay === 2 ? 'active' : ''}`}>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>Today we will travel to the Machame trailhead, winding through coffee fields, small villages,
                    and forests of ferns and flowers.</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>At the trailhead, we will meet the rest of our crew and mountain team and register with the
                    Kilimanjaro Park Service.</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>We will trek underneath a beautiful rainforest canopy to the Machame Camp, stopping for a
                    sit-down lunch along the way.</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>Overnight: Machame Camp</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>Meals included: Breakfast, Lunch, and Dinner</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>Ecozone: Rainforest</p>
                </li>
              </ul>
              <ul className={`day4 items ${activeDay === 3 ? 'active' : ''}`}>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>This morning we will leave the Machame camp to cross the valley and continue our ascent.</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>The environment changes from heath forest to moorlands.</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>Halfway up the trail we meet the river gorge and ascend across the Shira Plateau.</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>Each day along the trail, we stop for a sit-down lunch in our large dining dome outfitted
                    with tables and chairs, as well as setting up our private, flushing toilet tents.</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>Overnight: Shira Camp</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>Meals included: Breakfast, Lunch, and Dinner</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>Ecozone: Heath | Moorland</p>
                </li>
              </ul>
              <ul className={`day5 items ${activeDay === 4 ? 'active' : ''}`}>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>Today we will ascend from the Shira Camp up the Shira Plateau.</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>While crossing the ridge at the Lava Tower, we will have great views of the African plains
                    far below.</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>Here we will eat lunch, acclimate, and admire the ancient glacier ice of the Breach Wall from
                    the Lava Tower.</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>We will then descend about 2,000 feet into Barranco Camp for the night.</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>Overnight: Barranco Camp</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>Meals included: Breakfast, Lunch, and Dinner</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>Ecozone: Alpine Desert | Moorland</p>
                </li>
              </ul>
              <ul className={`day6 items ${activeDay === 5 ? 'active' : ''}`}>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>Today after breakfast, we will climb the Great Barranco Wall, also known as the Breakfast
                    Wall.</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>We will top out at about 14,500 feet before traversing across the Karanga Valley to our camp
                    at the Karanga River.</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>This completes another day of acclimatization as we pass below the famous Breach Wall, the
                    largest ice and rock face in Africa.</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>Overnight: Karanga Valley Camp.</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>Meals included: Breakfast, Lunch, and Dinner</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>Ecozone: Moorland | Alpine Desert</p>
                </li>
              </ul>
              <ul className={`day7 items ${activeDay === 6 ? 'active' : ''}`}>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>From the Karanga Valley camp, we trek to Barafu (Ice) Camp, where we will enjoy a sit-down
                    lunch and a short rest.</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>Afterwards, we will wind through a sparsely traveled high desert plateau, littered with
                    volcanic boulders. Looking south, we view the desert plains as the pinnacles of Mawenzi Peak
                    tower before us.</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>After lunch, we will continue up to the Kosovo Camp. Staying at the Kosovo Camp puts us
                    roughly 1.5 hours closer to Uhuru Peak than most other trekkers. This makes our trek to and
                    from the summit an even more enjoyable experience.</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>While our cook staff prepares our dinner, we will spend our time packing and preparing for
                    our midnight departure, the final push for a sunrise summit of Mount Kilimanjaro.</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>Overnight: Kosovo Camp</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>Meals included: Breakfast, Lunch, and Dinner</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>Ecozone: Moorland | Alpine Desert</p>
                </li>
              </ul>
              <ul className={`day8 items ${activeDay === 7 ? 'active' : ''}`}>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>We climb wearing headlamps until the predawn light is reflected off the African plains and
                    high mountain glaciers.</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>Following a distinct ridge, we approach the crater’s rim, then traverse northwest along the
                    rim to the main summit of Uhuru Peak!</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>We are now on the highest freestanding mountain in the world, as well as the highest point on
                    the African Continent!</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>After enjoying the view from the “Roof of Africa”, we descend to Kosovo Camp where we will
                    rest, eat lunch, break camp, and begin our trek down the Mweka route on the southern side of
                    the mountain..</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>We descend into the jungle to the Millennium Camp for our last night on the mountain.</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>Overnight: Millennium Camp</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>Meals included: Breakfast, Lunch, and Dinner</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>Ecozone: Alpine Desert | Arctic | Alpine Desert</p>
                </li>
              </ul>
              <ul className={`day9 items ${activeDay === 8 ? 'active' : ''}`}>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>The sun’s rays congratulate us with a spectacular light show as we awake below the towering
                    mountain on the final day of our Kilimanjaro journey.</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>We descend through the lush green landscape of the Mweka Route into the thickest jungle we
                    have encountered yet.</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>The environment becomes primordial, with 20-foot-tall fern trees creating a prehistoric
                    atmosphere. </p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>After reaching the Mweka Gate we say our farewells to the mountain staff and drive back to
                    our lodge for a well-deserved shower and celebration dinner.</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>Overnight: Serena Lodge or comparable</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>Meals included: Breakfast, Lunch, and Private Celebration Dinner</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>Ecozone: Rainforest</p>
                </li>
              </ul>
              <ul className={`day10 items ${activeDay === 9 ? 'active' : ''}`}>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>After breakfast, you can relax at the lodge and prepare for your departure flights home.
                    (JRO)</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>Meals included: Breakfast</p>
                </li>
                <li className="item">
                  {/* <i className="fa-solid fa-plane"></i> */}
                  <p>Ecozone: Cultivation</p>
                </li>
              </ul>
              <div className="desktop days">
                <h6>Days</h6>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((day, index) => { return (<span key={day} className={activeDay === index && 'active'} onClick={(e) => { changeDayHandler(e, index) }}>{day}</span>) })}
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: .5 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 }
          }}
          className="container">
          <div className="row highlights">
            <div className="col-3">
              <h3>Trip Type:</h3>
              <p>Mountain Trek</p>
            </div>
            <div className="col-3">
              <h3>Activity Rating:</h3>
              <p>Strenuous</p>
            </div>
            <div className="col-3">
              <h3>Trip Length:</h3>
              <p>10D / 9N</p>
            </div>
            <div className="col-3">
              <h3>Spaces Available:</h3>
              <p>Up to 14</p>
            </div>
          </div>
        </motion.div>
      </section >
      {/* section-5 - mobile */}
      <section className="section-5 mobile-wrapper center d-md-block d-lg-none mobile" >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -50 }
          }}
        >
          <div className="discussed">
            <div>
              <i className="fa-solid fa-check fa-md"></i>
            </div>
            <p>Discussed During Your Call with Dean</p>
          </div>
          <h1 className="headline">Learn How We Can Provide the Best Experience</h1>
          <video ref={videoRefMobile} poster="https://world-wide-trekking.s3.us-west-1.amazonaws.com/dean-lodgin.png" controls>
            <source src={activeVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="sub-head">We know you have options, but the World Wide Trekking experience is unlike any
            other. Here at WWTrek, we
            spare no expense with an all-inclusive, personalized, and fully catered climb so that you can focus
            on
            the experience of a lifetime.</p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 }
          }}
        >
          <div className="services">
            <div
              data-src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/Lodging+Clip.mp4"
              className={activeVideo === 'https://world-wide-trekking.s3.us-west-1.amazonaws.com/Lodging+Clip.mp4' && 'active'}
              onClick={setActiveVideoHandler}
            >
              <i className="fa-solid fa-hotel"></i>
            </div>
            <div
              data-src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/Dining.mp4"
              className={activeVideo === 'https://world-wide-trekking.s3.us-west-1.amazonaws.com/Dining.mp4' && 'active'}
              onClick={setActiveVideoHandler}
            >
              <i className="fa-solid fa-utensils"></i>
            </div>
            <div
              data-src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/Transportation.mp4"
              className={activeVideo === 'https://world-wide-trekking.s3.us-west-1.amazonaws.com/Transportation.mp4' && 'active'}
              onClick={setActiveVideoHandler}>
              <i className="fa-solid fa-bus"></i>
            </div>
            <div
              data-src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/Toilets.mp4"
              className={activeVideo === 'https://world-wide-trekking.s3.us-west-1.amazonaws.com/Toilets.mp4' && 'active'}
              onClick={setActiveVideoHandler}>
              <i className="fa-solid fa-toilet"></i>
            </div>
            <div
              data-src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/Safety.mp4"
              className={activeVideo === 'https://world-wide-trekking.s3.us-west-1.amazonaws.com/Safety.mp4' && 'active'}
              onClick={setActiveVideoHandler}
            >
              <i className="fa-solid fa-user-nurse"></i>
            </div>
            <div
              data-src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/Preparation_1.mp4"
              className={activeVideo === 'https://world-wide-trekking.s3.us-west-1.amazonaws.com/Preparation_1.mp4' && 'active'}
              onClick={setActiveVideoHandler}>
              <i className="fa-solid fa-person-walking"></i>
            </div>
            <div
              data-src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/Support+Staff.mp4"
              className={activeVideo === 'https://world-wide-trekking.s3.us-west-1.amazonaws.com/Support+Staff.mp4' && 'active'}
              onClick={setActiveVideoHandler}>
              <i className="fa-solid fa-handshake-angle"></i>
            </div>
            <div
              data-src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/Support+Staff.mp4"
              className={activeVideo === 'https://world-wide-trekking.s3.us-west-1.amazonaws.com/Support+Staff.mp4' && 'active'}
              onClick={setActiveVideoHandler}>
              <i className="fa-solid fa-gear"></i>
            </div>
          </div>
        </motion.div>
        <div className="cta">
          <button className="red">
            SCHEDULE WITH DEAN
            <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/icons/zoom-icon-white-mobile.png" alt="" width="25px" />
          </button>
        </div>
      </section >
      {/* section-5 - desktop */}
      < section className="section-5 container-fluid d-none d-lg-block desktop" >
        <div className="row">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 1 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -500 }
            }}
            className="left col-6">
            <div>
              <div className="slideout">
                <video ref={videoRefDesktop} poster="https://world-wide-trekking.s3.us-west-1.amazonaws.com/dean-lodgin.png" controls>
                  <source src={activeVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <h5>Beautiful Off-site Lodges, Spaceous On-site Tents</h5>
                <p className="sub-head">
                  Spend the first couple of nights relaxing in one of our 5-star luxury lodges in the
                  foothills of Kilimanjaro as our team prepares you for the ascent.
                  <br></br><br></br>
                  Enjoy plently of leg room and comfort in our spaceous North Face 4-season, 4 person
                  tents during your climb to the top of Mount Kilimanjaro.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 1 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
            }}
            className="right col-6" >
            <div>
              <div className="discussed">
                <div>
                  <i className="fa-solid fa-check fa-md"></i>
                </div>
                <p>Discussed During Your Call with Dean</p>
              </div>
              <h1 className="headline">Learn How We Can Provide the Best Experience</h1>
              <p className="sub-head">We know you have options, but the World Wide Trekking experience is
                unlike
                any other. Here at WWTrek, we spare no expense with an all-inclusive, personalized, and
                fully
                catered climb so that you can focus on the experience of a lifetime.</p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="services">
                <div
                  data-src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/Lodging+Clip.mp4"
                  className={activeVideo === 'https://world-wide-trekking.s3.us-west-1.amazonaws.com/Lodging+Clip.mp4' && 'active'}
                  onClick={setActiveVideoHandler}
                >
                  <i className="fa-solid fa-hotel"></i>
                </div>
                <div
                  data-src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/Dining.mp4"
                  className={activeVideo === 'https://world-wide-trekking.s3.us-west-1.amazonaws.com/Dining.mp4' && 'active'}
                  onClick={setActiveVideoHandler}
                >
                  <i className="fa-solid fa-utensils"></i>
                </div>
                <div
                  data-src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/Transportation.mp4"
                  className={activeVideo === 'https://world-wide-trekking.s3.us-west-1.amazonaws.com/Transportation.mp4' && 'active'}
                  onClick={setActiveVideoHandler}>
                  <i className="fa-solid fa-bus"></i>
                </div>
                <div
                  data-src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/Toilets.mp4"
                  className={activeVideo === 'https://world-wide-trekking.s3.us-west-1.amazonaws.com/Toilets.mp4' && 'active'}
                  onClick={setActiveVideoHandler}>
                  <i className="fa-solid fa-toilet"></i>
                </div>
                <div
                  data-src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/Safety.mp4"
                  className={activeVideo === 'https://world-wide-trekking.s3.us-west-1.amazonaws.com/Safety.mp4' && 'active'}
                  onClick={setActiveVideoHandler}
                >
                  <i className="fa-solid fa-user-nurse"></i>
                </div>
                <div
                  data-src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/Preparation_1.mp4"
                  className={activeVideo === 'https://world-wide-trekking.s3.us-west-1.amazonaws.com/Preparation_1.mp4' && 'active'}
                  onClick={setActiveVideoHandler}>
                  <i className="fa-solid fa-person-walking"></i>
                </div>
                <div
                  data-src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/Support+Staff.mp4"
                  className={activeVideo === 'https://world-wide-trekking.s3.us-west-1.amazonaws.com/Support+Staff.mp4' && 'active'}
                  onClick={setActiveVideoHandler}>
                  <i className="fa-solid fa-handshake-angle"></i>
                </div>
                <div
                  data-src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/Support+Staff.mp4"
                  className={activeVideo === 'https://world-wide-trekking.s3.us-west-1.amazonaws.com/Support+Staff.mp4' && 'active'}
                  onClick={setActiveVideoHandler}>
                  <i className="fa-solid fa-gear"></i>
                </div>
              </motion.div>
              <div className="cta">
                <button className="red">
                  SCHEDULE WITH DEAN
                  <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/icons/zoom-icon-white-mobile.png" alt="" width="25px" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section >
      {/* section-6 - mobile */}
      < section className="section-6 mobile-wrapper center d-md-block d-lg-none mobile" >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 1 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -100 }
          }}
        >
          <div className="discussed">
            <div>
              <i className="fa-solid fa-check fa-md"></i>
            </div>
            <p>Discussed During Your Call with Dean</p>
          </div>
          <h1 className="headline">Have All Your Questions Answered by Dean</h1>
          <p className="sub-head">
            Our favorite time to travel is from June through September or December through February.
            The rainy season has just ended, providing plentiful vegetation and biodiversity with
            less dust in the air. Additionally, late June through early August offers cooler
            temperatures. January, February, and September are the driest and warmest months in
            Tanzania, and therefore.
          </p>
        </motion.div>
        {/*<p>
          You can find many resources for climbing Mt. Kilimanjaro online, but nothing beats having your questions
          answered by an expert climber, especially one who has successfully made the summit more than 85 times.
        </p> */}
        <div className="summit">
          <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-6-summit+(1).png" alt="" />
        </div>
        <div className="faqs">
          <div className="faqs-title">
            <div>
              <i className="fa-solid fa-circle-question"></i>
              <h6>Common Questions for Dean from Our Guests</h6>
            </div>
          </div>
          <div className="faq" onClick={(event) => faqHandler(event, 0)}>
            <div>
              <h6>What is the Best Time of Year to Climb?</h6>
              <i className="fa-solid fa-circle-xmark fa-lg"></i>
              <i className="fa-solid fa-caret-down"></i>
            </div>
            <p style={{ display: activeFaq === 0 && 'block' }}>
              Our favorite time to travel is from June through September or December through
              February.
              The rainy season has just ended, providing plentiful vegetation and biodiversity
              with
              less dust in the air. Additionally, late June through early August offers cooler
              temperatures. January, February, and September are the driest and warmest months in
              Tanzania, and therefore.
            </p>
          </div>
          <div className="faq" onClick={(event) => faqHandler(event, 1)}>
            <div>
              <h6>What Flights Do You Recommend?</h6>
              <i className="fa-solid fa-circle-xmark fa-lg"></i>
              <i className="fa-solid fa-caret-down"></i>
            </div>
            <p style={{ display: activeFaq === 1 && 'block' }}>
              Although there are many flight options to Kilimanjaro International Airport (JRO),
              flying through Amsterdam offers the best route.
              <br></br><br></br>
              International airfares are not included in program pricing. When booking international
              travel, we recommend working with an experienced travel agent. One that World Wide
              Trekking is proud to coordinate with is Brian Mei from Eastern Travel. You can reach
              Brian directly by calling 801.792.1721 or by email at brian@easterntravel.com.
              Additional support is always available by calling the Eastern Travel Office at
              801.466.8811 or by emailing Michelle at michelle@easterntravel.com.
              <br></br><br></br>
              The benefit of using a travel agent is in the event of itinerary changes, the travel
              agent will find the best flight connections, and land arrangements, for you. Though
              third-party travel websites are convenient, we do not recommend using them, due to
              instability in the itineraries. We also recommend that you protect your flight with
              travel insurance and a refundable ticket.
              <br></br><br></br>
              We also recommend that you protect your flight with travel insurance and a refundable
              ticket.Contact AIG Travel Guard to get more information.
            </p >
          </div >
          <div className="faq" onClick={(event) => faqHandler(event, 2)}>
            <div>
              <h6>Should I Buy Travel Insurance and From Who?</h6>
              <i className="fa-solid fa-circle-xmark fa-lg"></i>
              <i className="fa-solid fa-caret-down"></i>
            </div>
            <p style={{ display: activeFaq === 2 && 'block' }}>
              We recommend you safeguard your trip by purchasing travel insurance. World Wide Trekking
              has partnered with AIG Travel Insurance as our preferred travel insurance provider. For
              a price quote, or to purchase travel insurance, visit
              <br></br>
              <span style={{ color: "#C62034", fontWeight: "bold" }}> AIG Travel Guard</span>
              <br></br>
              Please Note: You must purchase this plan within 14 days of your deposit payment.Please
              send us a copy of your plan if you choose to purchase one.
            </p>
          </div>
          <div className="faq" onClick={(event) => faqHandler(event, 3)}>
            <div>
              <h6>How are Customs, Visas, and Immigrations Handled?</h6>
              <i className="fa-solid fa-circle-xmark fa-lg"></i>
              <i className="fa-solid fa-caret-down"></i>
            </div>
            <p style={{ display: activeFaq === 3 && 'block' }}>
              Before arrival in Tanzania, you will be required to purchase a 12-month multiple-entry
              tourist visa for $100. Please keep your landing card (received in flight) and a pen
              handy for customs.
              <br></br>
              Contact G3 Global Services for more information on how to receive your visa before your
              arrival.
              <br></br>
              <b>*Please be sure to have at least six months of validity on your passport. </b>Most countries
              won’t allow travelers in their country unless their passport is expected to expire six
              months after the last day of travel.Make two copies of your passport, leave one at
              home, and bring the other with you to Tanzania.Ensure you provide a copy of your
              passport to WWTrek 90 days before your departure date.
            </p >
          </div >
          {/* < p style = "color: #fff; font-size: .8rem" > <u>Load more...</u></p > */}
        </div >
      </section >
      {/* section - 6 - desktop */}
      < section className="section-6 container-fluid d-none d-lg-block desktop" >
        <div className="row">
          <div className="left col-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 1 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 }
              }}
            >
              <div className="discussed">
                <div>
                  <i className="fa-solid fa-check fa-md"></i>
                </div>
                <p>Discussed During Your Call with Dean</p>
              </div>
              <h1 className="headline">Have All Your Questions Answered </h1>
              <p className="sub-head">
                You can find many resources for climbing Mt. Kilimanjaro online, but nothing
                beats having your questions answered by an expert climber, especially one who has
                successfully made the summit more than 85 times.
              </p>
              <div className="cta">
                <button className="white">
                  SCHEDULE WITH DEAN
                  <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/icons/zoom-icon-white-mobile.png" alt="" width="25px" />
                </button>
              </div>
            </motion.div>
          </div>
          <div className="right col-6">
            <div>
              <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-6-bg-right-desktop+(1).png"
                alt="" />
            </div>
            <div className="faqs">
              <div className="faqs-title">
                <div>
                  <i className="fa-solid fa-circle-question"></i>
                  <h6>Common Questions for Dean from Our Guests</h6>
                </div>
              </div>
              <div className="faq" onClick={(event) => faqHandler(event, 0)}>
                <div>
                  <h6>What is the Best Time of Year to Climb?</h6>
                  <i className="fa-solid fa-circle-xmark fa-lg"></i>
                  <i className="fa-solid fa-caret-down"></i>
                </div>
                <p style={{ display: activeFaq === 0 && 'block' }}>
                  Our favorite time to travel is from June through September or December through
                  February.
                  The rainy season has just ended, providing plentiful vegetation and biodiversity
                  with
                  less dust in the air. Additionally, late June through early August offers cooler
                  temperatures. January, February, and September are the driest and warmest months in
                  Tanzania, and therefore.
                </p>
              </div>
              <div className="faq" onClick={(event) => faqHandler(event, 1)}>
                <div>
                  <h6>What Flights Do You Recommend?</h6>
                  <i className="fa-solid fa-circle-xmark fa-lg"></i>
                  <i className="fa-solid fa-caret-down"></i>
                </div>
                <p style={{ display: activeFaq === 1 && 'block' }}>
                  Although there are many flight options to Kilimanjaro International Airport (JRO),
                  flying through Amsterdam offers the best route.
                  <br></br>
                  International airfares are not included in program pricing. When booking international
                  travel, we recommend working with an experienced travel agent. One that World Wide
                  Trekking is proud to coordinate with is Brian Mei from Eastern Travel. You can reach
                  Brian directly by calling 801.792.1721 or by email at brian@easterntravel.com.
                  Additional support is always available by calling the Eastern Travel Office at
                  801.466.8811 or by emailing Michelle at michelle@easterntravel.com.
                  <br></br>
                  The benefit of using a travel agent is in the event of itinerary changes, the travel
                  agent will find the best flight connections, and land arrangements, for you. Though
                  third-party travel websites are convenient, we do not recommend using them, due to
                  instability in the itineraries. We also recommend that you protect your flight with
                  travel insurance and a refundable ticket.
                  <br></br>
                  We also recommend that you protect your flight with travel insurance and a refundable
                  ticket.Contact AIG Travel Guard to get more information.
                </p >
              </div >
              <div className="faq" onClick={(event) => faqHandler(event, 2)}>
                <div>
                  <h6>Should I Buy Travel Insurance and From Who?</h6>
                  <i className="fa-solid fa-circle-xmark fa-lg"></i>
                  <i className="fa-solid fa-caret-down"></i>
                </div>
                <p style={{ display: activeFaq === 2 && 'block' }}>
                  We recommend you safeguard your trip by purchasing travel insurance. World Wide Trekking
                  has partnered with AIG Travel Insurance as our preferred travel insurance provider. For
                  a price quote, or to purchase travel insurance, visit
                  <br></br>
                  <span style={{ color: "#C62034", fontWeight: "bold" }}> AIG Travel Guard</span>
                  <br></br>
                  Please Note: You must purchase this plan within 14 days of your deposit payment.Please
                  send us a copy of your plan if you choose to purchase one.
                </p >
              </div >
              <div className="faq" onClick={(event) => faqHandler(event, 3)}>
                <div>
                  <h6>How are Customs, Visas, and Immigrations Handled?</h6>
                  <i className="fa-solid fa-circle-xmark fa-lg"></i>
                  <i className="fa-solid fa-caret-down"></i>
                </div>
                <p style={{ display: activeFaq === 3 && 'block' }}>
                  Before arrival in Tanzania, you will be required to purchase a 12-month multiple-entry
                  tourist visa for $100. Please keep your landing card (received in flight) and a pen
                  handy for customs.
                  <br></br>
                  Contact G3 Global Services for more information on how to receive your visa before your
                  arrival.
                  <br></br>
                  <b>*Please be sure to have at least six months of validity on your passport. </b>Most
                  countries
                  won’t allow travelers in their country unless their passport is expected to expire six
                  months after the last day of travel.Make two copies of your passport, leave one at
                  home, and bring the other with you to Tanzania.Ensure you provide a copy of your
                  passport to WWTrek 90 days before your departure date.
                </p >
              </div >
              {/* < p style = "color: #C62034; font-size: .8rem" > <u>Load more...</u></p > */}
            </div >
          </div >
        </div >
      </section >
      {/* section-7 - mobile */}
      < section className="section-7 mobile-wrapper center d-md-block d-lg-none mobile" >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 1 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 }
          }}
        >
          <div className="discussed">
            <img src="" alt="" style={{ width: "20px" }} />
            <p>The World Wide Trekking Difference</p>
          </div>
          <h1 className="headline">What Our Guest Have to Say About Us</h1>
        </motion.div>
        <div className="testimonials">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 1 }}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 }
            }}
            className="testimonial">
            <p>
              I had the pleasure of traveling to Kilimanjaro, Tanzania in June of ‘23, taking part in the HOP
              pre-trip for the annual Climb 4 Kids. What an amazing experience! Visiting both the Makayuni and
              Embukoi Schools were eye opening and humbling, serving the lunch program at the latter was a
              truly rewarding experience.
            </p>
            <div className="badge">
              <div>JT</div>
              <div>
                <h6>Jayson Terdiman</h6>
                <p>2023-10-02</p>
                <img src="./imgs/5-stars.png" alt="" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 1 }}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 }
            }}
            className="testimonial">
            <p>
              What an absolutely great trip and Paul and Dean are the best. I have been to 30+ % of the world
              and they have shown me that they are the best. I will be on another adventure with them for
              Sure. Thanks Dean and all.
            </p>
            <div className="badge">
              <div>RN</div>
              <div>
                <h6>Rod Newman</h6>
                <p>2023-09-24</p>
                <img src="./imgs/5-stars.png" alt="/" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 1 }}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 }
            }}
            className="testimonial">
            <p>
              I recently enjoyed my 3rd trip with World Wide Trekking and stand in awe of the quality
              experience they consistently create for their guests. It starts at the top , with the owner who
              truly loves exploring the world and curating high quality adventures for quests . As a result,
              we enjoy memorable, safe, successful and FUN experiences!
            </p>
            <div className="badge">
              <div>PR</div>
              <div>
                <h6>Patrice Reilly</h6>
                <p>2023-09-21</p>
                <img src="./imgs/5-stars.png" alt="" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 1 }}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 }
            }}
            className="testimonial">
            <p>
              This was my 3rd trip with WW Trekking. Wonderful hikes through the majestic Alps. As a longtime
              backpacker and used to planning my own trips it is such a treat to be pampered. This was 5 star
              “glampping”
              Thank you Dean!!
            </p>
            <div className="badge">
              <div>CM</div>
              <div>
                <h6>Cindy McConnell</h6>
                <p>2023-08-31</p>
                <img src="./imgs/5-stars.png" alt="" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 1 }}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 }
            }}
            className="testimonial">
            <p>
              Just did my 5th trip with World Wide Trekking - Alps Matterhorn to Mont Blanc .
              Owner/guide Dean is exceptional. Takes care of everything. Great blend of hikes. Already
              planning next adventure!
            </p>
            <div className="badge">
              <div>LL</div>
              <div>
                <h6>LeeAnn Lewis</h6>
                <p>2023-07-26</p>
                <img src="./imgs/5-stars.png" alt="" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 1 }}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 }
            }}
            className="testimonial">
            <p>
              Incredibly kind crew of guides who were flexible with plans and willing to help every step of
              the way to make it a memorable trip!
            </p>
            <div className="badge">
              <div>JS</div>
              <div>
                <h6>Jason Scaglione</h6>
                <p>2023-07-25</p>
                <img src="./imgs/5-stars.png" alt="" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 1 }}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 }
            }}
            className="testimonial">
            <p>
              Great experience with qualified guides.
            </p>
            <div className="badge">
              <div>ED</div>
              <div>
                <h6>Ed Davies</h6>
                <p>2023-09-20</p>
                <img src="./imgs/5-stars.png" alt="" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 1 }}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 }
            }}
            className="testimonial">
            <p>
              Dean and his team put together a fantastic trekking experience. The trails they selected were
              just right, with one stunning view after another. The hotels were first rate, and the food was
              amazing. The guides Tina and Matt did a great job of coordinating the transfers, handling the
              logistics and managing the schedule, all while keeping an eye on everyone. It was super fun
              hiking with kindred spirits and sharing the experience with them. Looking forward to future
              trips with WWT.
            </p>
            <div className="badge">
              <div>XK</div>
              <div>
                <h6>Xerife Kimura</h6>
                <p>2023-10-31</p>
                <img src="./imgs/5-stars.png" alt="" />
              </div>
            </div>
          </motion.div>
          {/* <p style="color: #C62034"><u>Load more...</u></p> */}
        </div>
      </section >
      {/* section-7 - desktop */}
      < section className="section-7 container-fluid d-none d-lg-block desktop" >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 1 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 }
          }}>
          <div className="center">
            <div className="discussed">
              {/*  <img src="" alt="" style="width: 20px"> */}
              <p>The World Wide Trekking Difference</p>
            </div>
            <h1 className="headline">What Our Guest <br></br>Have to Say About Us</h1>
            <div className="cta" style={{ zIndex: "999" }}>
              <button className="red">
                SCHEDULE WITH DEAN
                <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/icons/zoom-icon-white-mobile.png" alt="" width="25px" />
              </button>
            </div>
          </div>
        </motion.div>
        <motion.div className="testimonials center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 1 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 }
          }}
        >
          <div className="testimonial">
            <p>
              I had the pleasure of traveling to Kilimanjaro, Tanzania in June of ‘23, taking part in the HOP
              pre-trip for the annual Climb 4 Kids. What an amazing experience! Visiting both the Makayuni and
              Embukoi Schools were eye opening and humbling, serving the lunch program at the latter was a
              truly rewarding experience.
            </p>
            <div className="badge">
              <div>JT</div>
              <div>
                <h6>Jayson Terdiman</h6>
                <p>2023-10-02</p>
                <img src="./imgs/5-stars.png" alt="" />
              </div>
            </div>
          </div>
          <div className="testimonial">
            <p>
              What an absolutely great trip and Paul and Dean are the best. I have been to 30+ % of the world
              and they have shown me that they are the best. I will be on another adventure with them for
              Sure. Thanks Dean and all.
            </p>
            <div className="badge">
              <div>RN</div>
              <div>
                <h6>Rod Newman</h6>
                <p>2023-09-24</p>
                <img src="./imgs/5-stars.png" alt="" />
              </div>
            </div>
          </div>
          <div className="testimonial">
            <p>
              I recently enjoyed my 3rd trip with World Wide Trekking and stand in awe of the quality
              experience they consistently create for their guests. It starts at the top , with the owner who
              truly loves exploring the world and curating high quality adventures for quests . As a result,
              we enjoy memorable, safe, successful and FUN experiences!
            </p>
            <div className="badge">
              <div>PR</div>
              <div>
                <h6>Patrice Reilly</h6>
                <p>2023-09-21</p>
                <img src="./imgs/5-stars.png" alt="" />
              </div>
            </div>
          </div>
          <div className="testimonial">
            <p>
              This was my 3rd trip with WW Trekking. Wonderful hikes through the majestic Alps. As a longtime
              backpacker and used to planning my own trips it is such a treat to be pampered. This was 5 star
              “glampping”
              Thank you Dean!!
            </p>
            <div className="badge">
              <div>CM</div>
              <div>
                <h6>Cindy McConnell</h6>
                <p>2023-08-31</p>
                <img src="./imgs/5-stars.png" alt="" />
              </div>
            </div>
          </div>
          <div className="testimonial">
            <p>
              Just did my 5th trip with World Wide Trekking - Alps Matterhorn to Mont Blanc .
              Owner/guide Dean is exceptional. Takes care of everything. Great blend of hikes. Already
              planning next adventure!
            </p>
            <div className="badge">
              <div>LL</div>
              <div>
                <h6>LeeAnn Lewis</h6>
                <p>2023-07-26</p>
                <img src="./imgs/5-stars.png" alt="" />
              </div>
            </div>
          </div>
          <div className="testimonial">
            <p>
              Incredibly kind crew of guides who were flexible with plans and willing to help every step of
              the way to make it a memorable trip!
            </p>
            <div className="badge">
              <div>JS</div>
              <div>
                <h6>Jason Scaglione</h6>
                <p>2023-07-25</p>
                <img src="./imgs/5-stars.png" alt="" />
              </div>
            </div>
          </div>
          <div className="testimonial">
            <p>
              Great experience with qualified guides.
            </p>
            <div className="badge">
              <div>ED</div>
              <div>
                <h6>Ed Davies</h6>
                <p>2023-09-20</p>
                <img src="./imgs/5-stars.png" alt="" />
              </div>
            </div>
          </div>
          <div className="testimonial">
            <p>
              Dean and his team put together a fantastic trekking experience. The trails they selected were
              just right, with one stunning view after another. The hotels were first rate, and the food was
              amazing. The guides Tina and Matt did a great job of coordinating the transfers, handling the
              logistics and managing the schedule, all while keeping an eye on everyone. It was super fun
              hiking with kindred spirits and sharing the experience with them. Looking forward to future
              trips with WWT.
            </p>
            <div className="badge">
              <div>XK</div>
              <div>
                <h6>Xerife Kimura</h6>
                <p>2023-10-31</p>
                <img src="./imgs/5-stars.png" alt="" />
              </div>
            </div>
          </div>
        </motion.div>
      </section >
      {/* section-8 - mobile */}
      < section className="section-8 mobile-wrapper center d-md-block d-lg-none mobile" >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 1 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -50 },
          }}
        >
          <div className="discussed">
            <div>
              <i className="fa-solid fa-check fa-md"></i>
            </div>
            <p>Discussed During Your Call with Dean</p>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 1 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -50 },
          }}
        >
          <h1 className="headline">Learn How You Can Give Back to Kilimanjaro</h1>
          <div className="gallery">
            <img src={activePhoto}
              alt="" />
            <div className="images">
              <div className={`image ${activePhoto === 'https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/Screenshot+2024-03-10+225323+copy+copy+copy+copy+copy.jpg' ? 'active' : ''}`}
                data-src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/Screenshot+2024-03-10+225323+copy+copy+copy+copy+copy.jpg"
                onClick={setActivePhotoHandler}>
                <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/Screenshot+2024-03-10+225323+copy+copy+copy+copy+copy.jpg"
                  alt="" />
              </div>
              <div
                className={`image ${activePhoto === 'https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/section-8-carousel-2.jpg' ? 'active' : ''}`}
                data-src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/section-8-carousel-2.jpg"
                onClick={setActivePhotoHandler}>
                <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/section-8-carousel-2.jpg"
                  alt="" />
              </div>
              <div className={`image ${activePhoto === 'https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/section-8-carousel.jpg' ? 'active' : ''}`}
                onClick={setActivePhotoHandler}
                data-src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/section-8-carousel.jpg">
                <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/section-8-carousel.jpg"
                  alt="" />
              </div>
              <div className={`image ${activePhoto === 'https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/copy+copy+copy.jpg' ? 'active' : ''}`}
                onClick={setActivePhotoHandler}
                data-src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/copy+copy+copy.jpg">
                <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/copy+copy+copy.jpg"
                  alt="" />
              </div>
              <div className={`image ${activePhoto === 'https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/Screenshot+2024-03-10+225323+copy+copy+copy.jpg' ? 'active' : ''}`}
                onClick={setActivePhotoHandler}
                data-src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/Screenshot+2024-03-10+225323+copy+copy+copy.jpg">
                <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/Screenshot+2024-03-10+225323+copy+copy+copy.jpg"
                  alt="" />
              </div>
              <div className={`image ${activePhoto === 'https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/Screenshot+2024-03-10+225323+copy.jpg' ? 'active' : ''}`}
                onClick={setActivePhotoHandler}
                data-src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/Screenshot+2024-03-10+225323+copy.jpg">
                <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/Screenshot+2024-03-10+225323+copy.jpg"
                  alt="" />
              </div>
              <div className={`image ${activePhoto === 'https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/Screenshot+2024-03-10+225323+copy+copy.jpg' ? 'active' : ''}`}
                onClick={setActivePhotoHandler}
                data-src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/Screenshot+2024-03-10+225323+copy+copy.jpg">
                <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/Screenshot+2024-03-10+225323+copy+copy.jpg"
                  alt="" />
              </div>
              <div className={`image ${activePhoto === 'https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/Screenshot+2024-03-10+225323+copy+copy+copy+copy.jpg' ? 'active' : ''}`}
                onClick={setActivePhotoHandler}
                data-src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/Screenshot+2024-03-10+225323+copy+copy+copy+copy.jpg">
                <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/Screenshot+2024-03-10+225323+copy+copy+copy+copy.jpg"
                  alt="" />
              </div>
            </div>
          </div>
        </motion.div>
        <p className="sub-head">
          Every trip booked through WWTrek furthers our mission to give back to this beautiful community.
          <br></br>
          World Wide Trekking feeds more than 2,000 children per day, between their two school lunch programs on
          top of running a full - time orphanage that houses over 32 children.
          <br ></br >
          Be apart of something bigger - book your call with Dean today!
        </p >
        <div className="cta">
          <button className="white">
            SCHEDULE WITH DEAN
            <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/icons/zoom-icon-white-mobile.png" alt="" width="25px" />
          </button>
        </div>
      </section >
      {/*section - 8 - desktop */}
      < section className="section-8 container-fluid d-none d-lg-block desktop" >
        <div className="row">
          <div className="left col-5 offset-1">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 1 }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -500 },
              }}
            >
              <div className="gallery">
                <img src={activePhoto}
                  alt="" />
                <div className="images">
                  <div className={`image ${activePhoto === 'https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/Screenshot+2024-03-10+225323+copy+copy+copy+copy+copy.jpg' ? 'active' : ''}`}
                    data-src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/Screenshot+2024-03-10+225323+copy+copy+copy+copy+copy.jpg"
                    onClick={setActivePhotoHandler}>
                    <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/Screenshot+2024-03-10+225323+copy+copy+copy+copy+copy.jpg"
                      alt="" />
                  </div>
                  <div
                    className={`image ${activePhoto === 'https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/section-8-carousel-2.jpg' ? 'active' : ''}`}
                    data-src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/section-8-carousel-2.jpg"
                    onClick={setActivePhotoHandler}>
                    <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/section-8-carousel-2.jpg"
                      alt="" />
                  </div>
                  <div className={`image ${activePhoto === 'https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/section-8-carousel.jpg' ? 'active' : ''}`}
                    onClick={setActivePhotoHandler}
                    data-src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/section-8-carousel.jpg">
                    <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/section-8-carousel.jpg"
                      alt="" />
                  </div>
                  <div className={`image ${activePhoto === 'https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/copy+copy+copy.jpg' ? 'active' : ''}`}
                    onClick={setActivePhotoHandler}
                    data-src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/copy+copy+copy.jpg">
                    <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/copy+copy+copy.jpg"
                      alt="" />
                  </div>
                  <div className={`image ${activePhoto === 'https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/Screenshot+2024-03-10+225323+copy+copy+copy.jpg' ? 'active' : ''}`}
                    onClick={setActivePhotoHandler}
                    data-src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/Screenshot+2024-03-10+225323+copy+copy+copy.jpg">
                    <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/Screenshot+2024-03-10+225323+copy+copy+copy.jpg"
                      alt="" />
                  </div>
                  <div className={`image ${activePhoto === 'https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/Screenshot+2024-03-10+225323+copy.jpg' ? 'active' : ''}`}
                    onClick={setActivePhotoHandler}
                    data-src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/Screenshot+2024-03-10+225323+copy.jpg">
                    <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/Screenshot+2024-03-10+225323+copy.jpg"
                      alt="" />
                  </div>
                  <div className={`image ${activePhoto === 'https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/Screenshot+2024-03-10+225323+copy+copy.jpg' ? 'active' : ''}`}
                    onClick={setActivePhotoHandler}
                    data-src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/Screenshot+2024-03-10+225323+copy+copy.jpg">
                    <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/Screenshot+2024-03-10+225323+copy+copy.jpg"
                      alt="" />
                  </div>
                  <div className={`image ${activePhoto === 'https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/Screenshot+2024-03-10+225323+copy+copy+copy+copy.jpg' ? 'active' : ''}`}
                    onClick={setActivePhotoHandler}
                    data-src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/Screenshot+2024-03-10+225323+copy+copy+copy+copy.jpg">
                    <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/section-8+images/Screenshot+2024-03-10+225323+copy+copy+copy+copy.jpg"
                      alt="" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="right col-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 1 }}
              variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0, },
              }}
            >
              <div className="discussed">
                <div>
                  <i className="fa-solid fa-check fa-md"></i>
                </div>
                <p>Discussed During Your Call with Dean</p>
              </div>
              <h1 className="headline">Learn How You Can Give Back to Kilimanjaro</h1>
              <p className="sub-head">
                Every trip booked through WWTrek furthers our mission to give back to this beautiful
                community.
                <br></br><br></br>
                World Wide Trekking feeds more than 2,000 children per day, between their two school lunch
                programs on top of running a full-time orphanage that houses over 32 children.
                <br></br><br></br>
                Be apart of something bigger - book your call with Dean today!
              </p >
              <div className="cta">
                <button className="white">
                  SCHEDULE WITH DEAN
                  <img src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/icons/zoom-icon-white-mobile.png" alt="" width="25px" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section >
      {/*section - 9 - footer */}
      < section className="footer container-fluid " >
        <div className="container">
          <div className="row">
            <div>
              {/* <div className="logo">
                <img style={{ width: "100px" }}
                  src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/logo-desktop+(1).png" />
              </div> */}
            </div>
            <div></div>
            <div></div>
          </div>
          <div className="row">
            <div className="col-lg-5">
              <div style={{ display: 'flex', alignItems: "center", gap: "0.5rem" }}>
                <img style={{ width: "10%" }}
                  src="https://world-wide-trekking.s3.us-west-1.amazonaws.com/logo-desktop+(1).png" />
                <p style={{ margin: ".5rem 0" }}><b>World Wide Trekking</b></p>
              </div>
              <ul style={{ listStyle: "none", padding: "0", margin: "1rem 0" }}>
                <li style={{ color: "#C3012F" }}>Address</li>
                <li style={{ fontSize: ".8rem" }}>7404 South Union Park</li>
                <li style={{ fontSize: ".8rem" }}>Avenue, Midvale, Utah</li>
                <li style={{ fontSize: ".8rem" }}>84047</li>
              </ul>
              <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                <li style={{ color: "#C3012F" }}>Office</li>
                <li style={{ fontSize: ".8rem" }}>801.943.0264</li>
              </ul>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-6">
                  <ul className="footerUl"
                    style={{ listStyle: "none", padding: "0", margin: "1rem 0", display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <div style={{ color: "#C3012F", fontSize: "1.2rem" }}>Quick Links</div>
                    <li style={{ fontSize: ".8rem" }}><a
                      href="https://wwtrek.com/why-choose-us/"><i
                        className="fa-solid fa-caret-right"></i>Why Choose Us?</a></li>
                    <li style={{ fontSize: ".8rem" }}><a
                      href="https://wwtrek.com/our-team/"><i
                        className="fa-solid fa-caret-right"></i>Our Team</a></li>
                    <li style={{ fontSize: ".8rem" }}><a
                      href="https://wwtrek.com/custom-adventures/"><i
                        className="fa-solid fa-caret-right"></i>Custom Adventures</a></li>
                    <li style={{ fontSize: ".8rem" }}><a
                      href="https://wwtrek.com/merchandise/"><i
                        className="fa-solid fa-caret-right"></i>Merchandise</a></li>
                    <li style={{ fontSize: ".8rem" }}><a
                      href="https://wwtrek.com/contact-us/"><i
                        className="fa-solid fa-caret-right"></i>Contact Us</a></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul className="footerUl"
                    style={{ listStyle: "none", padding: "0", margin: "1rem 0", display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <li style={{ fontSize: ".8rem" }}><a
                      href="https://wwtrek.com/training-for-your-adventure/"><i
                        className="fa-solid fa-caret-right"></i>Training For Adventure</a></li>
                    <li style={{ fontSize: ".8rem" }}><a
                      href="https://wwtrek.com/wwtrek-activity-ratings/"><i
                        className="fa-solid fa-caret-right"></i>WWTREK Activity Rating</a></li>
                    <li style={{ fontSize: ".8rem" }}><a
                      href="https://g3visas.com/clients/WorldWideTrekking"><i
                        className="fa-solid fa-caret-right"></i>Passport/Visas/Insurance</a></li>
                    <li style={{ fontSize: ".8rem" }}><a
                      href="https://wwtrek.com/signature-treks/"><i
                        className="fa-solid fa-caret-right"></i>Signature Treks</a></li>
                    <li style={{ fontSize: ".8rem" }}><a
                      href="https://wwtrek.com/signature-treks/african-safaris/"><i
                        className="fa-solid fa-caret-right"></i>African Safaris</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    </main >
  );
}
