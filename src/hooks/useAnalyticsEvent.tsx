import ReactGA from 'react-ga4';

const useAnalyticsEvent = (category = 'Category') => {
  const eventTracker = (action = 'Action', label = 'Label') => {
    ReactGA.event({ category, action, label });
  };
  return eventTracker;
};

export default useAnalyticsEvent;
