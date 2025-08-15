// postcss（CSSを変換するツール）に Tailwind CSS と Autoprefixer を組み込むための設定
module.exports = {
    style: {
        postcss: {
            plugins: [
                require('tailwindcss'), // Tailwind CSS を使えるようにする
                require('autoprefixer'), // Autoprefixer を使えるようにする
            ],
        },
    },
}