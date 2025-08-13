export const App = () => {
    // ボタンを押した時に実行する関数を定義
    const onClickButton = () => {
        alert();
    };
    // cssオブジェクト
    const contentStyle = {
        color: "blue",
        fontSize: "20px", // font-size でなく、 fontSize キャメルケースにする
    };

    return (
        <>
            <h1 style={{ color: "red" }}>こんにちは！</h1>{/* 文字を赤くする */}
            <p style={contentStyle}>お元気ですか</p>
            {/* p タグの文字を青色にして、フォントサイズを大きくする */}
            <button onClick={onClickButton}>ボタン</button>
        </>
    );
};