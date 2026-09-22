'use client';

import Image from 'next/image';

// Each config: left position, size (px), animation delay, duration
const screwConfigs = [
  { left: '6%',  size: 36, delay: '0s',    duration: '6s' },
  { left: '22%', size: 48, delay: '0.4s',  duration: '7s' },
  { left: '41%', size: 30, delay: '1.1s',  duration: '5s' },
  { left: '63%', size: 44, delay: '0.2s',  duration: '6s' },
  { left: '84%', size: 38, delay: '0.8s',  duration: '7s' },
];

const gearConfigs = [
  { left: '12%', size: 54, delay: '0.6s',  duration: '7s' },
  { left: '28%', size: 40, delay: '0s',    duration: '6s' },
  { left: '50%', size: 60, delay: '1.3s',  duration: '5s' },
  { left: '70%', size: 46, delay: '0.3s',  duration: '7s' },
  { left: '91%', size: 34, delay: '0.9s',  duration: '6s' },
];

const circuitConfigs = [
  { left: '3%',  size: 44, delay: '0.5s',  duration: '6s' },
  { left: '35%', size: 52, delay: '1.0s',  duration: '7s' },
  { left: '57%', size: 38, delay: '0.2s',  duration: '5s' },
  { left: '78%', size: 48, delay: '0.7s',  duration: '6s' },
];

export default function EngineeringBackground() {
  return (
    <>
      {screwConfigs.map((c, i) => (
        <Image
          key={`screw-${i}`}
          src="/screw.svg"
          alt=""
          width={c.size}
          height={c.size}
          className="engineering-decor animate-engineering-float"
          style={{
            bottom: '0',
            left: c.left,
            animationDelay: c.delay,
            animationDuration: c.duration,
          }}
        />
      ))}

      {gearConfigs.map((c, i) => (
        <Image
          key={`gear-${i}`}
          src="/gear.svg"
          alt=""
          width={c.size}
          height={c.size}
          className="engineering-decor animate-engineering-float"
          style={{
            bottom: '0',
            left: c.left,
            animationDelay: c.delay,
            animationDuration: c.duration,
          }}
        />
      ))}

      {circuitConfigs.map((c, i) => (
        <Image
          key={`circuit-${i}`}
          src="/circuit.svg"
          alt=""
          width={c.size}
          height={c.size}
          className="engineering-decor animate-engineering-float"
          style={{
            bottom: '0',
            left: c.left,
            animationDelay: c.delay,
            animationDuration: c.duration,
          }}
        />
      ))}
    </>
  );
}
