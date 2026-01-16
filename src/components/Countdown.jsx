"use client";

import { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(2026, 3, 1); // April 1, 2026

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-8 text-gradient">
          ¡Cuenta Regresiva para el Campamento!
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/20">
            <div className="text-4xl md:text-5xl font-black text-primary mb-2">
              {timeLeft.days}
            </div>
            <div className="text-sm font-medium text-muted-foreground uppercase">
              Días
            </div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-secondary/20">
            <div className="text-4xl md:text-5xl font-black text-secondary mb-2">
              {timeLeft.hours}
            </div>
            <div className="text-sm font-medium text-muted-foreground uppercase">
              Horas
            </div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-accent/20">
            <div className="text-4xl md:text-5xl font-black text-accent mb-2">
              {timeLeft.minutes}
            </div>
            <div className="text-sm font-medium text-muted-foreground uppercase">
              Minutos
            </div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/20">
            <div className="text-4xl md:text-5xl font-black text-primary mb-2">
              {timeLeft.seconds}
            </div>
            <div className="text-sm font-medium text-muted-foreground uppercase">
              Segundos
            </div>
          </div>
        </div>
        <p className="mt-8 text-lg text-muted-foreground">
          El campamento comienza el 1 de abril de 2026
        </p>
      </div>
    </section>
  );
};

export default Countdown;
