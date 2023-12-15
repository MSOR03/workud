import React, { useState } from 'react';
import Cards from '../Components/Cards';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../Styles/Guides.css';

const GuidesPage = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const highlightedDates = {
        '2024-02-20': 'Entregar Guia 1 antes de las 11:59 PM ',
        '2024-03-10': 'Entregar Guia 2 antes de las 11:59 PM',
        '2024-03-25': 'Entregar Guia 3 antes de las 11:59 PM',
        '2024-04-10': 'Entregar Guia 4 antes de las 11:59 PM',
        '2024-04-25': 'Entregar Guia 5 antes de las 11:59 PM',
        '2024-05-15': 'Entregar Guia 6 antes de las 11:59 PM'
        // Agrega más fechas según sea necesario
    };

    const handleDateChange = (newDate) => {
        setSelectedDate(newDate);
    };

    const handleTileClick = (date) => {
        // Muestra un mensaje para la fecha clicada
        const message = highlightedDates[date.toISOString().split('T')[0]];
        if (message) {
            alert(message);
        }
    };

    const tileContent = ({ date }) => {
        // Verifica si la fecha actual está en el objeto de fechas resaltadas
        if (highlightedDates[date.toISOString().split('T')[0]]) {
            return <span style={{ backgroundColor: 'yellow' }}>✔</span>;
        }
        return null;
    };

    return (
        <div>
            <div className='title-guides'>
                <h1>Guías para el Semestre</h1>
            </div>

            <div className='container-cards'>
                <Cards />
            </div>
            <div className='container'>
                <h2>Fechas para entrega de guías</h2>
                <div className='container-calendar'>
                    <Calendar
                        onChange={handleDateChange}
                        value={selectedDate}
                        tileContent={tileContent}
                        onClickDay={(date, event) => handleTileClick(date, event)}
                    />
                </div>
            </div>
        </div>
    );
};

export default GuidesPage;
