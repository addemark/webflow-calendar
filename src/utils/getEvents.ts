/**
 * This will search the text in an div with the attribute data-element="event"
 * @param attribute the attribute in witch we search data
 */

type EventType = {
  title: string;
  date: string;
};

export function getEvents(attribute: string): EventType[] {
  const elements = document.querySelector<HTMLElement>(attribute);
  const events: EventType[] = [];
  const children = Array.from(elements?.children || []);
  children.forEach((element) => {
    const text = (element as HTMLElement).innerHTML;
    const textArray = text.split('/');
    if (textArray.length > 1) events.push({ date: textArray[0], title: textArray[1] });
  });
  console.log('[****]', events);

  return events;
}
