import styles from "./FAQ.module.scss";

function PlusIcon({ rotated = false }: { rotated?: boolean }) {
    const cls = [
        styles.faq__plus,
        rotated ? styles.faq__plus__rotated : ""
    ].join(" ");
    return (
        <svg className={cls} width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path d="M8 0h2v18H8z" />
            <path d="M0 8h18v2H0z" />
        </svg>
    );
}

export default PlusIcon;
