import { useContext } from 'react'
import { CycleContext } from '../contexts/CyclesContext'

export const useCycle = () => {
  return useContext(CycleContext)
}
