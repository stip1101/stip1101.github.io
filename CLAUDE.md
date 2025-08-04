# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **Ocean Protocol Ecosystem Dashboard** - a React-based interactive dashboard showcasing comprehensive analysis of AI/Blockchain project relationships with Ocean Protocol. The application provides research insights, project analysis, and strategic recommendations for the Ocean Protocol ecosystem.

## Development Commands

### Core Commands
- `npm start` - Run development server (localhost:3000)
- `npm build` - Build for production
- `npm test` - Run tests with react-scripts
- `npm run deploy` - Deploy to GitHub Pages (builds then uses gh-pages)

### Key Dependencies
- **React 18** with hooks-based architecture
- **Framer Motion** for animations and interactions
- **Recharts** for data visualization
- **Lucide React** for modern icons
- **Tailwind CSS** for styling (v4.1.8)

## Architecture

### Application Structure
- **App.js**: Main component with section routing and lazy loading
- **Navigation**: Global navigation between sections
- **Section-based Architecture**: Each major feature is a separate lazy-loaded component

### Key Sections
1. **HubHomePage**: Landing page with hero section and navigation cards
2. **AICompaniesResearch**: Main research dashboard with project analysis
3. **AIDataScientists**: Profiles of AI researchers and engineers
4. **Future Sections**: Predictoor, Ocean Nodes, Community (currently showing "Coming Soon")

### Data Layer
- **projectsData.js**: Complete AI/Blockchain project database with compatibility scores
- **aiDataScientistsData.js**: Database of AI researchers and engineers
- Static data approach - no external APIs

### Component Architecture
- **ProjectCard**: Individual project display with metrics visualization
- **ProjectDetailModal**: Detailed project analysis modal
- **InsightCard**: Strategic insights display
- **BackgroundPaths**: Animated hero background component

## Technical Patterns

### State Management
- React hooks with local component state
- No global state management (Redux/Context) - sections are independent
- Lazy loading with React.Suspense for performance

### Performance Optimizations
- `useDeferredValue` for search input debouncing
- `useMemo` for stable data references
- Lazy component loading to reduce initial bundle size
- Code splitting by section

### Styling Approach
- CSS Modules pattern with component-specific stylesheets
- Tailwind CSS for utility classes
- Custom CSS properties for consistent theming
- Pink gradient theme (`#ff69b4`, `#ff1493`, `#ffc0cb`)

### Animation System
- Framer Motion for all animations
- Consistent animation variants across components
- Staggered animations for lists and grids
- Hover/tap interactions on interactive elements

## Data Models

### Project Analysis Schema
Each project includes:
- Basic info (name, type, website, description)
- Compatibility metrics (synergy, dataFocus, aiIntegration, decentralization)
- Ocean Protocol integration scores (oceanNodes, dataNFTs, computeToData, predictoor)
- Strategic analysis (risks, opportunities, technical synergies)

### AI Engineer Schema
Each engineer profile includes:
- Personal info and affiliations
- AI specialties and contributions
- Influence metrics (influence, innovation, impact, community)
- GitHub and project links

## Development Notes

### Search and Filtering
- Real-time search with deferred value optimization
- Multi-type filtering system
- Case-insensitive search across name and description fields

### Responsive Design
- Mobile-first approach with CSS Grid and Flexbox
- Responsive typography and spacing
- Touch-friendly interactions on mobile

### GitHub Pages Deployment
- Built files are copied to root directory for GitHub Pages
- Uses `gh-pages` package for deployment automation
- Currently on `gh-pages` branch with build artifacts

## Key Files to Understand

- `src/App.js` - Main routing and lazy loading logic
- `src/components/HubHomePage.js` - Landing page with section navigation
- `src/components/AICompaniesResearch.js` - Main research dashboard
- `src/data/projectsData.js` - Complete project database and metrics
- `src/data/aiDataScientistsData.js` - AI researcher profiles database