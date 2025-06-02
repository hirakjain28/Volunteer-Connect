import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, Users, MapPin, Building, ArrowRight } from "lucide-react"
// import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Heart className="h-6 w-6 text-rose-500" />
            <span>VolunteerConnect</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
              How It Works
            </Link>
            <Link href="#featured-ngos" className="text-sm font-medium hover:underline underline-offset-4">
              Featured NGOs
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:underline underline-offset-4">
              Testimonials
            </Link>
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About Us
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link href="/register">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-rose-50 to-indigo-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Connect with causes that matter to you
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Join our platform to find volunteer opportunities with NGOs in your area or register your organization
                  to find dedicated volunteers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/register?type=volunteer">
                    <Button size="lg" className="w-full sm:w-auto">
                      Join as Volunteer
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/register?type=ngo">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Register NGO
                      <Building className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.jpg?height=800&width=1200"
                  alt="Volunteers working together"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It Works</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform makes it easy to connect volunteers with NGOs that need their help.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-rose-100 p-4">
                  <Users className="h-6 w-6 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold">Create Your Profile</h3>
                <p className="text-center text-gray-500">
                  Sign up as a volunteer or an NGO and create your detailed profile to showcase your skills or
                  organization.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-indigo-100 p-4">
                  <MapPin className="h-6 w-6 text-indigo-500" />
                </div>
                <h3 className="text-xl font-bold">Find Your Match</h3>
                <p className="text-center text-gray-500">
                  Volunteers can search for NGOs by location, cause, or skills needed. NGOs can browse volunteer
                  profiles.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-emerald-100 p-4">
                  <Heart className="h-6 w-6 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold">Make an Impact</h3>
                <p className="text-center text-gray-500">
                  Connect, collaborate, and contribute to meaningful causes that create positive change in communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured NGOs Section */}
        <section id="featured-ngos" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured NGOs</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover some of the amazing organizations making a difference.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md"
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src={`/house.avif?height=300&width=500&text=NGO+${i}`}
                      alt={`Featured NGO ${i}`}
                      width={500}
                      height={300}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">NGO Organization </h3>
                    <p className="mt-2 text-sm text-gray-500 line-clamp-3">
                      Working to make a difference in communities through sustainable development and education
                      initiatives.
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-500">Delhi, India</span>
                    </div>
                    <Button variant="outline" className="mt-4 w-full">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Link href="/search">
                <Button variant="outline" size="lg">
                  Explore All NGOs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Users Say</h2>
        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Hear from volunteers and NGOs who have connected through our platform.
        </p>
      </div>
    </div>
    <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 md:grid-cols-2"> {/* Changed to grid-cols-3 on large screens */}
      {/* Parth Chandana Testimonial */}
      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="relative rounded-full overflow-hidden ring-4 ring-white shadow-md" style={{ height: '300px', width: '700px' }}>
            <Image
              src="/person2.jpg?height=100&width=100"
              alt="Volunteer testimonial"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold">Parth Chandana</h3>
            <p className="text-sm text-gray-500">Volunteer</p>
            <p className="mt-2 text-gray-700">
              "I found the perfect NGO that aligned with my passion for environmental conservation. The platform
              made it easy to search by location and connect with organizations in my area."
            </p>
          </div>
        </div>
      </div>

      {/* Sanskar Saxena Testimonial */}
      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="relative rounded-full overflow-hidden ring-4 ring-white shadow-md" style={{ height: '300px', width: '700px' }}>
            <Image
              src="/person4.jpg?height=500&width=500"
              alt="NGO testimonial"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold">Sanskar Saxena</h3>
            <p className="text-sm text-gray-500">NGO Director</p>
            <p className="mt-2 text-gray-700">
              "As a small NGO, finding dedicated volunteers was always a challenge. This platform has
              transformed our recruitment process, allowing us to find skilled volunteers who are passionate
              about our cause."
            </p>
          </div>
        </div>
      </div>

      {/* Hirak Jain Testimonial */}
      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="relative rounded-full overflow-hidden ring-4 ring-white shadow-md" style={{ height: '300px', width: '700px' }}>
            <Image
              src="/person3.jpg?height=500&width=500"  // Added image source
              alt="Volunteer testimonial"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold">Hirak Jain</h3>
            <p className="text-sm text-gray-500">Volunteer</p> {/* Changed Role if necessary */}
            <p className="mt-2 text-gray-700">
              "Volunteering has been an incredibly rewarding experience.  This platform connected me with a local
              organization where I could use my skills to make a real difference in my community."
            </p>
          </div>
          </div>
          </div>
          </div>
          </div>
          </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-rose-500 to-indigo-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Make a Difference?</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join our community of volunteers and NGOs working together to create positive change.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register?type=volunteer">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    Join as Volunteer
                  </Button>
                </Link>
                <Link href="/register?type=ngo">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-indigo-600"
                  >
                    Register NGO
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-slate-50">
        <div className="container flex flex-col gap-6 py-8 px-4 md:px-6 md:flex-row md:justify-between">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <Heart className="h-6 w-6 text-rose-500" />
              <span>VolunteerConnect</span>
            </Link>
            <p className="text-sm text-gray-500">Connecting volunteers with NGOs to create positive change.</p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Platform</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:underline">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:underline">
                    Featured NGOs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:underline">
                    Search
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:underline">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:underline">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:underline">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:underline">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:underline">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row md:justify-between">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} VolunteerConnect. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <span className="sr-only">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}