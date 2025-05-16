import { BoldTitle } from "./styles"

type Props = {
    text: string;
}

export function BoldText({ text }: Props) {

    return (
        <BoldTitle>{text}</BoldTitle>
    )

}