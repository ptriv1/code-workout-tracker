const router = require("express").Router();
const Workout = require("../models/workout.js"); 


router.post("/api/workout", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout  => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workout/bulk", ({ body }, res) => {
  Workout.insertMany(body)
    .then(dbWorkout => {
      res.json(dbWorkout); 
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workout", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get('/:id', async (req, res) => {
  try {
    const workoutData = await Workout.findByPk(req.params.id, {
      
      
    });

    if (!workoutData) {
      res.status(404).json({ message: 'No workout found with this id!' });
      return;
    }

    res.status(200).json(workoutData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/api/workouts/", (req, res) => {
  db.workout.update(
    {
      _id: mongojs.ObjectId(params.id)
    },
    {
      $set: {
        read: false
      }
    },

    (error, edited) => {
      if (error) {
        console.log(error);
        res.send(error);
      } else {
        console.log(edited);
        res.send(edited);
      }
    }
  );
 });

module.exports = router;