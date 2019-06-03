const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const textSchema = new Schema({
	suggest : Boolean,
	notice : Boolean,
	title : String,
	text: String,
	date: String
});
//model의 첫번째 인자로 Collection을 만듦
//첫번째 인자를 소문자형으로 바꾼 뒤 복수형으로 바꿈
module.exports = mongoose.model('paragraph', textSchema);
