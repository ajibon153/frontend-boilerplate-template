import {
  format, formatDistance, isToday, isTomorrow, min,
} from 'date-fns';

export const formatDate = (datetime, fallback = 'N/A') => (
  datetime ? format(new Date(datetime), 'MMMM d, yyyy') : fallback
);

export const formatDayWithReplacement = (datetime, fallback = 'N/A') => {
  if (datetime) {
    if (isToday(new Date(datetime))) return 'Today';
    if (isTomorrow(new Date(datetime))) return 'Tomorrow';
    return format(new Date(datetime), 'iii');
  }
  return fallback;
};

export const formatTime = (datetime, fallback = 'N/A') => (
  datetime ? format(new Date(datetime), 'h.mm a') : fallback
);

export const formatDayAndDate = (datetime, fallback = 'N/A') => (
  datetime ? format(new Date(datetime), 'E, MMM d, yyyy') : fallback
);

export const formatTimePast = (datetime, fallback = 'N/A') => (
  datetime ? `${formatDistance(min([new Date(datetime), new Date()]), new Date())} ago` : fallback
);
