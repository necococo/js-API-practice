// dom
const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");


// 関数
function addList(user){
  // dom操作
  const list = document.createElement("li");
  list.innerText = user.name;
  lists.appendChild(list);
};

async function getUsers() {
  // data操作　　async await：awaitがついた処理が終わるのを待って（データがきちんと生成できて）から次の処理に移れと指示している
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users;
};

async function listUsers(){
  // 二つの関数をつづけて処理　一つ目の処理は完了を待つ
  const users = await getUsers();
  users.forEach(addList);
}


// イベント
window.addEventListener("load",listUsers);  
button.addEventListener("click", listUsers);

