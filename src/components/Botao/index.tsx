import React from "react"
import style from "./Botao.module.scss"

interface Props {
   children: string,
   tipo?: "button" | "submit" | "reset" | undefined,
   onClick?: () => void
}

function Botao({ children , tipo, onClick }: Props ) {
   return (
      <button type={tipo} className={style.botao} onClick={onClick}>
         {children}
      </button>
   ) 
}

export default Botao;