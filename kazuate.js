// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 0;
let hyouzi = 0;
// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
let a = document.querySelector('button#print');
a.addEventListener('click', hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    let b = document.querySelector('input[name="yoso"]');
    let  yoso = b.value;
    let s = Number(yoso);
    // 課題3-1：ここの判定処理を作成する．
    //        ページに表示する方法はまだ習っていないので
    //        判定結果はコンソールに出力すること
    kaisu = kaisu + 1;
    hyouzi = hyouzi + 1;
    let pr = document.querySelector('span#result');
    let yo = document.querySelector('span#yos');
    yo.textContent = hyouzi+'回目の予想: '+s;
        if (kaisu < 3){
        if (s === kotae) {
            pr.textContent = '正解です.おめでとう!';
            kaisu = 3;
        }else if (s > kotae) {
            pr.textContent = 'まちがい. 答えはもっと小さいですよ';
        }else if (s < kotae) {
            pr.textContent = "まちがい. 答えはもっと大きいですよ";
        }
    }else if (kaisu === 3 && s !== kotae) {
        pr.textContent = "まちがい. 残念でした答えは "+kotae+" です.";
        }else if (kaisu === 3 && s === kotae){
            pr.textContent = "正解です.おめでとう!";
    }
    else {
        pr.textContent = "答えは "+kotae+" でした. すでにゲームは終わっています";
    }
}