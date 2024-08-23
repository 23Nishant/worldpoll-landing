import React, { Fragment } from 'react'
import Head from 'next/head'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Constant Keen Finch</title>
          <meta property="og:title" content="Constant Keen Finch" />
        </Head>
        <Navbar8
          link1={
            <Fragment>
              <span className="home-text100 thq-body-small thq-link">
                About
              </span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text101 thq-body-small thq-link">
                Contact
              </span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text102 thq-body-small thq-link">
                Docs
              </span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text103 thq-body-small thq-link">
                Link 4
              </span>
            </Fragment>
          }
          page1={
            <Fragment>
              <span className="home-text104 thq-body-large">Page One</span>
            </Fragment>
          }
          page2={
            <Fragment>
              <span className="home-text105 thq-body-large">Page Two</span>
            </Fragment>
          }
          page3={
            <Fragment>
              <span className="home-text106 thq-body-large">Page Three</span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="home-text107 thq-body-large">Page Four</span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="home-text108">Log In</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="home-text109">Sign Up</span>
            </Fragment>
          }
          page1Description={
            <Fragment>
              <span className="home-text110 thq-body-small">
                Page One Description
              </span>
            </Fragment>
          }
          page2Description={
            <Fragment>
              <span className="home-text111 thq-body-small">
                Page Two Description
              </span>
            </Fragment>
          }
          page3Description={
            <Fragment>
              <span className="home-text112 thq-body-small">
                Page Three Description
              </span>
            </Fragment>
          }
          page4Description={
            <Fragment>
              <span className="home-text113 thq-body-small">
                Page Four Description
              </span>
            </Fragment>
          }
        ></Navbar8>
        <Hero17
          action1={
            <Fragment>
              <span className="home-text114 thq-body-small">Log In</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="home-text115 thq-body-small">
                Sign Up
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text116 thq-body-large">
                Easily create a poll and gather opinions from others
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text117 thq-heading-1">
                World Poll
              </span>
            </Fragment>
          }
        ></Hero17>
        <Features24
          feature1Title={
            <Fragment>
              <span className="home-text118 thq-heading-2">
                Create Your Own Polls
              </span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="home-text119 thq-heading-2">
                Real-Time Results
              </span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="home-text120 thq-heading-2">
                Interactive Polling
              </span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="home-text121 thq-body-small">
                Easily create custom polls with just a few clicks
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="home-text122 thq-body-small">
                View Results Instantly
              </span>
            </Fragment>
          }
          feature3Description={
            <Fragment>
              <span className="home-text123 thq-body-small">Vote on Polls</span>
            </Fragment>
          }
        ></Features24>
        <CTA26
          action1={
            <Fragment>
              <span className="home-text124">Create Poll</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text125 thq-body-large">
                Enter a topic/question and two options below to create a new
                poll.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text126 thq-heading-2">Create a Poll</span>
            </Fragment>
          }
        ></CTA26>
        <Features25
          feature1Title={
            <Fragment>
              <span className="home-text127 thq-heading-2">
                Easy Poll Creation
              </span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="home-text128 thq-heading-2">Vote Tracking</span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="home-text129 thq-heading-2">
                Share as Frame on Farcaster
              </span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="home-text130 thq-body-small">
                Create polls quickly with just a few clicks
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="home-text131 thq-body-small">
                Track the number of votes for each option in real-time
              </span>
            </Fragment>
          }
          feature3Description={
            <Fragment>
              <span className="home-text132 thq-body-small">
                Easily share your polls with others using unique links
              </span>
            </Fragment>
          }
        ></Features25>
        {/* <Pricing14
          plan1={
            <Fragment>
              <span className="home-text133 thq-body-large">Basic plan</span>
            </Fragment>
          }
          plan2={
            <Fragment>
              <span className="home-text134 thq-body-large">Business plan</span>
            </Fragment>
          }
          plan3={
            <Fragment>
              <span className="home-text135 thq-body-large">
                Enterprise plan
              </span>
            </Fragment>
          }
          plan11={
            <Fragment>
              <span className="home-text136 thq-body-large">Basic plan</span>
            </Fragment>
          }
          plan21={
            <Fragment>
              <span className="home-text137 thq-body-large">Business plan</span>
            </Fragment>
          }
          plan31={
            <Fragment>
              <span className="home-text138 thq-body-large">
                Enterprise plan
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text139 thq-body-small">
                Choose the perfect plan for you
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="home-text140 thq-body-large">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text143 thq-heading-2">Pricing plan</span>
            </Fragment>
          }
          plan1Price={
            <Fragment>
              <span className="home-text144 thq-heading-3">$9.99</span>
            </Fragment>
          }
          plan2Price={
            <Fragment>
              <span className="home-text145 thq-heading-3">$19.99</span>
            </Fragment>
          }
          plan3Price={
            <Fragment>
              <span className="home-text146 thq-heading-3">$29.99</span>
            </Fragment>
          }
          plan1Action={
            <Fragment>
              <span className="home-text147 thq-body-small">Subscribe Now</span>
            </Fragment>
          }
          plan1Price1={
            <Fragment>
              <span className="home-text148 thq-heading-3">$200/yr</span>
            </Fragment>
          }
          plan1Yearly={
            <Fragment>
              <span className="home-text149 thq-body-large">$99.99</span>
            </Fragment>
          }
          plan2Action={
            <Fragment>
              <span className="home-text150 thq-body-small">Get Started</span>
            </Fragment>
          }
          plan2Price1={
            <Fragment>
              <span className="home-text151 thq-heading-3">$299/yr</span>
            </Fragment>
          }
          plan2Yearly={
            <Fragment>
              <span className="home-text152 thq-body-large">$199.99</span>
            </Fragment>
          }
          plan3Action={
            <Fragment>
              <span className="home-text153 thq-body-small">Upgrade Now</span>
            </Fragment>
          }
          plan3Price1={
            <Fragment>
              <span className="home-text154 thq-heading-3">$499/yr</span>
            </Fragment>
          }
          plan3Yearly={
            <Fragment>
              <span className="home-text155 thq-body-large">$299.99</span>
            </Fragment>
          }
          plan1Action1={
            <Fragment>
              <span className="home-text156 thq-body-small">Get started</span>
            </Fragment>
          }
          plan1Yearly1={
            <Fragment>
              <span className="home-text157 thq-body-large">
                or $20 monthly
              </span>
            </Fragment>
          }
          plan2Action1={
            <Fragment>
              <span className="home-text158 thq-body-small">Get started</span>
            </Fragment>
          }
          plan2Yearly1={
            <Fragment>
              <span className="home-text159 thq-body-large">
                or $29 monthly
              </span>
            </Fragment>
          }
          plan3Action1={
            <Fragment>
              <span className="home-text160 thq-body-small">Get started</span>
            </Fragment>
          }
          plan3Yearly1={
            <Fragment>
              <span className="home-text161 thq-body-large">
                or $49 monthly
              </span>
            </Fragment>
          }
          plan1Feature1={
            <Fragment>
              <span className="home-text162 thq-body-small">
                Unlimited Poll Creation
              </span>
            </Fragment>
          }
          plan1Feature2={
            <Fragment>
              <span className="home-text163 thq-body-small">
                Real-time Results
              </span>
            </Fragment>
          }
          plan1Feature3={
            <Fragment>
              <span className="home-text164 thq-body-small">
                Customizable Themes
              </span>
            </Fragment>
          }
          plan2Feature1={
            <Fragment>
              <span className="home-text165 thq-body-small">
                Advanced Analytics
              </span>
            </Fragment>
          }
          plan2Feature2={
            <Fragment>
              <span className="home-text166 thq-body-small">
                Ad-free Experience
              </span>
            </Fragment>
          }
          plan2Feature3={
            <Fragment>
              <span className="home-text167 thq-body-small">Email Support</span>
            </Fragment>
          }
          plan2Feature4={
            <Fragment>
              <span className="home-text168 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan3Feature1={
            <Fragment>
              <span className="home-text169 thq-body-small">
                Priority Customer Support
              </span>
            </Fragment>
          }
          plan3Feature2={
            <Fragment>
              <span className="home-text170 thq-body-small">
                Team Collaboration
              </span>
            </Fragment>
          }
          plan3Feature3={
            <Fragment>
              <span className="home-text171 thq-body-small">Export Data</span>
            </Fragment>
          }
          plan3Feature4={
            <Fragment>
              <span className="home-text172 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan3Feature5={
            <Fragment>
              <span className="home-text173 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan1Feature11={
            <Fragment>
              <span className="home-text174 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan1Feature21={
            <Fragment>
              <span className="home-text175 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan1Feature31={
            <Fragment>
              <span className="home-text176 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan2Feature11={
            <Fragment>
              <span className="home-text177 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan2Feature21={
            <Fragment>
              <span className="home-text178 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan2Feature31={
            <Fragment>
              <span className="home-text179 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan2Feature41={
            <Fragment>
              <span className="home-text180 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan3Feature11={
            <Fragment>
              <span className="home-text181 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan3Feature21={
            <Fragment>
              <span className="home-text182 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan3Feature31={
            <Fragment>
              <span className="home-text183 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan3Feature41={
            <Fragment>
              <span className="home-text184 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
          plan3Feature51={
            <Fragment>
              <span className="home-text185 thq-body-small">
                Feature text goes here
              </span>
            </Fragment>
          }
        ></Pricing14> */}
        <Steps2
          step1Title={
            <Fragment>
              <span className="home-text186 thq-heading-2">
                Step 1: Enter Poll Topic/Question
              </span>
            </Fragment>
          }
          step2Title={
            <Fragment>
              <span className="home-text187 thq-heading-2">
                Step 2: Enter Option 1 and Option 2
              </span>
            </Fragment>
          }
          step3Title={
            <Fragment>
              <span className="home-text188 thq-heading-2">
                Step 3: Create Poll
              </span>
            </Fragment>
          }
          step4Title={
            <Fragment>
              <span className="home-text189 thq-heading-2">
                Step 4: View Existing Polls
              </span>
            </Fragment>
          }
          step1Description={
            <Fragment>
              <span className="home-text190 thq-body-small">
                Provide a clear and concise topic or question for your poll.
              </span>
            </Fragment>
          }
          step2Description={
            <Fragment>
              <span className="home-text191 thq-body-small">
                Enter the two options that participants can choose from in your
                poll.
              </span>
            </Fragment>
          }
          step3Description={
            <Fragment>
              <span className="home-text192 thq-body-small">
                Click the &apos;Create Poll&apos; button to add your poll to the
                list below.
              </span>
            </Fragment>
          }
          step4Description={
            <Fragment>
              <span className="home-text193 thq-body-small">
                Scroll down to see the list of existing polls you have created.
              </span>
            </Fragment>
          }
        ></Steps2>
        <Testimonial17
          review1={
            <Fragment>
              <span className="home-text194 thq-body-small">
                Great tool for gathering opinions quickly and efficiently.
              </span>
            </Fragment>
          }
          review2={
            <Fragment>
              <span className="home-text195 thq-body-small">
                Easy to use interface and helpful for decision-making processes.
              </span>
            </Fragment>
          }
          review3={
            <Fragment>
              <span className="home-text196 thq-body-small">
                Polls have improved our team communication and engagement.
              </span>
            </Fragment>
          }
          review4={
            <Fragment>
              <span className="home-text197 thq-body-small">
                Highly recommend this platform for collecting feedback from
                employees.
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text198 thq-body-small">
                Read through some use cases for better understanding
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text199 thq-heading-2">Use Cases</span>
            </Fragment>
          }
          author1Name={
            <Fragment>
              <span className="home-text200 thq-body-large">John Doe</span>
            </Fragment>
          }
          author2Name={
            <Fragment>
              <span className="home-text201 thq-body-large">Jane Smith</span>
            </Fragment>
          }
          author3Name={
            <Fragment>
              <span className="home-text202 thq-body-large">Alice Johnson</span>
            </Fragment>
          }
          author4Name={
            <Fragment>
              <span className="home-text203 thq-body-large">Michael Brown</span>
            </Fragment>
          }
          author1Position={
            <Fragment>
              <span className="home-text204 thq-body-small">
                Marketing Manager
              </span>
            </Fragment>
          }
          author2Position={
            <Fragment>
              <span className="home-text205 thq-body-small">
                Product Designer
              </span>
            </Fragment>
          }
          author3Position={
            <Fragment>
              <span className="home-text206 thq-body-small">HR Specialist</span>
            </Fragment>
          }
          author4Position={
            <Fragment>
              <span className="home-text207 thq-body-small">IT Manager</span>
            </Fragment>
          }
        ></Testimonial17>
        <Contact10
          content1={
            <Fragment>
              <span className="home-text208 thq-body-large">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in ero.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text209 thq-heading-2">Revolutionising Global Polling</span>
            </Fragment>
          }
          location1={
            <Fragment>
              <span className="home-text210 thq-heading-3">Content 1</span>
            </Fragment>
          }
          location2={
            <Fragment>
              <span className="home-text211 thq-heading-3">Content 2</span>
            </Fragment>
          }
          location1Description={
            <Fragment>
              <span className="home-text212 thq-body-large">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in ero.
              </span>
            </Fragment>
          }
          location2Description={
            <Fragment>
              <span className="home-text213 thq-body-large">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in ero.
              </span>
            </Fragment>
          }
        ></Contact10>
        <Footer4
          link1={
            <Fragment>
              <span className="home-text214 thq-body-small">About Us</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text215 thq-body-small">Contact Us</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text216 thq-body-small">FAQ</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text217 thq-body-small">
                Privacy Policy
              </span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="home-text218 thq-body-small">
                Terms and Conditions
              </span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="home-text219 thq-body-small">
                Terms of Service
              </span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="home-text220 thq-body-small">
                Cookies Policy
              </span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="home-text221 thq-body-small">
                Privacy Policy
              </span>
            </Fragment>
          }
        ></Footer4>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-text100 {
            display: inline-block;
            text-decoration: none;
          }
          .home-text101 {
            display: inline-block;
          }
          .home-text102 {
            display: inline-block;
            text-decoration: none;
          }
          .home-text103 {
            display: inline-block;
          }
          .home-text104 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .home-text105 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .home-text106 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .home-text107 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .home-text108 {
            display: inline-block;
          }
          .home-text109 {
            display: inline-block;
          }
          .home-text110 {
            display: inline-block;
          }
          .home-text111 {
            display: inline-block;
          }
          .home-text112 {
            display: inline-block;
          }
          .home-text113 {
            display: inline-block;
          }
          .home-text114 {
            display: inline-block;
          }
          .home-text115 {
            display: inline-block;
          }
          .home-text116 {
            display: inline-block;
            text-align: center;
          }
          .home-text117 {
            display: inline-block;
            text-align: center;
          }
          .home-text118 {
            display: inline-block;
          }
          .home-text119 {
            display: inline-block;
          }
          .home-text120 {
            display: inline-block;
          }
          .home-text121 {
            display: inline-block;
          }
          .home-text122 {
            display: inline-block;
          }
          .home-text123 {
            display: inline-block;
          }
          .home-text124 {
            display: inline-block;
          }
          .home-text125 {
            display: inline-block;
          }
          .home-text126 {
            display: inline-block;
          }
          .home-text127 {
            display: inline-block;
          }
          .home-text128 {
            display: inline-block;
          }
          .home-text129 {
            display: inline-block;
          }
          .home-text130 {
            display: inline-block;
          }
          .home-text131 {
            display: inline-block;
          }
          .home-text132 {
            display: inline-block;
          }
          .home-text133 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .home-text134 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .home-text135 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .home-text136 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .home-text137 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .home-text138 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .home-text139 {
            display: inline-block;
            text-align: center;
          }
          .home-text140 {
            display: inline-block;
            text-align: center;
          }
          .home-text143 {
            display: inline-block;
            text-align: center;
          }
          .home-text144 {
            display: inline-block;
            font-size: 48px;
          }
          .home-text145 {
            display: inline-block;
            font-size: 48px;
          }
          .home-text146 {
            display: inline-block;
            font-size: 48px;
          }
          .home-text147 {
            display: inline-block;
          }
          .home-text148 {
            display: inline-block;
            font-size: 48px;
          }
          .home-text149 {
            display: inline-block;
          }
          .home-text150 {
            display: inline-block;
          }
          .home-text151 {
            display: inline-block;
            font-size: 48px;
          }
          .home-text152 {
            display: inline-block;
          }
          .home-text153 {
            display: inline-block;
          }
          .home-text154 {
            display: inline-block;
            font-size: 48px;
          }
          .home-text155 {
            display: inline-block;
          }
          .home-text156 {
            display: inline-block;
          }
          .home-text157 {
            display: inline-block;
          }
          .home-text158 {
            display: inline-block;
          }
          .home-text159 {
            display: inline-block;
          }
          .home-text160 {
            display: inline-block;
          }
          .home-text161 {
            display: inline-block;
          }
          .home-text162 {
            display: inline-block;
          }
          .home-text163 {
            display: inline-block;
          }
          .home-text164 {
            display: inline-block;
          }
          .home-text165 {
            display: inline-block;
          }
          .home-text166 {
            display: inline-block;
          }
          .home-text167 {
            display: inline-block;
          }
          .home-text168 {
            display: inline-block;
          }
          .home-text169 {
            display: inline-block;
          }
          .home-text170 {
            display: inline-block;
          }
          .home-text171 {
            display: inline-block;
          }
          .home-text172 {
            display: inline-block;
          }
          .home-text173 {
            display: inline-block;
          }
          .home-text174 {
            display: inline-block;
          }
          .home-text175 {
            display: inline-block;
          }
          .home-text176 {
            display: inline-block;
          }
          .home-text177 {
            display: inline-block;
          }
          .home-text178 {
            display: inline-block;
          }
          .home-text179 {
            display: inline-block;
          }
          .home-text180 {
            display: inline-block;
          }
          .home-text181 {
            display: inline-block;
          }
          .home-text182 {
            display: inline-block;
          }
          .home-text183 {
            display: inline-block;
          }
          .home-text184 {
            display: inline-block;
          }
          .home-text185 {
            display: inline-block;
          }
          .home-text186 {
            display: inline-block;
          }
          .home-text187 {
            display: inline-block;
          }
          .home-text188 {
            display: inline-block;
          }
          .home-text189 {
            display: inline-block;
          }
          .home-text190 {
            display: inline-block;
            text-align: center;
          }
          .home-text191 {
            display: inline-block;
            text-align: center;
          }
          .home-text192 {
            display: inline-block;
            text-align: center;
          }
          .home-text193 {
            display: inline-block;
            text-align: center;
          }
          .home-text194 {
            display: inline-block;
            text-align: left;
          }
          .home-text195 {
            display: inline-block;
            text-align: left;
          }
          .home-text196 {
            display: inline-block;
            text-align: left;
          }
          .home-text197 {
            display: inline-block;
            text-align: left;
          }
          .home-text198 {
            display: inline-block;
            text-align: center;
          }
          .home-text199 {
            display: inline-block;
          }
          .home-text200 {
            display: inline-block;
          }
          .home-text201 {
            display: inline-block;
          }
          .home-text202 {
            display: inline-block;
          }
          .home-text203 {
            display: inline-block;
          }
          .home-text204 {
            display: inline-block;
          }
          .home-text205 {
            display: inline-block;
          }
          .home-text206 {
            display: inline-block;
          }
          .home-text207 {
            display: inline-block;
          }
          .home-text208 {
            display: inline-block;
          }
          .home-text209 {
            display: inline-block;
          }
          .home-text210 {
            display: inline-block;
            text-align: center;
          }
          .home-text211 {
            display: inline-block;
            text-align: center;
          }
          .home-text212 {
            display: inline-block;
          }
          .home-text213 {
            display: inline-block;
          }
          .home-text214 {
            display: inline-block;
          }
          .home-text215 {
            display: inline-block;
          }
          .home-text216 {
            display: inline-block;
          }
          .home-text217 {
            display: inline-block;
          }
          .home-text218 {
            display: inline-block;
          }
          .home-text219 {
            display: inline-block;
          }
          .home-text220 {
            display: inline-block;
          }
          .home-text221 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Home
