'use client'

import Link from 'next/link'
import type { CSSProperties } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { globalContent } from '@/editable/content/global.content'
import { slot4BrandConfig } from '@/editable/theme/brand.config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const footerVars = { '--editable-footer-bg': '#d4d4d4', '--editable-footer-text': '#25211f', '--editable-container': '1192px' } as CSSProperties
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer style={footerVars} className="border-t border-black/10 bg-[var(--editable-footer-bg)] text-[var(--editable-footer-text)]">
      <div className="mx-auto grid max-w-[var(--editable-container)] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-0">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="text-xl font-black uppercase tracking-[0.18em]">{slot4BrandConfig.siteName}</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 opacity-70">{globalContent.footer.description}</p>
          <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] opacity-55">{globalContent.footer.tagline}</p>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.22em] opacity-55">Explore</h3>
          <div className="mt-4 grid gap-2">
            {globalContent.footer.columns[0].links.map((link) => (
              <Link key={link.href} href={link.href} className="inline-flex items-center gap-2 text-sm font-bold opacity-75 hover:opacity-100">
                {link.label} <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.22em] opacity-55">Site</h3>
          <div className="mt-4 grid gap-2">
            {[
              ['About', '/about'],
              ['Contact', '/contact'],
              ...(session ? [['Add business', '/create']] : [['Sign in', '/login'], ['Register', '/signup']]),
            ].map(([label, href]) => (
              <Link key={href} href={href} className="text-sm font-bold opacity-75 hover:opacity-100">{label}</Link>
            ))}
            {session ? <button type="button" onClick={logout} className="text-left text-sm font-bold opacity-75 hover:opacity-100">Logout</button> : null}
          </div>
        </div>
      </div>
      <div className="border-t border-black/10 px-4 py-5 text-center text-xs font-bold opacity-55">
        &copy; {year} {slot4BrandConfig.siteName}. {globalContent.footer.bottomNote}
      </div>
    </footer>
  )
}
