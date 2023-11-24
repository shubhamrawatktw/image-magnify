import { proxy, useSnapshot } from 'valtio'

const state = proxy({ type:"translate" })
export default state