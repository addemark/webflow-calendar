import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';

import { getEvents } from '$utils/getEvents';
// import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const eventsList = getEvents('[data-element="events"]');
  const caledar = document.querySelector<HTMLElement>('[data-element="calendar"]');
  if (!caledar) return;
  // console.log('[*****]', caledar, eventsList);
  // greetUser('test');
  const displayCalendar = new Calendar(caledar, {
    plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,listWeek',
    },
    events: eventsList,
    locale: 'ro',
  });
  displayCalendar.render();
});
