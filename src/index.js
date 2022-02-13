import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  createIncompleteList(inputText);
  document.getElementById("add-text").value = "";
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //liタグ生成
  const li = document.createElement("li");

  //spanタグ生成
  const span = document.createElement("span");
  span.className = "incomplete-content";
  span.innerText = text;

  //button（完了）タグ生成
  const btnComplete = document.createElement("button");
  btnComplete.innerText = "完了";
  btnComplete.addEventListener("click", () => {
    //押された完了ボタンの親タグをリストから削除
    deleteFromIncompleteList(btnComplete.parentNode);

    //タグを完了したTODOに移動
    //戻るボタン生成
    const revert = document.createElement("button");
    revert.innerText = "戻す";
    revert.addEventListener("click", () => {
      //完了リストから削除
      const deleteTarget = revert.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //未完了リストに追加
      createIncompleteList(text);
    });

    const compLi = document.createElement("li");
    compLi.appendChild(span);
    compLi.appendChild(revert);
    document.getElementById("complete-list").appendChild(compLi);
  });

  //button（削除）タグ生成
  const btnDelete = document.createElement("button");
  btnDelete.innerText = "削除";
  btnDelete.addEventListener("click", () => {
    //押された削除ボタンの親タグをリストから削除
    deleteFromIncompleteList(btnDelete.parentNode);
  });

  //ulの子要素に各要素を追加
  document.getElementById("incomplete-list").appendChild(li);
  li.appendChild(span);
  li.appendChild(btnComplete);
  li.appendChild(btnDelete);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
