import { css } from 'lit-element';

export const TABLE_THEME = css`
    table { 
        width: 100%; 
        border-collapse: collapse; 
    }
    th { 
        color: white; 
        font-weight: bold; 
    }
    td, th { 
        padding: 6px; 
        text-align: left; 
    }
    td:not(:last-child) {
        border-right: 1px solid #ebebeb;
    }
    td:not(:first-child) {
        padding-left: 9px;
    }
`

export const MINI_THEME = css`
    .mini-title {
        padding: 2px 0;
        text-align: left;
        font-weight: 18px;
        color: #3c4043;
        font-size: 12px;
    }
    .mini-desc {
        padding: 10px;
        text-align: left;
        color: #202124;
        font-size: 24px;
        padding: 2px 0;
        font-family: Roboto-Medium,Roboto,arial,sans-serif;
    }
    .mini {
        font-weight:1,
    }
`;

export const BUTTON_THEME = css`
    .list-all {
        background-color: #181c2e;
        border: 1px solid #1c2136;
        color: white;
        padding: 8px 16px;
        text-align: center;
        font-size: 14px;
        width: 100%;
    }
`;