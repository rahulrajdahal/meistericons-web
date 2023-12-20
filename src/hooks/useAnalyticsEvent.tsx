import { event } from 'react-ga';

const useAnalyticsEvent = (category = 'Category') => {
  const eventTracker = (action = 'Action', label = 'Label') => {
    event({ category, action, label });
  };
  return eventTracker;
};

export default useAnalyticsEvent;
