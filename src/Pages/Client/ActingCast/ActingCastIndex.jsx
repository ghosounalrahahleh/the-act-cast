import React from 'react'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Layout from '../Layout/Layout'

export default function ActingCastIndex() {
  return (
    <Layout>
      <section className='flex flex-col' >
        <Section1 />
        <Section2 />
        <Section3 />
      </section>
    </Layout>
  )
}