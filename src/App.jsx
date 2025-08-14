// Props を渡す側のコンポーネント
import { ColoredMessage } from "./components/ColoredMessage"; // コンポーネントをimport

export const App = () => {
    // ボタンを押した時に実行する関数を定義
    const onClickButton = () => {
        alert();
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
        </>
    );
};