
import React from 'react';

// --- SVG ICON COMPONENTS ---

const CheckIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);


// --- UI COMPONENTS ---

const Header: React.FC = () => (
  <header className="border-b border-accent-line">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="font-headline text-xl font-bold tracking-tighter">
        imoverthinking.com
      </div>
      <a
        href="#"
        className="px-4 py-2 border border-black rounded-md text-sm font-medium hover:bg-black hover:text-white transition-colors"
      >
        Get Early Access
      </a>
    </div>
  </header>
);

interface DifferentiatorCardProps {
  number: string;
  title: string;
  description: string;
  points: string[];
}
const DifferentiatorCard: React.FC<DifferentiatorCardProps> = ({ number, title, description, points }) => (
  <div className="bg-white p-6 border border-dashed border-accent-line rounded-lg h-full">
    <div className="flex items-center mb-4">
      <div className="w-8 h-8 flex items-center justify-center border-2 border-black rounded-full text-sm font-bold font-headline flex-shrink-0">
        {number}
      </div>
      <h3 className="ml-4 font-headline text-xl font-bold">{title}</h3>
    </div>
    <p className="text-gray-700 mb-4">{description}</p>
    <ul className="space-y-2">
      {points.map((point) => (
        <li key={point} className="font-sans text-sm text-gray-600 relative pl-4">
          <span className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-black rounded-full"></span>
          {point}
        </li>
      ))}
    </ul>
  </div>
);

const Footer: React.FC = () => (
  <footer className="bg-soft-grey border-t border-accent-line">
    <div className="container mx-auto px-6 py-8 text-center text-gray-500">
      <p className="font-headline text-lg font-bold text-black mb-2">imoverthinking.com</p>
      <p className="text-sm">&copy; {new Date().getFullYear()}. Structure your thoughts. Find your clarity.</p>
    </div>
  </footer>
);

// --- MAIN APP ---

const App: React.FC = () => {
  const differentiatorsData = [
    { number: '1', title: 'Built for *your* brain.', description: 'Specifically designed for decision paralysis & spiraling thoughts.', points: ["❌ Not mindfulness (we don't calm, we structure)", "❌ Not meditation (we don't suppress, we organize)", "❌ Not therapy (we don't process, we clarify)"] },
    { number: '2', title: 'Real Frameworks, Not Fluff.', description: 'We use psych-backed frameworks to get you unstuck. No generic advice.', points: ["Guides you through proven structures", "It's structure, not a convo", "Doesn't just echo you back"] },
    { number: '3', title: 'Your 3 AM Lifeline.', description: 'Works in the moment of spiraling, whenever you need it most.', points: ["3AM spiral? We're there.", "Pre-meeting panic? We're ready."] },
    { number: '4', title: 'No Bad Vibes.', description: "We don't give advice. We just hold up a (very organized) mirror to your thoughts.", points: ["You keep full agency", "We provide the architecture"] },
    { number: '5', title: 'We Respect the Overthink.', description: "We don't try to 'fix' your deep thinking. We channel it.", points: ["Your thoughts aren't the problem", "The chaos is"] },
  ];

  const mainDifferentiators = differentiatorsData.slice(0, 4);
  const bylineDifferentiator = differentiatorsData[4];

  const irreplaceableMoments = [
    "Your therapist is booked for weeks but the crisis is *now*.",
    "Mindfulness is great, but it won't organize the 27 pro/con lists in your head.",
    "Your journal entry looks more like a chaotic spiderweb than a plan.",
    "You've exhausted your friends' listening capacity (again).",
    "ChatGPT gave you the most basic, soulless advice ever.",
    "You're stuck and need YOUR answer, not some rando's.",
  ];

  const credibilityData = [
    {
      title: "70 Years of Research",
      description: "Built on proven psychological frameworks—CBT, DBT, and Chain Analysis. The same methods therapists use, now accessible in real-time."
    },
    {
      title: "Verified by 60+ Mental Health Professionals",
      description: "Psychologists, therapists, and researchers reviewed and validated our approach. This isn't wellness theater—it's psychology that works."
    },
    {
      title: "12+ Years of Industry Experience",
      description: "Created by mental health professionals who understand the science behind decision paralysis and thought spirals."
    },
    {
      title: "The Difference That Matters",
      description: "Other apps calm you. Therapy processes you. We structure you—turning chaotic thoughts into clarity when you need it most, backed by frameworks that have helped millions."
    }
  ];
  
  const techPillars = [
    {
        title: "Core Technology",
        points: [
            "Powered by Gemma 3, Google's leading AI model",
            "Trained on 10,000+ specialized sources on overthinking and decision science",
            "Engineered by team with 5+ years in AI/ML development",
            "Custom crisis modes tailored to specific psychological states",
            "Custom fine-tuning on therapeutic conversation patterns",
            "Continuous validation against clinical standards",
            "GDPR friendly"
        ]
    },
    {
        title: "Intelligent Context Management",
        points: [
            "Session memory: Maintains conversation coherence",
            "Pattern recognition: Identifies recurring thought loops",
            "Adaptive responses: Adjusts approach based on user state"
        ]
    },
    {
        title: "Built-In Safety Systems",
        points: [
            "Crisis detection: Identifies signs of self-harm or severe crisis and provides appropriate resources",
            "Harm prevention guardrails: AI trained to never give medical advice, diagnose, or encourage harmful decisions",
            "Escalation protocols: Directs users to professional help when needed",
            "Content filters: Prevents generation of harmful, triggering, or medically dangerous content",
            "Therapeutic boundaries: Maintains clear distinction between support tool and clinical intervention"
        ]
    }
];


  return (
    <div className="bg-white text-black font-sans leading-relaxed">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="text-center py-20 md:py-32 border-b border-accent-line">
          <div className="container mx-auto px-6">
            <span className="font-sans text-lg text-gray-500 tracking-widest">overthinking rn?</span>
            <h1 className="font-headline text-4xl md:text-6xl font-extrabold mt-4 mb-6 max-w-3xl mx-auto">
              Untangle your thought spirals. For real this time.
            </h1>
            <p className="text-lg text-gray-700 max-w-xl mx-auto mb-8">
              For when your brain has too many tabs open. We give you the structure to find *your* answers, not just more noise.
            </p>
            <a
              href="#"
              className="inline-block bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
            >
              I need this yesterday
            </a>
          </div>
        </section>

        {/* Irreplaceable Moment Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                 <h2 className="font-headline text-3xl md:text-4xl font-bold">you can't replace us when...</h2>
                 <p className="text-gray-600 mt-2">IYKYK. We're your go-to when:</p>
              </div>
              <div className="border border-dashed border-accent-line rounded-lg p-8 space-y-4">
                {irreplaceableMoments.map((moment) => (
                  <div key={moment} className="flex items-start">
                    <CheckIcon className="w-6 h-6 text-black mt-1 flex-shrink-0 mr-4" />
                    <p className="text-lg">{moment}</p>

                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="py-20 md:py-28 bg-soft-grey border-y border-accent-line">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">Structure, not conversation.</h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                This ain't your average chatbot. Here's the tea.
              </p>
              <p className="font-headline text-xl mt-8 max-w-3xl mx-auto text-black font-bold">
                {bylineDifferentiator.title}{' '}
                <span className="font-sans font-normal text-gray-700">{bylineDifferentiator.description}</span>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
               {mainDifferentiators.map((item) => (
                <DifferentiatorCard
                    key={item.number}
                    number={item.number}
                    title={item.title}
                    description={item.description}
                    points={item.points}
                />
            ))}
            </div>
          </div>
        </section>

        {/* Gen Z Credibility Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">We're highkey profesh in the way we do things.</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {credibilityData.map((item) => (
                <div key={item.title} className="p-6 border border-dashed border-accent-line rounded-lg">
                  <h3 className="font-headline text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-20 md:py-28 bg-soft-grey border-y border-accent-line">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">The Technology</h2>
              <p className="text-gray-600 mt-2">Safe, secure, and built on cutting-edge AI.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {techPillars.map((pillar) => (
                <div key={pillar.title} className="bg-white p-6 border border-dashed border-accent-line rounded-lg">
                  <h3 className="font-headline text-xl font-bold mb-4">{pillar.title}</h3>
                  <ul className="space-y-3">
                    {pillar.points.map((point) => (
                      <li key={point} className="flex items-start">
                        <CheckIcon className="w-5 h-5 text-black mt-1 flex-shrink-0 mr-3" />
                        <span className="text-sm text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Personal Story Section */}
        <section className="bg-white py-20 md:py-28 border-b border-accent-line">
            <div className="container mx-auto px-6 max-w-3xl text-center">
                <h2 className="font-headline text-3xl md:text-4xl font-bold mb-8">
                    HEY. WE'VE BEEN WHERE YOU ARE.
                </h2>
                <div className="space-y-6 text-lg text-gray-800 prose prose-lg max-w-none">
                    <p>
                        3AM spirals. Decisions you can't make. Best days ending as worst nights.
                    </p>
                    <p>
                        We tried meditation (spiraled deeper), therapy (couldn't be real), every productivity app (captured chaos, organized nothing).
                    </p>
                    <p className="font-bold text-black">
                        Nothing did what we actually needed: turn thoughts into decisions.
                    </p>
                    <p className="font-headline text-xl text-black pt-4">
                        So we built it.
                    </p>
                    <div className="pt-6 border-t border-dashed border-accent-line mt-10 text-left space-y-3">
                        <p><strong className="text-black">Not to fix</strong> your overthinking. To <strong className="text-black">structure it.</strong></p>
                        <p><strong className="text-black">Not to make you think less.</strong> To help you understand your own thoughts.</p>
                        <p><strong className="text-black">Not to suppress the voices.</strong> To <strong className="text-black">organize them.</strong></p>
                    </div>
                </div>
            </div>
        </section>
        
        {/* Quote Section */}
        <section className="bg-white py-20 md:py-24">
            <div className="container mx-auto px-6 text-center">
                <h3 className="font-headline text-3xl md:text-5xl font-bold max-w-4xl mx-auto">
                    "Your thoughts aren't the problem, chaos is."
                </h3>
                <p className="font-sans text-gray-500 mt-4">- The Imoverthinking Method</p>
            </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-black text-white py-20 md:py-28">
            <div className="container mx-auto px-6 text-center">
                <h2 className="font-headline text-3xl md:text-4xl font-bold">
                    Ready to get out of your head?
                </h2>
                <p className="mt-4 mb-8 max-w-xl mx-auto text-gray-300">
                    Drop your email to get early access. No spam, just sweet, sweet clarity when we launch.
                </p>
                <a
                  href="#"
                  className="inline-block bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-gray-200 transition-colors"
                >
                  Count me in
                </a>
            </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default App;
