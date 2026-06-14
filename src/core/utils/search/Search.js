const Search = (arr=[] , text , key)=>{
    const result = arr.filter((item)=>item[key]?.toLowerCase().includes(text.toLowerCase()))
    return result
}

export default Search;