import zod,{ object, string, TypeOf , array} from "zod"

const Product = zod.object({
    id: zod.string().uuid(),
    name: zod.string()
});

export const createSazonalidadeSchema = object({
  body: object({
    user: string({
      required_error:"user is required"
    }),
    products: array(Product),
    name: string({
      required_error:"Name is required"
    }),
    description: string({
      required_error:"description is required"
    }),
    dataInicio: string({
      required_error:"data de inicio is required"
    }),
    dataFim: string({
      required_error:"data de fim is required"
    }),
    dataProx: string({
      required_error:"data de prox inicio is required"
    }),
    status: string({
       required_error:"status is required"
    }),
    dataDeCadastro:string(),
  }),
})

export const updateSazonalidadeParams = object( {
  params: object({
    sazonalidadeId: string({
      required_error:'sazonalidadeId is required'
    })
  })
})

export const updateSazonalidadeSchema = object({
  body: object({
    user: string({
      required_error: "user is required"
    }),
    products: array(Product),
    name: string({
      required_error: "Name is required"
    }),
    description: string({
      required_error: "description is required"
    }),
    dataInicio: string({
      required_error: "data de inicio is required"
    }),
    dataFim: string({
      required_error: "data de fim is required"
    }),
    dataProx: string({
      required_error: "data de prox inicio is required"
    }),
    status: string({
      required_error: "status is required"
    }),
    dataDeCadastro: string(),
  }),
  params: object({
    sazonalidadeId: string({
      required_error: 'sazonalidadeId is required'
    })
  })
})

export type CreaSazonalidadeInput = TypeOf<typeof createSazonalidadeSchema>
export type UpdateSazonalidadeParams = TypeOf<typeof updateSazonalidadeParams>
export type UpdateSazonalidadeSchema = TypeOf<typeof updateSazonalidadeSchema>

