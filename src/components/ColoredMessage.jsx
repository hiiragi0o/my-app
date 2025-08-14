// Props を渡される側のコンポーネント
export const ColoredMessage = (props) => {
    // {color="blue" message="お元気ですか?"}
    const contentStyle = {
        color: props.color,
        fontSize: "20px",
    };

    // props.children に変更
    return <p style={contentStyle}>{props.children}</p>;
};