import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export const userPesist = atomWithStorage('users', {})

export const user = atom({})

