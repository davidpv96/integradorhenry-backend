
const axios = require("axios");


const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req,res) => {
    try {
        const { id:charID } = req.params
        const response = await axios.get(URL + charID);
        const {id , name , gender , species , origin , image , status} = response.data;
        res.json({id , name , gender , species , origin , image , status});
    } catch (error) {
        res.status(500).json({message: error.message})
    }


}




module.exports = getCharById;