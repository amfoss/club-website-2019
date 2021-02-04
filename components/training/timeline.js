import { read } from 'gray-matter';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default () => {
  return (
    <>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Module 1"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#000000' }}
        >
          <h4 className="vertical-timeline-element-title">Build the First App</h4>
          <p>
            <li>Android Studio and Hello World</li>
            <li>First Interactive UI</li>
            <li>Text and scrolling views</li>
            <li>Learning to help yourself</li>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Module 2"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h4 className="vertical-timeline-element-title">
            Activities, Intents, lifecycle and states
          </h4>
          <p>
            <li>Activities and intents</li>
            <li>Activity lifecycle and state</li>
            <li>Implicit intents</li>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Module 3"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h4 className="vertical-timeline-element-title">
            Testing, Debugging and Adding support libraries
          </h4>
          <p>
            <li>The Debugger</li>
            <li>Unit Tests</li>
            <li>Support libraries</li>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Module 4"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h4 className="vertical-timeline-element-title">User Interaction</h4>
          <p>
            <li>Input Controls</li>
            <li>Menus And Pickers</li>
            <li>User Navigation</li>
            <li>Recycler View</li>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Module 5"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h4 className="vertical-timeline-element-title">
            User experience improvisation
          </h4>
          <p>
            <li>Drawable, styles and themes</li>
            <li>Cards and Colors</li>
            <li>Adaptive layouts</li>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Module 6"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h4 className="vertical-timeline-element-title">UI Testing</h4>
          <p>
            <li>Using the Espresso Library</li>
            <li>Espresso Test Recording</li>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Module 7"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h4 className="vertical-timeline-element-title">Background Tasks</h4>
          <p>
            <li>AsyncTask</li>
            <li>AsyncTask and Async Loader</li>
            <li>Broadcast receivers</li>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Module 8"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h4 className="vertical-timeline-element-title">
            {' '}
            Alarms and Schedulers{' '}
          </h4>
          <p>
            <li>Notifications</li>
            <li>The alarm manager</li>
            <li>JobScheduler</li>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Module 9"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h4 className="vertical-timeline-element-title">
            {' '}
            Preference and settings
          </h4>
          <p>
            <li>Shared Preferences</li>
            <li>App Settings</li>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Module 10"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h4 className="vertical-timeline-element-title">Storing data with Room</h4>
          <p>
            <li>Room, LiveData and Room Model</li>
            <li>Deleting data from a room db</li>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
};
