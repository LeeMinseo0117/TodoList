const $input = document.querySelector("input");
const $button = document.querySelector("button");
const $ul = document.querySelector("ul");
const $form = document.querySelector("form");

const fetchTodos = async function () {
  const res = await fetch("http://localhost:3000/todos");
  const json = await res.json();
  json.forEach((item) => {
    const $li = document.createElement("li");
    $li.textContent = item.todo;
    $ul.appendChild($li);
  });
};
fetchTodos();

const addTodo = async function (todoTxt) {
  const req = await fetch("http://localhost:3000/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ todo: todoTxt, done: false }),
  });
  const newPost = await req.json();
  const $li = document.createElement("li");
  $li.textContent = newPost.todo;
  $ul.appendChild($li);
};

$form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const todoTxt = $input.value;
  await addTodo(todoTxt);
  $input.value = "";
});
