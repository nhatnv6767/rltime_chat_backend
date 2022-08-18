const postAccept = async (req, res) => {
    try {

    } catch (err) {
        console.log(err);
        return res.status(500).send("Something went wrong please try again");
    }
}

module.exports = postAccept;