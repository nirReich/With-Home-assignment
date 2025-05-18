import React from 'react';
import { CircularProgress, Typography } from '@mui/material';
import EventsGrid from '../../components/EventsGrid/EventsGrid';
import useInfiniteEvents from '../../hooks/useInfiniteEvents';
import styles from './EventsPage.module.css';

const EventsPage: React.FC = () => {
  const { 
    events, 
    loading, 
    error, 
    hasMore, 
    loadEvents, 
    page, 
    totalPages 
  } = useInfiniteEvents(10, 20);

  return (
    <div className={styles.eventsPageContainer}>
      <div className={styles.pageHeader}>
        <Typography variant="h2" className={styles.pageTitle}>
          Upcoming Events
        </Typography>
        <Typography variant="body1" className={styles.pageDescription}>
          Browse through our collection of upcoming events.
        </Typography>
      </div>

      {loading && events.length === 0 ? (
        <div className={styles.loadingContainer}>
          <CircularProgress />
        </div>
      ) : (
        <EventsGrid
          events={events}
          loading={loading}
          error={error}
          hasMore={hasMore}
          loadMore={loadEvents}
          page={page}
          totalPages={totalPages}
        />
      )}
    </div>
  );
};

export default EventsPage;