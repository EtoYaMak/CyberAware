/* eslint-disable */
import { useState } from "react";
import VideoPlayer from "../components/VideoPlayer";
import { motion, AnimatePresence } from "framer-motion";
import "./pages.css";
import { FiAlertTriangle, FiLock, FiShield } from "react-icons/fi";

// Video data structure
interface VideoData {
  id: string;
  title: string;
  src: string;
  thumbnail: string;
  category: 'dos' | 'phishing' | 'malware';
  description: string;
  icon: React.ReactNode;
}

const Demos: React.FC = () => {
  // Video data with descriptions
  const videos: VideoData[] = [
    {
      id: "dos",
      title: "Denial of Service Attack",
      src: "/assets/dos_demo.mp4",
      thumbnail: "/assets/thumbnails/dos-thumbnail.png",
      category: "dos",
      description: "Denial of Service (DoS) attacks aim to make a machine or network resource unavailable to its intended users by temporarily or indefinitely disrupting services. Learn how these attacks happen and what you can do to protect yourself.",
      icon: <FiAlertTriangle className="text-yellow-400 text-3xl" />
    },
    {
      id: "phishing",
      title: "Phishing Tactics",
      src: "/assets/phish_demo.mp4",
      thumbnail: "/assets/thumbnails/phishing-thumbnail.png",
      category: "phishing",
      description: "Phishing attacks trick users into revealing sensitive information by disguising as trustworthy entities. This demonstration shows common phishing tactics and how to identify suspicious communications.",
      icon: <FiLock className="text-blue-400 text-3xl" />
    },
    {
      id: "malware",
      title: "Malware Threats",
      src: "/assets/mal_demo.mp4",
      thumbnail: "/assets/thumbnails/malware-thumbnail.png",
      category: "malware",
      description: "Malware includes viruses, worms, trojans, and ransomware that can damage systems and steal data. This demo shows how malware can infiltrate systems and what protective measures you should take.",
      icon: <FiShield className="text-red-400 text-3xl" />
    }
  ];

  const [selectedVideo, setSelectedVideo] = useState<VideoData>(videos[0]);
  const [isChanging, setIsChanging] = useState(false);

  const changeVideo = (video: VideoData) => {
    if (video.id === selectedVideo.id) return;

    setIsChanging(true);
    setTimeout(() => {
      setSelectedVideo(video);
      setIsChanging(false);
    }, 500);
  };

  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="section-title">
          Security Demonstrations
        </h1>

        <div className="demos-container max-w-7xl mx-auto">
          {/* Category Selection Cards */}
          <div className="category-card-container grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {videos.map((video) => (
              <motion.div
                key={video.id}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`category-card rounded-xl p-5 cursor-pointer transition-all duration-300
                  ${selectedVideo.id === video.id
                    ? video.category === 'dos'
                      ? 'bg-gradient-to-br from-yellow-500/20 to-yellow-700/20 border-2 border-yellow-500/50'
                      : video.category === 'phishing'
                        ? 'bg-gradient-to-br from-blue-500/20 to-blue-700/20 border-2 border-blue-500/50'
                        : 'bg-gradient-to-br from-red-500/20 to-red-700/20 border-2 border-red-500/50'
                    : 'bg-black/30 hover:bg-black/40 border-2 border-white/10'
                  }`}
                onClick={() => changeVideo(video)}
              >
                <div className="flex items-center gap-3 mb-2">
                  {video.icon}
                  <h3 className={`text-xl font-medium ${video.category === 'dos'
                    ? 'text-yellow-400'
                    : video.category === 'phishing'
                      ? 'text-blue-400'
                      : 'text-red-400'
                    }`}>
                    {video.title}
                  </h3>
                </div>
                <p className="text-white/80 text-sm line-clamp-2">
                  {video.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Video Player Section */}
          <div className="video-section">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedVideo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="video-wrapper"
              >
                <VideoPlayer
                  src={selectedVideo.src}
                  title={selectedVideo.title}
                  thumbnail={selectedVideo.thumbnail}
                  category={selectedVideo.category}
                />

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="video-description mt-6 p-5 rounded-xl bg-black/30 border border-white/10"
                >
                  <h2 className={`text-2xl font-medium mb-3 ${selectedVideo.category === 'dos'
                    ? 'text-yellow-400'
                    : selectedVideo.category === 'phishing'
                      ? 'text-blue-400'
                      : 'text-red-400'
                    }`}>{selectedVideo.title}</h2>
                  <p className="text-white/90 text-lg">{selectedVideo.description}</p>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <h3 className="text-white font-medium mb-2">How to protect yourself:</h3>
                    <ul className="text-white/80 list-disc pl-5 space-y-1">
                      {selectedVideo.category === 'dos' && (
                        <>
                          <li>Keep your systems updated with security patches</li>
                          <li>Use firewalls and DDoS protection services</li>
                          <li>Implement rate limiting on your network</li>
                          <li>Regularly monitor your network traffic for anomalies</li>
                        </>
                      )}
                      {selectedVideo.category === 'phishing' && (
                        <>
                          <li>Verify sender's identity before responding to emails</li>
                          <li>Don't click on suspicious links or download unexpected attachments</li>
                          <li>Check for URL authenticity and security certificates</li>
                          <li>Use email filtering and anti-phishing tools</li>
                        </>
                      )}
                      {selectedVideo.category === 'malware' && (
                        <>
                          <li>Install reputable antivirus and anti-malware software</li>
                          <li>Keep your operating system and software updated</li>
                          <li>Be cautious when downloading files or clicking on links</li>
                          <li>Perform regular backups of important data</li>
                        </>
                      )}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demos;
