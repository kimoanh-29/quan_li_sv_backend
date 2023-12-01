const Component = require('../Components/factory/index')
const Plan = require('../models/Plan')

const plan_getOne = Component.getOne(Plan)
const plan_getAll = async (req, res) => {
    const _id = req.params.id;
    try {
        const plans = await Plan.find({
            user: _id
        }).populate({
            path: 'user'
        })
        .populate({
            path: 'subject'
        })
        .populate({
            path: 'academic_year'
        })
        .populate({
            path: 'semester'
        })
        console.log(plans);
        res.status(200).json(plans)
    } catch (error) {
        res.status(500).json(error)
    }
}
const plan_createOne = async (req, res) => {
    const { user_id, semester_id, academic_year_id, subject_id } = req.body;
    console.log(req.body);
    try {
        const plan = await Plan.findOne({
            subject: subject_id
        });
        if(!plan){
            const newPlan = new Plan({
                user: user_id,
                semester: semester_id,
                subject: subject_id,
                academic_year: academic_year_id,
            })
            await newPlan.save()
            // console.log(newPlan);
        } else {
            const updatePlan = await Plan.updateMany(
                { subject: subject_id },
                { $set: {academic_year: academic_year_id, semester: semester_id} }
            )
            console.log(updatePlan);
        }
        res.status(200).json('success');
    } catch (error) {
        res.status(500).json('failed');
    }
}
const plan_update = async (req, res) => {
    const { subject_id, user_id, score_1, score_2 } = req.body;
    console.log(subject_id,user_id, score_1, score_2);
    try {
        plan = await Plan.updateMany(
            {
                user: user_id,
                subject: subject_id
            },
            { $set: { score_1: score_1, score_2: score_2}}
        )
        console.log(plan);
        res.status(200).json(plan);
    } catch (error) {
        res.status(200).json(error);
    }
}
const plan_removeOne = Component.removeOne(Plan)

module.exports = {
    plan_getOne,
    plan_getAll,
    plan_createOne,
    plan_update,
    plan_removeOne
}