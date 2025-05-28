export interface Event {
  id: number;
  uniqId: string;
  name: string;
  header: { images: { type: string; src: string }[] };
  activityBlock: {
    location: { text: string; type: string; raw: string };
    startDate: string;
    endDate: string;
  };
  leader: { name: string; avatar: string };
  badges: { customBadge: string; groupExpiredText: string };
  people: {
    title: string;
    numbers: { maxParticipants: number; participantsCount: number | null };
  };
  paymentText: string;
  description: string;
  cover?: string;
  startTime: string;
  endTime: string;
  isPrivate: boolean;
  closed: boolean;
  maxParticipants?: number;
  participantsCount: number;
  creator?: {
    id: string;
    name: string;
    profilePicture?: string;
  };
}

interface Pagination {
  totalResults: number;
  totalPages: number;
  pageSize: number;
  currentPage: number;
}

export interface EventsResponse {
  data: { pagination: Pagination; records: Event[] };
  meta: {
    totalPages: number;
    currentPage: number;
    pageSize: number;
    total: number;
  };
}
