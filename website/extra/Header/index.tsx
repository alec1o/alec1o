import style from "./index.module.css";
import Link from "next/link";

export default function Header() {
    return (
        <header className={style.container}>
            <Link className={style.link} href="#">
                Project
            </Link>
            <Link className={style.link} href="#">
                Profile
            </Link>
            <Link className={style.link} href="#">
                CV
            </Link>
        </header>
    );
}
