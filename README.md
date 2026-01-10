# AJB Engineering

Website voor AJB Engineering - gespecialiseerd in CAD-tekeningen, 3D-visualisaties en systeemintegratie.

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** CSS

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/AJB-engineering.git

# Navigate to project
cd AJB-engineering

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build the application
npm run build

# Start production server
npm start
```

## Project Structure

```
AJB-engineering/
├── app/
│   ├── layout.tsx       # Root layout with Navbar & Footer
│   ├── page.tsx         # Home page
│   ├── globals.css      # Global styles
│   ├── about/
│   │   └── page.tsx     # About page
│   └── projects/
│       └── page.tsx     # Projects page
├── components/
│   ├── Navbar.tsx       # Navigation component
│   └── Footer.tsx       # Footer component
├── public/              # Static assets (images)
├── package.json
├── tsconfig.json
└── next.config.js
```

## Pages

- `/` - Home page with company overview
- `/about` - Detailed information about AJB Engineering
- `/projects` - Portfolio of projects

## Contact

- Website: [ajb-engineering.nl](https://ajb-engineering.nl)
- Email: info@ajb-engineering.nl
- LinkedIn: [Arjan Bok](https://www.linkedin.com/in/arjan-bok-6272b06/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
