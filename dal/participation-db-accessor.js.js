const db = require('../models/index')
const Participations = db.participations

class ParticipationsDataAccessor {

  getAllParticipations = async () => {
    // Get all participations from DB
    const participations = await Participations.findAll({})
    return participations;
  }
  getAllParticipationsByUserId = async (id) => {
    const participations = await Participations.findAll({ where: { userId: id } });
    return participations;
  }
  createParticipation = async (userId, guideName, dateLesson, lessonType, hour, grading ) => {
    const participation = await Participations.create({userId, guideName, dateLesson, lessonType, hour, grading });
    return participation;
  }

  updateGradingById = async (grade, participationId) => {

    const participation = await participation.update({ grading: grade }, { where: { id: participationId } })
    return participation
  }

}

const participationsDataAccessor = new ParticipationsDataAccessor();
module.exports = participationsDataAccessor;

