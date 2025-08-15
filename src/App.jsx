import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";
import { CssModules } from "./components/CssModules";
import { StyledJsx } from "./components/StyledJsx";
import { StyledComponents } from "./components/StyledComponents";

export const App = () => {

    // State の定義
    const [num, setNum] = useState(0);// 0は初期値

    // ボタンを押した時に State をカウントアップ
    const onClickButton = () => {
        setNum(num + 1);
        // setNum((prev) => prev + 1);// 厳密にはこのように書く。動作は同じ
    };

    return (
        <>
            <h1 style={{ color: "red" }}>こんにちは！</h1>
            <ColoredMessage />
            {/* コンポーネント化したものを表示 */}
            <ColoredMessage color="blue">お元気ですか?</ColoredMessage>
            <ColoredMessage color="pink">元気です！</ColoredMessage>
            {/* Props として color を渡す */}{/* テキストをchildren で渡す */}
            <button onClick={onClickButton}>ボタン</button>
            <p>{num}</p>
            <hr></hr>

            <CssModules />{/* コンポーネントを表示 */}
            <hr></hr>

            <StyledJsx />{/* コンポーネントを表示 */}
            <hr></hr>

            <StyledComponents />{/* コンポーネントを表示 */}

        </>
    );
};