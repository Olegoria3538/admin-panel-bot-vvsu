import { createStore, createEffect } from "effector"
import { DataType, SearhType } from "../type"

const $Store = createStore<DataType>({ complete: false })
const $SearchArray = createStore<SearhType[]>([])

const DataInit = createEffect<void, DataType>({
  handler: async () => {
    const req = await fetch(`http://bot/details.php`).then(x => x.json())
    return { ...req, complete: true }
  }
})
$Store.on(DataInit.doneData, (_, repos) => {
  return {
    ...repos,
    main_questions: repos?.main_questions?.sort((a, b) =>
      a.questions.length > b.questions.length ? 1 : -1
    )
  }
})
$SearchArray.on(DataInit.doneData, (_, { main_answers, main_questions }) => {
  const qu_an = main_answers?.map(el => {
    return {
      answer: el?.answers,
      question: main_questions?.find(
        element => el.question_id === element.question_id
      )?.questions
    }
  })
  return qu_an
})
DataInit()

export { $Store, $SearchArray }
