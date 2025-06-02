'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Toaster, toast } from 'sonner'; // Import Toaster and toast

interface NgoListing {
    name: string;
    location: string;
    volunteers: number;
    image?: string;
    rating: number;
    tags: Array<string>;
    reviews: Array<string>;
    joinDate?: string;
}

interface VolunteerProfileProps {
    photo?: string;
    rating?: number;
    record?: string;
    skills?: string[];
    contributions?: number;
    location?: string;
}

const volunteerProfile: VolunteerProfileProps = {
    photo: "/person1.jpeg",
    rating: 4.6,
    record: "Volunteered in 5 events.",
    skills: ["Teaching", "Event Organizing"],
    contributions: 7,
    location: "Greater Noida, India",
};

const ngosData: NgoListing[] = [
    { name: "Helping Hands Foundation", location: "Delhi", rating: 4.5, volunteers: 120, tags: ["Education", "Food"], reviews: ["Very helpful!", "Great cause."], image: "ngo2.avif", joinDate: "2025-05-15" },
    { name: "Green Earth Society", location: "Mumbai", rating: 4.0, volunteers: 90, tags: ["Environment", "Cleanups"], reviews: ["Amazing impact!", "Love the events."], joinDate: "2025-06-01", image: "ngo1.jpg" },
    { name: "Food For All", location: "Bangalore", rating: 4.8, volunteers: 200, tags: ["Hunger", "Outreach"], reviews: ["Feeding thousands!", "Wonderful mission."], image: "ngo3.jpeg", joinDate: "2018-09-15" },
    { name: "Smile India", location: "Delhi", rating: 4.2, volunteers: 75, tags: ["Child Care", "Education"], reviews: ["Kids loved it!", "Kind staff."], image: "ngo4.jpeg" },
    { name: "Hope Foundation", location: "Mumbai", rating: 4.6, volunteers: 130, tags: ["Healthcare", "Women"], reviews: ["Well-managed.", "Inspiring."], image: "ngo5.jpeg" },
    { name: "Nature Protectors", location: "Pune", rating: 4.3, volunteers: 80, tags: ["Forests", "Awareness"], reviews: ["Green future!", "Good workshops."], image: "natural protectors.jpg" },
    { name: "Vision Uplift", location: "Delhi", rating: 4.7, volunteers: 140, tags: ["Vision", "Rural Development"], reviews: ["Meaningful impact.", "Loved volunteering."], image: "vision.jpeg" },
    { name: "Care for All", location: "Hyderabad", rating: 4.0, volunteers: 60, tags: ["Healthcare", "Medical Camps"], reviews: ["Very efficient.", "Supportive team."], image: "care for all.jpeg" },
    { name: "Shakti", location: "Delhi", rating: 4.1, volunteers: 110, tags: ["Women Empowerment"], reviews: ["Empowering work.", "Great experience."] },
    { name: "Udaan", location: "Kolkata", rating: 4.4, volunteers: 150, tags: ["Youth", "Training"], reviews: ["Motivating!", "Life-changing."], image: "udaan.jpeg.jpg" },
    { name: "EcoLife", location: "Chennai", rating: 4.6, volunteers: 100, tags: ["Sustainability", "Plastic-Free"], reviews: ["Eco workshops!", "Learnt a lot."], image: "eco life.jpeg.jpg" },
    { name: "HelpBridge", location: "Bangalore", rating: 4.2, volunteers: 95, tags: ["Emergency Relief"], reviews: ["Timely help!", "Kind-hearted volunteers."], image: "help bridge.jpg" },
    { name: "Education for All", location: "Delhi", rating: 4.5, volunteers: 160, tags: ["Teaching", "Mentoring"], reviews: ["So rewarding!", "Well organized."], image: "education for all.jpg" },
    { name: "Mission Swachh", location: "Mumbai", rating: 4.3, volunteers: 120, tags: ["Clean India", "Hygiene"], reviews: ["Great drive!", "Participated with friends."], image: "Swachh Mission.jpg" },
    { name: "Sparsh Foundation", location: "Hyderabad", rating: 4.4, volunteers: 90, tags: ["Elderly Care", "Shelter"], reviews: ["Emotional work.", "Supportive staff."], image: "sparsh foundation.jpg" },
    { name: "Rural Rise", location: "Bangalore", rating: 4.6, volunteers: 140, tags: ["Farming", "Village Aid"], reviews: ["Important cause.", "Great leadership."], image: "rural rise.jpeg.jpg" },
    { name: "Pathshala", location: "Delhi", rating: 4.9, volunteers: 210, tags: ["Education", "Books"], reviews: ["Incredible initiative!", "Loved the kids."], image: "pathshala.jpg" },
    { name: "Youth Forward", location: "Chennai", rating: 4.3, volunteers: 100, tags: ["Job Training", "Soft Skills"], reviews: ["Useful program.", "Fun and useful."], image: "youth forward.jpeg.jpg" },
    { name: "Aarogya Setu", location: "Pune", rating: 4.2, volunteers: 85, tags: ["Health Camps"], reviews: ["Very effective.", "Served many."], image: "aarogya setu.jpeg.jpg" },
    { name: "Aasha", location: "Delhi", rating: 4.7, volunteers: 170, tags: ["Widow Aid", "Legal Help"], reviews: ["Hopeful mission!", "Legal aid was useful."], image: "aasha.jpg" },
];

const previouslyJoinedNGOs = [ngosData[0]];
const recommendedNGOs = ngosData.filter(ngo => !previouslyJoinedNGOs.includes(ngo) && ngo.tags.some(tag => previouslyJoinedNGOs[0].tags.includes(tag)));
const normalizeKey = (name: string) => name.trim().toLowerCase();
const rawPersonalRatings = { "Helping Hands Foundation": 4.8, "Green Earth Society": 4.2, "EcoLife": 3.6 };
const personalRatings = Object.fromEntries(Object.entries(rawPersonalRatings).map(([key, value]) => [normalizeKey(key), value]));
const rawPersonalRecord = { "Helping Hands Foundation": "Volunteered 3 times in 2024.", "Green Earth Society": "Participated in 2 cleanup events." };
const personalRecordByNGO = Object.fromEntries(Object.entries(rawPersonalRecord).map(([key, value]) => [normalizeKey(key), value]));

export default function NGOListingPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [volunteerNotes, setVolunteerNotes] = useState<{ [key: string]: string }>({});

    const handleNoteChange = (ngoName: string, note: string) => {
        setVolunteerNotes((prev) => ({ ...prev, [ngoName]: note }));
    };

    const filteredNGOs = ngosData.filter((ngo) => {
        const lowerSearch = searchTerm.toLowerCase();
        return (
            ngo.name.toLowerCase().includes(lowerSearch) ||
            ngo.location.toLowerCase().includes(lowerSearch) ||
            ngo.tags.some((tag) => tag.toLowerCase().includes(lowerSearch))
        );
    });

    const upcomingEngagements = ngosData.filter(ngo => ngo.joinDate).sort((a, b) => new Date(a.joinDate!).getTime() - new Date(b.joinDate!).getTime());

    const handleContact = (ngoName: string) => {
        toast.success(`Message sent to ${ngoName}!`, {
            duration: 5000,
        });
    };

    const renderNGOCard = (ngo: NgoListing, index: number) => {
        const normalizedName = normalizeKey(ngo.name);
        return (
            <Card key={index} className="shadow-md border border-gray-200">
                <CardContent className="p-4">
                    <img
                        src={ngo.image || "/placeholder.jpg"}
                        alt={ngo.name}
                        className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <h2 className="text-xl font-semibold text-gray-900">{ngo.name}</h2>
                    <p className="text-sm text-gray-600">{ngo.location}</p>
                    <p className="text-sm text-gray-500 mt-1">
                        <span className="font-medium">{ngo.rating} ★</span> | {ngo.volunteers} volunteers
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                        {ngo.tags.map((tag, i) => (
                            <Badge key={i} className="bg-gray-100 text-gray-800 border border-gray-300 text-sm px-2">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                    <p className="text-sm text-gray-700 mt-4 italic">"{ngo.reviews[0]}"</p>
                    {personalRatings[normalizedName] !== undefined && (
                        <p className="text-sm text-green-700 mt-2">
                            <strong>Your Rating:</strong> {personalRatings[normalizedName]} ★
                        </p>
                    )}
                    {personalRecordByNGO[normalizedName] && (
                        <p className="text-sm text-blue-800 mt-1">
                            <strong>Your Record:</strong> {personalRecordByNGO[normalizedName]}
                        </p>
                    )}
                    {ngo.joinDate && (
                        <p className="text-sm text-orange-700 mt-2">
                            <strong>Join Date:</strong> {ngo.joinDate}
                        </p>
                    )}
                    <div className="mt-3">
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Your Notes:</label>
                        <Textarea
                            placeholder={`Write notes for ${ngo.name}...`}
                            value={volunteerNotes[ngo.name] || ""}
                            onChange={(e) => handleNoteChange(ngo.name, e.target.value)}
                            className="w-full border border-gray-300 focus:border-black"
                        />
                    </div>
                    <Button
                        className="w-full mt-4 bg-black text-white hover:bg-gray-800"
                        onClick={() => handleContact(ngo.name)} // Added onClick handler
                    >
                        Contact
                    </Button>
                </CardContent>
            </Card>
        );
    };

    return (
        <div className="min-h-screen py-10 px-4 bg-cover bg-center" style={{ backgroundImage: "url('/bg-ngo.jpg')" }}>
            <Toaster richColors /> {/* Added Toaster here */}
            <div className="max-w-7xl mx-auto bg-white/80 p-6 rounded-2xl shadow-lg">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900 text-left">NGO Listings</h1>
                    </div>
                    <div className="bg-white p-4 rounded-md shadow-md border border-gray-200 w-64 text-left">
                        {volunteerProfile.photo && (
                            <img
                                src={volunteerProfile.photo}
                                alt="Volunteer Photo"
                                className="w-20 h-20 rounded-full object-cover shadow-sm mb-3"
                            />
                        )}
                        {volunteerProfile.rating !== undefined && (
                            <p className="text-lg text-indigo-700 font-semibold mb-2">
                                Rating: {volunteerProfile.rating} ★
                            </p>
                        )}
                        {volunteerProfile.skills && volunteerProfile.skills.length > 0 && (
                            <p className="text-sm text-gray-700 mb-2">
                                Skills: <span className="font-medium">{volunteerProfile.skills.slice(0, 2).join(', ')}
                                    {volunteerProfile.skills.length > 2 && <span className="text-gray-700">...</span>}</span>
                            </p>
                        )}
                        {volunteerProfile.contributions !== undefined && (
                            <p className="text-sm text-gray-600 mb-2">
                                Contributions: <span className="font-medium">{volunteerProfile.contributions}</span>
                            </p>
                        )}
                        {volunteerProfile.location && (
                            <p className="text-sm text-gray-600 mb-2">
                                Location: <span className="font-medium">{volunteerProfile.location}</span>
                            </p>
                        )}
                        {volunteerProfile.record && (
                            <p className="text-sm text-gray-600 italic">Record: <span className="font-medium">{volunteerProfile.record}</span></p>
                        )}
                    </div>
                </div>

                <Input
                    placeholder="Search NGOs by name, tag, or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full border-gray-300 focus:border-black mb-8"
                />

                {/* Upcoming Volunteer Engagements (Timetable) */}
                {upcomingEngagements.length > 0 && (
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Volunteer Timetable</h2>
                        <ul>
                            {upcomingEngagements.map((engagement) => (
                                <li key={engagement.name} className="py-2 border-b border-gray-200">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{engagement.name}</h3>
                                            <p className="text-sm text-gray-600">{engagement.location}</p>
                                        </div>
                                        {engagement.joinDate && (
                                            <div className="text-right">
                                                <p className="text-sm text-indigo-700 font-semibold">Join Date:</p>
                                                <p className="text-sm text-gray-700">{engagement.joinDate}</p>
                                            </div>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Search Results */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {filteredNGOs.map(renderNGOCard)}
                </div>

                {/* Previously Joined NGOs */}
                <div className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Previously Joined NGOs</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {previouslyJoinedNGOs.map(renderNGOCard)}
                    </div>
                </div>

                {/* Recommended NGOs */}
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recommended for You</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {recommendedNGOs.length > 0 ? (
                            recommendedNGOs.map(renderNGOCard)
                        ) : (
                            <p className="text-gray-600">No recommendations found.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}