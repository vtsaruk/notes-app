
import styled from 'styled-components';

export default styled.div.attrs({ className: 'editor-wrapper' })`
    background: #fefefe;
    width: calc(100vw - 300px);
    padding: 4px;

    .edit-area {
        max-height: 100vh;
        min-height: 100vh;
        overflow-y: auto;
        counter-reset: heading;

        &:focus{
            outline: none;
        }
        p {
            position: relative;
            min-height: 18px;
            padding-right: 32px;
            display: flex;
        }
        p::after {
            counter-increment: heading;
            content: counter(heading);
            display: inline-block;
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%); 
            height: 16px;
            font-size: 12px;
            color: #999;
        }

`;