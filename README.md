# Ryan's House Sitting Website

A professional website for Ryan's individual house sitting business, serving clients across Europe and worldwide.

## Features

- **Professional Design**: Modern, responsive design optimized for conversions
- **Service Showcase**: Detailed information about house sitting services
- **Contact Form**: Easy inquiry submission for potential clients
- **SEO Optimized**: Built for Google Ads and search engine visibility
- **Mobile Responsive**: Works perfectly on all devices
- **Fast Loading**: Optimized for performance and user experience

## Tech Stack

- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd house-sitter-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Main layout with metadata
│   ├── page.tsx        # Homepage with all sections
│   └── globals.css     # Global styles
├── components/          # Reusable components (if added)
└── lib/                # Utility functions (if added)
```

## Customization

### Personal Information
Update the following in `src/app/page.tsx`:
- Your name and personal details
- Services offered
- Contact information
- About section content

### Styling
- Colors: Modify Tailwind classes or add custom CSS variables
- Layout: Adjust spacing, sections, and component arrangement
- Images: Add your own photos to the `public/` folder

### SEO
Update metadata in `src/app/layout.tsx`:
- Page title and description
- Keywords for your target market
- Open Graph tags for social sharing

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Other Platforms

- **Netlify**: Similar to Vercel, great for static sites
- **Railway**: Good for full-stack applications
- **AWS/GCP**: For enterprise deployments

## Google Ads Optimization

### Landing Page Best Practices
- Clear value proposition above the fold
- Professional photos and trust indicators
- Easy contact form with minimal fields
- Fast loading times (<3 seconds)
- Mobile-optimized design

### Target Keywords
- "house sitter Europe"
- "professional house sitting"
- "pet sitter while away"
- "house sitting services"
- "reliable house sitter"

## Analytics & Tracking

Consider adding:
- Google Analytics 4
- Google Tag Manager
- Facebook Pixel (if using Facebook Ads)
- Conversion tracking for form submissions

## Maintenance

- Regular content updates
- Photo gallery refresh
- Testimonial additions
- Service updates
- Performance monitoring

## Support

For technical support or customization requests, contact the development team.

---

**Built with ❤️ for Ryan's House Sitting Business**
