'use client'

import { useMemo, useState, type CSSProperties } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Globe2, LogIn, Menu, PlusCircle, Search, UserCircle2, UserPlus, X } from 'lucide-react'
import { globalContent } from '@/editable/content/global.content'
import { slot4BrandConfig } from '@/editable/theme/brand.config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { session, logout } = useEditableLocalAuthSession()
  const navVars = { '--editable-nav-bg': '#25211f', '--editable-nav-text': '#ffffff', '--editable-nav-active': '#00a651', '--editable-nav-active-text': '#ffffff', '--editable-cta-bg': '#00a651', '--editable-cta-text': '#ffffff', '--editable-search-bg': '#ffffff', '--editable-border': 'rgba(255,255,255,.14)', '--editable-container': '1192px' } as CSSProperties
  const navItems = useMemo(
    () => globalContent.nav.primaryLinks,
    []
  )

  return (
    <header style={navVars} className="sticky top-0 z-50 border-b border-[var(--editable-border)] bg-[var(--editable-nav-bg)] text-[var(--editable-nav-text)] shadow-[0_10px_28px_rgba(0,0,0,0.12)]">
      <nav className="mx-auto flex min-h-[82px] w-full max-w-[var(--editable-container)] items-center gap-4 px-4 sm:px-6 lg:px-0">
        <Link href="/" className="group flex min-w-0 shrink-0 items-center gap-3">
          <span className="hidden min-w-0 sm:block">
            <span className="block max-w-[230px] truncate text-[1.35rem] font-black uppercase tracking-[0.18em]">{slot4BrandConfig.siteName}</span>
            <span className="block max-w-[230px] truncate text-[10px] font-semibold opacity-60">{globalContent.nav?.tagline || slot4BrandConfig.tagline}</span>
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded bg-white text-sm font-black uppercase tracking-tight text-[#25211f] sm:hidden">
            {slot4BrandConfig.siteName.slice(0, 2)}
          </span>
        </Link>

        <form action="/search" className="mx-auto hidden min-w-0 flex-1 justify-center md:flex">
          <label className="relative flex w-full max-w-md items-center rounded-md border border-white/10 bg-white/10 px-3 py-2.5 text-white">
            <Search className="h-5 w-5 opacity-85" />
            <input name="q" type="search" placeholder="Search businesses" className="min-w-0 flex-1 bg-transparent px-3 text-sm font-semibold text-white outline-none placeholder:text-white/55" />
          </label>
        </form>

        <div className="hidden items-center gap-2 lg:flex">
          {navItems.slice(0, 3).map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <Link key={item.href} href={item.href} className={`rounded-md px-3 py-2 text-sm font-black transition ${active ? 'bg-white/12 text-white' : 'text-white/82 hover:bg-white/10 hover:text-white'}`}>
                {item.label}
              </Link>
            )
          })}
          <span className="inline-flex items-center gap-2 px-2 text-sm font-black"><Globe2 className="h-5 w-5" /> Worldwide</span>
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          {session ? (
            <>
              <Link href="/create" className="hidden items-center gap-2 rounded-md bg-[var(--editable-cta-bg)] px-4 py-3 text-sm font-black text-[var(--editable-cta-text)] shadow-sm sm:inline-flex"><PlusCircle className="h-4 w-4" /> Add a New Business</Link>
              <span className="hidden max-w-[150px] items-center gap-2 truncate rounded-md border border-white/15 px-3 py-3 text-sm font-black sm:inline-flex"><UserCircle2 className="h-4 w-4 shrink-0" /> {session.name}</span>
              <button type="button" onClick={logout} className="hidden items-center gap-2 rounded-md px-3 py-3 text-sm font-black hover:bg-white/10 sm:inline-flex">Logout</button>
            </>
          ) : (
            <>
              <Link href="/login" className="hidden items-center gap-2 rounded-md bg-[var(--editable-cta-bg)] px-4 py-3 text-sm font-black text-[var(--editable-cta-text)] shadow-sm sm:inline-flex"><LogIn className="h-4 w-4" /> Sign in</Link>
              <Link href="/signup" className="hidden items-center gap-2 rounded-md bg-[var(--editable-cta-bg)] px-4 py-3 text-sm font-black text-[var(--editable-cta-text)] shadow-sm sm:inline-flex"><UserPlus className="h-4 w-4" /> Register</Link>
            </>
          )}
          <button type="button" onClick={() => setOpen((value) => !value)} className="rounded-md border border-[var(--editable-border)] bg-white p-2 text-[#25211f] lg:hidden" aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-[var(--editable-border)] bg-[var(--editable-nav-bg)] px-4 py-4 lg:hidden">
          <form action="/search" className="mb-4 flex rounded-md border border-[var(--editable-border)] bg-white px-3 py-2 text-[#25211f]">
            <Search className="mt-1 h-4 w-4 opacity-55" />
            <input name="q" type="search" placeholder="Search businesses" className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none" />
          </form>
          <div className="grid gap-2">
            {[{ label: 'Home', href: '/' }, ...navItems, ...(session ? [{ label: `Account: ${session.name}`, href: '/create' }] : [{ label: 'Sign in', href: '/login' }, { label: 'Register', href: '/signup' }])].map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-md border border-[var(--editable-border)] bg-white px-4 py-3 text-sm font-black text-[#25211f]">
                {item.label}
              </Link>
            ))}
            {session ? <button type="button" onClick={() => { logout(); setOpen(false) }} className="rounded-md border border-[var(--editable-border)] bg-white px-4 py-3 text-left text-sm font-black text-[#25211f]">Logout</button> : null}
          </div>
        </div>
      ) : null}
    </header>
  )
}
