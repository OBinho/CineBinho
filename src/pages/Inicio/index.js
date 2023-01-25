import styles from './Inicio.module.css';
import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import videos from 'json/db.json';

function Inicio() {
    return (
        <>
            <Banner imagem='home'/>
            <Titulo>
                <h1>Bem Vindo ao CineBinho</h1>
            </Titulo>
            <section className={styles.container}>
            {/* 
                Nesse trecho de código foi usado o método .map. 
                Esse método percorre a lista e retorna um card para cada item. 
                Dentro do card foi enviado o valor de {...musica}, 
                uma expressão chamada de destructuring (desestruturação) que 
                descompactou o item para ser enviado cada uma das propriedades 
                dele (id, titulo, link). 
            */}
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>
        </>
    )
}

export default Inicio;