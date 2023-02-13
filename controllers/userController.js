
const memberDal = require("../dal/member-DB-accessor");
const measurmentDal = require("../dal/measurement-DB-accessor");
const email = require("../utils/email");

class usersController {
    //add new user
    createNewMeasurement = async (req, res) => {
        const { gmail, firstName, lastName, phoneNum, password, ImgPath, DateOfBirth, weight, measureDate, height, WaistCircumference, HipCircumference } = req.body
        if (!gmail || !firstName || !lastName || !password || !ImgPath || !DateOfBirth) {
            return res.status(400).json({ message: 'All fields are required' })
        }
        //add to the members table
        const member = await memberDal.addNewMember(gmail, firstName, lastName, phoneNum, password, ImgPath, DateOfBirth);
        //add the user first data to the measurment db
        if (!member) {
            return res.status(400).json({ message: 'Invalid member data received' })
        }
        const member_id = gmail;
        const measurement = await measurmentDal.addNewMeasurement(weight, measureDate, member_id, height, WaistCircumference, HipCircumference);
        if (measurement) {
            //sent gmail
            const status = await email.sentMail(gmail);
            console.log(status);
            //sentMail(gmail);
            return res.status(201).json({ message: 'New user created ' + status })
        }
        else { return res.status(400).json({ message: 'Invalid measurement data received' }) }
    }

    //get user data by user id
    getMemberByUserId = async (req, res) => {
        const member_id = req.params.id;
        const member = await memberDal.getOneMember(member_id);
        if (!member) {
            return res.status(400).json({ message: 'No member found' })
        }
        res.json(member)
    }
}

const usercontroller = new usersController();
module.exports = usercontroller;
