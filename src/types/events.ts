export interface Event {
  id: number;
  name: string;
  header: { images: { type: string; src: string }[] };
  activityBlock: { location: { text: string; type: string; raw: string },startDate:string };
  leader:{name:string,avatar:string};
  badges:{customBadge:string};
  people:{title:string,numbers:{maxParticipants:number,participantsCount:number|null}}
  paymentText:string;
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

export interface EventsResponse {
  data: Event[];
  meta: {
    totalPages: number;
    currentPage: number;
    pageSize: number;
    total: number;
  };
}
