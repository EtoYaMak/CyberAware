import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import Player from 'video.js/dist/types/player';
import 'video.js/dist/video-js.css';
import '@videojs/themes/dist/forest/index.css';
import './videoplayer.css';

interface VideoPlayerProps {
    src: string;
    title: string;
    thumbnail?: string;
    category: 'dos' | 'phishing' | 'malware';
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, title, thumbnail, category }) => {
    const videoRef = useRef<HTMLDivElement>(null);
    const playerRef = useRef<Player | null>(null);

    // Get color theme based on category
    const getThemeColor = () => {
        switch (category) {
            case 'dos':
                return { primary: '#fbbf24', secondary: '#f59e0b' }; // yellow-400, yellow-500
            case 'phishing':
                return { primary: '#3b82f6', secondary: '#2563eb' }; // blue-500, blue-600
            case 'malware':
                return { primary: '#ef4444', secondary: '#dc2626' }; // red-500, red-600
            default:
                return { primary: '#3b82f6', secondary: '#2563eb' };
        }
    };

    const colors = getThemeColor();

    useEffect(() => {
        // Make sure Video.js player is only initialized once
        if (!playerRef.current && videoRef.current) {
            const videoElement = document.createElement('video-js');

            // Apply custom classes for styling
            videoElement.classList.add(
                'vjs-big-play-centered',
                'vjs-theme-forest',
                'custom-player',
                `category-${category}`
            );

            videoRef.current.appendChild(videoElement);

            const player = playerRef.current = videojs(videoElement, {
                controls: true,
                fluid: true,
                responsive: true,
                preload: 'auto',
                playbackRates: [0.5, 1, 1.5, 2],
                poster: thumbnail,
                sources: [{
                    src: src,
                    type: 'video/mp4'
                }],
                userActions: {
                    hotkeys: true,
                    doubleClick: true
                }
            }, () => {
                // Player is ready
                player.on('ready', () => {
                    console.log('Player is ready');
                });
            });

            // Add title to the player
            const titleOverlay = document.createElement('div');
            titleOverlay.className = 'vjs-title-overlay';
            titleOverlay.innerHTML = `<div class="vjs-title-text">${title}</div>`;
            videoRef.current.appendChild(titleOverlay);

            // Update custom theme colors
            document.documentElement.style.setProperty('--videojs-theme-primary', colors.primary);
            document.documentElement.style.setProperty('--videojs-theme-secondary', colors.secondary);
        } else if (playerRef.current) {
            // Update player source if it changes
            playerRef.current.src([{
                src: src,
                type: 'video/mp4'
            }]);
            playerRef.current.poster(thumbnail || '');

            // Update custom theme colors
            document.documentElement.style.setProperty('--videojs-theme-primary', colors.primary);
            document.documentElement.style.setProperty('--videojs-theme-secondary', colors.secondary);
        }

        return () => {
            // Dispose the player when component unmounts
            if (playerRef.current) {
                playerRef.current.dispose();
                playerRef.current = null;
            }
        };
    }, [src, thumbnail, title, colors, category]);

    return (
        <div className="video-player-container">
            <div
                className={`video-player-wrapper rounded-xl overflow-hidden shadow-xl category-${category}`}
                data-vjs-player
            >
                <div ref={videoRef} className="video-player" />
            </div>
        </div>
    );
};

export default VideoPlayer; 