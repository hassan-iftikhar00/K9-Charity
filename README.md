Project K9 Hero - Capital Campaign Landing Page
A modern, interactive Next.js landing page with smooth animations and engaging user experience.

🚀 Quick Start
bash

# 1. Create the project

npx create-next-app@latest project-k9-hero --typescript --tailwind --app --no-src-dir

# 2. Navigate to project

cd project-k9-hero

# 3. Install dependencies

npm install framer-motion gsap @studio-freight/lenis lucide-react react-intersection-observer react-countup recharts

# 4. Install Shadcn/ui (optional)

npx shadcn-ui@latest init
npx shadcn-ui@latest add button card dialog progress

# 5. Start development server

npm run dev
📁 Project Structure
project-k9-hero/
├── app/
│ ├── layout.tsx # Root layout with providers
│ ├── page.tsx # Main landing page
│ └── globals.css # Global styles
├── components/
│ ├── HeroSection.tsx # Hero with video background
│ ├── Navbar.tsx # Sticky navigation
│ ├── ThermometerSection.tsx
│ ├── DonationThermometer.tsx
│ ├── PhasesSection.tsx
│ ├── PhaseCard.tsx
│ ├── ImpactSection.tsx
│ ├── TestimonialsSection.tsx
│ ├── TestimonialCard.tsx
│ ├── CTASection.tsx
│ ├── Footer.tsx
│ ├── AnimatedSection.tsx
│ ├── SmoothScrollProvider.tsx
│ ├── ScrollToTop.tsx
│ ├── LoadingScreen.tsx
│ └── DonationModal.tsx
├── hooks/
│ ├── useScrollAnimation.ts
│ └── useGsapAnimation.ts
├── lib/
│ ├── smooth-scroll.ts
│ └── animations.ts
├── public/
│ ├── hero-video.mp4
│ ├── phase1-6.jpg
│ ├── testimonial1-3.jpg
│ └── logos/
└── tailwind.config.ts
🎨 Features
✅ Implemented Features
Smooth Scrolling - Lenis smooth scroll library
Scroll Animations - Framer Motion + GSAP
Interactive Phases - Hoverable cards with progress tracking
Donation Thermometer - Animated progress with dog icon
Hero Video Background - Auto-playing background video
Impact Statistics - Animated counters with CountUp
Testimonials - Carousel-ready testimonial cards
Responsive Design - Mobile-first approach
Sticky Navigation - Transparent to solid on scroll
Scroll to Top Button - Appears after scrolling
Loading Screen - Branded loading animation
Donation Modal - Interactive donation interface
🎯 Interactive Elements
Hover effects on all buttons and cards
Phase cards reveal details on hover
Smooth page transitions
Animated donation thermometer with moving dog
Real-time progress tracking
Interactive navigation menu
🎨 Design System
Colors
typescript
Primary: #0ea5e9 (Blue - Trust)
Secondary: #f59e0b (Orange - Action)
Success: #10b981 (Green)
Gray Scale: 50-900
Typography
Font: Inter (Google Font)
Headings: Bold, 3xl-7xl
Body: Regular, base-xl
Animations
Fade in up
Scale in
Slide from sides
Parallax effects
Hover transitions
📦 Technologies Used
Core
Next.js 14+ - React framework with App Router
TypeScript - Type safety
Tailwind CSS - Utility-first CSS
Animation Libraries
Framer Motion - React animation library
GSAP - Advanced animations with ScrollTrigger
Lenis - Smooth scrolling
UI Components
Lucide React - Icon library
React CountUp - Animated counters
Recharts - Charts and graphs
Shadcn/ui - Accessible components
🖼️ Required Assets
Place these in the /public folder:

Videos
hero-video.mp4 (1920x1080, MP4 format)
Images - Phases (800x600px recommended)
phase1.jpg - Site preparation
phase2.jpg - Main facility
phase3.jpg - Training areas
phase4.jpg - Rehabilitation
phase5.jpg - Adoption center
phase6.jpg - Memorial garden
Images - Testimonials (200x200px)
testimonial1.jpg
testimonial2.jpg
testimonial3.jpg
Logos
charity-navigator.png
candid.png
Using Placeholders (for testing)
typescript
// Replace image paths with:
src="https://picsum.photos/800/600?random=1"
src="https://placeholder.com/800x600"
🚀 Deployment
Vercel (Recommended)
bash

# Install Vercel CLI

npm i -g vercel

# Deploy

vercel
Build for Production
bash
npm run build
npm start
⚙️ Configuration
Environment Variables
Create .env.local:

env
NEXT_PUBLIC_SITE_URL=https://projectk9hero.org
NEXT_PUBLIC_DONATION_API=your_donation_api_endpoint
Customization
Update Colors
Edit tailwind.config.ts:

typescript
colors: {
primary: { /_ your colors _/ },
secondary: { /_ your colors _/ },
}
Update Content
Hero Section: Edit components/HeroSection.tsx
Phases Data: Edit components/PhasesSection.tsx phases array
Testimonials: Edit components/TestimonialsSection.tsx testimonials array
Footer Links: Edit components/Footer.tsx
🎯 Performance Optimizations
Image optimization with Next.js Image
Lazy loading components
Code splitting
Smooth scroll performance
Optimized animations (GPU-accelerated)
Tree-shaking unused code
📱 Responsive Breakpoints
css
sm: 640px /_ Mobile landscape _/
md: 768px /_ Tablet _/
lg: 1024px /_ Desktop _/
xl: 1280px /_ Large desktop _/
2xl: 1536px /_ Extra large _/
🐛 Troubleshooting
Smooth Scroll Not Working
Ensure Lenis is properly initialized in SmoothScrollProvider
Check browser compatibility
Animations Laggy
Reduce number of animated elements on screen
Use will-change CSS property sparingly
Enable GPU acceleration
Images Not Loading
Check file paths in /public folder
Verify image formats (JPG, PNG, WebP)
Use Next.js Image component
📝 Next Steps
Additional Features to Consider
Blog integration
Email newsletter signup
Social media feed
Event calendar
Volunteer signup form
Real-time donation updates
Admin dashboard
Multi-language support
Accessibility improvements (WCAG 2.1 AA)
Integrations
Payment Gateway (Stripe/PayPal)
CRM (Salesforce/HubSpot)
Email Marketing (Mailchimp)
Analytics (Google Analytics/Plausible)
Social Media APIs
📄 License
This project is created for Project K9 Hero.

🤝 Support
For issues or questions:

Email: info@projectk9hero.org
Website: https://projectk9hero.org
Built with ❤️ for K-9 Heroes
