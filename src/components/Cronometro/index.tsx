import style from "./Cronometro.module.scss"
import Botao from "../Botao";
import Relogio from "./Relogio";
import { TempoParaSegundos } from "../../common/utils/time";
import { ITarefas } from "../../types/ITarefas";
import { useEffect, useState } from 'react'

interface Props {
    selecionado: ITarefas | undefined
    finalizarTarefa: () => void
}

function Cronometro({ selecionado, finalizarTarefa }: Props){
    const [tempo, setTempo] = useState<number>()

    useEffect(() => {
        if(selecionado?.tempo){
            setTempo(TempoParaSegundos(selecionado.tempo))
        }
    },[ selecionado ])

    function regresiva(contador: number = 0) {
        setTimeout(() => {
            if(contador > 0) {
                setTempo(contador - 1)
                return regresiva(contador - 1)
            }
            finalizarTarefa()
        }, 1000 )
    }

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}> Escolha um carde e inicie o cronômetro </p>    
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Botao onClick={() => regresiva(tempo)}>
                Começar
            </Botao>
        </div>
    )
}

export default Cronometro;