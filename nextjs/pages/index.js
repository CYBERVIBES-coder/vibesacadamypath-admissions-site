import Head from 'next/head'
import React from 'react'

export default function Home(){
  return (
    <>
      <Head>
        <title>Turn Your Ambition Into an Acceptance Letter — BrightPath Admissions (Demo)</title>
        <meta name="description" content="Personalized admissions guidance — Book Your Free Strategy Call" />
      </Head>

      <header style={{padding:20,background:'#fff',borderBottom:'1px solid #eee'}}>
        <div style={{maxWidth:1100,margin:'0 auto',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div style={{fontWeight:700,color:'#0a2342'}}>BrightPath Admissions (Demo)</div>
          <a href="https://calendly.com/brightpath/strategy-call" className="cta">Book Your Free Strategy Call</a>
        </div>
      </header>

      <main style={{maxWidth:1100,margin:'28px auto',padding:'0 20px'}}>
        <h1>Turn Your Ambition Into an Acceptance Letter</h1>
        <p>Personalized guidance from 12 education experts who've helped 4,200+ students get into top programs — without the guesswork.</p>
        <a className="cta" href="https://calendly.com/brightpath/strategy-call" target="_blank" rel="noreferrer">Book Your Free Strategy Call</a>

        <p style={{marginTop:24,color:'#6b7280'}}>This is a Next.js demo page — paste the full markup and CSS from `index.html` for a full site.</p>
      </main>
    </>
  )
}
