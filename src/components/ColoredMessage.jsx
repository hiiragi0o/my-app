// Props を渡される側のコンポーネント
export const ColoredMessage = (props) => {

    //  propsから color と children を取り出す（分割代入）
    const { color, children } = props;

    const contentStyle = {
        color: color,// props.が不要
        fontSize: "20px",
    };

    // props.が不要
    return <p style={contentStyle}>{children}</p>;
};