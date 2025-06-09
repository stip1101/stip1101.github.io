# Ocean Protocol Ecosystem Dashboard

An interactive dashboard showcasing the comprehensive analysis of AI/Blockchain project relationships with Ocean Protocol.

## Features

- **Interactive Charts**: Beautiful pie charts and scatter plots showing relationship distributions and synergy metrics
- **Project Cards**: Detailed project information with animated metrics bars
- **Search & Filter**: Real-time search and filtering by relationship type
- **Strategic Insights**: Key findings and recommendations for Ocean Protocol
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Smooth Animations**: Powered by Framer Motion for delightful user experience

## Tech Stack

- **React 18** - Modern React with hooks
- **Framer Motion** - Smooth animations and interactions
- **Recharts** - Beautiful, responsive charts
- **Lucide React** - Modern icon library
- **CSS Grid & Flexbox** - Responsive layout

## Color Palette

- Primary Pink: `#ff69b4` (Hot Pink)
- Secondary Pink: `#ff1493` (Deep Pink)
- Light Pink: `#ffc0cb` (Pink)
- Background: White with subtle pink gradient

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ocean-protocol-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Data Structure

The dashboard visualizes data from a comprehensive research study analyzing:

- **17 Projects** across different relationship types
- **4 Key Metrics**: Synergy, Data Focus, AI Integration, Decentralization
- **6 Relationship Types**: Complement, Direct Competitor, Potential Partner, Research Partner, Technology Provider, Service Partner

## Key Insights

1. **Synergy Potential**: Complements represent 35.3% of projects
2. **Privacy-Preserving Trend**: Growing focus on confidential computing
3. **Competitive Landscape**: Healthy 17.6% direct competition
4. **Research Opportunities**: Strong partnerships with leading AI research organizations

## Project Structure

```
src/
├── components/
│   ├── Dashboard.js          # Main dashboard component
│   ├── Dashboard.css         # Dashboard styles
│   ├── ProjectCard.js        # Individual project card
│   └── InsightCard.js        # Strategic insight card
├── data/
│   └── projectsData.js       # Project data and relationships
├── App.js                    # Main app component
├── App.css                   # Global app styles
├── index.js                  # React entry point
└── index.css                 # Global CSS
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgments

- Ocean Protocol for the ecosystem they've built
- All the AI/Blockchain projects included in this analysis
- The research community for their valuable insights 