import axios from "axios";
import type { EventsResponse } from "../types/events";

const API_URL = "https://staging-api.coing.co/api/v2/communities/838/groups";

export const fetchEvents = async (
  page: number,
  pageSize: number = 10
): Promise<EventsResponse> => {
  const params = {
    page,
    pageSize,
    "filterBy[closed]": 0,
    "filterBy[isPrivate]": 0,
  };
  try {
    const response = await axios.get(API_URL, {
      params,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};
