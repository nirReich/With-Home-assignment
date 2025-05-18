import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import placeHolderImage from "../../assets/e906f186f48de7cc0ceaeec3f38813b02b28fa06.jpg";
import {
  faCalendarAlt,
  faMapMarkerAlt,
  faDollarSign,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import type { Event } from "../../types/events";
import styles from "./EventCard.module.css";
import FlipCardDate from "../DateBox/DateBox";

interface EventCardProps {
  event: Event;
}


const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const formatDate = (
    dateString: string,
    dateOptions: Partial<{
      weekday: "long";
      year: "numeric";
      month: "long";
      day: "numeric";
      hour: "numeric";
      minute: "numeric";
    }>
  ) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("he-IL", {
      ...dateOptions,
    });
  };

  return (
    <Card className={styles.eventCard}>
      <div
        className={styles.cardMedia}
        style={{
          backgroundImage: `url(${
            event.header.images[0].src || placeHolderImage
          })`,
        }}
      >
        {event.badges?.groupExpiredText && <div className={styles.badgesBox}>
          {event.badges.groupExpiredText}
        </div>}
        <div className={styles.peopleCounter}>
          <span>
            {event.people.numbers.participantsCount || 0} /
            {event.people.numbers.maxParticipants || 0} 
          </span>
        </div>
      </div>

      <CardContent className={styles.cardContent}>
        <Typography variant="h6" component="h2" className={styles.eventTitle}>
          {event.name}
          <FlipCardDate month={"aug"} day={"18"}/>
        </Typography>

        <div className={styles.eventMeta}>
          <div>
            {/* @ts-expect-error:next-line */}
            <FontAwesomeIcon icon={faCalendarAlt} className={styles.icon} />
            <span>
              {formatDate(event.activityBlock.startDate, { weekday: "long" })}
            </span>
          </div>
          <div>
            {/* @ts-expect-error:next-line */}
            <FontAwesomeIcon icon={faClock} className={styles.icon} />
            <span>
              {formatDate(event.activityBlock.startDate, {
                hour: "numeric",
                minute: "numeric",
              })}
            </span>
          </div>
          <div>
            {/* @ts-expect-error:next-line */}
            <FontAwesomeIcon icon={faDollarSign} className={styles.icon} />
            <span>{event.paymentText || "free"}</span>
          </div>

          {event.activityBlock.location.text && (
            <div>
              {/* @ts-expect-error:next-line */}
              <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />
              <span className={styles.locationBox}>{event.activityBlock.location.text}</span>
            </div>
          )}
        </div>
        {event.leader && (
          <div className={styles.creatorInfo}>
            {event.leader?.avatar && (
              <img
                src={event.leader.avatar}
                alt={event.leader.name}
                className={styles.creatorAvatar}
              />
            )}

            <span className={styles.creatorName}>{event.leader.name}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default EventCard;
