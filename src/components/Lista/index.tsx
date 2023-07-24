import style from "./Lista.module.scss"
import Item from "./Item";
import { ITarefas } from "../../types/ITarefas";

interface Props {
    tarefas: ITarefas[]
    selecionaTarefa: (tarefaSelecionada: ITarefas) => void
}

function Lista({ tarefas, selecionaTarefa }: Props) {
    
    return (
        <aside className={style.listaTarefas}>
            {tarefas.map(item => (
               <Item
               selecionaTarefa={selecionaTarefa}
                key={item.id}
                {...item} />
            ))}
        </aside>
    )
}

export default Lista;