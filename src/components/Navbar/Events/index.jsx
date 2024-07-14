import EventItem from "./components/Eventitem";
import data from '../../data/events.json';

const { _embedded: {events}} = data;

const handleEventItemClick = (id) =>{
    console.log('evento Clickeado:', id)
}

const Events = () => {

const eventsComponents = events.map( (eventItem) => {

    return <EventItem 
    key={`event-item-${eventItem.id}`} 
    name={eventItem.name}
    info={eventItem.info}
    image={eventItem.images[0].url}
    onEventClick = {handleEventItemClick}
    id={eventItem.id}
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