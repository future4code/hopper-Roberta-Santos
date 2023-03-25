import { v4 } from "uuid"


export class IdGeneration {
    public generation = (): string => {
        return v4()
    }
}