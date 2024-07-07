import {asyncHandler} from '../utils/asyncHandler.js'

const registerUser = asyncHandler(async (req,res)=>{
    res.status(200).json({
        message:"rishabh Rawat is going to be In IMA"
    })
})
export {registerUser};