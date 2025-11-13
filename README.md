# Professional Portfolio Website - Amir Valizadeh

A stunning, modern professional portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Anime.js.

## Features

- **Immersive Hero Section** - Full-viewport landing with animated text and smooth scroll indicators
- **Interactive About Section** - Card-based layout showcasing education, skills, and interests
- **Dynamic Portfolio** - Showcase up to 6 projects with animated cards and gradient borders
- **Contact Form** - Client-side validation with elegant animations
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Smooth Animations** - Powered by Anime.js for 60fps performance
- **Accessibility** - Semantic HTML, ARIA labels, and reduced motion support

## Tech Stack

- **Framework**: Next.js 16.0.2
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4.17
- **Animations**: Anime.js 3.2.2
- **Fonts**: Google Fonts (Inter, Space Grotesk)

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd final-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
final-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main page with all sections
├── components/
│   ├── Hero.tsx            # Hero section with animations
│   ├── About.tsx           # About/Interests section
│   ├── Portfolio.tsx       # Portfolio showcase
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Footer with social links
│   └── animations/         # Animation utilities
│       ├── useHeroAnimation.ts
│       ├── useScrollAnimation.ts
│       └── useInteractionAnimation.ts
├── styles/
│   └── globals.css         # Global styles and Tailwind config
├── public/                 # Static assets
└── tailwind.config.ts      # Tailwind configuration
```

## Customization Guide

### 1. Updating Project Links

Open [components/Portfolio.tsx](components/Portfolio.tsx) and locate the `projects` array (around line 8):

```typescript
const projects = [
  {
    id: 1,
    title: 'Proposal',
    description: '...',
    tags: ['Research', 'Planning', 'Documentation'],
    linkPlaceholder: '#proposal-link',  // 👈 UPDATE THIS
    icon: '📋',
    gradient: 'from-cyan-500 to-blue-500'
  },
  // ... more projects
];
```

Replace each `linkPlaceholder` value with your actual project URLs:
- Local files: `/path/to/file.pdf`
- External links: `https://example.com/project`
- Google Drive: `https://drive.google.com/file/d/...`

### 2. Updating Social Links

Open [components/Footer.tsx](components/Footer.tsx) and find the `socialLinks` array (around line 7):

```typescript
const socialLinks = [
  {
    name: 'GitHub',
    icon: <svg>...</svg>,
    href: '#github-link',      // 👈 UPDATE THIS
    color: 'hover:text-purple-400'
  },
  // ... more links
];
```

Replace placeholder `href` values with your actual social media URLs.

### 3. Customizing Content

#### About Section
Edit [components/About.tsx](components/About.tsx) to modify:
- Education details
- Professional focus areas
- Personal interests
- Card icons and descriptions

#### Hero Section
Edit [components/Hero.tsx](components/Hero.tsx) to change:
- Your name (line 24)
- Subtitle text (line 41)
- CTA button text (line 51)

#### Contact Form
The form currently has a simulated submission. To connect a real backend:

1. Open [components/Contact.tsx](components/Contact.tsx)
2. Find the `handleSubmit` function (around line 64)
3. Replace the simulated API call with your actual endpoint:

```typescript
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  if (!validateForm()) return;

  setIsSubmitting(true);

  try {
    // Replace this with your actual API call
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setSubmitStatus('error');
    }
  } catch (error) {
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};
```

### 4. Color Scheme

The portfolio uses a dark tech aesthetic with accent colors. To customize:

1. Open [tailwind.config.ts](tailwind.config.ts)
2. Modify the gradient definitions in `theme.extend.backgroundImage`
3. Open [styles/globals.css](styles/globals.css)
4. Update CSS variables in the `:root` selector

### 5. Fonts

The portfolio uses Space Grotesk for headings and Inter for body text. To change:

1. Open [app/layout.tsx](app/layout.tsx)
2. Replace the font imports from `next/font/google`
3. Update the font variable names throughout the components

## Performance Optimization

The portfolio is optimized for performance:
- Lazy loading with React
- Next.js automatic code splitting
- Optimized animations (GPU-accelerated transforms)
- Reduced motion support for accessibility

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

The site is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Google Cloud
- Any platform supporting Node.js

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

The portfolio follows WCAG 2.1 AA guidelines:
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- Sufficient color contrast
- Reduced motion support (`prefers-reduced-motion`)

## License

This project is open source and available for personal and commercial use.

## Credits

- **Design & Development**: Amir Valizadeh
- **Built with**: Next.js, TypeScript, Tailwind CSS, Anime.js
- **Fonts**: Google Fonts (Inter, Space Grotesk)

## Support

For questions or issues:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Check the [Tailwind CSS documentation](https://tailwindcss.com/docs)
3. Check the [Anime.js documentation](https://animejs.com/documentation/)

---

**Made with Next.js and deployed on Vercel** 🚀
