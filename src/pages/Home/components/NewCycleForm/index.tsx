import { useFormContext } from 'react-hook-form'
import { useCycle } from '../../../../hooks/useCycle'
import { Plus, Minus } from 'phosphor-react'
import {
  ButtonMinutesAmount,
  FormContainer,
  MinutesAmountInput,
  TaskInput,
} from './styles'

export function NewCycleForm() {
  const { activeCycle } = useCycle()
  const { register, setValue, watch } = useFormContext()

  function handlerMinutesAmountController(typeButton: 'plus' | 'minus') {
    const currentValueMinutesAmount = watch('minutesAmount')

    if (typeButton === 'plus') {
      if (!currentValueMinutesAmount) {
        setValue('minutesAmount', 5)
      } else if (currentValueMinutesAmount < 60) {
        setValue('minutesAmount', currentValueMinutesAmount + 5)
      }
    } else if (typeButton === 'minus') {
      if (currentValueMinutesAmount && currentValueMinutesAmount !== 0) {
        setValue('minutesAmount', currentValueMinutesAmount - 5)
      }
    }
  }

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
        {...register('task')}
      />
      <datalist id="task-suggestions">
        <option value="Projeto 1"></option>
        <option value="Projeto 2"></option>
        <option value="Projeto 3"></option>
        <option value="Batata"></option>
      </datalist>
      <label htmlFor="minutesAmount">durante</label>
      <div>
        <ButtonMinutesAmount
          type="button"
          onClick={() => handlerMinutesAmountController('minus')}
        >
          <Minus size={16} />
        </ButtonMinutesAmount>
        <MinutesAmountInput
          type="number"
          id="minutesAmount"
          placeholder="00"
          step={5}
          min={5}
          max={60}
          {...register('minutesAmount', { valueAsNumber: true })}
        />
        <ButtonMinutesAmount
          type="button"
          onClick={() => handlerMinutesAmountController('plus')}
        >
          <Plus size={16} />
        </ButtonMinutesAmount>
      </div>
      <span>minutos.</span>
    </FormContainer>
  )
}
