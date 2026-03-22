'use client'

import { Nav } from './Nav'
import { Footer } from './Footer'

export default function PageWrapper({ 
  children,
  title,
  subtitle,
  headerExtra,
}: { 
  children: React.ReactNode
  title: string
  subtitle?: string
  headerExtra?: React.ReactNode
}) {
  return (
    <main style={{
      background: '#060D18',
      minHeight: '100vh',
      color: 'rgba(255,255,255,0.88)',
    }}>
      <Nav />
      
      {/* Page hero header */}
      <div className="page-hero" style={{
        background: '#060D18',
        paddingTop: 140,
        paddingBottom: 60,
        paddingLeft: 48,
        paddingRight: 48,
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        {/* Radial glow */}
        <div style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)',
          width: 600, height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(14,116,144,0.15), transparent 70%)',
          pointerEvents: 'none',
        }}/>
        
        <div style={{
          fontSize: 11, fontWeight: 700,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: '#2DD4BF',
          marginBottom: 16,
          fontFamily: 'JetBrains Mono, monospace',
          position: 'relative',
        }}>
          axonz.ai
        </div>
        
        <h1 style={{
          fontFamily: '"DM Serif Display", serif',
          fontSize: 'clamp(36px, 5vw, 64px)',
          color: 'white',
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
          marginBottom: 16,
          position: 'relative',
        }}>
          {title}
        </h1>
        
        {subtitle && (
          <p style={{
            fontSize: 18,
            color: 'rgba(255,255,255,0.45)',
            fontWeight: 300,
            maxWidth: 560,
            margin: '0 auto',
            lineHeight: 1.7,
            position: 'relative',
          }}>
            {subtitle}
          </p>
        )}
        {headerExtra}
      </div>
      
      {children}
      
      <Footer />
    </main>
  )
}
