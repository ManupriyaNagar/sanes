import { Music, Instagram, Facebook, PlayCircle } from 'lucide-react';

export const CONFIG = {
    // IMAGES (Ensure these files are uploaded to the file list)
    heroImage: "cover1.png",
    mainLogo: "logo-sanes.jpg",

    // TEXT CONTENT
    title: "SANES OFFICIAL",
    subtitle: "Produced by RBSH Pixel",
    footerText: "Copyright ©️ 2026 SANES OFFICIAL. Produced by RBSH Pixel.",

    // SLIDER CONTENT (Youtube Video IDs)
    // For 'thumbnail', upload images named thumb1.jpg, thumb2.jpg etc.
    slider: [
        {
            id: 1,
            type: 'video',
            videoId: 'AkIQ_ReZz6w',
            title: "DO JAHAN PALIYA - NEW RELEASE",
            thumbnail: "thumb1.jpg"
        },
        {
            id: 2,
            type: 'video',
            videoId: 'oP7N6YwQ2kI',
            title: "BEHIND THE SCENES",
            thumbnail: "thumb2.jpg"
        },
        {
            id: 3,
            type: 'video',
            videoId: 'VC_-FqyBLec',
            title: "UPCOMING HITS",
            thumbnail: "thumb3.jpg"
        }
    ],

    // SOCIAL LINKS (Global Footer/Header links)
    socials: [
        { name: "Spotify", icon: Music, link: "#", color: "text-black" },
        { name: "Instagram", icon: Instagram, link: "#", color: "text-black" },
        { name: "Facebook", icon: Facebook, link: "#", color: "text-black" },
        { name: "Youtube", icon: PlayCircle, link: "#", color: "text-black" },
        { name: "Apple Music", icon: Music, link: "#", color: "text-black" },
    ],

    // TEAM MEMBERS
    // Make sure to upload images named team1.jpg, team2.jpg, etc.
    team: [
        {
            id: 1,
            name: "Basant Mahato",
            role: "Creative Visualizer | Founder – RBSH Studio & RBSH Pixel",
            image: "/Basant.png",
            bio: "Basant Mahato is a Creative Visualizer and a core team member at Sanes Official. He is the founder of RBSH Studio and RBSH Pixel, the production house behind Sanes Official. He contributes through visual planning, design execution, and content development. With a keen eye for detail and aesthetics, he plays a key role in delivering visually engaging and impactful content aligned with the creative vision of Sanes.",
            social: { facebook: "https://www.facebook.com/share/17FgDUKEZd/?mibextid=wwXIfr", instagram: "https://www.instagram.com/mahato.vasant/" }
        },
        {
            id: 2,
            name: "Ashutosh Mishra ‘Azal’",
            role: "Lyricist | Poet | Shayar | Story Writer",
            image: "/Ashutosh.png",
            bio: "Ashutosh Mishra, popularly known as Azal, is a core team member at Sanes Official. He is known for his work as a lyricist, poet, and shayar, with a special focus on Urdu ghazals. His writing brings depth, emotion, and meaning to every project. Along with creative writing, he also contributes to project planning, concept development, and narrative structuring for Sanes productions.",
            social: { facebook: "https://www.facebook.com/share/184Sf3qwaV/?mibextid=wwXIfr", instagram: "https://www.instagram.com/azalashutosh/" }
        },
        {
            id: 3,
            name: "Aarav Jha",
            role: "Creative Visualizer",
            image: "/AaravDp.png",
            bio: "Aarav Jha is a Creative Visualizer and core team member at Sanes Official. He specializes in color grading, video editing, and graphic design, playing a key role in shaping the visual identity of Sanes. With a strong sense of storytelling and cinematic aesthetics, he transforms creative ideas into visually powerful content that connects emotionally with the audience.",
            social: { facebook: "https://www.facebook.com/share/176zdw7GHC/?mibextid=wwXIfr", instagram: "https://www.instagram.com/httpsaarav" }
        },

        {
            id: 5,
            name: "Amit Jha",
            role: "Singer | Composer | Director",
            image: "/Amit.png",
            bio: "Amit Jha is a singer associated with Sanes Official. Widely known as a popular Maithili singer, he has also performed Hindi songs, showcasing his versatility. Along with singing, he actively contributes as a composer and director, supporting projects through planning, creative suggestions, and idea development, making him an important creative force within Sanes productions.",
            social: { facebook: "https://www.facebook.com/share/1CGtBTRmYa/?mibextid=wwXIfr", instagram: "https://www.instagram.com/ajofficialmusic" }
        },
        {
            id: 6,
            name: "Neeraj Jha",
            role: "Video Editor | Poet | Shayar | Writer | Director",
            image: "/Neeraj.png",
            bio: "Neeraj Jha is associated with Sanes Official as a Video Editor and creative contributor. Along with editing, he is also a poet, shayar, writer, and director. His multi-creative skill set helps in planning, storytelling, and execution, ensuring smooth visual flow and meaningful narrative structure across Sanes projects.",
            social: { facebook: "https://www.facebook.com/share/1LfsByVqJA/?mibextid=wwXIfr", instagram: "https://www.instagram.com/neerajjha.official" }
        },
        {
            id: 7,
            name: "Chandan Jha",
            role: "Actor | Cricket Commentator | Cricket Analyst | Anchor | Choreographer",
            image: "/Chandan.png",
            bio: "Chandan Jha is an actor associated with Sanes Official. Beyond acting, he is also a cricket commentator, cricket analyst, anchor, and choreographer. His diverse talents contribute both on-screen and off-screen, supporting project planning, performances, and creative execution for Sanes productions.",
            social: { facebook: "https://www.facebook.com/share/1GTDjAodBx/?mibextid=wwXIfr", instagram: "https://www.instagram.com/mr_maithil06" }
        }

    ]
};
