import 'style.scss';

interface DefaultBtnProps {
    title: string,
    link: string
}

export default function DefaultBtn(props: DefaultBtnProps) {
    const { title, link } = props;
    return (
        <a 
            className="default-btn"
            href={link}
            target="_blank"
        >
            {title}
        </a>
    );
}