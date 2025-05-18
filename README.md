# With-Home-assignment
With Home assignment-  react app with a grid view that display events

## Features

- grid view with 5 columns
- Infinite scroll loading of events in batches of 10
- Display of event details including name, description, time, location, and participants
- MUI Card components for a clean, modern UI
- Error handling and loading states

## Technologies Used

- React 
- TypeScript
- Axios for API calls
- Material-UI for components
- CSS Modules for styling
- Font Awesome icons
- React Infinite Scroll Component

## Getting Started

### Prerequisites

- Yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/nirReich/With-Home-assignment.git
cd With-Home-assignment
```

2. Install dependencies:
```bash
yarn install
```

3. Start the development server:
```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Project Structure

```
src/
├── api/
│   └── eventsApi.ts       # API service for fetching events
├── components/
│   ├── EventCard/         # Individual event card component
│   ├── EventsGrid/        # Grid layout for events with infinite scroll
├── hooks/
│   └── useInfiniteEvents.ts  # Custom hook for event pagination
├── types/
│   └── events.ts          # TypeScript interfaces
├── pages/
│   ├── EventsPage/        # Main events page
├── App.tsx                # Main application component
└── index.tsx              # Entry point
```

## API

The application fetches events data from:
```
https://staging-api.coing.co/api/v2/communities/838/groups?page=1&pageSize=10&filterBy[closed]=0&filterBy[isPrivate]=0
```
