import { PingBusiness } from "../../../src/business/PingBusiness"



describe("Teste Ping Bussiness", ()=>{
        const pingB = new PingBusiness()
    test("Deve retornar pong", async ()=>{
        const result = await pingB.ping()
        expect(result.message).toBe(true)
    })

    test("Test Erro", async ()=>{
        const result = await pingB.ping()
        expect(result).toBe(false)
    })
})