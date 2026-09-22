export interface Project {
  slug: string;
  // Matches the key in messages/xx.json under projects.items.*
  translationKey: string;
  coverImage: string;
  images: string[];
}

export const projects: Project[] = [
  {
    slug: 'plant-machine-frames',
    translationKey: 'plantMachineFrames',
    coverImage: '/plantmachine.png',
    images: ['/plantmachine.png', '/plantmachine2.png'],
  },
  {
    slug: 'hekwerk-carrousel',
    translationKey: 'hekwerkCarrousel',
    coverImage: '/carousel.png',
    images: ['/carousel.png'],
  },
  {
    slug: 'chassis-stacaravan',
    translationKey: 'chassisStacaravan',
    coverImage: '/chassis.png',
    images: ['/chassis.png'],
  },
  {
    slug: 'boot-lader',
    translationKey: 'bootLader',
    coverImage: '/bootlader.png',
    images: [
      '/bootlader.png',
      '/bootlader2.png',
      '/bootlader3.png',
      '/bootlader4.png',
      '/bootlader5.png',
    ],
  },
  {
    slug: 'opklapbare-trap',
    translationKey: 'opklapbareTrap',
    coverImage: '/trap.png',
    images: ['/trap.png', '/trap2.png', '/trap3.png'],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
