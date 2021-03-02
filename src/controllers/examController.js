const Exam = require("../models").Exam;
const Question = require("../models").Question;
const QuestionAnswerBoolean = require("../models").QuestionAnswerBoolean;
const QuestionAnswerMultiple = require("../models").QuestionAnswerMultiple;
const QuestionAnswerText = require("../models").QuestionAnswerText;
const UserExam = require("../models").UserExam;
const UserExamAnswer = require("../models").UserExamAnswer;

const evaluate = (req, res) => {
	Exam.findOne({
		where: { id: req.params.id },
		include: [
			{
				model: Question,
				include: ["type"],
			},
		],
	})
		.then(async (exam) => {
			// Check if the user has taken the exam
			await UserExam.findOne({ where: { exam_id: exam.id, user_id: req.user.id } }).then((userExam) => {
				if (userExam) {
					return res.status(400).send({ error: "User has already taken this exam." });
				}
			});

			UserExam.create({
				exam_id: exam.id,
				user_id: req.user.id,
			})
				.then(async (userExam) => {
					const examQuestions = exam.Questions;
					const userAnswers = req.body.answers;
					let correctAnswers = 0;

					for (const examQuestion of examQuestions) {
						let isCorrect = null;
						const userAnswer = userAnswers.find((userAnswer) => userAnswer.question_id === examQuestion.id);

						if (!userAnswer) {
							return res.status(400).send({ error: "Unable to find all answers of exam." });
						}

						// Question Boolean
						if (examQuestion.type_id === 1) {
							isCorrect = await QuestionAnswerBoolean.findOne({
								where: { question_id: userAnswer.question_id, value: userAnswer.value },
							})
								.then((answer) => (answer ? true : false))
								.catch((err) => console.log(err));
						}
						// Question Multiple
						else if (examQuestion.type_id === 2) {
							isCorrect = await QuestionAnswerMultiple.findOne({
								where: { question_id: userAnswer.question_id, question_option_id: userAnswer.value },
							})
								.then((answer) => (answer ? true : false))
								.catch((err) => console.log(err));
						}
						// Question Text
						else {
							isCorrect = await QuestionAnswerText.findOne({
								where: { question_id: userAnswer.question_id, value: userAnswer.value },
							})
								.then((answer) => (answer ? true : false))
								.catch((err) => console.log(err));
						}

						if (isCorrect) {
							correctAnswers++;
						}
					}

					// Save answers
					for (const userAnswer of userAnswers) {
						UserExamAnswer.create({
							user_exam_id: userExam.id,
							question_id: userAnswer.question_id,
							value: userAnswer.value,
						});
					}

					// Save score
					userExam.score = correctAnswers / examQuestions.length;
					userExam.save();

					res.status(200).send({ score: userExam.score });
				})
				.catch((err) => res.status(400).send(err));
		})
		.catch((error) => res.status(404).send(error));
};

module.exports = {
	evaluate,
};
