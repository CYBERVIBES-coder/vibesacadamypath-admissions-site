import React from 'react'

export default function App(){
  return (
    <div style={{fontFamily: 'Inter, system-ui, -apple-system', color:'#0b1520'}}>
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
        <p style={{marginTop:24,color:'#6b7280'}}>This is a Vite React demo. Replace with the full JSX-converted markup from the static HTML for a production site.</p>
      </main>
    </div>
  )
}
