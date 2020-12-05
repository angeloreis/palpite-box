import React, {useState} from "react";
import {useForm} from 'react-hook-form'

const Survey = () => {
  const [ form, setForm ] = useState({
      Nome: '',
      Email: '',
      Whatsapp: '',
      Nota: '',
      Comentario: ''
  })
  const [success, setSuccess] = useState(false)
  const [retorno, setRetorno] = useState({})
  const {register, handleSubmit, errors} = useForm()


  const save = async () => {
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      })
      const data = await response.json();
      setSuccess(true)
      setRetorno(data)
    } catch (err) {
    }
  };
  
  const onChange = evt => {
    const value = evt.target.value
    const key = evt.target.name

    setForm(old => ({
      ...old,
      [key]: value
    }))
  }

  const notas = [0,1,2,3,4,5]

  return (
    <div className="pt-6">
      <p className="text-center font-bold my-4 text-2xl">
        Críticas e Sugestões
      </p>
      <p className="text-center my-6">
        O restaurante X sempre busca por atender melhor seus clientes. <br />
        Por isso, estamos sempre abertos a ouvir a sua opinião.
      </p>

      {
        !success &&
        <div className="w-1/3 mx-auto">
            <form onSubmit={handleSubmit(save)}>
                <label>Seu nome:</label>
                <input
                    type="text"
                    name='Nome'
                    onChange={onChange}
                    value={form.Nome}
                    ref={register({required: true})}
                    className="p-4 block w-full shadow-lg bg-blue-100 m-2 rounded-sm"
                />
                {errors.Nome && errors.Nome.type === 'required' &&
                    <p className='p-2'>Este campo é obrigatório</p>
                }
                <label>E-mail:</label>
                <input
                    type="text"
                    name='Email'
                    onChange={onChange}
                    ref={register({required: true})}
                    value={form.Email}
                    className="p-4 block w-full shadow-lg bg-blue-100 m-2 rounded-sm"
                />
                {errors.Email && errors.Email.type === 'required' &&
                <p className='p-2'>Este campo é obrigatório</p>
                }
                <label>Whatsapp:</label>
                <input
                    type="text"
                    name='Whatsapp'
                    onChange={onChange}
                    ref={register({required: true})}
                    value={form.Whatsapp}
                    className="p-4 block w-full shadow-lg bg-blue-100 m-2 rounded-sm"
                />
                {errors.Whatsapp && errors.Whatsapp.type === 'required' &&
                <p className='p-2'>Este campo é obrigatório</p>
                }
                <p>Notas:</p>
                <div className='flex py-6'>
                    {notas.map(nota => {
                        return (<label className='block w-1/6 text center p-4'>
                                {nota}<br/>
                                <input type='radio' name='Nota' value={nota} onChange={onChange} ref={register({required: true})}/>
                            </label>
                        )
                    })
                    }
                    {errors.Nota && errors.Nota.type === 'required' &&
                    <p className='p-2'>Este campo é obrigatório</p>
                    }
                </div>
                <label>Comentário:</label>
                <input
                    type="text"
                    name='Comentario'
                    onChange={onChange}
                    ref={register({required: true})}
                    className="p-4 block w-full shadow-lg bg-blue-100 m-2 rounded-sm"
                />
                {errors.Comentario && errors.Comentario.type === 'required' &&
                <p className='p-2'>Este campo é obrigatório</p>
                }

                <button
                    className="w-full bg-blue-400 py-6 my-6 font-bold text-white rounded-lg shadow-lg hover:shadow"
                >
                    Salvar
                </button>
            </form>
        </div>
      }
      {
         success &&
         <div className='mt-4 w-1/3 mx-auto'>
             <p className='mb-6 text-center bg-blue-100 border-b border-blue-500 text-blue-700 px-4 py-3'>Obrigado por sua contribuição/crítica!</p>
             <div className='border p-4 mb-4'>
                 {
                     retorno.showCoupon &&
                     <div className='text-center'>
                         Seu Cupom: <br/>
                         <span className='font-bold text-4xl'>{retorno.Cupom}</span>
                     </div>
                 }
                 {
                     retorno.showCoupon &&
                     <div className='text-center'>
                         <span className='font-bold block mb-2'>{retorno.Promo}</span>
                         <br />
                         Tire um print ou foto desta tela e apresente ao garçom.
                     </div>
                 }
             </div>
         </div>
      }
    </div>
  )
};

export default Survey;