const router = require('express').Router();

const {
    getThoughts,
    getThoughtById,
    createThought,
    updateThoughtById,
    deleteThoughtById,
    addReaction,
    removeReaction,
} = require('../../controllers/thoughtController');


router.route('/').get(getThoughts).post(createThought);


router.route('/:thoughtId').put(updateThoughtById).delete(deleteThoughtById);


router.route('/:thoughtId/reactions').post(addReaction);


router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;