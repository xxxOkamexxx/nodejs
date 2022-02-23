/**
 * Profile Controller
 */

 const debug = require('debug')('books:profile_controller');
 const { matchedData, validationResult } = require('express-validator');
 const models = require('../models');
 
 /**
  * Get authenticated user's profile
  *
  * GET /
  */
 const getProfile = async (req, res) => {
	 // somehow get the authenticated user
	 // and return it
	 //console.log("Hello from the other side", req.user);
 
	 res.send({
		 status: 'success',
		 data: {
			 user: req.user,
		 }
	 });
 }
 
 /**
  * Update authenticated user's profile
  *
  * PUT /
  */
 const updateProfile = async (req, res) => {
	 // check for any validation errors
	 const errors = validationResult(req);
	 if(!errors.isEmpty()){
		 return res.status(422).send({ status:'fail', data:errors.array() });
	 }

	 // get only validated data from the request
	 const validData = matchedData(req);

	 try{
		 const updateUser = await req.user.save(validData);
		 debug("Updateed user successfully: %o", updateUser);

		 res.send({
			 status: 'success',
			 data: {
				 user:updateUser,
			 },
		 });
	 } catch (error) {
		 res.status(500).send({
			 status: 'error',
			 message: 'Exception thrown in database when updating a new user'
		 });
		 throw error;
	 }
 }
 
 /**
  * Get authenticated user's books
  *
  * GET /books
  */
 const getBooks = async (req, res) => {
	// get user and also eager-load the book-relation
	//const user = await new models.User({ id: req.user.id }).fetch({withRelated: ['books']});

	// "lazy load" the books-relation
	await req.user.load('books');

	 res.status(200).send({
		 status: 'success',
		 data: {
			 books: req.user.related('books'),
		 },
	 });
 }

 /**
 * Add a book to the authenticated user
 *
 * @todo 1. Validate that the book actually exists
 * @todo 2. Validate that the book they are trying to add isn't already in the list
 *
 * POST /books
 * {
 *   book_id: 5
 * }
 */
/*
const addBook = async (req, res) => {
	res.status(405).send({
		status: 'error',
		message: 'This is a workshop.',
	});
}
 */

 module.exports = {
	 getProfile,
	 updateProfile,
	 getBooks,
 }