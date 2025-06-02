"use client"
import placeholderImage from '../../public/placeholder.jpg';
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Building, User } from "lucide-react"
import { useRouter } from 'next/navigation'; 



export default function RegisterPage() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState("volunteer")
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    const type = searchParams.get("type")
    if (type === "volunteer" || type === "ngo") {
      setActiveTab(type)
    }
  }, [searchParams])

  const handleCreateAccount = () => {
    // for user creation. For this example, we'll just simulate success.
    setShowSuccessMessage(true);
    setTimeout(() => {
      router.push('/login'); // Redirect to login page after a short delay
    }, 2000); // Adjust the delay as needed
  };

  const handleCreateNgoAccount = () => {
    // for organization creation. For this example, we'll just simulate success.
    setShowSuccessMessage(true);
    setTimeout(() => {
      router.push('/login'); // Redirect to login page after a short delay
    }, 2000); // Adjust the delay as needed
  };

  return (
    <div
      className="flex min-h-screen flex-col"
      style={{
        backgroundImage: `url(${placeholderImage.src})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-1 items-center justify-center py-12 bg-black/20 backdrop-blur-sm"> {/* Optional: Add a dark overlay for better text readability */}
        <div className="w-full max-w-md px-4">
          <div className="flex flex-col items-center space-y-2 text-center mb-8">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white">
              <Heart className="h-6 w-6 text-rose-500" />
              <span>VolunteerConnect</span>
            </Link>
            <h1 className="text-2xl font-bold text-white">Create an account</h1>
            <p className="text-gray-300">Sign up to start your journey</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6 bg-white/10 rounded-md p-1">
              <TabsTrigger value="volunteer" className="flex items-center gap-2 justify-center text-white data-[state=active]:bg-rose-500 data-[state=active]:rounded-md data-[state=active]:text-white transition-colors duration-200">
                <User className="h-4 w-4" />
                <span>Volunteer</span>
              </TabsTrigger>
              <TabsTrigger value="ngo" className="flex items-center gap-2 justify-center text-white data-[state=active]:bg-rose-500 data-[state=active]:rounded-md data-[state=active]:text-white transition-colors duration-200">
                <Building className="h-4 w-4" />
                <span>NGO</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="volunteer">
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Volunteer Registration</CardTitle>
                  <CardDescription>Create your volunteer profile to connect with NGOs</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="volunteer-first-name">First Name</Label>
                      <Input id="volunteer-first-name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="volunteer-last-name">Last Name</Label>
                      <Input id="volunteer-last-name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="volunteer-email">Email</Label>
                    <Input id="volunteer-email" type="email" placeholder="m@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="volunteer-location">Location</Label>
                    <Input id="volunteer-location" placeholder="City, Country" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="volunteer-skills">Skills & Interests</Label>
                    <Textarea
                      id="volunteer-skills"
                      placeholder="Tell us about your skills, experience, and areas of interest"
                      className="min-h-[100px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="volunteer-password">Password</Label>
                    <Input id="volunteer-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="volunteer-confirm-password">Confirm Password</Label>
                    <Input id="volunteer-confirm-password" type="password" />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <Button className="w-full bg-rose-500 text-white hover:bg-rose-600" onClick={handleCreateAccount}>Create Account</Button>
                  {showSuccessMessage && <p className="text-green-500 text-center">Account created successfully! Redirecting to login...</p>}
                  <div className="text-center text-sm text-gray-700">
                    Already have an account?{" "}
                    <Link href="/login" className="text-rose-500 hover:underline">
                      Sign in
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="ngo">
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>NGO Registration</CardTitle>
                  <CardDescription>Create your organization profile to find dedicated volunteers</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="ngo-name">Organization Name</Label>
                    <Input id="ngo-name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ngo-email">Email</Label>
                    <Input id="ngo-email" type="email" placeholder="org@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ngo-location">Location</Label>
                    <Input id="ngo-location" placeholder="City, Country" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ngo-cause">Primary Cause</Label>
                    <Input id="ngo-cause" placeholder="e.g., Education, Environment, Healthcare" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ngo-description">Organization Description</Label>
                    <Textarea
                      id="ngo-description"
                      placeholder="Tell us about your organization, mission, and the volunteers you're looking for"
                      className="min-h-[100px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ngo-password">Password</Label>
                    <Input id="ngo-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ngo-confirm-password">Confirm Password</Label>
                    <Input id="ngo-confirm-password" type="password" />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <Button className="w-full bg-rose-500 text-white hover:bg-rose-600" onClick={handleCreateNgoAccount}>Create Organization Account</Button>
                  {showSuccessMessage && <p className="text-green-500 text-center">Account created successfully! Redirecting to login...</p>}
                  <div className="text-center text-sm text-gray-700">
                    Already have an account?{" "}
                    <Link href="/login" className="text-rose-500 hover:underline">
                      Sign in
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}