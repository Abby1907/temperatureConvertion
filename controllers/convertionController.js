module.exports = {
    celciusToFahrenheit: (req, res)=>{
        const inputTemp = Number(req.body.input);
        let result;
        if (inputTemp) {
            result = (9/5) * inputTemp + 32;
            return res.send({success: true, result: result});
        }
    },
    home: (req,res)=> {
        res.send("working")
    }
}