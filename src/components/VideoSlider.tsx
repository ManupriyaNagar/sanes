import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
    id: number;
    type: string;
    videoId: string;
    title: string;
    thumbnail: string;
}

interface VideoSliderProps {
    slides: Slide[];
}

const VideoSlider: React.FC<VideoSliderProps> = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
    const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

    if (!slides || slides.length === 0) return null;

    return (
        <div className="relative w-full max-w-5xl mx-auto px-4 py-8 group">
            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-4 md:left-[-64px] top-1/2 -translate-y-1/2 z-20 p-3 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full text-white transition-all transform hover:scale-110 border border-white/20"
            >
                <ChevronLeft size={32} />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 md:right-[-64px] top-1/2 -translate-y-1/2 z-20 p-3 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full text-white transition-all transform hover:scale-110 border border-white/20"
            >
                <ChevronRight size={32} />
            </button>

            {/* Slider Content */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 bg-black">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                        {index === current && (
                            <iframe
                                className="w-full h-full"
                                src={`https://www.youtube.com/embed/${slide.videoId}?rel=0`}
                                title={slide.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        )}
                        {/* Title Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
                            <h3 className="text-white text-lg font-bold">{slide.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center space-x-3 mt-6">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${index === current ? 'bg-orange-500 w-8' : 'bg-gray-400 hover:bg-white'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default VideoSlider;
