import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import videos from 'json/db.json';
import NaoEncontrada from 'pages/NaoEncontrada';
import { useParams } from 'react-router-dom';
import styles from './Player.module.css';

function Player() {
    const parametros = useParams();
    const video = videos.find((video) => {
        return video.id === Number(parametros.id);
    });

    if(!video) {
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