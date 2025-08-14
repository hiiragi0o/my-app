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
            <ColoredMessage color="blue" message="お元気ですか?" />
            <ColoredMessage color="pink" message="元気です！" />
            {/* Props として color と message を渡す */}
            <button onClick={onClickButton}>ボタン</button>
        </>
    );
};