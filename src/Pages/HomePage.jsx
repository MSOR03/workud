import '../Styles/HomePage.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { EarthScene } from '../Components/EarthScene.js';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
//Images to slide
import qgis from "../Images/qgisdownload.jpeg"
import satelitalimage from "../Images/imagesatelital.jpg"
import statics from "../Images/staticsqgis.jpg"
import classify from "../Images/classify.png"
import YouTubeVideo from '../Components/Video.js';
import { House } from '../Components/House.jsx';

import { AmbientLight, DirectionalLight } from 'three';
import { Suspense } from 'react';
import { PointLight } from 'three';



const HomePage = () => {
    return (


        <div>

            <div className="text-container">
                <p>La percepción remota, a menudo llamada teledetección, representa una ventana
                    virtual a nuestro mundo y más allá, sin la necesidad de estar físicamente
                    presente en el lugar de interés. Este campo científico utiliza una variedad
                    de sensores y plataformas, desde satélites hasta aviones no tripulados, para
                    recopilar datos valiosos sobre la superficie terrestre, la atmósfera y los
                    océanos.</p>
                <p>
                    Uno de los pilares fundamentales de la percepción remota es la capacidad de
                    adquirir información sin contacto directo. Esto se logra mediante la detección
                    y registro de la radiación electromagnética reflejada o emitida por los objetos
                    y áreas de interés. Los sensores especializados capturan esta radiación en
                    diversas bandas del espectro electromagnético, desde la luz visible hasta las
                    microondas.
                </p>
            </div>
            <div className='scene'>
                <EarthScene />
            </div>
            <div className="additional-images">

                <h2 className='title-slide'>Temas a tratar</h2>
                <Carousel autoPlay interval={4000} infiniteLoop={true}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px', overflow: 'hidden' }}>
                        <img src={qgis} style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="Grafo" />
                        <p className="subtitle">Un grafo es una forma de representar relaciones entre objetos mediante puntos y líneas. Los puntos se llaman vértices o nodos, y las líneas se llaman aristas o arcos. Los grafos se usan en matemáticas y ciencias de la computación para estudiar problemas de lógica, topología y combinatoria. Por ejemplo, se puede usar un grafo para modelar una red de computadoras, donde los vértices son los dispositivos y las aristas son las conexiones</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px', overflow: 'hidden' }}>
                        <img src={satelitalimage} style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="Array" />
                        <p className="subtitle">Un array es una estructura de datos que puede almacenar una colección de elementos del mismo tipo de datos. Un array se utiliza para almacenar una colección de datos, pero a menudo es más útil pensar en un array como una colección de variables del mismo tipo. Por ejemplo, un array de enteros puede almacenar varios números enteros, y un array de cadenas puede almacenar varios textos. Para acceder a un elemento de un array</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px', overflow: 'hidden' }}>
                        <img src={statics} style={{ width: '90%', height: '100%', objectFit: 'contain' }} alt="BST" />
                        <p className="subtitle">Un árbol binario es un tipo de grafo que tiene la propiedad de que cada nodo puede tener como máximo dos hijos, llamados hijo izquierdo y hijo derecho. Los árboles binarios se usan para almacenar y procesar datos de forma eficiente, ya que permiten realizar operaciones de búsqueda, inserción y eliminación en un tiempo proporcional al logaritmo del número de nodos. Un ejemplo de árbol binario es el árbol binario de búsqueda, que mantiene los elementos ordenados según una clave.</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px', overflow: 'hidden' }}>
                        <img src={classify} style={{ width: '90%', height: '100%', objectFit: 'contain' }} alt="Hash" />
                        <p className="subtitle">Las tablas hash son estructuras de datos que permiten asociar claves con valores de forma eficiente. Para ello, utilizan una función hash que transforma las claves en números enteros que representan las posiciones de un arreglo donde se almacenan los valores. Las tablas hash facilitan la búsqueda, inserción y eliminación de elementos, ya que solo requieren conocer la clave para acceder al valor correspondiente. Sin embargo, las tablas hash pueden tener problemas de colisiones, que ocurren cuando dos o más claves se mapean a la misma posición del arreglo. Para resolver las colisiones, se pueden usar diferentes técnicas, como listas enlazadas, direccionamiento abierto o doble hashing</p>
                    </div>
                </Carousel>

            </div>
            <div className='video-youtube'>
                <YouTubeVideo />
            </div>
            {/*
                <div className='house-model'>
                    <Canvas camera={{ zoom: 1, position: [20, 20, 15] }}>
               
                    <ambientLight intensity={0.5}/>
                        <Suspense fallback={null}>
                            <House />
                        </Suspense>
                        <OrbitControls />

                    </Canvas>
    </div>*/}



        </div>


    );
};
export default HomePage;