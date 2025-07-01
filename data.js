// data.js
// ここにフラッシュカードのデータを記述します。
// 2つの数のリストを使って足し算問題を自動生成します。
const flashcardsData = [];

// 最初の数（x）のリスト
// 例: 現在は1から9まで。将来的に10を追加する場合は [1, 2, ..., 9, 10] とします。
const firstNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 足される数（y）のリスト
// 例: 現在は1から9まで。
const secondNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 外側のループ: firstNumbers リストの各要素（x）
for (const x of firstNumbers) {
    // 内側のループ: secondNumbers リストの各要素（y）
    for (const y of secondNumbers) {
        const questionText = `${x}add${y}`; // 例: "1add1", "1add2", ...
        const answer = x + y; // 計算結果

        flashcardsData.push({
            questionImage: `./images/${questionText}.jpg`, // 画像パスは './images/1add1.jpg' のようになります
            answerText: String(answer), // 回答は文字列として保存 (例: '２', '３', ...)
        });
    }
}
