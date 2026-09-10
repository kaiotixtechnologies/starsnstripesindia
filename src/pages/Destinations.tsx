import { FadeIn, GoldDivider, Rule, Eyebrow, GoldBtn, OutlineBtn, PageHero, IMG_MILKY, IMG_TIGER2, IMG_TIGER3 } from '../components/shared'

const PENCH_THEMES = [
  'Milky Way landscapes and star-field compositions',
  'Night-sky storytelling with foreground trees, watchtowers, and silhouettes',
  'Night photography workflow, including focus, long exposure, deep-sky imagery, and star tracker photography (for guests who would like to use star trackers)',
  'Daylight wildlife and habitat photography: tiger, leopard, Indian gaur (bison), sloth bear, dhole (Indian wild dog), sambar, and chital (spotted deer).',
  'Pench Tiger Reserve also hosts over 250 bird species, characterized by a diverse mix of central Indian forest residents, apex raptors, and summer breeders including the Stork-billed Kingfisher, Greater Racket-tailed Drongo, White-rumped Vulture, Indian Golden Oriole, Jungle Owlet, Plum-headed Parakeet, and the rare Brown Fish Owl along its signature river banks.',
  'April is the best season for animal and bird encounters due to the dry conditions, especially around water sources and in open habitat at dawn and dusk.',
]

const TADOBA_THEMES = [
  'Tiger portraits and environmental wildlife scenes',
  'Behavior, movement, dust, backlight, and low-angle safari imagery',
  'Birds, deer, langurs, and other subjects for storytelling portfolios',
  'Workflow for fast wildlife settings, long-lens technique, and editing for harsh light',
]

const WHAT_PHOTOGRAPH = [
  'Star-filled landscapes in Pench, including dark-sky scenes and celestial compositions',
  'Bengal tigers in Pench and Tadoba, plus a wide range of other wildlife — leopard, Indian gaur (bison), sloth bear, dhole (Indian wild dog), sambar, chital, langur, and over 300 recorded bird species across both reserves',
  'The contrast between two visual worlds: still nightscapes and dynamic wildlife action',
]

const WHAT_LEARN = [
  'How to plan and expose wide-field nightscapes and deep-sky astro, with Abhishek and Srini',
  'Techniques for focus and sharp images after dark',
  'Image stacking, noise control, and clean foreground rendering',
  'Fast-response settings for wildlife encounters and long-lens field craft from a safari vehicle, with Himanshu',
  'Working with golden-hour light, dust, and background separation',
  'Post-processing in Adobe Lightroom and Photoshop with Srini, in guided sessions throughout the trip',
  'Building a cohesive travel story across landscape, wildlife, and night imagery',
]

export default function Destinations() {
  return (
    <>
      <PageHero
        eyebrow="Two Iconic Destinations"
        title="Pench &amp; Tadoba-Andhari"
        subtitle="Two extraordinary reserves in central India: dark-sky astrophotography and Bengal tiger wildlife photography."
        bg={IMG_MILKY}
      />

      <GoldDivider />

      {/* ── Pench National Park | April 5–9, 2027 ─────────────────── */}
      <section style={{ background: '#FAFAF7' }} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <Eyebrow className="mb-3 text-xs" style={{ color: '#1A4080' }}>Astrophotography &amp; Tigers · 4 Nights</Eyebrow>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0D1B2A' }}>
              Pench National Park | April 5–9, 2027
            </h2>
            
            <p className="text-base leading-relaxed mb-4" style={{ color: '#3D4F60' }}>
              Pench Tiger Reserve became India's first Dark Sky Park in January 2024, a recognition tied to successful efforts to reduce light pollution and improve the quality of the night sky. The reserve supports high-density tiger habitat and offers a dramatic natural setting of forest, meadows, and open clearings that can work beautifully for star trails, wide-field nightscapes, twilight landscapes, and environmental wildlife imagery.
            </p>

            <p className="text-sm font-semibold leading-relaxed mb-8" style={{ color: '#7A5C1E' }}>
              Four nights in India's first Dark Sky Park: 3 afternoon safaris with 2-photographers per vehicle for maximum photography comfort co-directed by Himanshu and Srini; and 4 astrophotography sessions guided by Abhishek, joined by Srini.
            </p>

            <div className="p-8 rounded-sm bg-white mb-10" style={{ border: '1px solid rgba(13,27,42,0.08)', boxShadow: 'var(--shadow)' }}>
              <h3 className="font-serif text-xl font-bold mb-5" style={{ color: '#0D1B2A' }}>
                Photography themes
              </h3>
              <ul className="flex flex-col gap-3.5">
                {PENCH_THEMES.map((theme, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#A07828] font-bold text-base leading-tight mt-0.5">•</span>
                    <span className="text-sm leading-relaxed" style={{ color: '#3D4F60' }}>{theme}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      <Rule />

      {/* ── Tadoba-Andhari Tiger Reserve | April 9–14, 2027 ────────── */}
      <section style={{ background: '#FFFFFF' }} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <Eyebrow className="mb-3 text-xs" style={{ color: '#1A5030' }}>Tiger Sanctuary Focus · 5 Nights</Eyebrow>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0D1B2A' }}>
              Tadoba-Andhari Tiger Reserve | April 9–14, 2027
            </h2>

            <p className="text-base leading-relaxed mb-4" style={{ color: '#3D4F60' }}>
              Tadoba-Andhari is widely recognized by wildlife photography operators as one of the best destinations in India for Bengal tiger safaris, with strong additional chances for leopard, dhole (Indian wild dog), sloth bear, and Indian gaur. Tadoba-Andhari Tiger Reserve is also home to over 200 bird species, featuring a dense concentration of wetland birds, waterfowl, and vibrant forest species that cluster around its prominent permanent lakes during the dry season including the Oriental Darter, Black-naped Monarch, Tickell's Blue Flycatcher, Pheasant-tailed Jacana, Black-hooded Oriole, Crested Treeswift, and the endangered Lesser Adjutant Stork around its deep woodland lakes. April is the best season for animal and bird encounters due to the dry conditions, especially around water sources and in open habitat at dawn and dusk.
            </p>

            <p className="text-sm font-semibold leading-relaxed mb-8" style={{ color: '#1A5030' }}>
              Five nights at Tadoba-Andhari, with a mix of full-day and half-day safaris across four days: 6 safaris totaling 40 hours in the field, including two full 12-hour days — the same format used by leading international tiger-photography operators — with Himanshu and Srini rotating between vehicles throughout.
            </p>

            <div className="p-8 rounded-sm bg-[#FAFAF7] mb-10" style={{ border: '1px solid rgba(13,27,42,0.08)', boxShadow: 'var(--shadow)' }}>
              <h3 className="font-serif text-xl font-bold mb-5" style={{ color: '#0D1B2A' }}>
                Photography themes
              </h3>
              <ul className="flex flex-col gap-3.5">
                {TADOBA_THEMES.map((theme, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#1A5030] font-bold text-base leading-tight mt-0.5">•</span>
                    <span className="text-sm leading-relaxed" style={{ color: '#3D4F60' }}>{theme}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      <GoldDivider />

      {/* ── Page 11: WHAT GUESTS WILL PHOTOGRAPH & WHAT GUESTS WILL LEARN ─── */}
      <section style={{ background: '#F2EDE2' }} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* What guests will photograph */}
            <FadeIn className="p-8 rounded-sm bg-white h-full" style={{ border: '1px solid rgba(13,27,42,0.08)', boxShadow: 'var(--shadow)' }}>
              <h3 className="font-serif text-2xl font-bold mb-6 uppercase tracking-wide" style={{ color: '#0D1B2A' }}>
                WHAT GUESTS WILL PHOTOGRAPH
              </h3>
              <ul className="flex flex-col gap-4">
                {WHAT_PHOTOGRAPH.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#A07828] font-bold text-base leading-tight mt-0.5">•</span>
                    <span className="text-sm leading-relaxed" style={{ color: '#3D4F60' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            {/* What guests will learn */}
            <FadeIn delay={100} className="p-8 rounded-sm bg-white h-full" style={{ border: '1px solid rgba(13,27,42,0.08)', boxShadow: 'var(--shadow)' }}>
              <h3 className="font-serif text-2xl font-bold mb-6 uppercase tracking-wide" style={{ color: '#0D1B2A' }}>
                WHAT GUESTS WILL LEARN
              </h3>
              <ul className="flex flex-col gap-4">
                {WHAT_LEARN.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#A07828] font-bold text-base leading-tight mt-0.5">•</span>
                    <span className="text-sm leading-relaxed" style={{ color: '#3D4F60' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

          </div>

          {/* Hands-on support throughout */}
          <FadeIn delay={150} className="mt-10 p-8 rounded-sm bg-white" style={{ borderLeft: '4px solid #A07828', boxShadow: 'var(--shadow)' }}>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: '#0D1B2A' }}>
              <strong>Hands-on support throughout:</strong> two co-directors present for the full trip, joined by a specialist astrophotography expert for four nights in Pench — help is always close at hand, whether you're troubleshooting a star tracker at 1 AM or repositioning for a tiger's next move.
            </p>
          </FadeIn>
        </div>
      </section>

      <Rule />

      <section style={{ background: '#FAFAF7' }} className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="font-serif text-2xl font-bold mb-6" style={{ color: '#0D1B2A' }}>Ready to photograph with our team?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GoldBtn to="/book">Reserve Your Spot</GoldBtn>
              <OutlineBtn to="/pricing">View Pricing &amp; Inclusions</OutlineBtn>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
