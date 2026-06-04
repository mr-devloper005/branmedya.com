'use client'

import { Building2, Mail, MapPin, Phone } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function ContactPage() {
  const lanes = [
    { icon: Building2, title: 'Add or update a business', body: 'Send company name, category, address, website, and profile details so the listing can be reviewed clearly.' },
    { icon: MapPin, title: 'Fix location or category data', body: 'Report wrong cities, duplicate tags, service areas, or category mismatches that make discovery harder.' },
    { icon: Phone, title: 'Claim and profile support', body: 'Ask about claimed status, owner edits, reviews, profile enrichment, and business verification needs.' },
  ]

  return (
    <EditableSiteShell>
      <main className="bg-[#f5f7f5] px-4 py-12 text-[#25211f] sm:px-6 lg:px-0">
        <section className="mx-auto grid max-w-[1192px] gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-md border border-black/10 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#00a651]">{pagesContent.contact.eyebrow}</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight">{pagesContent.contact.title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">{pagesContent.contact.description}</p>
            <div className="mt-8 grid gap-4">
              {lanes.map((lane) => (
                <div key={lane.title} className="rounded-md border border-black/10 bg-[#f5f7f5] p-5">
                  <lane.icon className="h-5 w-5 text-[#00a651]" />
                  <h2 className="mt-3 text-xl font-black">{lane.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{lane.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3 rounded-md bg-[#25211f] p-4 text-white">
              <Mail className="h-5 w-5" />
              <span className="text-sm font-semibold">Include the business name and location for the fastest response.</span>
            </div>
          </div>

          <div className="rounded-md border border-black/10 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
            <h2 className="text-2xl font-black tracking-tight">{pagesContent.contact.formTitle}</h2>
            <EditableContactLeadForm />
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
