import { RegularTextComponent } from "@components/atoms/regularText"
import { ContainerPercent } from "./styles"
import { BoldText } from "@components/atoms/boldText"
import { ArrowRight } from "@components/atoms/ArraowRigth"

export function Infopercent() {

    return (
        <ContainerPercent>
            <ArrowRight onPress={() => { }} />
            <BoldText text="98,86%" />
            <RegularTextComponent text="das refeições dentro da dieta" />
        </ContainerPercent>
    )
}