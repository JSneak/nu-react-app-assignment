App.js

Components Needed

- Parent Container Component
  - Header Component
  - Input Section Component
  - Unordered List Section Component
    - maps the parent list of tasks
    - List Item Component

Parent Container Component

- Use React Hook
  - const [ list, setList ] = useState(data);
- Import Header Component
- Import Input Component
- Import Unordered List Component

Header Component

- <div> Manage my items </div>

Input Component

- Input Text Field
- Add Item Button
- Flex Row
- Need to send value of text field to Parent Container Component

Unordered List Component

- <div> My Items {numItems} </div>
- Map the list of items into an unordered list

List Item Component

- Just present the item

TODO

- Import Material UI into the project

https://www.educative.io/blog/react-hooks-tutorial-todo-lists
