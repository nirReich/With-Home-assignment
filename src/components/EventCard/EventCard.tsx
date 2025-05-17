import React from "react";
import { Card, CardContent, CardActions, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faMapMarkerAlt,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import type { Event } from "../../types/events";
import styles from "./EventCard.module.css";

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <Card className={styles.eventCard}>
      <div
        className={styles.cardMedia}
        style={{
          backgroundImage: `url(${event.header.images[0].src || "/placeholder-event.jpg"})`,
        }}
      />
      <CardContent className={styles.cardContent}>
        <Typography variant="h6" component="h2" className={styles.eventTitle}>
          {event.name}
        </Typography>
        <Typography variant="body2" className={styles.eventDescription}>
          {event.description || "No description available"}
        </Typography>

        <div className={styles.eventMeta}>
          <div>
            {/* @ts-expect-error:next-line */}
            <FontAwesomeIcon icon={faCalendarAlt} className={styles.icon} />
            <span>{formatDate(event.startTime)}</span>
          </div>

          {event.location && (
            <div>
              {/* @ts-expect-error:next-line */}
              <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />
              <span>{event.location}</span>
            </div>
          )}

          <div>
            {/* @ts-expect-error:next-line */}
            <FontAwesomeIcon icon={faUsers} className={styles.icon} />
            <span>
              {event.participantsCount}{" "}
              {event.participantsCount === 1 ? "participant" : "participants"}
            </span>
          </div>
        </div>
      </CardContent>

      {event.creator && (
        <CardActions className={styles.cardActions}>
          <div className={styles.creatorInfo}>
            <img
              src={event.creator.profilePicture || "/placeholder-avatar.jpg"}
              alt={event.creator.name}
              className={styles.creatorAvatar}
            />
            <span className={styles.creatorName}>{event.creator.name}</span>
          </div>
        </CardActions>
      )}
    </Card>
  );
};

export default EventCard;
