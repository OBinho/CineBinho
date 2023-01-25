import styles from './Favoritos.module.css';
import Banner from 'components/Banner';
import Card from 'components/Card';
import Titulo from 'components/Titulo';

function Favoritos() {
    return (
        <>
            <Banner imagem={'favoritos'} />
            <Titulo>
                <h1>Seus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                <Card id='1' titulo='Daniel Bobaião' capa='https://clips-media-assets2.twitch.tv/asNvehGLD-5OxmR4QbqXLg/vod-1705596251-offset-7250-preview-260x147.jpg' />
            </section>
        </>
    )
}

export default Favoritos;