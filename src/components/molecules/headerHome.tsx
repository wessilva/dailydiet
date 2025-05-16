import { Logo } from "@components/atoms/logo";
import { ProfileImage } from "@components/atoms/profileImage";

import { ContainerHeader } from "./styles";


export function HeaderHome() {

    return (
        <ContainerHeader>
            <Logo />
            <ProfileImage />
        </ContainerHeader>
    )
}