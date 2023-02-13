
const measurementDal = require("../dal/measurement-DB-accessor");

class measurementsController {
     getAllMeasurementsByUserId=async(req,res)=>{
        const member_id = req.params.id;
        console.log(member_id);
        const measurements = await measurementDal.getAllMeasurementsByUserId(member_id);
    if(!measurements?.length){
        return res.status(400).json({message: 'No measurements found'})
    }
    res.json(measurements)
}

//add new Measurement
createNewMeasurement = async(req, res)=>{
    const {weight, measureDate, member_id,height,WaistCircumference,HipCircumference} = req.body
    if(!weight || !measureDate || !member_id || !height || !WaistCircumference ||!HipCircumference){
        return res.status(400).json({message: 'All fields are required'})
    }
   const measurement= await measurementDal.addNewMeasurement(weight, measureDate, member_id,height,WaistCircumference,HipCircumference);
    if(measurement){
        return res.status(201).json({message: 'New measurement created'})
    } else {
        return res.status(400).json({message:'Invalid measurement data received'})
    }
}
}

const measurementcontroller = new measurementsController();
module.exports = measurementcontroller;

