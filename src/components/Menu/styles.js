
import styled from 'styled-components';

export default styled.div.attrs({ className: 'menu-wrapper' })`
    background: #252525;
    width: 300px;
    color: #fff;
    min-height: 100vh;

    .title-note {
        padding: 1rem 2rem;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &.active {
            background: #FDD657;
            color: #000;

            .MuiButton-root {
                min-width: 16px;
            }
        }
    }
    
`;