import { RegularTitle, TextProps } from "./styles";


type Props = {
    text: string;
    colorText?: TextProps;
}
export function RegularTextComponent({ text, colorText }: Props) {
    return (
        <RegularTitle color={colorText} >{text}</RegularTitle>
    )
}