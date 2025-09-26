"use client";
import { useState } from "react";
import PlusIcon from "./PlusIcon";
import s from "./FAQ.module.scss";

type FaqProps = { id: string; question: string; answer?: string; href?: string };

function FaqItem({ faq }: { faq: FaqProps }) {
    const [open, setOpen] = useState(false);

    return (
        <li className={s["faq__faq-row"]}>
            <button
                type="button"
                className={s["faq__faq-btn"]}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
            >
                <span>{faq.question}</span>
                <PlusIcon rotated={open} />
            </button>
            {open && faq.answer && (
                <div className={s["faq__answer"]} role="region" aria-label={faq.question}>
                    {faq.answer}
                </div>
            )}
        </li>
    );
}

export default FaqItem; 
