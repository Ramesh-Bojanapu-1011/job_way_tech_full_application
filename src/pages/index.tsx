import Footer from "@/components/Footer";
import Header from "@/components/Headder";
import ScrollToTop from "@/components/ScrollToTop";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Job Way Tech Consultancy | Career & Talent Solutions</title>
        <meta
          name="description"
          content="Job Way Tech Consultancy connects skilled candidates with top employers through training, hiring, and placement support."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className="relative overflow-hidden bg-slate-50">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-cyan-300/25 blur-3xl" />
          <div className="absolute -right-24 top-32 h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-64 w-160 -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(14,116,144,0.15),transparent_60%)]" />
        </div>

        <section className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 pb-20 pt-16 md:grid-cols-2 md:items-center md:gap-12 md:px-6 md:pb-24 md:pt-20">
          <div>
            <span className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
              Job Way Tech Consultancy
            </span>

            <h1 className="mt-5 text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Build Careers. Hire Better. Grow Faster.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              We help job seekers and businesses succeed with expert
              recruitment, practical upskilling, and end-to-end hiring solutions
              tailored to today&apos;s tech market.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#"
                className="rounded-xl bg-linear-to-r from-cyan-500 to-emerald-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-200 transition hover:brightness-95"
              >
                Explore Services
              </Link>
              <Link
                href="#"
                className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition hover:border-cyan-300 hover:text-cyan-700"
              >
                Contact Consultancy Team
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 text-sm">
              <div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
                <p className="text-2xl font-extrabold text-slate-900">12K+</p>
                <p className="mt-1 text-slate-500">Candidates supported</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
                <p className="text-2xl font-extrabold text-slate-900">150+</p>
                <p className="mt-1 text-slate-500">Hiring companies</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
                <p className="text-2xl font-extrabold text-slate-900">92%</p>
                <p className="mt-1 text-slate-500">Successful placements</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_25px_80px_-35px_rgba(2,132,199,0.45)] sm:p-8">
              <div className="rounded-2xl bg-linear-to-br from-slate-900 via-slate-800 to-cyan-900 p-6 text-white sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                  Featured service track
                </p>
                <h2 className="mt-3 text-2xl font-bold leading-tight">
                  Recruitment + Upskilling Acceleration Program
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-200">
                  Structured hiring pipeline support with candidate screening,
                  role-based training, interview preparation, and onboarding
                  assistance.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3 text-xs font-medium text-cyan-100">
                  <span className="rounded-lg bg-white/10 px-3 py-2 text-center">
                    Talent sourcing
                  </span>
                  <span className="rounded-lg bg-white/10 px-3 py-2 text-center">
                    Skill assessments
                  </span>
                  <span className="rounded-lg bg-white/10 px-3 py-2 text-center">
                    Interview coordination
                  </span>
                  <span className="rounded-lg bg-white/10 px-3 py-2 text-center">
                    Onboarding support
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
