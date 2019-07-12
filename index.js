const apng2gif = require('apng2gif');
const gifsicle = require('gifsicle');
const fs = require('fs');
const {execFile} = require('child_process');
// ディレクトリ生成
if (!fs.existsSync('gif')) fs.mkdirSync('gif');
console.log('ディレクトリのチェックが完了しました。');
// アニメーションスタンプを探す
const stickerPath = `${process.env.LOCALAPPDATA}\\LINE\\Data\\Sticker\\`;
const stickerDirs = fs.readdirSync(stickerPath);
let animationPaths = [];
for (let i = 0, n = stickerDirs.length; i < n; i++) {
  const path = `${stickerPath}${stickerDirs[i]}\\animation\\`;
  if (fs.existsSync(path)) Array.prototype.push.apply(animationPaths, fs.readdirSync(path).map(file => path + file));
}
console.log('アニメーションスタンプのチェックが完了しました。');
// GIF生成
(async () => {
  for (let i = 0, n = animationPaths.length; i < n; i++) {
    const res = await convert(animationPaths[i]);
    console.log(`${i + 1}/${n} ${res}`);
  }
})();

function convert(filePath) {
  return new Promise(resolve => {
    const fileName = filePath.match(/\\(\d+)\.png/)[1];
    apng2gif(filePath, `gif/tmp_${fileName}.gif`).then(() => {
      execFile(gifsicle, ['-loopcount=0', '-Okeep-empty', '-O2', '-o', `gif/${fileName}.gif`, `gif/tmp_${fileName}.gif`], err => {
        fs.unlinkSync(`gif/tmp_${fileName}.gif`); // tmpファイルを削除
        resolve(`${fileName}.pngのエンコードが完了しました。`);
      });
    });
  });
}