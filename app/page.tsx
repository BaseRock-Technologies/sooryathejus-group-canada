"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import FooterSection from "@/components/footer"
import { ArrowRight, Building2, TrendingUp, Phone, Users, CheckCircle, Star, Globe } from "lucide-react"
import { Footer } from "react-day-picker"
import HeaderSection from "@/components/header"
import WhatsAppFloatingButton from "@/components/whatsapp-floating"
import HeroSection from "@/components/heroSection"
const getInitials = (name: string) => {
  return name.split(' ').map((n: string) => n[0]).join('').toUpperCase().slice(0, 2);
};

const getAvatarColor = (name: string) => {
  const colors = [
    'bg-blue-500', 'bg-green-500', 'bg-purple-500', 
    'bg-pink-500', 'bg-indigo-500', 'bg-orange-500'
  ];
  const hash = name.split('').reduce((a: number, b: string) => a + b.charCodeAt(0), 0);
  return colors[hash % colors.length];
};



export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <HeaderSection />

      {/* Hero Section */}
      <HeroSection
        title="Elevate Your Business"
        highlight="With Expert Solutions"
        description="Partner with Canada's leading business solutions provider. We deliver strategic digital marketing, real estate services, and business consulting."
        buttonText="Schedule Consultation"
        buttonLink="/contact"
        imageSrc="/heroSection/homePage.jpeg"
        imageAlt="Team collaboration"
        badgeText="Trusted by 500+ Canadian Businesses"
        badgeIcon={<Star className="w-4 h-4" />}
      />


      {/* Features Section */}
      <section className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-emerald-600 transition-colors duration-300">
              Why Choose Sooryathejus Group?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine innovation, expertise, and Canadian values to deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8" id="ourwork" >
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 group">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <TrendingUp className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                Digital Excellence
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Cutting-edge digital marketing strategies that drive measurable growth and ROI for your business.
              </p>
              <div className="space-y-3">
                {["SEO Optimization", "Social Media Marketing", "PPC Campaigns", "Analytics & Reporting"].map(
                  (item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform duration-300"
                      style={{ transitionDelay: `${idx * 100}ms` }}
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 group">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Building2 className="w-6 h-6 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                Real Estate Expertise
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive real estate solutions backed by deep market knowledge and professional service.
              </p>
              <div className="space-y-3">
                {["Residential Sales", "Commercial Properties", "Investment Consulting", "Property Management"].map(
                  (item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform duration-300"
                      style={{ transitionDelay: `${idx * 100}ms` }}
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 group">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Users className="w-6 h-6 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                Client-Focused Approach
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Personalized service and dedicated support to ensure your success is our top priority.
              </p>
              <div className="space-y-3">
                {["Dedicated Account Manager", "24/7 Support", "Custom Solutions", "Regular Reporting"].map(
                  (item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform duration-300"
                      style={{ transitionDelay: `${idx * 100}ms` }}
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-emerald-600">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Trusted by Industry Leaders</h2>
            <p className="text-emerald-100 text-lg">Our track record speaks for itself</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Active Clients", sublabel: "Across Canada" },
              { number: "98%", label: "Client Retention", sublabel: "Year over year" },
              { number: "$50M+", label: "Revenue Generated", sublabel: "For our clients" },
              { number: "15+", label: "Years Experience", sublabel: "In the market" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-emerald-100 font-medium mb-1">{stat.label}</div>
                <div className="text-emerald-200 text-sm">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-lg text-gray-600">Comprehensive solutions for modern businesses</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Marketing",
                description: "Drive growth with data-driven marketing strategies",
                features: ["SEO & SEM", "Social Media", "Content Marketing", "Analytics"],
                link: "/digital-marketing",
                icon: Globe,
                color: "blue",
              },
              {
                title: "Real Estate",
                description: "Navigate the Canadian property market with confidence",
                features: ["Residential Sales", "Commercial", "Investment", "Management"],
                link: "/real-estate",
                icon: Building2,
                color: "emerald",
              },
              {
                title: "Business Services",
                description: "Strategic consulting for sustainable growth",
                features: ["Consulting", "HR Solutions", "Financial", "Legal Support"],
                link: "/services",
                icon: TrendingUp,
                color: "purple",
              },
            ].map((service, index) => (
              <div key={index} className="group">
                <div className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200">
                  <div className={`w-12 h-12 bg-${service.color}-100 rounded-lg flex items-center justify-center mb-6`}>
                    <service.icon className={`w-6 h-6 text-${service.color}-600`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="text-sm text-gray-600">
                        • {feature}
                      </div>
                    ))}
                  </div>
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-emerald-600 font-medium text-sm hover:text-emerald-700 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">Trusted by businesses across Canada</p>
          </div>

          {/* All Reviews - Scrollable Section */}
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex space-x-6 pb-4" style={{ width: 'max-content' }}>
              {[
                {
                  name: "Yadunath Poduval",
                  testimonial:
                    "Exceptional website design expertise! Our new website not only looks great but also performs flawlessly across all devices.",
                  rating: 5,
                  avatar: null,
                },
                {
                  name: "Anjali s Krishna",
                  testimonial:
                    "Excellent website design services! They listened to our ideas and transformed them into a modern and functional website.",
                  rating: 5,
                  avatar: "/users/anjali.png",
                },
                {
                  name: "Edwin Johnson",
                  testimonial:
                    "Top-notch real estate agents! Knowledgeable, responsive, and dedicated to finding the perfect property for their clients.",
                  rating: 5,
                  avatar: "/users/edwin.png",
                },
                {
                  name: "Abhirami Nandakumar",
                  testimonial:
                    "Professional and creative marketing solutions! They helped boost our online presence and attract more clients.",
                  rating: 5,
                  avatar: null,
                },
                {
                  name: "Adhwaith Nandakumar",
                  testimonial:
                    "Best Real estate agency",
                  rating: 5,
                  avatar: "/users/Adhwaith.png",
                },
                {
                  name: "Pragati Patil",
                  testimonial:
                    "Good service",
                  rating: 5,
                  avatar: null,
                },
                {
                  name: "Sanchita Bose",
                  rating: 5,
                  avatar: null,
                },
                {
                  name: "vaisagh kodur",
                  rating: 5,
                  avatar: "/users/vaisagh.png",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-500 border border-transparent hover:border-gray-200 group flex-shrink-0"
                  style={{ minWidth: '350px', maxWidth: '350px' }}
                >
                  {/* Avatar and Name */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300 ${
                      testimonial.avatar ? 'bg-gray-200' : getAvatarColor(testimonial.name)
                    }`}>
                      {testimonial.avatar ? (
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                            if (nextElement) {
                              nextElement.style.display = 'flex';
                            }
                          }}
                        />
                      ) : null}
                      <div 
                        className={`w-full h-full flex items-center justify-center ${testimonial.avatar ? 'hidden' : 'flex'}`}
                        style={{ display: testimonial.avatar ? 'none' : 'flex' }}
                      >
                        <span className="text-white font-semibold text-sm">
                          {getInitials(testimonial.name)}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                        {testimonial.name}
                      </h4>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  {testimonial.testimonial && (
                    <p className="text-gray-700 leading-relaxed italic text-sm">
                      {testimonial.testimonial}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-6 bg-emerald-50 rounded-full px-8 py-4 border border-emerald-100">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 bg-emerald-100 rounded-full border-2 border-white flex items-center justify-center"
                    >
                      <Users className="w-4 h-4 text-emerald-600" />
                    </div>
                  ))}
                </div>
                <span className="text-emerald-700 font-medium text-sm">500+ Happy Clients</span>
              </div>
              <div className="w-px h-6 bg-emerald-200"></div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-emerald-700 font-medium text-sm">4.9/5 Average Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-10">
              Join hundreds of successful Canadian businesses who trust Sooryathejus Group for their growth needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-md font-medium transform hover:scale-105"
              >
                <Phone className="mr-2 w-4 h-4" />
                Schedule Free Consultation
              </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="relative px-8 py-3 rounded-md font-semibold border-2 border-white text-white bg-transparent shadow-lg transition-all duration-300
                  hover:bg-emerald-600  hover:text-white hover:shadow-2xl hover:scale-105"
                >        
                View Case Studies
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-8 text-gray-400 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>No long-term contracts</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>Free initial consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>Proven results</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhatsAppFloatingButton message="Hello! I need assistance with real estate." />  

                 <FooterSection />
     
    </div>
  )
}
