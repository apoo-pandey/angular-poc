import { createAction , props} from "@ngrx/store"

export const add=createAction(
    'add',
    props<{value: number}>()
)

export const remove=createAction(
    'remove',
    props<{value: number}>()
)

export const clear=createAction(
    'clear'
)

export const picked=createAction(
    'picked',
    props<{value: number}>(),
)

export const increase=createAction(
    'increase',
    props<{value: number}>(),
)

export const decrease =createAction(
    'decrease',
    props<{value: number}>(),
)