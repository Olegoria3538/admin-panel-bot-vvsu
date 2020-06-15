import { createStore, createEffect, createEvent } from "effector"
import { DataType } from "../type"
import { InitData } from "./init"

const $Store = createStore<DataType>(InitData)

const DataInit = createEffect<void, DataType>({
  handler: async () => {
    const req = await fetch(`http://bot/details.php`).then((x) => x.json())
    return { ...req, complete: true }
  },
})
$Store.on(DataInit.doneData, (_, data) => {
  return {
    ...data,
    main_questions: data.main_questions.sort((a, b) =>
      a.questions.length > b.questions.length ? 1 : -1
    ),
  }
})

const $SearchArray = $Store.map(({ main_answers, main_questions }) => {
  const qu_an = main_answers?.map((el) => {
    return {
      answer: el?.answers,
      url: el?.url,
      question: main_questions.find(
        (element) => el.question_id === element.question_id
      )?.questions,
    }
  })
  return qu_an
})

DataInit()

const $toggle = createStore<boolean>(true)
const toggleEvent = createEvent<boolean | void>()
$toggle.on(toggleEvent, (state, x) => {
  if (!x) return !state
  return x
})

export { $Store, $SearchArray, $toggle, toggleEvent }
