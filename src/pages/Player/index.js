import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import NaoEncontrada from 'pages/NaoEncontrada';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Player.module.css';

function Player() {
    const [video, setvideo] = useState();
    const parametros = useParams();

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/obinho/cinebinho-api/videos?id=${parametros.id}`)
            .then(resposta => resposta.json())
            .then(dados => {
                setvideo(...dados)
            })
    }, [])

    if (!video) {
        return <NaoEncontrada />
    }

    return (
        <>
            <Banner imagem='player' />
            <Titulo><h1>Player</h1></Titulo>
            <section className={styles.container}>
                <iframe
                    src={video.link}
                    title={video.titulo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </section>
        </>
    )
}

export default Player;