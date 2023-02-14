
const participationDal = require("../dal/participation-db-accessor.js.js");


class ParticpationsController {
  
   
getAllParticipations=async(req,res)=>{

        const participations = await participationDal.getAllParticipations();
        if(!participations?.length){
        return res.status(400).json({message: 'No participations found'})
    }
    res.json(participations)
}

getAllParticipationByUserId=async(req,res)=>{
    const participation = await participationDal.getAllParticipationsByUserId(req.params.id);
     if(!participation){
    return res.status(400).json({message: 'No participation found'})
}
res.json(participation)
}

createParticipation=async(req,res)=>{
    const {userId,guideName,dateLesson,lessonType,hour,grading} = req.body
    // Confirm data
    if (!userId ||  !guideName||  !dateLesson||  !lessonType||  !hour) 
      return res.status(400).json({ message: 'All fields are required' })
    const participation= await participationDal.createParticipation(userId,guideName,dateLesson,lessonType,hour,grading)
    
     if(participation){ // Created 
        return res.status(400).json({message:'New participation created'})}
     return res.status(400).json({ message: 'Invalid participation data received' })
  
     
     
}
} 


const particpationsController = new ParticpationsController();
module.exports = particpationsController;