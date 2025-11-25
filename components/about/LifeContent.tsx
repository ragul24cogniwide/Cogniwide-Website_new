"use client";

import Image from 'next/image'
import HackathonCarousel from '@/components/about/HackathonCarousel'

const lifeEvents = [
  {
    title: 'Weekly Turf Cricket Showdowns',
    description:
      'Friendly yet competitive weekly matches that build camaraderie, teamwork, and leadership — a perfect blend of wellness and team spirit.',
    image: '/images/life-at-cogniwide/turf/Media.jpeg',
  },
  {
    title: 'Annual Conference',
    description:
      'Our flagship gathering where teams share breakthroughs, celebrate milestones, and set the vision for the year ahead.',
    image: '/images/placeholder.svg',
  },
  {
    title: 'Fun Friday',
    description:
      'Monthly themed sessions with games, quizzes, and team-building activities designed to keep the culture lively and inclusive.',
    image: '/images/life/placeholder.svg',
  },
  {
    title: 'Innovation Day',
    description:
      'A focused day dedicated to exploring new ideas, prototyping concepts, and demoing internal innovations across teams.',
    image: '/images/life/placeholder.svg',
  },
  {
    title: 'Bi-weekly Hackathons',
    description:
      'Fast-paced hack sessions where cross-functional teams build, iterate, and showcase solutions that often mature into real products.',
    image: '/images/life-at-cogniwide/hackathon/image 6.png',
  },
]

// Soft, playful gradient sets for vibrant sections (SSR-safe)
const gradientSets = [
  'bg-gradient-to-r from-yellow-50 via-white to-amber-50',
  'bg-gradient-to-r from-pink-50 via-white to-fuchsia-50',
  'bg-gradient-to-r from-lime-50 via-white to-emerald-50',
  'bg-gradient-to-r from-sky-50 via-white to-cyan-50',
]

export default function LifeContent({
  hackathonImages,
  turfImages,
  funFridayImages,
  conferenceImages,
  innovationImages,
}: {
  hackathonImages: string[];
  turfImages: string[];
  funFridayImages: string[];
  conferenceImages: string[];
  innovationImages: string[];
}) {
  return (
    <>
      {/* Hero: Bigger, brighter, and more spacious */}
      <section className="relative overflow-hidden bg-brand-dark-grey min-h-[380px] md:min-h-[520px]">
        {/* Background hero image */}
        <div className="absolute inset-0">
          <Image
            src="/images/life-at-cogniwide/hero.JPG"
            alt="Life at Cogniwide hero"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        </div>

        {/* Heading overlay: centered horizontally, positioned near top-middle */}
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-5 py-2 bg-brand-yellow/10 rounded-full text-base font-semibold text-brand-white mb-5">
            Energetic, collaborative, and innovation-first. From cricket showdowns to hackathons,
            we keep work fun and outcomes impactful.
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-brand-white mb-4">Life at Cogniwide</h1>
          <div className="mx-auto w-20 h-1 bg-brand-yellow/80 rounded mb-7"></div>
          {/* <p className="max-w-4xl mx-auto text-brand-light-grey text-xl leading-relaxed">
            Energetic, collaborative, and innovation-first. From cricket showdowns to hackathons,
            we keep work fun and outcomes impactful.
          </p> */}

          {/* Animated badges */}
          {/* <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {['Team Spirit','Innovation','Community','Wellbeing'].map((label) => (
              <span
                key={label}
                className="px-3.5 py-1.5 rounded-full text-sm bg-brand-yellow/15 text-brand-white border border-brand-yellow/30 transition-transform duration-300 hover:-translate-y-0.5"
              >
                {label}
              </span>
            ))}
          </div> */}
        </div>
      </section>

      {/* Removed second hero/banner to keep a single, strong hero */}

      {/* Events: full-width alternating sections with colorful vibes */}
      <section className="bg-gradient-to-b from-white to-brand-light-grey/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-1.5 bg-brand-yellow/10 rounded-full text-sm font-semibold text-brand-dark-grey mb-4 border border-brand-yellow/30">
              Events & Moments
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-grey">We make work memorable</h2>
            <div className="mx-auto w-16 h-1 bg-brand-yellow/70 rounded mt-4"></div>
          </div>

          {(() => {
            const hackIdx = lifeEvents.findIndex((e) => e.title.toLowerCase().includes('hackathon'))
            const ordered = hackIdx === -1 ? lifeEvents : [lifeEvents[hackIdx], ...lifeEvents.filter((_, i) => i !== hackIdx)]
            return ordered.map((event, idx) => {
              const isHackathon = event.title.toLowerCase().includes('hackathon')
              const isTurf = event.title.toLowerCase().includes('turf')
              const isConference = event.title.toLowerCase().includes('conference')
              const isFunFriday = event.title.toLowerCase().includes('fun friday')
              const isInnovation = event.title.toLowerCase().includes('innovation')
              if (isHackathon) {
                return (
                  <div key={event.title} className="relative mb-12 rounded-2xl overflow-hidden ring-1 ring-brand-yellow/30 shadow-lg">
                    <div className={`p-5 md:p-6 ${gradientSets[idx % gradientSets.length]}`}>
                      {/* Content on top */}
                      <div>
                        <div className="inline-flex items-center px-3 py-1 bg-brand-yellow/15 rounded-full text-xs font-semibold text-brand-dark-grey mb-3 border border-brand-yellow/30">
                          {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-brand-dark-grey mb-2">{event.title}</h3>
                        <p className="text-brand-medium-grey text-base md:text-lg leading-relaxed">{event.description}</p>
                      </div>
                      {/* Carousel below */}
                      <HackathonCarousel images={hackathonImages} />
                    </div>
                  </div>
                )
              }

              if (isTurf) {
                return (
                  <div key={event.title} className="relative mb-12 rounded-2xl overflow-hidden ring-1 ring-brand-yellow/30 shadow-lg">
                    <div className={`p-5 md:p-6 ${gradientSets[idx % gradientSets.length]}`}>
                      {/* Content on top */}
                      <div>
                        <div className="inline-flex items-center px-3 py-1 bg-brand-yellow/15 rounded-full text-xs font-semibold text-brand-dark-grey mb-3 border border-brand-yellow/30">
                          {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-brand-dark-grey mb-2">{event.title}</h3>
                        <p className="text-brand-medium-grey text-base md:text-lg leading-relaxed">{event.description}</p>
                      </div>
                      {/* Carousel below */}
                      <HackathonCarousel images={turfImages} />
                    </div>
                  </div>
                )
              }

              if (isConference) {
                return (
                  <div key={event.title} className="relative mb-12 rounded-2xl overflow-hidden ring-1 ring-brand-yellow/30 shadow-lg">
                    <div className={`p-5 md:p-6 ${gradientSets[idx % gradientSets.length]}`}>
                      {/* Content on top */}
                      <div>
                        <div className="inline-flex items-center px-3 py-1 bg-brand-yellow/15 rounded-full text-xs font-semibold text-brand-dark-grey mb-3 border border-brand-yellow/30">
                          {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-brand-dark-grey mb-2">{event.title}</h3>
                        <p className="text-brand-medium-grey text-base md:text-lg leading-relaxed">{event.description}</p>
                      </div>
                      {/* Carousel below (renders only if images provided) */}
                      <HackathonCarousel images={conferenceImages} />
                    </div>
                  </div>
                )
              }

              if (isFunFriday) {
                return (
                  <div key={event.title} className="relative mb-12 rounded-2xl overflow-hidden ring-1 ring-brand-yellow/30 shadow-lg">
                    <div className={`p-5 md:p-6 ${gradientSets[idx % gradientSets.length]}`}>
                      {/* Content on top */}
                      <div>
                        <div className="inline-flex items-center px-3 py-1 bg-brand-yellow/15 rounded-full text-xs font-semibold text-brand-dark-grey mb-3 border border-brand-yellow/30">
                          {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-brand-dark-grey mb-2">{event.title}</h3>
                        <p className="text-brand-medium-grey text-base md:text-lg leading-relaxed">{event.description}</p>
                      </div>
                      {/* Carousel below */}
                      <HackathonCarousel images={funFridayImages} />
                    </div>
                  </div>
                )
              }

              if (isInnovation) {
                return (
                  <div key={event.title} className="relative mb-12 rounded-2xl overflow-hidden ring-1 ring-brand-yellow/30 shadow-lg">
                    <div className={`p-5 md:p-6 ${gradientSets[idx % gradientSets.length]}`}>
                      {/* Content on top */}
                      <div>
                        <div className="inline-flex items-center px-3 py-1 bg-brand-yellow/15 rounded-full text-xs font-semibold text-brand-dark-grey mb-3 border border-brand-yellow/30">
                          {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-brand-dark-grey mb-2">{event.title}</h3>
                        <p className="text-brand-medium-grey text-base md:text-lg leading-relaxed">{event.description}</p>
                      </div>
                      {/* Carousel below */}
                      <HackathonCarousel images={innovationImages} />
                    </div>
                  </div>
                )
              }

              return (
                <div key={event.title} className="relative mb-20 rounded-2xl overflow-hidden ring-1 ring-brand-yellow/30 shadow-lg">
                  <div className={`grid md:grid-cols-2 gap-10 items-center p-8 md:p-12 md:min-h-[420px] ${gradientSets[idx % gradientSets.length]}`}>
                    {/* Image side */}
                    <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                      <div className="relative w-full aspect-[16/9] md:aspect-[2/1] bg-gray-50 rounded-xl overflow-hidden shadow-sm">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-tr from-brand-yellow/10 to-transparent" />
                      </div>
                    </div>
                    {/* Content side */}
                    <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                      <div className="inline-flex items-center px-3 py-1 bg-brand-yellow/15 rounded-full text-xs font-semibold text-brand-dark-grey mb-3 border border-brand-yellow/30">
                        {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-brand-dark-grey mb-3">{event.title}</h3>
                      <p className="text-brand-medium-grey text-lg leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                </div>
              )
            })
          })()}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-light-grey py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-gray-200 bg-white p-6 md:p-8 text-center">
            <h3 className="text-xl font-semibold text-brand-dark-grey mb-2">Want to be part of our story?</h3>
            <p className="text-sm text-brand-medium-grey mb-4">Explore roles that shape the future of enterprise AI.</p>
            <a
              href="/careers"
              className="inline-flex items-center px-5 py-2.5 rounded-lg bg-brand-yellow text-brand-dark-grey font-medium hover:brightness-110 transition-colors duration-200 border border-yellow-300"
            >
              View Careers
            </a>
          </div>
        </div>
      </section>
    </>
  )
}