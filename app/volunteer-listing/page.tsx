'use client';

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, User, Briefcase, MapPin, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';
import { Input } from "@/components/ui/input";
import { Toaster, toast } from 'sonner';

interface Volunteer {
    id: string;
    name: string;
    skills: string[];
    ranking: number;
    location: string;
    availability: string;
    bio: string;
    avatar: string;
    email: string;
}

const mockVolunteers: Volunteer[] = [
    {
        id: '1',
        name: 'Sankalp Saxena',
        skills: ['Teaching', 'Mentoring', 'Tutoring'],
        ranking: 4.8,
        location: 'New York, NY',
        availability: 'Weekends',
        bio: 'Experienced educator passionate about helping students succeed.',
        avatar: '/sankalp.jpg',
        email: 'alice.smith@example.com',
    },
    {
        id: '2',
        name: 'Vansh Singh',
        skills: ['Event Planning', 'Fundraising', 'Coordination'],
        ranking: 4.5,
        location: 'Los Angeles, CA',
        availability: 'Evenings',
        bio: 'Dedicated organizer with a proven track record of successful events.',
        avatar: '/vansh.jpg',
        email: 'bob.johnson@example.com',
    },
    {
        id: '3',
        name: 'Sakshi Arora',
        skills: ['Web Development', 'Graphic Design', 'Programming'],
        ranking: 4.9,
        location: 'Chicago, IL',
        availability: 'Flexible',
        bio: 'Creative and skilled developer eager to contribute to meaningful projects.',
        avatar: '/sakshi.jpg',
        email: 'charlie.brown@example.com',
    },
    {
        id: '4',
        name: 'Avantika Sharma',
        skills: ['Social Media Management', 'Content Creation'],
        ranking: 4.7,
        location: 'Houston, TX',
        availability: 'Weekdays',
        bio: 'Dynamic marketing professional with a passion for social impact.',
        avatar: '/avantika.jpg',
        email: 'diana.miller@example.com',
    },
    {
        id: '5',
        name: 'Priyanshu Singh',
        skills: ['Data Analysis', 'Research', 'Statistics'],
        ranking: 4.6,
        location: 'Phoenix, AZ',
        availability: 'Weekends',
        bio: 'Detail-oriented analyst committed to providing data-driven insights.',
        avatar: '/priyanshu.jpg',
        email: 'ethan.davis@example.com',
    },
    {
        id: '6',
        name: 'Vanshika Chahuan',
        skills: ['Writing', 'Editing', 'Proofreading'],
        ranking: 4.4,
        location: 'Philadelphia, PA',
        availability: 'Evenings',
        bio: 'Precise and articulate writer with a keen eye for detail.',
        avatar: '/vanshika.jpg',
        email: 'fiona.green@example.com',
    },
    {
        id: '7',
        name: 'Sanskar Saxena',
        skills: ['Photography', 'Videography', 'Visual Storytelling'],
        ranking: 5.0,
        location: 'San Antonio, TX',
        availability: 'Flexible',
        bio: 'Passionate visual storyteller dedicated to capturing impactful moments.',
        avatar: '/person1.jpeg',
        email: 'george.white@example.com',
    },
    {
        id: 'Parth Hirak',
        name: 'Hannah Black',
        skills: ['Translation', 'Interpretation', 'Language Teaching'],
        ranking: 4.8,
        location: 'San Diego, CA',
        availability: 'Weekdays',
        bio: 'Linguist with a strong command of multiple languages and cultures.',
        avatar: '/person2.jpg',
        email: 'hannah.black@example.com',
    },
];

const VolunteerCard = ({ volunteer }: { volunteer: Volunteer }) => {
    const [actionTaken, setActionTaken] = useState<boolean>(false);

    const handleSelectVolunteer = () => {
        console.log(`Sending email to ${volunteer.email} for selection...`);
        toast.success(`Volunteer ${volunteer.name} selected! Email sent.`, {
            duration: 5000,
        });
        setActionTaken(true);
    };

    const handleRejectVolunteer = () => {
        console.log(`Sending email to ${volunteer.email} for rejection...`);
        toast.error(`Volunteer ${volunteer.name} not selected. Email sent.`, {
            duration: 5000,
        });
        setActionTaken(true);
    };

    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="w-full"
        >
            <Card
                className={cn(
                    "bg-gradient-to-br from-white/10 to-white/5",
                    "backdrop-blur-lg border border-white/10",
                    "shadow-xl hover:shadow-2xl transition-all duration-300",
                    "overflow-hidden relative group"
                )}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />

                <CardContent className="p-6 space-y-4 relative z-10">
                    <div className="flex items-center gap-4">
                        <Avatar>
                            <AvatarImage src={volunteer.avatar} alt={volunteer.name} className="border-2 border-purple-500/50" />
                            <AvatarFallback className="bg-purple-500/20 text-purple-700">
                                {volunteer.name.substring(0, 2)}
                            </AvatarFallback>
                        </Avatar>
                        <div>
                            <h3 className="text-lg font-semibold black">{volunteer.name}</h3>
                            <div className="flex items-center gap-1 text-yellow-400">
                                <Star className="w-4 h-4" />
                                <span className="text-sm font-medium">{volunteer.ranking}</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-black-300">
                            <Briefcase className="w-4 h-4" />
                            <span className="text-sm font-medium">Skills:</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {volunteer.skills.map((skill) => (
                                <Badge
                                    key={skill}
                                    variant="secondary"
                                    className={cn(
                                        "bg-purple-500/20 text-black-300",
                                        "border border-purple-500/30",
                                        "hover:bg-purple-500/30 hover:text-black-200",
                                        "transition-colors duration-200 text-xs"
                                    )}
                                >
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-black-300">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm font-medium">Location:</span>
                        </div>
                        <p className="text-sm text-black-400">{volunteer.location}</p>
                    </div>

                    <div className="space-y-2">
                        <p className="text-sm font-medium text-black-300">Availability:</p>
                        <p className="text-sm text-black-400">{volunteer.availability}</p>
                    </div>

                    <p className="text-sm text-black-400 line-clamp-3">
                        {volunteer.bio}
                    </p>

                    {!actionTaken && (
                        <div className="flex gap-2 mt-4">
                            <Button
                                variant="outline"
                                onClick={handleSelectVolunteer}
                                className={cn(
                                    "w-1/2 bg-green-500/20 text-green-700",
                                    "border border-green-500/30",
                                    "hover:bg-green-500/30 hover:text-green-200",
                                    "transition-colors duration-200",
                                )}
                            >
                                Select
                            </Button>
                            <Button
                                variant="outline"
                                onClick={handleRejectVolunteer}
                                className={cn(
                                    "w-1/2 bg-red-500/20 text-red-700",
                                    "border border-red-500/30",
                                    "hover:bg-red-500/30 hover:text-red-200",
                                    "transition-colors duration-200",
                                )}
                            >
                                Reject
                            </Button>
                        </div>
                    )}
                </CardContent>
            </Card>
        </motion.div>
    );
};

const VolunteerListingPage = () => {
    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState('');

    const allSkills = Array.from(new Set(mockVolunteers.flatMap(v => v.skills)));

    const handleSkillToggle = (skill: string) => {
        setSelectedSkills(prevSkills =>
            prevSkills.includes(skill)
                ? prevSkills.filter(s => s !== skill)
                : [...prevSkills, skill]
        );
    };

    const filteredVolunteers = mockVolunteers.filter(volunteer => {
        const searchMatch = volunteer.name.toLowerCase().includes(searchQuery.toLowerCase());
        const skillMatch = selectedSkills.length === 0 || selectedSkills.every(skill => volunteer.skills.includes(skill));
        return searchMatch && skillMatch;
    });

    return (
        <div
            className={cn(
                "min-h-screen bg-gradient-to-br from-gray-900 via-white-900 to-black",
                "p-8"
            )}
        >
            <Toaster richColors />
            <div className="max-w-7xl mx-auto space-y-8">
                <div className="text-center space-y-4">
                    <h1
                        className={cn(
                            "text-4xl sm:text-5xl md:text-6xl font-bold",
                            "bg-clip-text text-transparent",
                            "bg-gradient-to-r from-purple-400 to-pink-600",
                            "drop-shadow-lg"
                        )}
                    >
                        Find a Volunteer
                    </h1>
                    <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
                        Connect with skilled volunteers ready to contribute their time and expertise.
                        Browse profiles, filter by skills, and select the perfect match for your NGO.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md mx-auto">
                    <Input
                        type="text"
                        placeholder="Search by name..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className={cn(
                            "bg-black/20 text-white border-purple-500/30",
                            "placeholder:text-gray-500",
                            "focus:ring-2 focus:ring-purple-500/50",
                            "flex-1"
                        )}
                    />
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">Filter by Skills</h2>
                    <div className="flex flex-wrap gap-3">
                        {allSkills.map((skill) => (
                            <Badge
                                key={skill}
                                variant="outline"
                                onClick={() => handleSkillToggle(skill)}
                                className={cn(
                                    "bg-black/20 text-white",
                                    "border border-purple-500/30",
                                    "cursor-pointer transition-all duration-200",
                                    "hover:bg-purple-500/20",
                                    selectedSkills.includes(skill)
                                        ? "bg-purple-500/30 text-purple-200 border-purple-500/50 shadow-lg"
                                        : "hover:text-purple-300 hover:border-purple-500/40"
                                )}
                            >
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </div>

                <div
                    className={cn(
                        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                        "w-full"
                    )}
                >
                    {filteredVolunteers.length > 0 ? (
                        filteredVolunteers.map((volunteer) => (
                            <VolunteerCard key={volunteer.id} volunteer={volunteer} />
                        ))
                    ) : (
                        <div className="text-center col-span-full">
                            <p className="text-gray-400 text-lg">No volunteers found matching your criteria.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default VolunteerListingPage;