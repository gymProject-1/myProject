const db = require('../models/index')
const Participations = db.participations

class ParticipationsDataAccessor {

  getAllParticipations = async () => {
    // Get all participations from DB
    const participations = await Participations.findAll({})
    return participations;
  }
  getAllParticipationsByMemberId = async (id) => {
    const participations = await Participations.findAll({ where: { memberId: id } });
    return participations;
  }
  createParticipation = async (memberId, guideName, dateLesson, lessonType, hour, grading ) => {
    const participation = await Participations.create({ memberId, guideName, dateLesson, lessonType, hour, grading });
    return participation;
  }

  updateGradingById = async (grade, participationId) => {

    const participation = await participation.update({ grading: grade }, { where: { id: participationId } })
    return participation
  }

}

const participationsDataAccessor = new ParticipationsDataAccessor();
module.exports = participationsDataAccessor;

