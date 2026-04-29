import { useState } from 'react'
import { useForm } from '@formspree/react'
import CONTENT from '../content'

export default function Contact() {
  const ct = CONTENT.contact
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [localErrors, setLocalErrors] = useState({})
  const [fsState, fsSend] = useForm('xqewrpnb')

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = true
    if (!form.email.includes('@')) e.email = true
    if (!form.message.trim()) e.message = true
    return e
  }

  async function submit(ev) {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setLocalErrors(e); return }
    await fsSend({ name: form.name, email: form.email, message: form.message })
  }

  const errorBorder = { borderColor: 'oklch(0.55 0.20 25)' }

  if (fsState.succeeded) {
    return (
      <div className="page">
        <div className="contact-wrap">
          <h2>{ct.title}</h2>
          <div className="success-msg">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="22" fill="oklch(0.93 0.04 260)" />
              <path d="M14 24l7 7 13-14" stroke="oklch(0.52 0.22 260)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p>{ct.successMessage}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="page">
      <div className="contact-wrap">
        <h2>{ct.title}</h2>
        <p>{ct.sub}</p>
        <form className="contact-form" onSubmit={submit} noValidate>
          <div className="form-row">
            <div className="form-field">
              <label>{ct.fields.name.label}</label>
              <input
                type="text"
                placeholder={ct.fields.name.placeholder}
                value={form.name}
                onChange={e => { setForm(f => ({ ...f, name: e.target.value })); setLocalErrors(er => ({ ...er, name: false })) }}
                style={localErrors.name ? errorBorder : {}}
              />
            </div>
            <div className="form-field">
              <label>{ct.fields.email.label}</label>
              <input
                type="email"
                placeholder={ct.fields.email.placeholder}
                value={form.email}
                onChange={e => { setForm(f => ({ ...f, email: e.target.value })); setLocalErrors(er => ({ ...er, email: false })) }}
                style={localErrors.email ? errorBorder : {}}
              />
            </div>
          </div>
          <div className="form-field">
            <label>{ct.fields.message.label}</label>
            <textarea
              placeholder={ct.fields.message.placeholder}
              value={form.message}
              onChange={e => { setForm(f => ({ ...f, message: e.target.value })); setLocalErrors(er => ({ ...er, message: false })) }}
              style={localErrors.message ? errorBorder : {}}
            />
          </div>
          <button type="submit" className="form-submit" disabled={fsState.submitting}>
            {fsState.submitting ? 'Sending…' : ct.submitLabel}
          </button>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginTop: '10px', flexWrap: 'wrap' }}>
            <a href="mailto:info@csolutions-ai.com" style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: 'var(--fg-muted)', textDecoration: 'none' }}>
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M1 5l7 5 7-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              info@csolutions-ai.com
            </a>
            <span style={{ opacity: 0.3, fontSize: '12px' }}>·</span>
            <a href="tel:+966541349994" style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: 'var(--fg-muted)', textDecoration: 'none' }}>
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                <path d="M3 1h3l1.5 4-2 1.5a9 9 0 004 4L11 8.5l4 1.5v3a1 1 0 01-1 1A13 13 0 012 2a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              +966 54 134 9994
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}
