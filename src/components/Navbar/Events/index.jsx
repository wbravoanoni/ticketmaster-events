import EventItem from "./components/Eventitem";
import data from '../../data/events.json';

const { _embedded: {events}} = data;

const Events = () => {

const eventsComponents = events.map( (eventItem) => {

    return <EventItem 
    key={`event-item-${eventItem.id}`} 
    name={eventItem.name}
    info={eventItem.info}
    image={eventItem.images[0].url}
    />

}); 

    return (
        <div>
        Eventos
        {eventsComponents}
        </div>
    );
};

export default Events;