import React, { useState } from 'react';
import ThumbnailGenerator from '../utils/ThumbnailGenerator';

const ThumbnailGeneratorPage: React.FC = () => {
    const [generating, setGenerating] = useState(false);

    const generateDosThumbnail = () => {
        setGenerating(true);
        setTimeout(() => setGenerating(false), 1000);
    };

    const generatePhishingThumbnail = () => {
        setGenerating(true);
        setTimeout(() => setGenerating(false), 1000);
    };

    const generateMalwareThumbnail = () => {
        setGenerating(true);
        setTimeout(() => setGenerating(false), 1000);
    };

    const generateAllThumbnails = () => {
        setGenerating(true);
        setTimeout(() => setGenerating(false), 3000);
    };

    return (
        <div className="page-container">
            <div className="page-content">
                <h1 className="section-title">
                    Thumbnail Generator
                </h1>

                <div className="max-w-xl mx-auto p-6 bg-black/30 rounded-xl border border-white/10">
                    <p className="text-white mb-6">
                        Click the buttons below to generate thumbnail images for the demo videos.
                        The images will be automatically downloaded to your computer.
                    </p>

                    <div className="grid grid-cols-1 gap-4">
                        <button
                            onClick={generateDosThumbnail}
                            disabled={generating}
                            className="p-4 bg-yellow-500/20 hover:bg-yellow-500/30 border border-yellow-500/50 rounded-lg text-white transition-colors duration-200"
                        >
                            Generate DoS Thumbnail
                        </button>

                        <button
                            onClick={generatePhishingThumbnail}
                            disabled={generating}
                            className="p-4 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/50 rounded-lg text-white transition-colors duration-200"
                        >
                            Generate Phishing Thumbnail
                        </button>

                        <button
                            onClick={generateMalwareThumbnail}
                            disabled={generating}
                            className="p-4 bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 rounded-lg text-white transition-colors duration-200"
                        >
                            Generate Malware Thumbnail
                        </button>

                        <button
                            onClick={generateAllThumbnails}
                            disabled={generating}
                            className="p-4 mt-4 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/50 rounded-lg text-white transition-colors duration-200"
                        >
                            Generate All Thumbnails
                        </button>
                    </div>

                    {generating && (
                        <p className="text-white mt-4">Generating thumbnails...</p>
                    )}

                    {/* Hidden components that generate the thumbnails */}
                    {generating && (
                        <>
                            <ThumbnailGenerator
                                title="Denial of Service Attack"
                                colorStart="#fbbf24"
                                colorEnd="#9a3412"
                                filename="dos-thumbnail.png"
                            />
                            <ThumbnailGenerator
                                title="Phishing Tactics"
                                colorStart="#3b82f6"
                                colorEnd="#1e3a8a"
                                filename="phishing-thumbnail.png"
                            />
                            <ThumbnailGenerator
                                title="Malware Threats"
                                colorStart="#ef4444"
                                colorEnd="#7f1d1d"
                                filename="malware-thumbnail.png"
                            />
                        </>
                    )}

                    <div className="mt-6 p-4 bg-gray-800/50 rounded-lg">
                        <h3 className="text-white font-medium mb-2">Instructions:</h3>
                        <ol className="text-white/80 list-decimal pl-5 space-y-1">
                            <li>Click the buttons to generate and download the thumbnail images</li>
                            <li>Move the downloaded PNG files to <code className="bg-black/30 px-2 py-1 rounded">public/assets/thumbnails/</code></li>
                            <li>Refresh the Demos page to see the thumbnails in action</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThumbnailGeneratorPage; 