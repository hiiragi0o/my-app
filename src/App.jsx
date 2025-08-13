export const App = () => {
    // ボタンを押した時に実行する関数を定義
    const onClickButton = () => {
        alert();
    };
    return (
        <>
            <h1>こんにちは！</h1>
            <p>お元気ですか</p>
            {/* 波括弧を使えば、HTMLの中にJavaScript を書ける */}
            <button onClick={onClickButton}>ボタン</button>
        </>
    );
};