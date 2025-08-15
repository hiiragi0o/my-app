// よく使う。幅広い書き方ができる。

// ↓ この行も重要
/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {

    // ①scss の書き方がそのまま可能な書き方（Styled JSX のような書き方もできる）
    const containerStyle = css`
        border: solid 1px #aaa;
        border-radius: 20px;
        padding: 8px;
        margin: 8px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    `;

    // ②インラインスタイルの書き方（JavaScriptで定義もできる）
    const titleStyle = css({
        margin: 0,
        color: "#aaa"
    });

    // ③styled-components のような書き方もできる
    const SButton = styled.button`
    background-color: #ddd;
    border: none;
    padding: 8px;
    border-radius: 8px;

    &:hover {
        background-color: #aaa;
        color: #fff;
        cursor: pointer;
    `;

    return (
        <div css={containerStyle}>{/* ①Styled JSX */}
            <p css={titleStyle}>Emotion です</p>{/* ②インラインスタイル */}
            <SButton>ボタン</SButton>{/* ③styled-components */}
        </div>
    );
};