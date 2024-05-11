import styled from "styled-components"
import { UiConf } from '@/constants/uiconf';

interface Props {
    url?: string,
    alt?: string,
}

export const FullImage = ({
    url,
    alt
  }: Props) => {
    return (
        <>
            <div>Image</div>
        </>
    );
}

export default FullImage