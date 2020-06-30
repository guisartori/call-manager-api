interface Call {
    id: number,
    title: string,
    description?: string,
    functionality_id: number,
    responsable_id: number,
    creator_id: number,
    project_id: number
}

export default Call