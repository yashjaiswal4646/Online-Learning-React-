const courseModel = require('../models/courseModel'); 

const publishCourse = async (req, res) => {
    try {
        const { name, instructorName, price, imageUrl } = req.body;
        // ✅ Create a new instance of the Mongoose model
        const course = new courseModel({
            name,
            instructorName,
            price,
            imageUrl,
        });

        // ✅ Now save it to the database
        await course.save(); 

        res.status(201).json({ message: 'Course published successfully', course });
    } catch (error) {
        console.error('Error publishing course:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    publishCourse,
};
