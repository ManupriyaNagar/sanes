import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Facebook, Instagram } from 'lucide-react';

interface Member {
    id: number;
    name: string;
    role: string;
    image: string;
    social: {
        facebook?: string;
        instagram?: string;
    };
}

interface TeamCarouselProps {
    members: Member[];
    onMemberClick: (member: Member) => void;
}

const TeamCarousel: React.FC<TeamCarouselProps> = ({ members, onMemberClick }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = window.innerWidth < 768 ? 200 : 400;

            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="relative group px-0 md:px-4">
            {/* Left Navigation Button */}
            <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/60 hover:bg-black/90 backdrop-blur-sm rounded-full text-white transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0 -ml-2 md:-ml-6"
                aria-label="Scroll left"
            >
                <ChevronLeft size={24} />
            </button>

            {/* Scrollable Container */}
            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar py-4 px-2 justify-start md:justify-center"
            >
                {members.map((member) => (
                    <div
                        key={member.id}
                        onClick={() => onMemberClick(member)}
                        className="flex-none w-28 md:w-68 group/card bg-white/5 hover:bg-white/10 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 border border-white/5 hover:border-white/20 hover:shadow-lg hover:-translate-y-1"
                    >
                        <div className="relative overflow-hidden bg-gray-800">
                            <img
                                src={member.image}
                                alt={member.name}
                                onError={(e) => { (e.target as HTMLImageElement).src = '/AaravDp.png' }}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                            />
                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/20 transition-colors" />
                        </div>

                        <div className="p-3 text-center bg-black/20">
                            <h3 className="text-white font-bold md:text-sm text-xs truncate">{member.name}</h3>
                            <p className="text-gray-400 md:text-xs text-xs truncate mt-0.5">{member.role}</p>
                        </div>

                        {/* Social Icons Strip */}
                        <div className="flex justify-center space-x-4 p-2 border-t border-white/5 bg-black/40">
                            {member.social.facebook && (
                                <Facebook size={24} className="w-4 h-4 md:w-6 md:h-6 text-gray-400 hover:text-blue-500 transition-colors" />
                            )}
                            {member.social.instagram && (
                                <Instagram size={24} className="w-4 h-4 md:w-6 md:h-6 text-gray-400 hover:text-pink-500 transition-colors" />
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Right Navigation Button */}
            <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/60 hover:bg-black/90 backdrop-blur-sm rounded-full text-white transition-all opacity-0 group-hover:opacity-100 -mr-2 md:-mr-6"
                aria-label="Scroll right"
            >
                <ChevronRight size={24} />
            </button>
        </div>
    );
};

export default TeamCarousel;
