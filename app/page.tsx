'use client';

export default function AKSWebSoftSolutions() {
  const services = [
    'Web Development',
    'Web Designing',
    'Software Development',
    'Android & iOS Apps',
    'Cyber Security Services',
    'Blockchain & Token Development',
    'Crypto Listing Support',
    'Cloud Infrastructure',
    'Digital Marketing Solutions',
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-800 bg-black/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-wide text-cyan-400">
              AKS-Web & Soft Solutions
            </h1>

            <p className="text-sm text-gray-400">
              Innovative IT & Cyber Security Services
            </p>
          </div>

          <nav className="hidden md:flex gap-6 text-sm text-gray-300">
            <a href="#home" className="hover:text-cyan-400 transition">
              Home
            </a>

            <a href="#services" className="hover:text-cyan-400 transition">
              Services
            </a>

            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>

            <a href="#career" className="hover:text-cyan-400 transition">
              Careers
            </a>

            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-black to-purple-900/30" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm mb-6">
              Trusted IT Infrastructure & Development Partner
            </div>

            <h2 className="text-5xl font-extrabold leading-tight mb-6">
              Building Secure{' '}
              <span className="text-cyan-400">
                Digital Solutions
              </span>{' '}
              For Modern Businesses
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              AKS-Web & Soft Solutions is a modern IT company delivering
              high-quality web development, enterprise software, mobile
              applications, blockchain solutions, crypto token development,
              cybersecurity services, and digital transformation solutions
              for startups, businesses, and organizations worldwide.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold text-black"
              >
                Explore Services
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-2xl border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 transition"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 shadow-2xl">
                <h3 className="text-cyan-400 font-bold text-xl mb-2">
                  Web Development
                </h3>

                <p className="text-gray-400 text-sm">
                  Custom websites, dashboards, portals, and secure business
                  applications.
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 shadow-2xl">
                <h3 className="text-cyan-400 font-bold text-xl mb-2">
                  Cyber Security
                </h3>

                <p className="text-gray-400 text-sm">
                  Security testing, monitoring, protection, and digital risk
                  solutions.
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 shadow-2xl">
                <h3 className="text-cyan-400 font-bold text-xl mb-2">
                  Blockchain
                </h3>

                <p className="text-gray-400 text-sm">
                  Crypto tokens, blockchain deployment, exchange & listing
                  support.
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 shadow-2xl">
                <h3 className="text-cyan-400 font-bold text-xl mb-2">
                  App Development
                </h3>

                <p className="text-gray-400 text-sm">
                  Android, iOS, and cross-platform mobile applications with
                  modern UI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <h3 className="text-4xl font-bold mb-6 text-cyan-400">
              About Our Company
            </h3>

            <p className="text-gray-300 leading-relaxed mb-5">
              AKS-Web & Soft Solutions is focused on delivering innovative and
              secure technology solutions designed to help businesses grow in
              the digital era. Our team specializes in custom software
              engineering, modern UI/UX designing, cybersecurity implementation,
              blockchain-based systems, cloud integrations, and enterprise-grade
              web infrastructure.
            </p>

            <p className="text-gray-300 leading-relaxed mb-5">
              We believe in combining creativity, technical expertise, and
              strong security practices to provide scalable digital products
              that improve business performance and customer engagement.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Our mission is to empower organizations with secure and
              intelligent digital systems while maintaining transparency,
              professionalism, and long-term support.
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-gray-800 rounded-3xl p-10 shadow-2xl">
            <h4 className="text-2xl font-bold mb-6">
              Company Highlights
            </h4>

            <div className="space-y-5">
              {[
                {
                  title: 'Professional IT Services',
                  desc: 'Advanced digital products for businesses and startups.',
                },
                {
                  title: 'Secure Infrastructure',
                  desc: 'Security-focused architecture and protected systems.',
                },
                {
                  title: 'Blockchain Expertise',
                  desc: 'Token creation, smart contracts, blockchain deployment.',
                },
                {
                  title: '24/7 Technical Support',
                  desc: 'Reliable maintenance and technical guidance.',
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 mt-2" />

                  <div>
                    <h5 className="font-semibold text-lg">
                      {item.title}
                    </h5>

                    <p className="text-gray-400 text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="bg-gray-900/40 border-y border-gray-800 py-24"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-cyan-400 mb-4">
              Our Services
            </h3>

            <p className="text-gray-400 max-w-2xl mx-auto">
              We provide end-to-end technology services tailored for modern
              businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-black border border-gray-800 rounded-3xl p-8 hover:border-cyan-400 transition"
              >
                <h4 className="text-xl font-bold text-cyan-300 mb-3">
                  {service}
                </h4>

                <p className="text-gray-400 text-sm leading-relaxed">
                  Professional and scalable solutions with strong performance,
                  security, and modern technology standards.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers */}
      <section id="career" className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-gradient-to-r from-cyan-600/10 to-purple-600/10 border border-gray-800 rounded-3xl p-10 lg:p-14 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-4xl font-bold text-cyan-400 mb-5">
                We Are Hiring
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                AKS-Web & Soft Solutions is currently hiring passionate and
                creative professionals.
              </p>

              <div className="space-y-3 text-gray-300">
                <p>✔ Position: Digital Marketing Executive</p>
                <p>✔ Experience: Fresher / Experienced</p>
                <p>✔ Work Type: Remote / Office</p>
                <p>✔ Skills: SEO, Ads, Social Media, Branding</p>
              </div>
            </div>

            <div className="bg-black border border-gray-800 rounded-3xl p-8">
              <h4 className="text-2xl font-bold mb-6">
                Apply Now
              </h4>

              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-5 py-3 rounded-xl bg-gray-900 border border-gray-700 focus:border-cyan-400 outline-none"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-5 py-3 rounded-xl bg-gray-900 border border-gray-700 focus:border-cyan-400 outline-none"
                />

                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full px-5 py-3 rounded-xl bg-gray-900 border border-gray-700 focus:border-cyan-400 outline-none"
                />

                <textarea
                  rows={4}
                  placeholder="Tell us about your experience"
                  className="w-full px-5 py-3 rounded-xl bg-gray-900 border border-gray-700 focus:border-cyan-400 outline-none"
                />

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Updates */}
      <section className="bg-gray-900/40 border-y border-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold text-cyan-400 mb-6">
            Latest Updates & Announcements
          </h3>

          <div className="max-w-4xl mx-auto bg-black border border-gray-800 rounded-3xl p-8 text-left shadow-xl">
            <h4 className="text-2xl font-semibold mb-4">
              Company Expansion & New Services
            </h4>

            <p className="text-gray-400 leading-relaxed">
              AKS-Web & Soft Solutions is continuously expanding its digital
              infrastructure and service portfolio.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-gray-800 rounded-3xl p-12 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-4xl font-bold text-cyan-400 mb-5">
                Contact Us
              </h3>

              <p className="text-gray-300 leading-relaxed mb-8">
                Get in touch with our team for web development, software
                solutions, blockchain integration, cyber security services,
                or business consultation.
              </p>

              <div className="space-y-4 text-gray-300">
                <p>
                  <strong>Company:</strong> AKS-Web & Soft Solutions
                </p>

                <p>
                  <strong>Domain:</strong> akswebxsoft.solutions
                </p>

                <p>
                  <strong>Email:</strong> contact@akswebxsoft.solutions
                </p>
              </div>
            </div>

            <div className="bg-black border border-gray-800 rounded-3xl p-8">
              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-5 py-3 rounded-xl bg-gray-900 border border-gray-700 focus:border-cyan-400 outline-none"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-5 py-3 rounded-xl bg-gray-900 border border-gray-700 focus:border-cyan-400 outline-none"
                />

                <textarea
                  rows={5}
                  placeholder="Write your message"
                  className="w-full px-5 py-3 rounded-xl bg-gray-900 border border-gray-700 focus:border-cyan-400 outline-none"
                />

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black py-8 text-center text-gray-500 text-sm">
        <p>
          © 2026 AKS-Web & Soft Solutions. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}