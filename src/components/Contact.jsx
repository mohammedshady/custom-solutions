import { useState } from 'react'
import CONTENT from '../content'

export default function Contact() {
  const ct = CONTENT.contact
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState({})

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = true
    if (!form.email.includes('@')) e.email = true
    if (!form.message.trim()) e.message = true
    return e
  }

  function submit(ev) {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setSent(true)
  }

  const errorBorder = { borderColor: 'oklch(0.55 0.20 25)' }

  if (sent) {
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
                onChange={e => { setForm(f => ({ ...f, name: e.target.value })); setErrors(er => ({ ...er, name: false })) }}
                style={errors.name ? errorBorder : {}}
              />
            </div>
            <div className="form-field">
              <label>{ct.fields.email.label}</label>
              <input
                type="email"
                placeholder={ct.fields.email.placeholder}
                value={form.email}
                onChange={e => { setForm(f => ({ ...f, email: e.target.value })); setErrors(er => ({ ...er, email: false })) }}
                style={errors.email ? errorBorder : {}}
              />
            </div>
          </div>
          <div className="form-field">
            <label>{ct.fields.message.label}</label>
            <textarea
              placeholder={ct.fields.message.placeholder}
              value={form.message}
              onChange={e => { setForm(f => ({ ...f, message: e.target.value })); setErrors(er => ({ ...er, message: false })) }}
              style={errors.message ? errorBorder : {}}
            />
          </div>
          <button type="submit" className="form-submit">{ct.submitLabel}</button>
        </form>
      </div>
    </div>
  )
}
