

export const Description = (props) => {
    const { title, text, price, city, contact, photo } = props.data;

    return (
        <div>
            <h2>{title}</h2>
            <img className= "photo" src={photo} alt="dům"/>
            <h3>Popis nemovitosti:</h3>
            <p>{text}</p>
            <p>Cena: {price} Kč</p>
            <p>Město: {city}</p>
            <h3>Kontakt:</h3>
            <p>Jméno: {contact.name}</p>
            <p>Email: {contact.email}</p>
            <p>Telefon: {contact.phone}</p>
        </div>
    );
};