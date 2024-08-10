function displayList() {
    // `div#fruits`要素を取得
    const fruits = document.getElementById('fruits');
  
    // `fruits`内の全ての`<p>`要素を取得
    const fruitItems = fruits.querySelectorAll('p');
  
    // 新しい`<ul>`要素を作成
    const ul = document.createElement('ul');
  
    // `<p>`要素を`<li>`に変換し、`<ul>`に追加
    fruitItems.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item.textContent;
      ul.appendChild(li);
    });
  
    // `fruits`の中身をクリアし、新しい`<ul>`要素を追加
    fruits.innerHTML = '';
    fruits.appendChild(ul);
  }