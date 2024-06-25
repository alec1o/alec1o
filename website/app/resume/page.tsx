import style from "./page.module.css";

export default function Resume() {
    return (
        <>
            <h1 className={style.title}>
                Alecio's resume <sup> (CV)</sup>
            </h1>
            <p className={style.warning}>“Curiosity killed the cat”</p>
            <p className={style.info}>{"When your brain's RAM is full, and the cat just adds to the chaos."}</p>
        </>
    );
}
