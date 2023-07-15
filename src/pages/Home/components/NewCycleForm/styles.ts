import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  gap: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  color: ${(props) => props.theme['gray-100']};

  font-size: 1.125rem;
  font-weight: 700;
`

export const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-weight: 700;
  font-size: 1.125rem;
  padding: 0.05rem;
  color: ${(props) => props.theme['gray-100']};

  &:focus {
    box-shadow: none;
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`
export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`