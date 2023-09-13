import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    const options = Array.isArray(props.itens) ? props.itens : [props.itens];

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
                <option value=""></option>
                {options.map(item => (
                    <option key={item}>{item}</option>
                ))}
            </select>
        </div>
    )
}

export default ListaSuspensa
