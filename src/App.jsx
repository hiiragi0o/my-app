// export の種類（export default）
import { useState } from "react";
import { useEffect } from "react";
import ColoredMessage from "./components/ColoredMessage"; // 書き方が変わる

export const App = () => {

    // State の定義
    const [num, setNum] = useState(0);// 0は初期値

    // useEffect を使う
    useEffect(() => {
        alert();
    }, [num]); // ボタンクリックでnumが変化するごとに、アラートが表示される

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
        </>
    );
};