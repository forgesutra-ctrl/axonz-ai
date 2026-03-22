'use client'

import { useState, useEffect } from 'react'

interface DemoModalProps {
  isOpen: boolean
  onClose: () => void
}

const DEMO_URLS = {
  outbound: 'https://www.aizyantra.com/demo/outbound',
  inbound: 'https://www.aizyantra.com/demo/inbound',
}

export default function DemoModal({
  isOpen,
  onClose,
}: DemoModalProps) {
  const [hovered, setHovered] = useState<'inbound' | 'outbound' | null>(null)

  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKey)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleSelect = (type: 'inbound' | 'outbound') => {
    window.open(DEMO_URLS[type], '_blank')
    onClose()
  }

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(2,8,18,0.85)',
          backdropFilter: 'blur(12px)',
          zIndex: 9000,
        }}
      />

      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9001,
        }}
      >
        <div
          className="demo-modal-box"
          style={{
            width: '90vw',
            maxWidth: 560,
            background: '#0A1525',
            border: '1px solid rgba(45,212,191,0.2)',
            borderRadius: 20,
            padding: '48px 40px',
            boxShadow: '0 40px 120px rgba(0,0,0,0.8)',
            position: 'relative',
            animation: 'fadeUp 0.3s ease forwards',
            pointerEvents: 'auto',
          }}
        >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 16,
            right: 20,
            background: 'none',
            border: 'none',
            color: 'rgba(255,255,255,0.3)',
            fontSize: 22,
            cursor: 'pointer',
            lineHeight: 1,
            padding: 4,
          }}
        >
          ×
        </button>

        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div
            style={{
              fontSize: 11,
              fontFamily: 'JetBrains Mono, monospace',
              color: '#2DD4BF',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}
          >
            axonz.ai · Live Demo
          </div>
          <h2
            style={{
              fontFamily: '"DM Serif Display", serif',
              fontSize: 28,
              color: 'white',
              lineHeight: 1.2,
              marginBottom: 10,
              letterSpacing: '-0.02em',
            }}
          >
            What type of demo do you want?
          </h2>
          <p
            style={{
              fontSize: 14,
              color: 'rgba(255,255,255,0.4)',
              lineHeight: 1.6,
            }}
          >
            Choose your use case — we&apos;ll connect you to a live axonz.ai
            voice agent right now.
          </p>
        </div>

        <div
          className="demo-modal-cards"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 16,
            marginBottom: 24,
          }}
        >
          <button
            onClick={() => handleSelect('inbound')}
            onMouseEnter={() => setHovered('inbound')}
            onMouseLeave={() => setHovered(null)}
            style={{
              background:
                hovered === 'inbound'
                  ? 'rgba(14,116,144,0.2)'
                  : 'rgba(255,255,255,0.04)',
              border:
                hovered === 'inbound'
                  ? '1.5px solid #2DD4BF'
                  : '1.5px solid rgba(255,255,255,0.1)',
              borderRadius: 14,
              padding: '28px 20px',
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'all 0.2s ease',
              boxShadow:
                hovered === 'inbound'
                  ? '0 0 24px rgba(45,212,191,0.15)'
                  : 'none',
            }}
          >
            <div style={{ fontSize: 32, marginBottom: 12 }}>📲</div>
            <div
              style={{
                fontFamily: '"DM Serif Display", serif',
                fontSize: 18,
                color: 'white',
                marginBottom: 8,
              }}
            >
              Inbound
            </div>
            <div
              style={{
                fontSize: 13,
                color: 'rgba(255,255,255,0.45)',
                lineHeight: 1.6,
              }}
            >
              You call axonz.ai. Experience how it answers, understands, and
              resolves — live.
            </div>
            <div
              style={{
                marginTop: 16,
                fontSize: 11,
                fontFamily: 'JetBrains Mono, monospace',
                color:
                  hovered === 'inbound' ? '#2DD4BF' : 'rgba(255,255,255,0.25)',
                transition: 'color 0.2s',
              }}
            >
              Try it now →
            </div>
          </button>

          <button
            onClick={() => handleSelect('outbound')}
            onMouseEnter={() => setHovered('outbound')}
            onMouseLeave={() => setHovered(null)}
            style={{
              background:
                hovered === 'outbound'
                  ? 'rgba(14,116,144,0.2)'
                  : 'rgba(255,255,255,0.04)',
              border:
                hovered === 'outbound'
                  ? '1.5px solid #2DD4BF'
                  : '1.5px solid rgba(255,255,255,0.1)',
              borderRadius: 14,
              padding: '28px 20px',
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'all 0.2s ease',
              boxShadow:
                hovered === 'outbound'
                  ? '0 0 24px rgba(45,212,191,0.15)'
                  : 'none',
            }}
          >
            <div style={{ fontSize: 32, marginBottom: 12 }}>📞</div>
            <div
              style={{
                fontFamily: '"DM Serif Display", serif',
                fontSize: 18,
                color: 'white',
                marginBottom: 8,
              }}
            >
              Outbound
            </div>
            <div
              style={{
                fontSize: 13,
                color: 'rgba(255,255,255,0.45)',
                lineHeight: 1.6,
              }}
            >
              axonz.ai calls you. See how it handles collections, reminders, and
              follow-ups.
            </div>
            <div
              style={{
                marginTop: 16,
                fontSize: 11,
                fontFamily: 'JetBrains Mono, monospace',
                color:
                  hovered === 'outbound' ? '#2DD4BF' : 'rgba(255,255,255,0.25)',
                transition: 'color 0.2s',
              }}
            >
              Try it now →
            </div>
          </button>
        </div>

        <div
          style={{
            textAlign: 'center',
            fontSize: 12,
            color: 'rgba(255,255,255,0.2)',
            fontFamily: 'JetBrains Mono, monospace',
          }}
        >
          Live demo · No sign-up required · Powered by axonz.ai
        </div>
        </div>
      </div>
    </>
  )
}
