import { callProducer } from "./producer"

export const messages = async () => {

    for (let index = 0; index < 1000; index++) {
        const element = `mensagem ${index}`
        await callProducer(element)
    }
}
