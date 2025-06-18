import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../middlewares/asyncHandler";

const healthcheck = asyncHandler(async (req,res) => {
    return res
    .status(200)
    .json( new ApiResponse(200, "Server is up and running", "HealthCheck passed") )
    // since ApiResponse is a class we have to for sure use the new keyword for our use.
})

export {healthcheck};