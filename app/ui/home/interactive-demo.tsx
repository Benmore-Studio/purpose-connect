'use client';
import React from 'react';

interface InteractiveDemoProps {
  arcadeUrl: string;
  title?: string;
  height?: string;
}

export default function InteractiveDemo({
  arcadeUrl,
}: InteractiveDemoProps) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" rounded-lg shadow-xl overflow-hidden">
          <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
            <iframe
              src={`${arcadeUrl}`}
              className="absolute top-0 left-0 w-full h-full"
              allowFullScreen
              allow="clipboard-read; clipboard-write"
              title="Interactive Product Demo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}