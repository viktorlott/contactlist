
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