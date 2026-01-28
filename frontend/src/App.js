import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Volume2, VolumeX, Sun, MapPin, MessageCircle, Waves } from 'lucide-react';
import './App.css';

function App() {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(() => {
        console.log('Audio autoplay blocked - user interaction required');
      });
    }
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.muted = false;
        audioRef.current.play().catch(e => console.log('Play failed:', e));
      } else {
        audioRef.current.muted = true;
      }
      setIsMuted(!isMuted);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="App">
      {/* Background Audio - Using a more reliable source */}
      <audio 
        ref={audioRef} 
        loop 
        muted={isMuted}
        data-testid="background-music"
        preload="auto"
      >
        <source src="https://assets.mixkit.co/music/preview/mixkit-happy-and-joyful-children-14.mp3" type="audio/mpeg" />
        <source src="https://cdn.pixabay.com/audio/2022/03/10/audio_4a4e8e05d5.mp3" type="audio/mpeg" />
      </audio>

      {/* Music Control Button */}
      <motion.button
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-[9999] bg-[#E0218A] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        data-testid="music-toggle-button"
        aria-label={isMuted ? "Unmute music" : "Mute music"}
        style={{ pointerEvents: 'auto' }}
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </motion.button>

      {/* Hero Section */}
      <motion.section 
        className="hero-section"
        style={{ opacity: heroOpacity, scale: heroScale }}
        data-testid="hero-section"
      >
        {/* Animated Water Ripples */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="water-ripple"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}

        {/* Floating Pool Elements */}
        <motion.div
          className="floating-element"
          style={{ top: '10%', left: '10%' }}
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="text-6xl">🏖️</div>
        </motion.div>

        <motion.div
          className="floating-element"
          style={{ top: '20%', right: '15%' }}
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, -15, 0]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          <div className="text-7xl">🏐</div>
        </motion.div>

        <motion.div
          className="floating-element"
          style={{ bottom: '15%', left: '15%' }}
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 8, 0]
          }}
          transition={{ 
            duration: 4.5, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <div className="text-6xl">🩴</div>
        </motion.div>

        <motion.div
          className="floating-element"
          style={{ bottom: '20%', right: '10%' }}
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ 
            duration: 5.5, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        >
          <div className="text-7xl">🕶️</div>
        </motion.div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 text-center px-4 max-w-6xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Waves className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 text-white" />
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: 'Fredoka, sans-serif' }}
            variants={itemVariants}
            data-testid="hero-title"
          >
            ☀️💦 Splish, Splash 💦☀️
            <br />
            <span className="text-[#F9D71C] drop-shadow-lg">It's a Birthday Bash!</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-4xl text-white font-medium leading-relaxed px-2"
            style={{ fontFamily: 'Fredoka, sans-serif' }}
            variants={itemVariants}
            data-testid="hero-subtitle"
          >
            <span className="text-[#E0218A] font-bold drop-shadow-md">Niamh</span> is turning{' '}
            <span className="text-[#F9D71C] font-bold text-4xl md:text-5xl">7</span> and{' '}
            <span className="text-[#E0218A] font-bold drop-shadow-md">Khalev</span> is turning{' '}
            <span className="text-[#F9D71C] font-bold text-4xl md:text-5xl">9</span>,
            <br />
            Jump in the pool — it's party time! 🎉🌊
          </motion.p>

          <motion.div 
            className="mt-12"
            variants={itemVariants}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white text-lg md:text-xl"
            >
              ↓ Scroll for Details ↓
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Details Section */}
      <section className="details-section" data-testid="details-section">
        {/* Decorative Background Elements */}
        <motion.div
          className="floating-element text-6xl md:text-8xl opacity-20"
          style={{ top: '5%', right: '5%' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          ☀️
        </motion.div>

        <motion.div
          className="floating-element text-7xl md:text-9xl opacity-20"
          style={{ bottom: '10%', left: '10%' }}
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          🦩
        </motion.div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Intro Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16 px-4"
          >
            <h2 
              className="text-2xl md:text-5xl font-bold text-[#00C2D1] mb-4 leading-tight"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
              data-testid="details-heading"
            >
              Grab your shades and your brightest smile,
              <br />
              We're making poolside memories that last a long while!
            </h2>
          </motion.div>

          {/* Party Details Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Date & Time Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="blob-card bg-white p-6 md:p-8 shadow-[0_20px_50px_rgba(0,194,209,0.3)]"
              data-testid="date-time-card"
            >
              <div className="text-center">
                <Sun className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 text-[#F9D71C]" />
                <h3 
                  className="text-xl md:text-3xl font-semibold text-[#1A1A1A] mb-4"
                  style={{ fontFamily: 'Fredoka, sans-serif' }}
                >
                  When? 📅
                </h3>
                <div className="text-base md:text-xl text-[#1A1A1A]">
                  <p className="font-bold text-[#E0218A] text-xl md:text-2xl mb-2">March 21, 2026</p>
                  <p className="text-[#00C2D1] font-semibold">⏰ 9:00 in the morning</p>
                </div>
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="blob-card bg-white p-6 md:p-8 shadow-[0_20px_50px_rgba(0,194,209,0.3)]"
              data-testid="location-card"
            >
              <div className="text-center">
                <MapPin className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 text-[#FF6F61]" />
                <h3 
                  className="text-xl md:text-3xl font-semibold text-[#1A1A1A] mb-4"
                  style={{ fontFamily: 'Fredoka, sans-serif' }}
                >
                  Where? 📍
                </h3>
                <div className="text-base md:text-xl text-[#1A1A1A]">
                  <p className="font-semibold mb-2">Casa Ylaya</p>
                  <p className="text-[#00C2D1]">Prinza St., Pasong Kawayan II</p>
                  <p className="text-[#00C2D1] mb-3">General Trias, Cavite</p>
                  <a 
                    href="https://maps.app.goo.gl/ToHe9XieUiGbqnu88"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#40E0D0] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#00C2D1] transition-colors"
                    data-testid="map-link"
                  >
                    View Map 🗺️
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Closing Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12 md:mt-16 px-4"
          >
            <h2 
              className="text-2xl md:text-5xl font-bold text-[#E0218A] mb-6 md:mb-8 leading-tight"
              style={{ fontFamily: 'Fredoka, sans-serif' }}
              data-testid="closing-message"
            >
              So bring your splash and bring your cheer,
              <br />
              The coolest pool party is here! 🏖️🎈💙
            </h2>

            {/* Messenger Button */}
            <motion.a
              href="https://m.me/nanz.aguada"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#0084FF] text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-lg md:text-xl shadow-2xl message-button transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="messenger-button"
            >
              <MessageCircle size={24} />
              Message Us on Messenger
            </motion.a>

            <motion.div 
              className="mt-8 md:mt-12 text-[#00C2D1] text-base md:text-lg"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p>See you there! 🌊☀️</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer Wave Animation */}
      <div className="relative h-24 md:h-32 bg-gradient-to-b from-[#F0F8FF] to-[#40E0D0] overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 left-0 right-0 h-12 md:h-16"
            style={{
              background: `rgba(0, 194, 209, ${0.3 - i * 0.1})`,
              borderRadius: '50% 50% 0 0'
            }}
            animate={{
              x: ['-100%', '100%']
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
