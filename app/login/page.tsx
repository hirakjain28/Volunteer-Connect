'use client';

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Card, CardContent, CardDescription, CardFooter,
    CardHeader, CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Tabs, TabsContent, TabsList, TabsTrigger
} from "@/components/ui/tabs";
import { Heart, Building, User } from "lucide-react";

export default function LoginPage() {
    const [volunteerEmail, setVolunteerEmail] = useState('');
    const [volunteerPassword, setVolunteerPassword] = useState('');
    const [ngoEmail, setNgoEmail] = useState('');
    const [ngoPassword, setNgoPassword] = useState('');

    const loginUser = async (email: string, password: string) => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
                alert("Login successful!");
                // Store the role in local storage
                localStorage.setItem('userRole', data.role);
                // Redirect based on role
                if (data.role === 'volunteer') {
                    window.location.href = '/explore-ngos'; //  Replace with your actual volunteer dashboard URL
                    console.log("Volunteer Login");
                } else if (data.role === 'ngo') {
                    window.location.href = '/volunteer-listing';  // Replace with your actual NGO dashboard URL
                    console.log("NGO Login");
                }
            } else {
                alert(data.message || "Login failed");
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("An error occurred while logging in");
        }
    };

    return (
        <div className="flex min-h-screen flex-col bg-[url('/placeholder.jpg')] bg-cover bg-center">
            <div className="flex flex-1 items-center justify-center py-12">
                <div className="w-full max-w-md px-4">
                    <div className="flex flex-col items-center space-y-2 text-center mb-8">
                        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white">
                            <Heart className="h-6 w-6 text-rose-500" />
                            <span>VolunteerConnect</span>
                        </Link>
                        <h1 className="text-2xl font-bold text-white">Welcome back</h1>
                        <p className="text-white-500">Sign in to your account to continue</p>
                    </div>

                    <Tabs defaultValue="volunteer" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 mb-6 bg-gray-100/50 rounded-md p-1">
                            <TabsTrigger value="volunteer" className="flex items-center gap-2 justify-center text-white data-[state=active]:bg-white data-[state=active]:text-gray-900 rounded-md p-2">
                                <User className="h-4 w-4" />
                                <span>Volunteer</span>
                            </TabsTrigger>
                            <TabsTrigger value="ngo" className="flex items-center gap-2 justify-center text-white data-[state=active]:bg-white data-[state=active]:text-gray-900 rounded-md p-2">
                                <Building className="h-4 w-4" />
                                <span>NGO</span>
                            </TabsTrigger>
                        </TabsList>

                        {/* Volunteer Login */}
                        <TabsContent value="volunteer">
                            <Card className="bg-white/80 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle>Volunteer Login</CardTitle>
                                    <CardDescription>Enter your credentials to access your volunteer account</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="volunteer-email">Email</Label>
                                        <Input
                                            id="volunteer-email"
                                            type="email"
                                            placeholder="m@example.com"
                                            value={volunteerEmail}
                                            onChange={(e) => setVolunteerEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <Label htmlFor="volunteer-password">Password</Label>
                                            <Link href="/forgot-password" className="text-sm text-rose-500 hover:underline">
                                                Forgot password?
                                            </Link>
                                        </div>
                                        <Input
                                            id="volunteer-password"
                                            type="password"
                                            value={volunteerPassword}
                                            onChange={(e) => setVolunteerPassword(e.target.value)}
                                        />
                                    </div>
                                </CardContent>
                                <CardFooter className="flex flex-col space-y-4">
                                    <Button className="w-full" onClick={() => loginUser(volunteerEmail, volunteerPassword)}>
                                        Sign In
                                    </Button>
                                    <div className="text-center text-sm text-gray-700">
                                        Don&apos;t have an account?{" "}
                                        <Link href="/register?type=volunteer" className="text-rose-500 hover:underline">
                                            Sign up
                                        </Link>
                                    </div>
                                </CardFooter>
                            </Card>
                        </TabsContent>

                        {/* NGO Login */}
                        <TabsContent value="ngo">
                            <Card className="bg-white/80 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle>NGO Login</CardTitle>
                                    <CardDescription>Enter your credentials to access your organization account</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="ngo-email">Email</Label>
                                        <Input
                                            id="ngo-email"
                                            type="email"
                                            placeholder="org@example.com"
                                            value={ngoEmail}
                                            onChange={(e) => setNgoEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <Label htmlFor="ngo-password">Password</Label>
                                            <Link href="/forgot-password" className="text-sm text-rose-500 hover:underline">
                                                Forgot password?
                                            </Link>
                                        </div>
                                        <Input
                                            id="ngo-password"
                                            type="password"
                                            value={ngoPassword}
                                            onChange={(e) => setNgoPassword(e.target.value)}
                                        />
                                    </div>
                                </CardContent>
                                <CardFooter className="flex flex-col space-y-4">
                                    <Button className="w-full" onClick={() => loginUser(ngoEmail, ngoPassword)}>
                                        Sign In
                                    </Button>
                                    <div className="text-center text-sm text-gray-700">
                                        Don&apos;t have an account?{" "}
                                        <Link href="/register?type=ngo" className="text-rose-500 hover:underline">
                                            Sign up
                                        </Link>
                                    </div>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}