const express = require('express');
const router = express.Router();

const Post = require('../models/post');

// to get all the posts
router.get('/', async (req, res) => {
    // res.send('on posts'); 
    try {
        const posts = await Post.find();
        res.json(posts);
    }
    catch (err) {
        res.json({ message: err })
    }
});


// router.get('/',  (req, res) => {
//     // res.send('on posts'); 
//     const posts =  Post.find();
//     res.json(posts); 
// });

//to submit the posts
router.post('/', async (req, res) => {
    // console.log(req.body);
    const post = new Post({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        city: req.body.city,


    });
    try {
        const savePost = await post.save();
        res.json(savePost);
        console.log(savePost)
    }
    catch (err) {
        res.json({ message: error });
    }
});




router.get('/id/:postID', async (req, res) => {
    
    try {
        const post = await Post.findById(req.params.postID)
        res.json(post);
    } catch (err) {
        res.json({ message: err })
    }
});


router.get('/fname/:postName', async (req, res) => {
    
    try {
        const post = await Post.find({firstName: req.params.postName})
        res.json(post);
        
    } catch (err) {
        res.json({ message: err })
    }
}
);

router.get('/lname/:postName', async (req, res) => {
    
    try {
        const post = await Post.find({lastName: req.params.postName})
        res.json(post);
        
    } catch (err) {
        res.json({ message: err })
    }
    
});

router.get('/city/:postCity', async (req, res) => {
    
    try {
        const post = await Post.find({city: req.params.postCity})
        res.json(post);
        
    } catch (err) {
        res.json({ message: err })
    }
    
});

router.get('/findByFirstNameAndLastName/:firstName/:lastName', async(req, res) => {
    const firstName = req.params.firstName
    const lastName = req.params.lastName
    console.log(firstName)
    console.log(lastName)
    const condition = {$and:[{"firstName":firstName},{"lastName":lastName}]}
    const posts= await Post.find(condition)
    console.log(posts)
    res.json(posts);
})

//to delete the specific post
router.delete('/deletePost/:postID', async (req, res) => {

    try {
        const removePost = await Post.remove({ _id: req.params.postID })
        res.json(removePost);
    } catch (err) {
        res.json({ message: err })
    }
});


//to upate the posts
router.patch('/:postID', async (req, res) => {
    try {
        const updatePost = await Post.updateMany(
            { _id: req.params.postID },
            { $set: { firstName: req.body.firstName , lastName: req.body.lastName , email: req.body.email , city: req.body.city } 
        })
        res.json(updatePost);
    } catch (err) {
        res.json({ message: err })
    }

})

module.exports = router;