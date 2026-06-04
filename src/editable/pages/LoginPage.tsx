import type { Metadata } from 'next'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalLoginForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/login', title: 'Login', description: pagesContent.auth.login.metadataDescription })
}

export default function LoginPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#f5f7f5] text-[#25211f]">
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[1192px] items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-0">
          <div className="rounded-md border border-black/10 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#00a651]">{pagesContent.auth.login.badge}</p>
            <h1 className="mt-5 max-w-xl text-5xl font-semibold leading-tight tracking-tight">{pagesContent.auth.login.title}</h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-slate-600">{pagesContent.auth.login.description}</p>
          </div>
          <div className="rounded-md border border-black/10 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:p-8">
            <h2 className="text-2xl font-black tracking-tight">{pagesContent.auth.login.formTitle}</h2>
            <EditableLocalLoginForm />
            <p className="mt-5 text-sm text-slate-600">New here? <Link href="/signup" className="font-black text-[#00a651] underline-offset-4 hover:underline">{pagesContent.auth.login.createCta}</Link></p>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
