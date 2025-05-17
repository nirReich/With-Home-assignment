export interface Event {
  id: string;
  name: string;
  description: string;
  cover?: string;
  startTime: string;
  endTime: string;
  isPrivate: boolean;
  closed: boolean;
  location?: string;
  maxParticipants?: number;
  participantsCount: number;
  creator?: {
    id: string;
    name: string;
    profilePicture?: string;
  };
}

export interface EventsResponse {
  data: Event[];
  meta: {
    totalPages: number;
    currentPage: number;
    pageSize: number;
    total: number;
  };
}