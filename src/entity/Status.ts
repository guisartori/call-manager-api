const CREATED = { id: 0, value: 'CREATED' }
const NEW = { id: 1, value: 'NEW' }
const DOING = { id: 2, value: 'DOING' }
const DONE = { id: 3, value: 'DONE' }
const PAUSED = { id: 4, value: 'PAUSED' }

export const Status = (status: number) => {
    switch (status) {
        case CREATED.id:
            return CREATED.value
            break
        case NEW.id:
            return NEW.value
            break
        case DOING.id:
            return DOING.value
            break
        case DONE.id:
            return DONE.value
            break
        case PAUSED.id:
            return PAUSED.value
            break
        default:
            return 'error'
    }
}