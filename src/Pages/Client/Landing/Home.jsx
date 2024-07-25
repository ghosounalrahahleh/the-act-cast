import React from 'react'

import ContactUs from './components/ContactUs'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Header from './components/Header'
import Layout from '../Layout/Layout'
import SocialIcons from '../Layout/SocialIcons'

function Home() {
    return (
        <Layout>
            <Header />
            <Section1 />
            <Section2 />
            <Section3 />
            <ContactUs />
            <SocialIcons />
        </Layout>
    )
}

export default Home