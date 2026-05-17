'use client';
import React, { useState } from 'react';
import { FaLightbulb, FaRocket, FaTrophy, FaUsers } from 'react-icons/fa';

const steps = [
    {
        id: 1,
        icon: <FaRocket className="w-10 h-10" />,
        title: "Share Your Idea",
        desc: "Submit your startup idea in minutes and get instant feedback from the community.",
        color: "violet",
    },
    {
        id: 2,
        icon: <FaUsers className="w-10 h-10" />,
        title: "Build Your Team",
        desc: "Find co-founders, developers, designers & marketers who believe in your vision.",
        color: "blue",
    },
    {
        id: 3,
        icon: <FaLightbulb className="w-10 h-10" />,
        title: "Get Mentorship",
        desc: "Connect with successful founders and industry experts for 1-on-1 guidance.",
        color: "emerald",
    },
    {
        id: 4,
        icon: <FaTrophy className="w-10 h-10" />,
        title: "Launch & Grow",
        desc: "Access funding opportunities, tools, and resources to scale your startup.",
        color: "amber",
    },
];

export default function HowItWorks() {
    const [activeStep, setActiveStep] = useState(0);
    return (
        <section className="pt-10 bg-white dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight">How It Works</h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">
                        From idea to successful startup in 4 simple steps
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8 relative">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-violet-400 via-blue-400 to-emerald-400" />

                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            onClick={() => setActiveStep(index)}
                            className={`group relative bg-white dark:bg-gray-900 p-8 rounded-3xl border transition-all cursor-pointer hover:-translate-y-2 ${activeStep === index
                                    ? 'border-violet-600 shadow-xl shadow-violet-100 dark:shadow-none scale-105'
                                    : 'border-gray-300 dark:border-gray-800 hover:border-gray-200'
                                }`}
                        >
                            <div className={`w-16 h-16 flex items-center justify-center rounded-2xl mb-6 transition-colors
                ${activeStep === index ? `bg-${step.color}-100 text-${step.color}-600` : 'bg-gray-100 dark:bg-gray-800 text-gray-600'}`}>
                                {step.icon}
                            </div>

                            <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {step.desc}
                            </p>

                            <div className="absolute -top-3 -right-3 bg-white dark:bg-gray-900 text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-700">
                                {step.id}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}