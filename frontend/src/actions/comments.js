export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const UPVOTE_COMMENT = 'UPVOTE_COMMENT'
export const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

export function addComment({ parentId, body, author }) {
  return {
    type: ADD_COMMENT,
    parentId,
    body,
    author,
  }
}

export function editComment({ timestamp, body }) {
  return {
    type: EDIT_COMMENT,
    timestamp,
    body,
  }
}

export function upvoteComment({ id }) {
  return {
    type: UPVOTE_COMMENT,
    id,
  }
}

export function downvoteComment({ id }) {
  return {
    type: DOWNVOTE_COMMENT,
    id,
  }
}

export function deleteComment({ id }) {
  return {
    type: DELETE_COMMENT,
    id,
  }
}