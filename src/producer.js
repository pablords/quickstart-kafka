import { kafka } from "./config/kafka"

export async function callProducer(message) {
  const producer = kafka.producer()
  await producer.connect()
  await producer.send({
    topic: 'test-topic',
    messages: [
      { value: message },
    ],
  })
  await producer.disconnect()
}