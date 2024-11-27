import router from '../car-value-api'
import { request } from 'express'

describe("get /car-value", () => {

    describe("when a car value and risk has been given", () => {

        test('should respond with a 200 status code', async () => {
            const response = await request(router).get("/car-value").send
            ({
                carValue: "6614",
                riskRating: "5"
            })
            expect(response.statusCode).toBe(200)
        })
    })

    describe('if the values arent in the database', () => {

    })
})