const Todo = require('../models/todo');

module.exports.home = async (req, res) => {
	try {
		const todoList = await Todo.find({});

		return res.render('home', {
			title: 'Todo App',
			todo_list: todoList,
		});
	} catch (error) {
		console.log(error);
	}
};

module.exports.createTask = async (req, res) => {
	try {
		// console.log(req.body)
		const { category, description, dueDate } = req.body;

		const newTask = await Todo.create({
			category,
			description,
			dueDate,
		});

		console.log('********* \n', newTask);

		return res.redirect('back');
	} catch (error) {
		console.log('Error while creating a task!', error);
	}
};

module.exports.deleteTask = async (req, res) => {
	try {
		let id = req.query;
		console.log(req); 	
		// let count = Object.keys(id).length;

		// for (let i = 0; i < count; i++ ) {
		// 	await Todo.findByIdAndDelete(Object.keys(id)[i]);
		// }

		return res.redirect('back');
	} catch (error) {
		console.log('Error while deleting tasks!', error);
	}
};
