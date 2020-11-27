const Tour = require('./../models/tourModel');
const User = require('./../models/userModel');
const Booking = require('./../models/bookingModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.getOverview = catchAsync(async (req, res, next) => {
  // 1) Get tours data from collection
  const tours = await Tour.find();
  // 2) Build Template

  // 3) Render that template using tour data from 1)
  res.status(200).render('overview', {
    title: 'Experience The joy of Nature',
    tours,
  });
});

exports.getTour = catchAsync(async (req, res, next) => {
  // 1) Get the data for requested tour
  const tour = await Tour.findOne({ slug: req.params.tourSlug }).populate({
    path: 'reviews',
    fields: 'review rating user',
  });

  if (!tour) {
    next(new AppError('There is no Tour with that Name.', 404));
  }

  // 3) Render the template using tour data from 1)
  res.status(200).render('tour', {
    title: `${tour.name} Tour`,
    tour,
  });
});

exports.getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Log In',
  });
};

exports.getSignupForm = (req, res) => {
  res.status(200).render('signup', {
    title: 'Sign Up',
  });
};

exports.getAccount = (req, res) => {
  res.status(200).render('account', {
    title: 'My Account',
  });
};

exports.getMyTours = catchAsync(async (req, res, next) => {
  // 1) Find All the bookings for the current user
  const userBookings = await Booking.find({ user: req.user.id });

  // 2) Find tours with returned IDs
  const tourIds = userBookings.map((el) => el.tour);
  const bookedTours = await Tour.find({ _id: { $in: tourIds } });

  res.status(200).render('overview', {
    title: 'Booked Tours',
    tours: bookedTours,
  });
});

exports.updateUserData = catchAsync(async (req, res, next) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.user.id,
    {
      name: req.body.name,
      email: req.body.email,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).render('account', {
    title: 'My Account',
    user: updatedUser,
  });
});
