import React from 'react';
import { X, Facebook, Instagram } from 'lucide-react';

interface Member {
    name: string;
    role: string;
    image: string;
    bio?: string;
    social: {
        facebook?: string;
        instagram?: string;
    };
}

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    member: Member | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, member }) => {
    if (!isOpen || !member) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-sm" onClick={onClose}>
            <div className="relative w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-2xl transform transition-all" onClick={e => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10"
                >
                    <X className="w-5 h-5 text-gray-700" />
                </button>

                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 h-80 md:h-auto bg-gray-200">
                        {/* Fallback if image doesn't exist */}
                        <img
                            src={member.image}
                            alt={member.name}
                            onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x500?text=No+Image' }}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                        <p className="text-purple-600 font-semibold mb-4">{member.role}</p>
                        <p className="text-gray-600 mb-6">{member.bio || "Member of the Sanes Official production team."}</p>

                        <div className="flex space-x-4">
                            {member.social.facebook && (
                                <a href={member.social.facebook} className="text-gray-400 hover:text-blue-700 transition-colors" title="Facebook" target='_blank'>
                                    <Facebook size={28} target='_blank' />
                                </a>
                            )}
                            {member.social.instagram && (
                                <a href={member.social.instagram} className="text-gray-400 hover:text-pink-600 transition-colors" title="Instagram" target='_blank'>
                                    <Instagram size={28} target='_blank' />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
