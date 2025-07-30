"use client"

import Link from "next/link"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Building2, Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import FooterSection from "@/components/footer"
import HeaderSection from "@/components/header"
import WhatsAppFloatingButton from "@/components/whatsapp-floating"


import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useState } from "react";

// Validation Schema
const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message should be at least 10 characters"),
})



type FormData = z.infer<typeof formSchema>

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })
const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
  setLoading(true);
  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        message: data.message,
        phone:data.phone,
        service: data.service,
      }),
    });

    if (response.ok) {
      toast.success("Message sent successfully!");
      reset();
    } else {
      toast.error("Failed to send message.");
    }
  } catch (err) {
    console.error(err);
    toast.error("Something went wrong.");
  } finally {
    setLoading(false);
  }
};



  return (
    <div className="min-h-screen bg-white">
      <HeaderSection />
      <ToastContainer position="top-right" autoClose={3000} />



      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Get in touch with <span className="text-emerald-600">Our Experts</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            Ready to take your business to the next level?<br></br> Contact our team of experts and let's discuss how we can help you achieve your goals.
          </p>
        </div>
      </section>


      {/* Contact Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto grid lg:grid-cols-5 gap-12 max-w-6xl">

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Let's Connect</h2>
              <p className="text-gray-600">Ready to transform your business? Get in touch with our experts today.</p>
            </div>

            <div className="space-y-4">
              {[{
                icon: MapPin,
                title: "Visit Us",
                details: "90 Burnhamthorpe Rd W 14th Floor Suite 1412, Mississauga, ON L5B 0H9, Canada",
              }, {
                icon: Phone,
                title: "Call Us",
                details: "+1 289-374-6421"
              }, {
                icon: Mail,
                title: "Email Us",
                details: "info@sooryathejusgroup.ca"
              }, {
                icon: Clock,
                title: "Business Hours",
                details: "Mon-Fri: 11AM-5PM"
              }].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm border hover:shadow-md transition-all group">
                  <div className="w-10 min-w-[2.5rem] h-10 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition">
                    <item.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-100">
              <h3 className="font-semibold text-emerald-900 mb-3">Quick Response Guarantee</h3>
              {["Response within 2 hours", "Free consultation call", "No obligation quote"].map((text, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <Input {...register("firstName")} placeholder="John" />
                    {errors.firstName && <p className="text-sm text-red-500 mt-1">{errors.firstName.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <Input {...register("lastName")} placeholder="Doe" />
                    {errors.lastName && <p className="text-sm text-red-500 mt-1">{errors.lastName.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <Input type="email" {...register("email")} placeholder="john@company.com" />
                  {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <Input type="tel" {...register("phone")} placeholder="+1 (416) 123-4567" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest *</label>
                    <select
                      {...register("service")}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="">Select a service</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Real Estate">Real Estate</option>
                      <option value="Business Consulting">Business Consulting</option>
                      <option value="Other Services">Other Services</option>
                    </select>
                    {errors.service && <p className="text-sm text-red-500 mt-1">{errors.service.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <Textarea rows={4} {...register("message")} placeholder="Tell us about your project..." />
                  {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 font-medium flex items-center justify-center"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send className="ml-2 w-4 h-4" />
                </Button>

              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-6 pb-16 pt-8">
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-4 text-emerald-700 text-center">Our Office Location</h3>
          <p className="text-center text-gray-600 mb-6">Visit us at our head office. Find us on the map below:</p>
          <div className="w-full h-72 rounded-xl overflow-hidden border shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.7460819287976!2d-79.63675599999999!3d43.591005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b477811261c51%3A0x3eccd8a53240a779!2sSooryathejus%20Group!5e0!3m2!1sen!2sin!4v1752855350296!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
            ></iframe>
          </div>
        </div>
      </section>
      <WhatsAppFloatingButton message="Hello! I need assistance with real estate." />  

      {/* Footer */}
      <FooterSection />
    </div>
  )
}
