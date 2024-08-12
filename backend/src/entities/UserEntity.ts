import { v4 as uuid } from 'uuid'

interface IUserProps {
    id?: string;
    name: string;
    email: string;
    password: string;
}

export class User {
    public readonly id!: string;
    public name!: string;
    public email!: string;
    public password!: string;

    constructor(props: IUserProps, id?: string) {
        Object.assign(this, props)

        if (!id) {
            this.id = uuid()
        }
    }
}