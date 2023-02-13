const { where } = require('sequelize');
const db = require('../models/index')
const Member = db.members

class MembersDataAccessor {

    //add member
    addNewMember = async (gmail, firstName, lastName, phoneNum, password, ImgPath, DateOfBirth) => {
        const member = await Member.create({ gmail, firstName, lastName, phoneNum, password, ImgPath, DateOfBirth });
        return member;
    }
    // get member by id
    getOneMember = async (_id) => {
        const member = await Member.findByPk(_id);
        return member;
    }
}
const memberdataAccessor = new MembersDataAccessor();
module.exports = memberdataAccessor;
