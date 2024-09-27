const express=require('express')
const tourController=require('./../controllers/tourControler')

const router=express.Router()
router.route('/tour-stats').get(tourController.getTourStats)

router.route('/top-five-cheap').get(tourController.topfivecheap,tourController.getAllTours)


router.route('/').get(tourController.getAllTours).post(tourController.createTour)
router.route('/:id').get(tourController.getTour).patch(tourController.updateTour).delete(tourController.deleteTour)

module.exports=router