module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  // Tailwind が 使っていないCSSを自動で削除するための設定。具体的には、
  // ./src/ フォルダ内のすべての .js, .jsx, .ts, .tsx ファイル
  // ./public/index.html ファイルを対象にして、
  // Tailwindのクラスが使われているかどうかをチェックするという意味です。

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
