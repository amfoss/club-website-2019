import { useEffect } from 'react';
import CookieConsent, { getCookieConsentValue, Cookies } from 'react-cookie-consent';
import * as ReactGA from 'react-ga';

export default () => {
  const handleAcceptCookie = () => {
    ReactGA.initialize('UA-115377745-1');
  };

  const handleDeclineCookie = () => {
    //remove google analytics cookies
    Cookies.remove('_ga');
    Cookies.remove('_gat');
    Cookies.remove('_gid');
  };

  useEffect(() => {
    const isConsent = getCookieConsentValue();
    if (isConsent === 'true') {
      handleAcceptCookie();
    }
  }, []);

  return (
    <CookieConsent
      location="bottom"
      enableDeclineButton
      flipButtons={true}
      buttonText="I Accept"
      declineButtonText="I Decline"
      onAccept={handleAcceptCookie}
      onDecline={handleDeclineCookie}
      style={{ background: '#2B373B' }}
      buttonStyle={{ color: '#4e503b', fontSize: '15px' }}
      declineButtonStyle={{ fontSize: '15px' }}
      expires={150}
    >
      <span style={{ margin: 'auto', display: 'table', fontSize: '15px' }}>
        This website uses cookies to enhance the user experience and anaylze traffic.{' '}
        <u>
          <a
            style={{ color: 'white', fontSize: '12px' }}
            href="https://en.wikipedia.org/wiki/HTTP_cookie/"
            target="_blank"
          >
            Learn More
          </a>
        </u>
      </span>
    </CookieConsent>
  );
};
