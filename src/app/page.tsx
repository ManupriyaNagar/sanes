"use client";

import React, { useState } from 'react';
import {
  Facebook,
  Instagram,
} from 'lucide-react';

// Components
import Modal from '../components/Modal';
import TeamCarousel from '../components/TeamCarousel';
import VideoSlider from '../components/VideoSlider';

// Hooks
import { useScrollbarHide } from '../hooks/useScrollbarHide';

// Constants
import { CONFIG } from '../constants/config';

export default function App() {
  const [selectedMember, setSelectedMember] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Inject the no-scrollbar styles
  useScrollbarHide();

  // Split team into Top 3 (Featured) and the rest
  const featuredTeam = CONFIG.team.slice(0, 3);
  const restTeam = CONFIG.team.slice(3);

  const openModal = (member: any) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-[#6a0dad] border-4 border-white  to-purple-950 font-sans text-white overflow-x-hidden">

      {/* 1. Header Hero Section */}
      <div className="relative w-full">
        <div className="w-full h-[250px] md:h-[400px] lg:h-[500px] bg-black">
          <img
            src={CONFIG.heroImage}
            alt="Cover"
            className="w-full h-full object-cover md:object-fill opacity-90"
          />
        </div>

        {/* Floating Circle Logo */}
        <div className="absolute left-1/2 -bottom-16 md:-bottom-24 transform -translate-x-1/2 z-20">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-white">
            <img
              src={CONFIG.mainLogo}
              alt="Sanes Logo"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* 2. Main Title Section */}
      <div className="pt-24 md:pt-32 pb-8 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wider mb-2 drop-shadow-lg text-white">
          {CONFIG.title}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 font-light tracking-wide">
          {CONFIG.subtitle}
        </p>
      </div>

      {/* 3. Slider Section */}
      <section className="py-8">
        <div className="text-center mb-6">
          <span className="bg-red-600 text-white px-3 py-1 rounded text-sm font-bold animate-pulse">
            NEW RELEASES
          </span>
        </div>
        <VideoSlider slides={CONFIG.slider} />
      </section>

      {/* 4. Social Links Section */}
      <section className="py-16 mt-8">
        <h2 className="text-3xl font-bold text-center mb-10">Follow Us On</h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 px-4">
          {CONFIG.socials.map((social, idx) => (
            <a
              key={idx}
              href={social.link}
              className="group relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-xl hover:scale-110 transition-all duration-300"
              aria-label={social.name}
            >
              <social.icon
                size={36}
                className={`${social.color} transition-colors duration-300`}
              />
              {/* Tooltip */}
              <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 text-sm font-medium transition-opacity">
                {social.name}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* 5. Team Section */}
      <section className="py-16 px-4 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Team</h2>

        {/* Top Row: 3 Big Cards */}
        <div className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-8 mb-12">
          {featuredTeam.map((member) => (
            <div
              key={member.id}
              onClick={() => openModal(member)}
              className="group bg-white/5 hover:bg-white/10 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 border border-white/5 hover:border-white/20 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-800">
                <img
                  src={member.image}
                  alt={member.name}
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x500?text=No+Image' }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4">
                  <h3 className="text-white font-bold text-[10px] md:text-2xl leading-tight truncate">{member.name}</h3>
                  <p className="text-purple-300 text-[8px] md:text-base mt-0.5 md:mt-1 font-medium truncate">{member.role}</p>
                </div>
              </div>

              {/* Mini Social Icons row visible on card */}
              <div className="flex justify-center space-x-2 md:space-x-6 p-1 md:p-4 border-t border-white/10 bg-black/20">
                {member.social.facebook && (
                  <Facebook className="w-3 h-3 md:w-5 md:h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                )}
                {member.social.instagram && (
                  <Instagram className="w-3 h-3 md:w-5 md:h-5 text-gray-400 group-hover:text-pink-500 transition-colors" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Area: Slider for the rest */}
        {restTeam.length > 0 && (
          <TeamCarousel members={restTeam} onMemberClick={openModal} />
        )}
      </section>

      {/* 6. Footer */}
      <footer className="py-8 text-center bg-black/40 text-gray-400 text-sm md:text-base border-t border-white/10">
        <p>{CONFIG.footerText}</p>
      </footer>

      {/* Popup Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        member={selectedMember}
      />

    </div>
  );
}