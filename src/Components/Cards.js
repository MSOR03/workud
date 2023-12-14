import React from "react";
import Card from "./Card";

import image1 from '../Images/qgisdownload.jpeg';
import image2 from '../Images/imagesatelital.jpg'
import image3 from '../Images/staticsqgis.jpg'

const cards = [
    {
      id: 1,
      title: "Fazt Web",
      image: image1,
      url: "https://faztweb.com",
      text: "Descripción personalizada para Fazt Web. Puedes cambiar este texto según tus necesidades.",
    },
    {
      id: 2,
      title: "Fazt Blog",
      image: image2,
      url: "https://blog.faztweb.com",
      text: "Descripción personalizada para Fazt Blog. Puedes cambiar este texto según tus necesidades.",
    },
    {
      id: 3,
      title: "Fazt Youtube",
      image: image3,
      url: "https://youtube.com/fazttech",
      text: "Descripción personalizada para Fazt Youtube. Puedes cambiar este texto según tus necesidades.",
    },
    {
        id: 1,
        title: "Fazt Web",
        image: image1,
        url: "https://faztweb.com",
        text: "Descripción personalizada para Fazt Web. Puedes cambiar este texto según tus necesidades.",
      },
      {
        id: 2,
        title: "Fazt Blog",
        image: image2,
        url: "https://blog.faztweb.com",
        text: "Descripción personalizada para Fazt Blog. Puedes cambiar este texto según tus necesidades.",
      },
      {
        id: 3,
        title: "Fazt Youtube",
        image: image3,
        url: "https://youtube.com/fazttech",
        text: "Descripción personalizada para Fazt Youtube. Puedes cambiar este texto según tus necesidades.",
      },
      {
        id: 3,
        title: "Fazt Youtube",
        image: image3,
        url: "https://youtube.com/fazttech",
        text: "Descripción personalizada para Fazt Youtube. Puedes cambiar este texto según tus necesidades.",
      },
  ];
  

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id, text}) => (
            
          <div className="col-md-4 mb-4" key={id}>
            <Card imageSource={image} title={title} text={text} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;