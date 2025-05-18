import { useState, useEffect } from "react";
import type { Event } from "../types/events";
import { fetchEvents } from "../api/eventsApi";

const useInfiniteEvents = (
  initialPageSize: number = 10,
  maxPages: number = 20
) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  const loadEvents = async () => {
    if (page > maxPages) {
      setHasMore(false);
      return;
    }

    if (loading || !hasMore) return;

    try {
      setLoading(true);
      const response = await fetchEvents(page, initialPageSize);
      const responseEvents = response.data.records;
      
      setEvents((prevEvents) => [...prevEvents, ...responseEvents]);
      setTotalPages(response.data.pagination.totalPages);
      setHasMore(page < Math.min(response.data.pagination.totalPages, maxPages));
      setPage((prevPage) => prevPage + 1);
      setError(null);
    } catch (err) {
      setError("Failed to fetch events. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    events,
    loading,
    error,
    hasMore,
    loadEvents,
    page: page - 1,
    totalPages,
  };
};

export default useInfiniteEvents;
