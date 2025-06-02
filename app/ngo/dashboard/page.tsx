import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Search, Filter, MapPin, Briefcase, GraduationCap } from "lucide-react"

export default function NGODashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Heart className="h-6 w-6 text-rose-500" />
            <span>VolunteerConnect</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/ngo/dashboard" className="text-sm font-medium text-rose-500">
              Dashboard
            </Link>
            <Link href="/ngo/opportunities" className="text-sm font-medium hover:underline underline-offset-4">
              Opportunities
            </Link>
            <Link href="/ngo/applications" className="text-sm font-medium hover:underline underline-offset-4">
              Applications
            </Link>
            <Link href="/ngo/profile" className="text-sm font-medium hover:underline underline-offset-4">
              Profile
            </Link>
            <Link href="/ngo/messages" className="text-sm font-medium hover:underline underline-offset-4">
              Messages
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <div className="relative h-8 w-8 rounded-full overflow-hidden">
              <Image src="/placeholder.svg?height=32&width=32" alt="Profile" fill className="object-cover" />
            </div>
            <Link href="/logout">
              <Button variant="outline" size="sm">
                Log Out
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold">Welcome, Green Earth NGO!</h1>
              <p className="text-gray-500">Find and connect with volunteers who are passionate about your cause.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Active Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">5</p>
                </CardContent>
                <CardFooter>
                  <Link href="/ngo/opportunities">
                    <Button variant="outline" size="sm">
                      View All
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Pending Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">12</p>
                </CardContent>
                <CardFooter>
                  <Link href="/ngo/applications">
                    <Button variant="outline" size="sm">
                      Review
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Active Volunteers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">28</p>
                </CardContent>
                <CardFooter>
                  <Link href="/ngo/volunteers">
                    <Button variant="outline" size="sm">
                      Manage
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Find Volunteers</h2>
                <Link href="/ngo/create-opportunity">
                  <Button>Create New Opportunity</Button>
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  <Input placeholder="Search for skills or qualifications" className="pl-10" />
                </div>
                <div className="relative flex-1">
                  <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  <Input placeholder="Location" className="pl-10" />
                </div>
                <Button className="sm:w-auto">
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </Button>
              </div>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="all">All Volunteers</TabsTrigger>
                <TabsTrigger value="recommended">Recommended</TabsTrigger>
                <TabsTrigger value="nearby">Nearby</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Card key={i}>
                      <CardHeader className="p-4 pb-2">
                        <div className="flex items-start gap-4">
                          <div className="relative h-12 w-12 rounded-full overflow-hidden">
                            <Image
                              src={`/placeholder.svg?height=48&width=48&text=V${i}`}
                              alt={`Volunteer ${i}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <CardTitle className="text-lg">John Doe</CardTitle>
                            <CardDescription className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              <span>New York, USA</span>
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-0 pb-2">
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Briefcase className="h-4 w-4" />
                            <span>3 years experience</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <GraduationCap className="h-4 w-4" />
                            <span>Environmental Science</span>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                              Conservation
                            </span>
                            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                              Education
                            </span>
                            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                              Research
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 mt-2 line-clamp-2">
                            Passionate about environmental conservation with experience in community outreach and
                            education programs.
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4">
                        <div className="flex gap-2 w-full">
                          <Button variant="outline" className="flex-1">
                            View Profile
                          </Button>
                          <Button className="flex-1">Contact</Button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                <div className="flex justify-center">
                  <Button variant="outline">Load More</Button>
                </div>
              </TabsContent>

              <TabsContent value="recommended" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3].map((i) => (
                    <Card key={i}>
                      <CardHeader className="p-4 pb-2">
                        <div className="flex items-start gap-4">
                          <div className="relative h-12 w-12 rounded-full overflow-hidden">
                            <Image
                              src={`/placeholder.svg?height=48&width=48&text=R${i}`}
                              alt={`Recommended Volunteer ${i}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <CardTitle className="text-lg">Sarah Johnson</CardTitle>
                            <CardDescription className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              <span>Boston, USA</span>
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-0 pb-2">
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Briefcase className="h-4 w-4" />
                            <span>5 years experience</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <GraduationCap className="h-4 w-4" />
                            <span>Marine Biology</span>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                              Ocean Conservation
                            </span>
                            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                              Research
                            </span>
                            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                              Public Speaking
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 mt-2 line-clamp-2">
                            Experienced marine biologist with a passion for ocean conservation and public education.
                            Strong research background.
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4">
                        <div className="flex gap-2 w-full">
                          <Button variant="outline" className="flex-1">
                            View Profile
                          </Button>
                          <Button className="flex-1">Contact</Button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="nearby" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3, 4].map((i) => (
                    <Card key={i}>
                      <CardHeader className="p-4 pb-2">
                        <div className="flex items-start gap-4">
                          <div className="relative h-12 w-12 rounded-full overflow-hidden">
                            <Image
                              src={`/placeholder.svg?height=48&width=48&text=N${i}`}
                              alt={`Nearby Volunteer ${i}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <CardTitle className="text-lg">Michael Chen</CardTitle>
                            <CardDescription className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              <span>0.5 miles away</span>
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-0 pb-2">
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Briefcase className="h-4 w-4" />
                            <span>2 years experience</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <GraduationCap className="h-4 w-4" />
                            <span>Computer Science</span>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                              Web Development
                            </span>
                            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                              Teaching
                            </span>
                            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                              Data Analysis
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 mt-2 line-clamp-2">
                            Tech professional looking to use digital skills for environmental causes. Available weekends
                            and evenings.
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4">
                        <div className="flex gap-2 w-full">
                          <Button variant="outline" className="flex-1">
                            View Profile
                          </Button>
                          <Button className="flex-1">Contact</Button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row md:justify-between">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} VolunteerConnect. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm text-gray-500 hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
