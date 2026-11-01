import React from 'react';
import Countdown from './components/Countdown';
import Hero from './components/Hero';
import EventDetails from './components/EventDetails';
import RSVP from './components/RSVP';
import Gallery from './components/Gallery';
import MusicPlayer from './components/MusicPlayer';
import Footer from './components/Footer';

export default function App() {
  // မင်္ဂလာပွဲကျင်းပမည့် ရက်စွဲနှင့် အချိန် (၂၈/၁၁/၂၀၂၆၊ နေ့လယ် ၂ နာရီ)
  const weddingDate = new Date('2026-11-28T14:00:00');

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      {/* Background Music Player */}
      <MusicPlayer />

      {/* Hero Section */}
      <Hero />

      {/* Countdown Section */}
      <section className="py-16 px-4 text-center bg-white border-y border-stone-100">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-serif text-amber-900 mb-6">
            Countdown to Our Big Day
          </h2>
          {/* Countdown Component ကို ဤနေရာတွင် ချိတ်ဆက်ထားသည် */}
          <Countdown date={weddingDate} />
        </div>
      </section>

      {/* Event Details Section */}
      <EventDetails />

      {/* Gallery Section */}
      <Gallery />

      {/* RSVP Section */}
      <RSVP />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}