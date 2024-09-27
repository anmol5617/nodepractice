const User = require('./../models/usersmodal')



exports.getAllUsers = async (req, res) => {
    try {
        const user = await User.find()

        res.status(200).json({
            status: "sucessss",
            totalusers: user.length,
            message: "here are your all users ",
            data: {
                user
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: "something went wrong  "
        })
    }
}
exports.getTopFavfruitlist = async (req, res) => {
    try {
        const topfavfruitlist = await User.aggregate([
            {
                $group: {
                    _id: "$favoriteFruit",
                    count: {
                        $sum: 1
                    }
                }
            }

        ])
        res.status(200).json({
            status: "sucessss",
            message: "here are your list of fav fruits",
            data: {
                topfavfruitlist
            }
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "something went wrong  "
        })
    }
}

exports.avgAgeofallusers = async (req, res) => {
    try {
        const avgAge = await User.aggregate([
            {
                $group: {
                    _id: "null",

                    avgAge: {
                        $avg: "$age"
                    }
                }
            }
        ])
        res.status(200).json({
            status: "sucessss",
            message: "here is the avg age ",
            data: {
                avgAge
            }
        })

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "something went wrong  "
        })
    }
}

//the names and age of users who are inactive and have velit in thier name 

exports.uiavitn = async (req, res) => {
    try {
        const infoOfUiavitn = await User.aggregate([
            {
                $match: {
                    isActive: true,
                    tags: "elit"
                }
            },
            {
                $project: {
                    name: 1,
                    age: 1,
                    favoriteFruit: 1
                }
            }
        ])
        res.status(200).json({
            status: "sucessss",
            totalnumberofusers: infoOfUiavitn.length,
            message: "user who are inactive and have elit in their tags ",
            data: {
                infoOfUiavitn
            }
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "something went wrong  "
        })
    }
}