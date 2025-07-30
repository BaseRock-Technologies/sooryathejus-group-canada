"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle,
  Target,
 } from "lucide-react"
import FooterSection from "@/components/footer"

import HeaderSection from "@/components/header"
import HeroSection from "@/components/heroSection"
import { useLoading } from "@/components/context/loading-context"
import { useEffect } from "react"
import WhatsAppFloatingButton from "@/components/whatsapp-floating"
export default function ServicesPage() {
  const { startLoading, stopLoading } = useLoading()
  
  // Test the loading system
  useEffect(() => {
    startLoading("Loading services...", "page")
    
    // Simulate loading time
    const timer = setTimeout(() => {
      stopLoading()
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [startLoading, stopLoading])
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <HeaderSection />

      <HeroSection
        title="Business Services"
        highlight="For Growth & Success"
        description="Comprehensive business solutions designed to help Canadian companies thrive in today's competitive marketplace."
        buttonText="Explore Our Services"
        buttonLink="/services#services"
        imageSrc="/heroSection/servicepage.jpeg"
        imageAlt="Marketing Services"
        badgeText="Serving 200+ Canadian Businesses"
        badgeIcon={<Target className="w-4 h-4" />}
      />

      {/* Core Services */}
      <section className="py-16 md:py-24 px-6 bg-gray-50" id ="services">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-lg text-gray-600">Strategic solutions for every aspect of your business</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/services/appraisals.webp",
                title: "Appraisals",
                description: "Professional property valuation services for accurate market assessments and financial decisions.",
                features: ["Market Value Analysis", "Comparative Market Analysis", "Investment Property Appraisal", "Insurance Appraisals"],
                highlight: "Licensed appraisers",
              },
             {
              image: "/services/building-iot-sales.jpeg",
              title: "Building IOT Sales",
              description: "Specialized sales of smart buildings and IoT-integrated properties featuring cutting-edge automation, energy management, and connected living solutions.",
              features: ["Smart Home Integration", "IoT System Consultation", "Automated Building Features", "Connected Property Marketing"],
              highlight: "Next-generation smart properties",
            },
              {
                 image: "/services/buying-agent-services.webp",
                title: "Buying Agent Services",
                description: "Dedicated buyer representation to help you find and purchase your ideal property.",
                features: ["Property Search", "Negotiation Support", "Due Diligence", "Closing Assistance"],
                highlight: "98% client satisfaction",
              },
              {
                image: "/services/commercial-property.jpeg",
                title: "Commercial Property Buying & Sales",
                description: "Expert handling of commercial real estate transactions for businesses and investors.",
                features: ["Market Analysis", "Investment Evaluation", "Lease Negotiations", "Portfolio Management"],
                highlight: "$50M+ transactions",
              },
              {
                image: "/services/condo-rentals.jpeg",
                title: "Condo Rentals",
                description: "Complete condominium rental services from tenant screening to lease management.",
                features: ["Tenant Screening", "Lease Preparation", "Rent Collection", "Maintenance Coordination"],
                highlight: "95% occupancy rate",
              },
              {
                 image: "/services/first-time-buyer.jpg",
                title: "First-time Home Buyer Services",
                description: "Comprehensive guidance and support for first-time homebuyers throughout the process.",
                features: ["Buyer Education", "Financing Guidance", "Home Inspection Support", "Closing Assistance"],
                highlight: "1000+ first-time buyers",
              },
              {
                image: "/services/furnished-property.jpeg",
                title: "Furnished Property Rentals & Sales",
                description: "Specialized services for furnished properties including staging and premium rentals.",
                features: ["Professional Staging", "Furniture Coordination", "Premium Marketing", "Executive Rentals"],
                highlight: "30% faster sales",
              },
              {
                image: "/services/land-leasing.avif",
                title: "Land Leasing & Sales",
                description: "Expert land transaction services for agricultural, commercial, and development purposes.",
                features: ["Land Valuation", "Zoning Consultation", "Development Rights", "Lease Structuring"],
                highlight: "10,000+ acres managed",
              },
              {
                 image: "/services/luxury-property.jpg",
                title: "Luxury Property Buying & Sales",
                description: "Exclusive services for high-end residential and commercial luxury property transactions.",
                features: ["Discreet Marketing", "International Exposure", "White-glove Service", "Luxury Staging"],
                highlight: "$100M+ luxury sales",
              },
              {
                image: "/services/new-construction-sales.webp",
                title: "New Construction Sales & Leasing",
                description: "Specialized services for newly constructed properties and pre-construction sales.",
                features: ["Pre-construction Sales", "Builder Relations", "Progress Monitoring", "Warranty Support"],
                highlight: "200+ new builds sold",
              },
              {
                image: "/services/new-construction-services.jpg",
                title: "New Construction Services",
                description: "Comprehensive support for new construction projects from planning to completion.",
                features: ["Project Planning", "Contractor Coordination", "Quality Control", "Timeline Management"],
                highlight: "99% on-time completion",
              },
              {
               image: "/services/project-management.png",
                title: "Project Management",
                description: "Professional project management for real estate development and construction projects.",
                features: ["Timeline Planning", "Budget Management", "Contractor Oversight", "Quality Assurance"],
                highlight: "500+ projects managed",
              },
              {
                 image: "/services/property-buying-sales.jpeg",
                title: "Property Buying & Sales",
                description: "Full-service property transactions with expert guidance from listing to closing.",
                features: ["Market Analysis", "Pricing Strategy", "Marketing Campaign", "Negotiation Support"],
                highlight: "2000+ properties sold",
              },
              {
               image: "/services/property-exchanges.jpeg",
                title: "Property Exchanges",
                description: "Expert facilitation of property exchanges and 1031 like-kind exchanges for investors.",
                features: ["Exchange Structuring", "Timeline Coordination", "Tax Advantage Optimization", "Qualified Intermediary"],
                highlight: "Tax-deferred exchanges",
              },
              {
                 image: "/services/property-management.jpeg",
                title: "Property Management",
                description: "Comprehensive property management services for residential and commercial properties.",
                features: ["Tenant Management", "Maintenance Oversight", "Financial Reporting", "Legal Compliance"],
                highlight: "5000+ units managed",
              },
              {
                image: "/services/property-rentals.jpeg",
                title: "Property Rentals",
                description: "Full-service rental management from marketing vacant units to tenant relations.",
                features: ["Tenant Screening", "Rent Collection", "Maintenance Services", "Lease Administration"],
                highlight: "98% rent collection",
              },
              {
                 image: "/services/real-estate-development.webp",
                title: "Real Estate Development",
                description: "End-to-end real estate development services from concept to completion.",
                features: ["Site Analysis", "Feasibility Studies", "Permit Acquisition", "Construction Management"],
                highlight: "50+ developments",
              },
              {
               image: "/services/real-estate-investing.png",
                title: "Real Estate Investing",
                description: "Investment advisory services to help clients build and optimize real estate portfolios.",
                features: ["Investment Analysis", "Portfolio Strategy", "Market Research", "ROI Optimization"],
                highlight: "25% avg returns",
              },
              {
                image: "/services/real-estate-sales-management.webp",
                title: "Real Estate Sales Management",
                description: "Professional sales team management and training for real estate brokerages.",
                features: ["Team Training", "Sales Coaching", "Performance Management", "Lead Generation"],
                highlight: "300+ agents trained",
              },
              {
                image: "/services/relocation-assistance.webp",
                title: "Relocation Assistance",
                description: "Comprehensive relocation services for individuals and corporate clients moving to new areas.",
                features: ["Area Orientation", "School Information", "Corporate Packages", "Temporary Housing"],
                highlight: "1000+ relocations",
              },
              {
                image: "/services/sellers-agent.webp",
                title: "Seller's Agent Services",
                description: "Expert seller representation to maximize property value and ensure smooth transactions.",
                features: ["Property Valuation", "Marketing Strategy", "Showing Coordination", "Negotiation"],
                highlight: "Average 98% of list price",
              },
              {
                image: "/services/short-term-rentals.jpeg",
                title: "Short-term Property Rentals",
                description: "Specialized management of short-term vacation rentals and corporate housing.",
                features: ["Platform Management", "Guest Services", "Cleaning Coordination", "Revenue Optimization"],
                highlight: "90% occupancy rate",
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:scale-105 hover:-translate-y-2 hover:border-emerald-200 transition-all duration-300 cursor-pointer group"
              >
              <div className="w-full h-60 rounded-lg mb-3 overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-2 rounded-md">
                  {service.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Expertise</h2>
            <p className="text-lg text-gray-600">Specialized knowledge across key Canadian industries</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Technology", description: "Software, hardware, and tech startups", clients: "50+" },
              { title: "Healthcare", description: "Medical practices and healthcare organizations", clients: "30+" },
              { title: "Manufacturing", description: "Industrial and manufacturing companies", clients: "40+" },
              { title: "Retail", description: "E-commerce and brick-and-mortar stores", clients: "60+" },
              { title: "Professional Services", description: "Law firms, accounting, and consulting", clients: "35+" },
              { title: "Non-Profit", description: "Charitable organizations and foundations", clients: "25+" },
              { title: "Construction", description: "Contractors and construction companies", clients: "45+" },
              { title: "Hospitality", description: "Hotels, restaurants, and tourism", clients: "20+" },
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-white hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{industry.description}</p>
                <div className="text-emerald-600 font-medium text-sm">{industry.clients} clients served</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 px-6 bg-emerald-600" >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Service Process</h2>
            <p className="text-emerald-100 text-lg">A proven methodology for business success</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              {[
                { step: "01", title: "Discovery", description: "We understand your business needs and challenges" },
                {
                  step: "02",
                  title: "Analysis",
                  description: "Thorough analysis of your current situation and opportunities",
                },
                { step: "03", title: "Strategy", description: "Develop customized solutions and implementation plan" },
                {
                  step: "04",
                  title: "Implementation",
                  description: "Execute the plan with dedicated project management",
                },
                { step: "05", title: "Support", description: "Ongoing support and optimization for continued success" },
              ].map((item, index) => (
                <div key={index} className="text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-emerald-100 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Services?</h2>
            <p className="text-lg text-gray-600">The advantages of partnering with Sooryathejus Group</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description: "Experienced professionals with deep industry knowledge and proven track records.",
                metric: "15+ years avg experience",
              },
              {
                title: "Customized Solutions",
                description: "Tailored services that address your specific business needs and objectives.",
                metric: "100% custom approach",
              },
              {
                title: "Proven Results",
                description: "Track record of helping businesses achieve their goals and drive growth.",
                metric: "95% client satisfaction",
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 mb-6">{benefit.description}</p>
                <div className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-2 rounded-md inline-block">
                  {benefit.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Let's discuss how our comprehensive business services can help you achieve your goals and drive sustainable
            growth.
          </p>
          <Link href="/contact">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-md font-medium hover:scale-105">
            Schedule Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />

          </Button>
          </Link>
        </div>
      </section>
      <WhatsAppFloatingButton message="Hello! I need assistance with services." />  

     <FooterSection />
      
    </div>
  )
}
