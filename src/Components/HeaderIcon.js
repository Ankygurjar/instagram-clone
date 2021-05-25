import React from 'react'
import styled from 'styled-components'

function HeaderIcon({Icon, image}) {
    return (
        <HeaderIconContainer>
            {Icon && <Icon fontSize="medium" style={{padding: 10}}/>}
        </HeaderIconContainer>
    )
}

export default HeaderIcon

const HeaderIconContainer = styled.div`

    cursor: pointer;

    >.MuiSvgIcon-root{
        cursor: pointer;
    }

    > img {
        width: 44px;
        height: 40px;
        border-radius: 50%;
    }

`

