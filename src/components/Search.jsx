import PropTypes from 'prop-types'; // Importa o PropTypes

const Search = ({ search, setSearch }) => {
    return (
        <div className="search">
            <h2>Pesquisar</h2>
            <input 
                type="text" 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
                placeholder="Digite para pesquisar"
            />
        </div>
    );
};

// Adiciona a validação das props
Search.propTypes = {
    search: PropTypes.string.isRequired,   // 'search' deve ser uma string e é obrigatório
    setSearch: PropTypes.func.isRequired,  // 'setSearch' deve ser uma função e é obrigatório
};

export default Search;
