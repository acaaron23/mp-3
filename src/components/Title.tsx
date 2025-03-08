import { useEffect } from "react";

type TitleProps = {
    Title: string;
};

export default function Title({ Title }: TitleProps){
    useEffect(() => {
        document.title = `${Title} | Resume`;
    }, [Title]);

    return (
        <>
        </>
    );
}