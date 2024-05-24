'use client'

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

function Todo() {
  const [inputTodo, setInputTodo] = useState("")
  const [todo, setTodo] = useState([
    "belajar nextJS",
    "nyoba buat todo",
    "belajar event handler"
  ])

  function handleInput (e: any) {
    setInputTodo(e.target.value)
  }

  function addTodo (e: any) {
    e.preventDefault()
    setTodo([
      ...todo, inputTodo
    ])

    setInputTodo("")
  }

  return (
    <div>
      <form action="" className="flex flex-row">
        <Input type="text" placeholder="input your todo.." value={inputTodo} onChange={handleInput}  />
        <Button onClick={addTodo}>Add</Button>
      </form>

      <div className="flex flex-col">
        {/* <span>{todo[0]}</span>
        <span>{todo[1]}</span>
        <span>{todo[2]}</span> */}

        {todo.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </div>
  )
}

export default Todo