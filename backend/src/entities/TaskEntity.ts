import { v4 as uuid } from 'uuid'

interface ITaskProps {
    content: string;
    userId: string;
}

export class Task {
    public readonly id!: string;
    public content!: string;
    public createdAt: Date;
    public checked: boolean;
    public userId!: string;

    constructor(props: ITaskProps, id?: string) {
        Object.assign(this, props)

        this.createdAt = new Date();
        this.checked = false
        if (!id) {
            this.id = uuid()
        }
    }
}