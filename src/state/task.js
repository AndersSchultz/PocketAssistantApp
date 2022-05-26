import { atom } from 'recoil'

export const taskListState = atom({
  key: 'TaskList',
  default: [],
});

export const userState = atom({
  key: 'User',
  default: {}
})