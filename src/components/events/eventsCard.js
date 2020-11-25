import React from 'react';
import Link from 'next/link';
import dateFormat from 'dateformat';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export default ({ event, title }) => (
  <div className="post-card h-100">
    <a href={'https://events.amfoss.in/' + event.slug}>
      <Carousel
        autoPlay
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        infiniteLoop
        swipeable
        className="w-100"
      >
        {event.album.photos.length
          ? event.album.photos.map((slide, i) => (
              <img
                key={i}
                src={`https://api.amfoss.in/${slide.image}`}
                alt={'Photos of ' + title}
              />
            ))
          : null}
      </Carousel>
      <div>
        <div className={'tag my-4 ' + event.eventType}>{event.eventType}</div>
        <h5 className="w-90 px-3 mb-3 mt-1 mx-2">{event.title}</h5>
      </div>
      <div className="pb-5">
        <p className="post-card-footer">
          <span>{dateFormat(new Date(event.date), 'dS mmmm, yyyy')}</span>
        </p>
      </div>
    </a>
  </div>
);
