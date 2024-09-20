import PropTypes from 'prop-types';

const Filtro = ({filter, setFilter, setSort}) => {
    return (
        <div className="filter">
            <h2>Filtrar</h2>
            <div className="filter-options">
                <div>
                    <p>Status:</p>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="Incomplete">Incompletas</option>
                    </select>
                </div>
                <div>
                    <p>Ordem Alfabetica</p>
                    <button onClick={() => setSort("Asc")}>Asc</button>
                    <button onClick={() => setSort("Desc")}>Desc</button>
                </div>
            </div>
        </div>
    )
}
Filtro.propTypes = {
    filter: PropTypes.string.isRequired,   // 'search' deve ser uma string e é obrigatório
    setFilter: PropTypes.func.isRequired,  // 'setSearch' deve ser uma função e é obrigatório
    setSort: PropTypes.func.isRequired,  // 'setSearch' deve ser uma função e é obrigatório
};

export default Filtro
