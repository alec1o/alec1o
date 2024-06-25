import style from "./index.module.css";

export default function Footer() {
    return (
        <div className={style.container}>
            <p className={style.message}>Powered by ALEC1O</p>
            <p className={style.copyright}>&copy;{new Date().getFullYear()} ALEC1O. All rights reserved</p>
        </div>
    );
}
