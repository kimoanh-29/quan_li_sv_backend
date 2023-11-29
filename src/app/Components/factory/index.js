const getOne = (Model) => {
    return async (req, res) => {
        const _id = req.params.id;
        console.log(_id);
        try {
            const instance = await Model.findById(_id);
            console.log(instance);
            res.status(200).json(instance);
        } catch (error) {
            res.status(500).json('Server error!');
        }
    }
}

const getAll = (Model) => {
    return async (req, res) => {
        try {
            const instances = await Model.find();
            console.log(instances);
            res.status(200).json(instances);
        } catch (error) {
            res.status(500).json('Server error!');
        }
    }
}

const createOne = (Model) => {
    return async (req, res) => {
        console.log(req.body);
        try {
            const instance = new Model(req.body);
            await instance.save();
            console.log(instance);
            res.status(201).json(instance);
        } catch (error) {
            res.status(500).json('Server error!');
        }
    } 
}


const update = (Model) => {
    return async (req, res) => {
        const _id = req.params.id;
        console.log(_id);
        const update = req.body
        console.log(update);
        const keys = Object.keys(update);
        console.log(keys);
        try {
            const instance = await Model.updateMany(
                { _id: { $in: _id } }, // filter
                { $set: update }// udpate
            );
            console.log(instance);
            res.status(200).json('Update successfully!');
        } catch (error) {
            res.status(500).json('Server error!');
        }
    }  
}

const removeOne = (Model) => {
    return async (req, res) => {
        const _id = req.params.id;
        console.log(_id);
        try {
            const instance = await Model.findByIdAndDelete(_id);
            console.log(instance);
            res.status(201).json('Delete successfully!');
        } catch (error) {
            res.status(500).json('Server error!');
        }
    } 
}

module.exports = {
    getOne,
    getAll,
    createOne,
    update,
    removeOne,
}