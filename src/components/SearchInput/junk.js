const UserListContainer = styled.div`
    position: absolute;
    top: calc(100% + 10px);
    display: ${props => props.hide ? "none" : "flex"};
    flex-direction: column;
    width: 100%;
    border-radius: 8px;
    box-shadow: 0px 8px 20px rgb(0 0 0 / 6%);
    background: white;
    color: #8a8d90;
    overflow: scroll;
    cursor: pointer;
    z-index: 2;
    

    max-height: 430px;
    
    >p {
        
        color: #767a84;
        color: #a2a5ad;
        font-weight: 300;
        transition: transform 0.1s ease-in, background 0.1s ease-in, color 0.1s ease-in ;
        &:hover {
            transform: scale(1.01);
            color:#626569;
            background: #f4f4f4;
            
        }
        position: relative;
        padding: 15px 30px;
        margin: 5px 0;
        >svg {
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
        }
    }

`
/**
 * 
 * This is my first interation of the search list. But i decided to scap this and go with contact cards instead.
 */
const old =  <UserListContainer hide={true}>
        {false && props.searchResult.map(result => {
            const value = result.name.first + " " + result.name.last
            const reg = new RegExp(`^(?<first>.*)(?<match>${props.value})(?<last>.*)$`, "i")

            const matches = value.match(reg)

            if(matches && matches.groups) {
                return <p onClick={onSelect.bind(null, result)}>{matches.groups.first}<Bold>{matches.groups.match}</Bold>{matches.groups.last}<UserIcon/> </p>
            }

            return <p onClick={onSelect.bind(null, result)}>{value} <UserIcon/> </p>
        })}
</UserListContainer> 