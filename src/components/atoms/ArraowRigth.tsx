import { ArrowIconStyle, ArrowUpIcon } from "./styles";
import { ArrowUpRight } from "phosphor-react-native";

type Props = {
    onPress: () => void;
}
export function ArrowRight({ onPress }: Props) {

    return (
        <ArrowUpIcon onPress={onPress} >
            <ArrowIconStyle />
        </ArrowUpIcon>
    )
}