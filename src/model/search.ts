import { base } from '../features/init'
import { createStore } from 'effector'
import { anqType } from '../type/type'

// @ts-ignore
const $SearchArray = createStore<anqType[]>([].concat(...Object.values(base.anq)))

export { $SearchArray }