let b = document.querySelector('button#print');
b.addEventListener('click', Request);
let kaisu = 0;
function Request() {
  let b = document.querySelector('input[name="b"]');
  let c = document.querySelector('input[name="a"]');
  let service = b.value;
  let genre = c.value;
  
 let url = 'https://www.nishita-lab.org/web-contents/jsons/nhk/'+service+'-'+genre+'-j.json';
axios.get(url)
     .then(kensaku)
     .catch(showError)
     .then(finish);
}


function kensaku(resp) {
  let b = document.querySelector('input[name="b"]');
  let service = b.value;
  let data = resp.data;
  if(kaisu > 0) {
    let y = document.querySelector('p');
    if (y !== null) {
      y.remove();
    }
    let w;
    let t = document.querySelectorAll('table');
    console.log(t.length);
    for (let i = 0;i<t.length;i++) {
      w = document.querySelector('table');
      w.remove();
    }
  }
  if (typeof data === 'string') {
    data = JSON.parse(data);
  }
  let table, tr1,th1,th2,th3,th4,tr2,th;
  let mi = ['番組名','サブタイトル','出演者','番組説明文'];
  let ul = document.querySelector('ul');
  //for (let n of data.list) {
    
    if (service === 'g1') {
      if(data.list === null) {
        let p = document.createElement('p');
        p.textContent = "そのジャンルの番組はありません.";
        ul.insertAdjacentElement('afterend', p);
      }else {
        let o = data.list.g1;
    for (let i = 0; i<o.length;i++){
  table = document.createElement('table');
  ul.insertAdjacentElement('afterend', table);
  tr = document.createElement('tr');
  table.insertAdjacentElement('beforeend', tr);
  for(let w of mi) {
    th = document.createElement('th');
    th.textContent = w;
    tr.insertAdjacentElement('beforeend', th);
  }
  tr = document.createElement('tr');
  table.insertAdjacentElement('beforeend', tr);
  th = document.createElement('th')
  th.textContent = o[i].title;
  tr.insertAdjacentElement('beforeend', th)
  th = document.createElement('th')
  th.textContent = o[i].subtitle;
  tr.insertAdjacentElement('beforeend', th)
  th = document.createElement('th')
  th.textContent = o[i].act;
  tr.insertAdjacentElement('beforeend', th)
  th = document.createElement('th')
  th.textContent = o[i].content;
  tr.insertAdjacentElement('beforeend', th)
}
}
}
else if (service === 'e1') {
  if(data.list === null) {
    let p = document.createElement('p');
    p.textContent = "そのジャンルの番組はありません.";
    ul.insertAdjacentElement('afterend', p);
  }
  else {
    let o = data.list.e1;
  for (let i = 0; i<o.length;i++){
    let ul = document.querySelector('ul');
table = document.createElement('table');
ul.insertAdjacentElement('afterend', table);
tr2 = document.createElement('tr');
table.insertAdjacentElement('beforeend', tr2);
for(let w of mi) {
  th = document.createElement('th');
  th.textContent = w;
  tr2.insertAdjacentElement('beforeend', th);
}
tr1 = document.createElement('tr');
table.insertAdjacentElement('beforeend', tr1);
th1 = document.createElement('th')
th1.textContent = o[i].title;
tr1.insertAdjacentElement('beforeend', th1)
th2 = document.createElement('th')
th2.textContent = o[i].subtitle;
tr1.insertAdjacentElement('beforeend', th2)
th3 = document.createElement('th')
th3.textContent = o[i].act;
tr1.insertAdjacentElement('beforeend', th3)
th4 = document.createElement('th')
th4.textContent = o[i].content;
tr1.insertAdjacentElement('beforeend', th4)
  }
}
}
}
function showError(err) {
  console.log(err)
}
function finish() {
  console.log('Ajax 通信が終わりました');
kaisu = kaisu + 1;
}