import Link from 'next/link'
import { ArrowRight, Building2, CheckCircle2, Globe2, MapPin, Search, ShieldCheck, Sparkles } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { slot4BrandConfig } from '@/editable/theme/brand.config'
import { getEditablePostImage, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

const shell = 'mx-auto w-full max-w-[1192px] px-4 sm:px-6 lg:px-0'

function getContent(post?: SitePost | null) {
  return post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
}

function text(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

function summaryOf(post: SitePost, limit = 96) {
  const content = getContent(post)
  const raw = post.summary || text(content.description) || text(content.summary) || text(content.excerpt) || text(content.body)
  const clean = raw.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
  return clean.length > limit ? `${clean.slice(0, limit).trim()}...` : clean
}

function locationOf(post: SitePost) {
  const content = getContent(post)
  return text(content.location) || text(content.address) || text(content.city) || text(content.country) || 'Worldwide'
}

function categoryOf(post: SitePost) {
  const content = getContent(post)
  return text(content.category) || post.tags?.[0] || 'Business'
}

function ListingLogo({ post, compact = false }: { post: SitePost; compact?: boolean }) {
  const image = getEditablePostImage(post)
  const initials = post.title.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join('').toUpperCase() || 'B'
  const size = compact ? 'h-16 w-16 text-xl' : 'h-20 w-20 text-2xl'
  const placeholder = image.includes('placeholder.svg')
  return (
    <div className={`${size} flex shrink-0 items-center justify-center overflow-hidden rounded-md bg-black font-semibold text-white`}>
      {placeholder ? initials : <img src={image} alt="" className="h-full w-full object-cover" />}
    </div>
  )
}

function DirectoryCard({ post, href, compact = false }: { post: SitePost; href: string; compact?: boolean }) {
  return (
    <Link href={href} className="group grid gap-4 rounded-md border border-black/10 bg-white p-4 transition hover:-translate-y-0.5 hover:border-[#00a651]/40 hover:shadow-[0_14px_36px_rgba(15,23,42,0.10)] sm:grid-cols-[auto_minmax(0,1fr)]">
      <ListingLogo post={post} compact={compact} />
      <div className="min-w-0">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1 text-xs font-bold text-[#00a651]"><CheckCircle2 className="h-4 w-4" /> Claimed</span>
          <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">{categoryOf(post).slice(0, 16)}</span>
        </div>
        <h3 className={`${compact ? 'text-xl' : 'text-2xl'} mt-2 truncate font-semibold tracking-tight text-[#1f1b1a]`}>{post.title}</h3>
        <p className="mt-1 truncate text-sm font-medium text-slate-700">{locationOf(post)}</p>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">{summaryOf(post, compact ? 70 : 105)}</p>
      </div>
    </Link>
  )
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const heroTitle = pagesContent.home.hero.title.join(' ')
  const count = posts.length ? `${Math.max(posts.length * 4200, 42000).toLocaleString()}+` : '44.6m'
  return (
    <section className="bg-white">
      <div className={`${shell} py-8 sm:py-10`}>
        <div className="rounded-md bg-[linear-gradient(135deg,#3d4654,#9aa2ad)] px-5 py-12 text-center text-white shadow-[0_18px_50px_rgba(37,33,31,0.16)] sm:px-8 sm:py-14">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-white/75">{pagesContent.home.hero.badge}</p>
          <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">{heroTitle}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/82">{pagesContent.home.hero.description}</p>
          <form action="/search" className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-[1fr_1fr_auto]">
            <input name="q" placeholder={pagesContent.home.hero.searchPlaceholder} className="h-12 rounded-md border-0 bg-white px-5 text-base font-semibold text-[#1f1b1a] outline-none placeholder:text-slate-500" />
            <input name="category" placeholder="Select city or category" className="h-12 rounded-md border-0 bg-white px-5 text-base font-semibold text-[#1f1b1a] outline-none placeholder:text-slate-500" />
            <button className="inline-flex h-12 items-center justify-center rounded-md bg-[#00a651] px-7 text-base font-black text-white transition hover:bg-[#008e45]">
              Search
            </button>
          </form>
          <p className="mt-8 text-2xl font-semibold">{count} businesses and growing</p>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {[
            { icon: Globe2, title: 'FREE Listing', body: 'Increase your SEO and get found in more business searches.' },
            { icon: ShieldCheck, title: 'FREE Claim', body: 'Verify profile details, build trust, and control owner edits.' },
            { icon: Sparkles, title: 'FREE Profile+', body: 'Add richer details, images, services, and customer-ready context.' },
          ].map((item, index) => (
            <div key={item.title} className="rounded-md bg-[#1f1b1a] p-5 text-white">
              <div className="flex items-start gap-4">
                <span className="text-6xl font-light leading-none">{index + 1}</span>
                <div>
                  <h2 className="text-2xl font-black">{item.title}</h2>
                  <p className="mt-2 text-base leading-7 text-white/84">{item.body}</p>
                  <item.icon className="mt-5 h-7 w-7 text-white/82" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const recent = posts.slice(0, 6)
  if (!recent.length) return null
  return (
    <section className="bg-white">
      <div className={`${shell} border-t border-black/10 py-8`}>
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-4xl font-semibold tracking-tight">Recently added</h2>
          <Link href={primaryRoute} className="hidden items-center gap-2 rounded-md bg-[#00a651] px-4 py-2 text-sm font-black text-white sm:inline-flex">View all <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-7 grid gap-4 lg:grid-cols-3">
          {recent.map((post) => <DirectoryCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} compact />)}
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const featured = posts.slice(6, 12).length ? posts.slice(6, 12) : posts.slice(0, 6)
  if (!featured.length) return null
  return (
    <section className="bg-white">
      <div className={`${shell} border-t border-black/10 py-9`}>
        <h2 className="text-4xl font-semibold tracking-tight">Featured businesses</h2>
        <div className="mt-7 grid gap-4 lg:grid-cols-3">
          {featured.map((post) => <DirectoryCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} />)}
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const latest = timeSections.flatMap((section) => section.posts).length ? timeSections.flatMap((section) => section.posts).slice(0, 6) : posts.slice(12, 18)
  const categories = ['surgeons', 'physicians', 'lawyers', 'attorneys', 'home builders', 'schools', 'clinics', 'real estate', 'restaurants', 'technology', 'plumbing', 'marketing']
  const locations = ['London', 'New York', 'Houston', 'Los Angeles', 'Chicago', 'Dubai', 'San Antonio', 'Las Vegas', 'Dallas', 'Mumbai', 'Miami', 'Berlin', 'Austin', 'Toronto', 'Atlanta', 'San Francisco']
  return (
    <section className="bg-white">
      {latest.length ? (
        <div className={`${shell} border-t border-black/10 py-9`}>
          <h2 className="text-4xl font-semibold tracking-tight">Latest edits</h2>
          <div className="mt-7 grid gap-4 lg:grid-cols-3">
            {latest.map((post) => <DirectoryCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} compact />)}
          </div>
        </div>
      ) : null}

      <div className={`${shell} py-10`}>
        <div className="rounded-md bg-[#f0f0f0] p-6 sm:p-8">
          <h2 className="text-4xl font-semibold tracking-tight">Popular Categories</h2>
          <div className="mt-7 grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((item) => <Link key={item} href={`/search?category=${encodeURIComponent(item)}`} className="text-sm font-semibold text-[#1f1b1a] hover:text-[#00a651]">{item}</Link>)}
          </div>
          <div className="mt-8 border-t border-black/10 bg-white p-6">
            <h3 className="text-2xl font-semibold">Popular Locations</h3>
            <div className="mt-6 grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
              {locations.map((item) => <Link key={item} href={`/search?q=${encodeURIComponent(item)}`} className="text-sm font-semibold text-[#1f1b1a] hover:text-[#00a651]">{item}</Link>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section className="bg-white">
      <div className={`${shell} pb-14`}>
        <div className="grid gap-6 rounded-md bg-[#25211f] p-6 text-white sm:p-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-white/58">{slot4BrandConfig.domain}</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">Ready to make your business easier to find?</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/72">{pagesContent.home.cta.description}</p>
          </div>
          <Link href="/create" className="inline-flex items-center justify-center gap-2 rounded-md bg-[#00a651] px-6 py-3 text-sm font-black text-white">Add a New Business <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  )
}
