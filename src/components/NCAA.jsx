import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react'

const NCAA = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // The conference rebranded from CCC (Commonwealth Coast Conference) to
  // CNE (Conference of New England) in 2024. Earlier titles are CCC; the
  // 2024 cross country title is the first under the CNE name.
  const championships = [
    { year: 2024, sport: 'Cross Country', conf: 'CNE', url: 'https://rwuhawks.com/news/2024/11/2/mens-cross-country-mens-cross-country-rwu-completes-four-peat-tassey-repeats-for-third-straight-season.aspx' },
    { year: 2024, sport: 'Track & Field', conf: 'CCC', url: 'https://rwuhawks.com/news/2024/4/27/mens-track-field-hawks-come-out-on-top-at-ccc-championships-yet-again.aspx' },
    { year: 2023, sport: 'Cross Country', conf: 'CCC', url: 'https://cnesports.org/news/2023/10/28/mens-cross-country-roger-williams-suffolk-repeat-as-cross-country-champions.aspx' },
    { year: 2023, sport: 'Track & Field', conf: 'CCC', url: 'https://rwuhawks.com/story.aspx?filename=mens-track-field-mens-track-field-hawks-top-the-competition-at-ccc-championship-set-three-school-records&file_date=4/29/2023' },
    { year: 2022, sport: 'Cross Country', conf: 'CCC', url: 'https://cnesports.org/sports/2023/5/1/MXC_2022champs.aspx' },
    { year: 2021, sport: 'Cross Country', conf: 'CCC', url: 'https://rwuhawks.com/sports/mens-cross-country' },
  ]

  // Photos pulled from Louis's old portfolio at louissader.rwu.me/ncaa-athlete/.
  // objectPosition lets us shift the visible crop window per image when
  // object-cover would otherwise clip something we want to hide (e.g. the
  // headband text on steeple.jpg).
  const photos = [
    { src: '/images/ncaa/steeple.webp',  caption: 'Steeplechase, RWU',                  objectPosition: 'center 15%' },
    { src: '/images/ncaa/conn.webp',     caption: 'Connecticut College Invitational',   objectPosition: 'center'      },
    { src: '/images/ncaa/conn-2.webp',   caption: 'Connecticut College Invitational',   objectPosition: 'center'      },
    { src: '/images/ncaa/wickham.webp',  caption: 'Wickham Park Invitational',          objectPosition: 'center'      },
    { src: '/images/ncaa/brown.webp',    caption: 'Brown University Invitational',      objectPosition: 'center'      },
    { src: '/images/ncaa/terpus.webp',   caption: 'Terpus Track Meet',                  objectPosition: 'center'      },
    { src: '/images/ncaa/IMG_8700.webp', caption: 'Cross Country',                      objectPosition: 'center'      },
    { src: '/images/ncaa/IMG_1119.webp', caption: 'Cross Country',                      objectPosition: 'center'      },
    { src: '/images/ncaa/IMG_1120.webp', caption: 'Cross Country',                      objectPosition: 'center'      },
    { src: '/images/ncaa/IMG_5013.webp', caption: 'Track & Field',                      objectPosition: 'center'      },
  ]

  const [activeIdx, setActiveIdx] = useState(0)

  // Auto-advance: faster rotation per Louis's request (~2s)
  useEffect(() => {
    if (!isInView) return
    const id = setInterval(() => {
      setActiveIdx((i) => (i + 1) % photos.length)
    }, 2000)
    return () => clearInterval(id)
  }, [isInView, photos.length])

  const next = () => setActiveIdx((i) => (i + 1) % photos.length)
  const prev = () => setActiveIdx((i) => (i - 1 + photos.length) % photos.length)
  const active = photos[activeIdx]

  return (
    <section id="ncaa" className="py-12 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-12"
        >
          {/* NCAA logo as the section emblem, bigger and more prominent */}
          <img
            src="/images/logos/ncaa.svg"
            alt="NCAA"
            className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 object-contain"
          />
          <h2 className="section-heading">NCAA Athlete</h2>
          <p className="section-subheading mx-auto">
            Cross Country and Track & Field at Roger Williams University. Six conference championships across both sports.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-5 sm:gap-8">
          {/* Left: narrative + carousel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 glass rounded-xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/images/logos/rwu-hawk.webp"
                alt="RWU Hawks"
                className="w-10 h-10 object-contain"
              />
              <h3 className="text-lg font-semibold text-white">Roger Williams University Hawks</h3>
            </div>
            <p className="text-dark-300 leading-relaxed mb-4">
              Four-year contributor to the Cross Country and Track & Field teams. Competed in the steeplechase
              and long-distance events at meets including Wickham Park, Brown University, and the Connecticut
              College Invitational.
            </p>
            <p className="text-dark-300 leading-relaxed mb-6">
              Managed a full season schedule, regular travel for meets, and two daily practices alongside a full
              academic course load. The discipline shaped how I work: consistency over intensity, daily reps,
              long horizons.
            </p>

            {/* Carousel */}
            <div className="relative rounded-lg overflow-hidden bg-dark-900 aspect-[16/10] mb-4">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIdx}
                  src={active.src}
                  alt={active.caption}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: active.objectPosition || 'center' }}
                  loading="lazy"
                />
              </AnimatePresence>

              {/* Caption + counter */}
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-between text-white text-xs sm:text-sm">
                <span>{active.caption}</span>
                <span className="font-mono opacity-70">{activeIdx + 1} / {photos.length}</span>
              </div>

              {/* Prev / Next */}
              <button
                aria-label="Previous photo"
                onClick={prev}
                className="absolute top-1/2 left-2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur text-white flex items-center justify-center transition"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                aria-label="Next photo"
                onClick={next}
                className="absolute top-1/2 right-2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur text-white flex items-center justify-center transition"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Thumbnail strip */}
            <div className="flex gap-2 overflow-x-auto pb-1">
              {photos.map((p, i) => (
                <button
                  key={p.src}
                  onClick={() => setActiveIdx(i)}
                  aria-label={`Show photo ${i + 1}`}
                  className={`shrink-0 w-16 h-12 rounded-md overflow-hidden border transition ${
                    i === activeIdx
                      ? 'border-primary-500 ring-2 ring-primary-500/40'
                      : 'border-dark-700/40 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={p.src} alt="" className="w-full h-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-3 mt-8">
              {[
                { value: '6', label: 'Conference titles' },
                { value: '4', label: 'Years on the team' },
                { value: '2', label: 'Sports' },
              ].map((s) => (
                <div key={s.label} className="text-center p-4 bg-dark-900/40 rounded-lg border border-dark-700/40">
                  <div className="text-2xl font-bold text-white">{s.value}</div>
                  <div className="text-dark-500 text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: championships list */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <img src="/images/logos/ncaa.svg" alt="NCAA" className="w-8 h-8 object-contain shrink-0" />
              <h3 className="text-lg font-semibold text-white">Conference Championships</h3>
            </div>
            <p className="text-dark-500 text-xs mb-4">
              CCC (Commonwealth Coast Conference) rebranded to CNE (Conference of New England) in 2024.
            </p>
            <ul className="space-y-2.5">
              {championships.map((c) => (
                <li key={`${c.year}-${c.sport}`}>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between border-b border-dark-700/40 pb-2.5 last:border-b-0 last:pb-0 hover:text-primary-400 transition-colors"
                  >
                    <span className="text-dark-300 text-sm group-hover:text-primary-400 transition-colors">
                      {c.sport}
                      <span className="ml-2 text-[10px] uppercase tracking-wide text-dark-500 font-mono px-1.5 py-0.5 rounded bg-dark-800/60 border border-dark-700/60">
                        {c.conf}
                      </span>
                    </span>
                    <span className="text-white font-mono text-sm group-hover:text-primary-400 transition-colors">{c.year}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Postseason award card. Fills the empty space below the championships list. */}
            <a
              href="https://cnesports.org/news/2025/4/30/mens-track-and-field-cne-reveals-2025-mens-and-womens-track-field-postseason-awards.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="group block mt-6 p-5 rounded-xl bg-gradient-to-br from-primary-500/15 via-cyan-500/10 to-dark-900/60 border border-primary-500/30 hover:border-primary-400/60 transition-colors"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shrink-0 p-1.5">
                  <img src="/images/logos/ncaa.svg" alt="NCAA" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] uppercase tracking-widest font-mono text-primary-400 mb-1">CNE Postseason Award</p>
                  <h4 className="text-white font-semibold leading-snug">All Conference Community Service Team</h4>
                </div>
                <ArrowUpRight size={16} className="text-dark-500 group-hover:text-primary-400 transition-colors shrink-0 mt-1" />
              </div>
              <p className="text-dark-300 text-xs leading-relaxed">
                Recognized by the Conference of New England in the 2025 Men's Track & Field postseason awards for community service contribution alongside athletic competition.
              </p>
              <p className="text-dark-500 text-[11px] mt-3 group-hover:text-primary-400 transition-colors">
                Read the announcement →
              </p>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default NCAA
