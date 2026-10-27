# My Task Manager

A simple task management web app built with **HTML, CSS, JavaScript, and jQuery**. Users can add tasks, mark them as complete, delete individual tasks, and clear the entire list. Tasks are saved in the browser using `localStorage`, so they remain available after a page refresh on the same browser.

## Features

- **Add tasks** — create a task from the input field.
- **Input validation** — prevent empty or whitespace-only tasks.
- **Duplicate prevention** — reject task titles that already exist, regardless of letter casing.
- **Mark tasks complete** — toggle between pending and completed.
- **Delete tasks** — remove individual tasks from the list.
- **Clear all tasks** — remove all tasks at once.
- **Task counter** — display the total number of tasks.
- **Persistent storage** — save tasks and completion status in `localStorage`.
- **Restore on refresh** — display saved tasks when the page is reopened.

## Built With

- HTML5
- CSS3
- JavaScript
- jQuery
- Browser `localStorage`
- Remix Icon classes for task icons, if included in the HTML

## Getting Started

No build tools or package installation are required.

1. Clone or download this repository.
2. Open the project folder in your code editor.
3. Open `index.html` in your browser, or use the **Live Server** extension in Visual Studio Code.

## How to Use

1. Enter a task in the input field.
2. Click **Add Task** to add it to the list.
3. Use the completion icon to mark a task complete or pending.
4. Use the delete icon to remove an individual task.
5. Click **Clear All Tasks** to remove every task.
6. Refresh the page to verify that saved tasks are restored.

## How Data Is Stored

Tasks are stored in the browser's `localStorage` under the key `data`. Each task is represented by an object:

```js
{
  title: "Practice JavaScript",
  status: false
}
```

- `title` stores the task text.
- `status` is `false` for a pending task and `true` for a completed task.

The task list is stored locally on the current browser and device. It is not synced to an account or server. Clearing the browser's site data may remove saved tasks.

## Project Structure

```text
my-task-manager/
├── index.html
├── style.css
├── script.js
└── README.md
```

Adjust these filenames if your actual project uses different names.

## Future Improvements

- Add task editing.
- Add filters for all, pending, and completed tasks.
- Display separate completed and pending counts.
- Improve keyboard accessibility and focus styles.
- Add a confirmation before clearing all tasks.
- Assign a unique ID to each task instead of identifying tasks only by title.

## Learning Goals

This project was built to practise jQuery selectors, event handling, DOM manipulation, array methods such as `findIndex()`, form validation, and saving data with `localStorage`.

## License

This project is for learning and portfolio practice. Add a license file if you decide to distribute it under a specific open-source license.
