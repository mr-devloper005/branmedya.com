import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { slot4BrandConfig } from '@/editable/theme/brand.config'

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#f5f7f5] px-4 py-12 text-[#25211f] sm:px-6 lg:px-0">
        <section className="mx-auto grid max-w-[1192px] gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-md border border-black/10 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)] lg:p-10">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#00a651]">{pagesContent.about.badge}</p>
            <h1 className="mt-5 text-5xl font-semibold tracking-tight">About {slot4BrandConfig.siteName}</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">{pagesContent.about.description}</p>
            <div className="mt-8 space-y-4 text-base leading-8 text-slate-700">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {['Business discovery', 'Claimed profiles', 'Local search'].map((item) => (
                <div key={item} className="rounded-md bg-[#f5f7f5] p-4 text-sm font-black">{item}</div>
              ))}
            </div>
          </article>
          <aside className="space-y-4">
            {pagesContent.about.values.map((value) => (
              <div key={value.title} className="rounded-md border border-black/10 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-black tracking-tight">{value.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{value.description}</p>
              </div>
            ))}
          </aside>
        </section>
      </main>
    </EditableSiteShell>
  )
}
