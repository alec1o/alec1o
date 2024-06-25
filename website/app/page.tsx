import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import { FaSpotify } from "react-icons/fa";
import { FcDebian } from "react-icons/fc";
import { SiBlender } from "react-icons/si";
import { GrFedora } from "react-icons/gr";
import { SiNextdotjs } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { SiRabbitmq } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa6";
import { SiMacos } from "react-icons/si";
import { MdHttp } from "react-icons/md";
import { SiRedis } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaUbuntu } from "react-icons/fa6";
import { SiCsharp } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaDocker } from "react-icons/fa6";
import { FaUnity } from "react-icons/fa6";
import { FcLinux } from "react-icons/fc";
import { GiAfrica } from "react-icons/gi";
import { FaLanguage } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

export default function Home() {
    const me = {
        name: "Alecio Furanze",
        country: "Mozambique",
        languages: ["Portuguese", "English"],
    };

    const social = [
        { name: "GitHub", icon: <FaGithub color="#FFFFFF" />, url: "https://github.com/alec1o" },
        { name: "Instagram", icon: <RiInstagramFill color="#FFFFF" />, url: "https://www.instagram.com/alec1o" },
        { name: "YouTube", icon: <FaYoutube color="#FFFFFF" />, url: "https://www.youtube.com/@alec1o" },
        { name: "LinkedIn", icon: <FaLinkedin color="#FFFFFF" />, url: "https://www.linkedin.com/in/alec1o" },
    ];
    const artist = [
        { name: "🥇 VMZ", icon: <FaSpotify color="#1ED860" />, url: "" },
        { name: "🥈 Juice WRLD", icon: <FaSpotify color="#1ED860" />, url: "" },
        { name: "🥈 XXXTentacion", icon: <FaSpotify color="#1ED860" />, url: "" },
    ];
    const programming = [
        { name: "AWS", icon: <FaAws color="#FF9C08" />, url: "#" },
        { name: "Linux", icon: <FcLinux />, url: "#" },
        { name: "Unity", icon: <FaUnity />, url: "#" },
        { name: "Docker", icon: <FaDocker color="#0895E7" />, url: "#" },
        { name: "Mongo DB", icon: <DiMongodb color="#189555" />, url: "#" },
        { name: "RabbitMQ", icon: <SiRabbitmq color="#F26C29" />, url: "#" },
        { name: "Redis", icon: <SiRedis color="#DD3528" />, url: "#" },
        { name: "Blender", icon: <SiBlender color="#EB7A08" />, url: "#" },
        { name: ".NET", icon: <SiDotnet color="#5632D5" />, url: "#" },
        { name: "React.js", icon: <FaReact color="#61DBFB" />, url: "#" },
        { name: "Next.js", icon: <SiNextdotjs color="#FFFFFF" />, url: "#" },
        { name: "C#", icon: <SiCsharp color="#3F0893" />, url: "#" },
        { name: "TypeScript", icon: <SiTypescript color="#2D79C7" />, url: "#" },
        { name: "JavaScript", icon: <SiJavascript color="#F7E025" />, url: "#" },
        { name: "Python", icon: <FaPython color="#3C77A8" />, url: "#" },
        { name: "...More", icon: <></>, url: "#" },
    ];

    return (
        <>
            <div id="me" className={styles.meContainer}>
                <div id="me" className={styles.pictureContainer}>
                    <Image
                        className={styles.picture}
                        src={"/profile.jpg"}
                        objectFit="cover"
                        width={128}
                        height={128}
                        alt="Alecio Furanze, Profile Image"
                    />
                </div>
                <div className={styles.info}>
                    <h1 className={styles.infoName}>{me.name}</h1>
                    <span className={styles.infoCountry}>
                        <GiAfrica /> {me.country}{" "}
                    </span>
                    <span className={styles.infoLanguages}>
                        <FaLanguage /> <div className={styles.infoLanguage}>{me.languages.join(", ")} </div>
                    </span>
                </div>
                <div className={styles.linkContainer}>
                    <h2 className={styles.linkTitle}>Sharing platform</h2>
                    {social.map((x) => (
                        <Link key={x.name} href={x.url} className={styles.link}>
                            {x.icon} {x.name}{" "}
                        </Link>
                    ))}
                </div>
                <div className={styles.linkContainerReverse}>
                    <h2 className={styles.linkTitle}>Musical artist</h2>
                    {artist.map((x) => (
                        <Link key={x.name} href={x.url} className={styles.link}>
                            {x.icon} {x.name}{" "}
                        </Link>
                    ))}
                </div>
                <div className={styles.linkContainer}>
                    <h2 className={styles.linkTitle}>Programming</h2>
                    {programming.map((x) => (
                        <Link key={x.name} href={x.url} className={styles.link}>
                            {x.icon} {x.name}{" "}
                        </Link>
                    ))}
                </div>
            </div>
            <div id="resume" className={styles.container}></div>
            <div id="project" className={styles.container}></div>
        </>
    );
}
