import { createStore } from 'effector'
import { base } from '../features/init'
import { BaseType } from '../type/type'

const $Store = createStore<BaseType>(base)

export { $Store }