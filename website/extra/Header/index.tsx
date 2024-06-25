"use client";

import { useState } from "react";
import style from "./index.module.css";
import Link from "next/link";
import { GiSelfLove } from "react-icons/gi";
import { IoMdSchool } from "react-icons/io";
import { IoCodeSlash } from "react-icons/io5";

enum LinkOf {
    Resume,
    Me,
    Project,
}

export default function Header() {
    const [linkOf, setLinkOf] = useState(LinkOf.Me);

    function getLinkStyle(myLinkOf: LinkOf): string {
        if (myLinkOf === linkOf) return style.selected;
        return "";
    }

    return (
        <header className={style.container}>
            <Link className={`${style.link} ${getLinkStyle(LinkOf.Resume)}`} href="/resume" onClick={(e) => setLinkOf(LinkOf.Resume)}>
                <IoMdSchool /> Resume
            </Link>
            <Link className={`${style.link} ${getLinkStyle(LinkOf.Me)}`} href="/" onClick={(e) => setLinkOf(LinkOf.Me)}>
                <GiSelfLove /> Me
            </Link>
            <Link className={`${style.link} ${getLinkStyle(LinkOf.Project)}`} href="/project" onClick={(e) => setLinkOf(LinkOf.Project)}>
                <IoCodeSlash /> Project
            </Link>
        </header>
    );
}
