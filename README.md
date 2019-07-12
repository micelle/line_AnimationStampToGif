AnimationStamp To Gif
=====
`%LocalAppData%\LINE\Data\Sticker`に保存されているLINEのアニメーションスタンプ（APNG）をGIFアニメーションにするだけのJavaScriptです。

![AnimationStamp To Gif](https://prfac.com/wp-content/uploads/2019/06/0d40a5e4a645fc6b96e767d64ac0878e.jpg "スクリーンショット")

## 使い方
1. 適当なディレクトリへダウンロード
2. `npm i`でパッケージをダウンロード
3. `npm start`でアニメーションスタンプのエンコードが始まり、  
   `gif`ディレクトリ内にGIFアニメーションが生成されます

## 動作確認
node.jsがインストールされたWindows10 64bitで動作確認済み。

## メモ
デフォルトでは無限ループのGIFアニメーションになっています。もし回数指定をしたい場合は`-loopcount=0`を弄ることでたぶん設定可能だと思います。
設定については[gifsicle - npm](https://www.npmjs.com/package/gifsicle)および[Gifsicle: Command-Line Animated GIFs](https://www.lcdf.org/gifsicle/)をご確認ください。

LINEがインストールされていない環境、アニメーションスタンプがない環境ではエラーになるかもしれません。
（個人利用で作成したため、エラー対策は一切していません）