import React from 'react';

export default function hero() {
    return (
        <>
            <section className="relative h-[calc(100vh-64px)] w-full overflow-hidden">
                <video
                    className="absolute inset-0 h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                >
                    <source
                        src="https://res.cloudinary.com/dzbtzumsd/video/upload/v1756221415/samples/dance-2.mp4"
                        type="video/mp4"
                    />
                </video>
            </section>
        </>
    )
}