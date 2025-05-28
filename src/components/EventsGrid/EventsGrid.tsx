import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { CircularProgress, Typography } from "@mui/material";
import EventCard from "../EventCard/EventCard";
import type { Event } from "../../types/events";
import styles from "./EventsGrid.module.css";

interface EventsGridProps {
  events: Event[];
  loading: boolean;
  error: string | null;
  hasMore: boolean;
  loadMore: () => void;
  page: number;
  totalPages: number;
}

const EventsGrid: React.FC<EventsGridProps> = ({
  events,
  error,
  hasMore,
  loadMore,
  page,
  totalPages,
}) => {
  return (
    <>
      {/* @ts-expect-error:next-line */}
      <InfiniteScroll
        dataLength={events.length}
        next={loadMore}
        hasMore={hasMore}
        loader={
          <div className={styles.loadingContainer}>
            <CircularProgress size={24} />
          </div>
        }
        endMessage={
          <div className={styles.paginationInfo}>
            <Typography variant="body2">
              End of events list. Showing {events.length} events.
            </Typography>
          </div>
        }
      >
        <div className={styles.eventsGrid}>
          {events.map((event) => (
            <EventCard
              key={`${event.uniqId}}`}
              event={event}
            />
          ))}

          {error && (
            <div className={styles.errorContainer}>
              <Typography color="error">{error}</Typography>
            </div>
          )}

          {!error && events.length > 0 && (
            <div className={styles.paginationInfo}>
              <Typography variant="body2">
                Page {page} of {Math.min(totalPages, 20)} | Showing{" "}
                {events.length} events
              </Typography>
            </div>
          )}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default EventsGrid;
