import { createSelector } from "reselect"


export const getAllUsers = (state) => {
  return state.users.users
}

export const getAllFollowedUsers = createSelector(
  getAllUsers, 
  users => users.filter((user) => user.followed === true)
)