import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Search, MapPin, Calendar, Clock, Filter, Building } from "lucide-react"

export default function VolunteerDashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Heart className="h-6 w-6 text-rose-500" />
            <span>VolunteerConnect</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/volunteer/dashboard" className="text-sm font-medium text-rose-500">
              Dashboard
            </Link>
            <Link href="/volunteer/applications" className="text-sm font-medium hover:underline underline-offset-4">
              My Applications
            </Link>
            <Link href="/volunteer/profile" className="text-sm font-medium hover:underline underline-offset-4">
              Profile
            </Link>
            <Link href="/volunteer/messages" className="text-sm font-medium hover:underline underline-offset-4">
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
              <h1 className="text-3xl font-bold">Welcome, Volunteer!</h1>
              <p className="text-gray-500">Find and apply to volunteer opportunities that match your interests.</p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  <Input placeholder="Search for NGOs or opportunities" className="pl-10" />
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

            <Tabs defaultValue="recommended" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="recommended">Recommended</TabsTrigger>
                <TabsTrigger value="nearby">Nearby</TabsTrigger>
                <TabsTrigger value="recent">Recently Added</TabsTrigger>
              </TabsList>

              <TabsContent value="recommended" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Card key={i} className="overflow-hidden">
                      <div className="aspect-video w-full overflow-hidden">
                        <Image
                          src={`/placeholder.svg?height=200&width=400&text=NGO+${i}`}
                          alt={`NGO ${i}`}
                          width={400}
                          height={200}
                          className="object-cover w-full"
                        />
                      </div>
                      <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-lg">Environmental Cleanup Project</CardTitle>
                        <CardDescription className="flex items-center gap-1">
                          <Building className="h-3 w-3" />
                          <span>Green Earth NGO</span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0 pb-2">
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <MapPin className="h-4 w-4" />
                            <span>Delhi, India</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Calendar className="h-4 w-4" />
                            <span>Starts June 15, 2025</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Clock className="h-4 w-4" />
                            <span>10 hours/week</span>
                          </div>
                          <p className="text-sm text-gray-700 mt-2 line-clamp-2">
                            Join our team to help clean up local parks and waterways. No experience necessary, just a
                            passion for the environment!
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4">
                        <Button className="w-full">Apply Now</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                <div className="flex justify-center">
                  <Button variant="outline">Load More</Button>
                </div>
              </TabsContent>

              <TabsContent value="nearby" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="overflow-hidden">
                      <div className="aspect-video w-full overflow-hidden">
                        <Image
                          src={`/placeholder.svg?height=200&width=400&text=Nearby+${i}`}
                          alt={`Nearby NGO ${i}`}
                          width={400}
                          height={200}
                          className="object-cover w-full"
                        />
                      </div>
                      <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-lg">Local Food Bank Assistance</CardTitle>
                        <CardDescription className="flex items-center gap-1">
                          <Building className="h-3 w-3" />
                          <span>Community Helpers</span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0 pb-2">
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <MapPin className="h-4 w-4" />
                            <span>0.8 miles away</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Calendar className="h-4 w-4" />
                            <span>Ongoing opportunity</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Clock className="h-4 w-4" />
                            <span>Flexible hours</span>
                          </div>
                          <p className="text-sm text-gray-700 mt-2 line-clamp-2">
                            Help sort and distribute food to those in need in your local community. Make a direct impact
                            in your neighborhood!
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4">
                        <Button className="w-full">Apply Now</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="recent" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3, 4].map((i) => (
                    <Card key={i} className="overflow-hidden">
                      <div className="aspect-video w-full overflow-hidden">
                        <Image
                          src={`/placeholder.svg?height=200&width=400&text=Recent+${i}`}
                          alt={`Recent NGO ${i}`}
                          width={400}
                          height={200}
                          className="object-cover w-full"
                        />
                      </div>
                      <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-lg">Digital Literacy Program</CardTitle>
                        <CardDescription className="flex items-center gap-1">
                          <Building className="h-3 w-3" />
                          <span>Tech For All</span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0 pb-2">
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <MapPin className="h-4 w-4" />
                            <span>Remote</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Calendar className="h-4 w-4" />
                            <span>Posted 2 days ago</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Clock className="h-4 w-4" />
                            <span>5 hours/week</span>
                          </div>
                          <p className="text-sm text-gray-700 mt-2 line-clamp-2">
                            Teach basic computer skills to seniors and underserved communities. Help bridge the digital
                            divide!
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4">
                        <Button className="w-full">Apply Now</Button>
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
