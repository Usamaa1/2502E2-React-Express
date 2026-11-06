import { ObjectId } from "mongodb";
import { db } from "../../connection/connection.mjs";

export const addPost = async (req,res)=>{
    try {
      const {postTitle,postLikes,hashtag,postComments} =  req.body

      await db.collection("posts").insertOne({postTitle,postLikes,hashtag,postComments});

      res.send({message: "Post inserted successfully!"})
        
    } catch (error) {
        console.log(error); 
        res.send({errorMessage: "Post not inserted!"});
    }

}


export const getPost = async (req,res)=>{
    try {
      const allPosts = await db.collection('posts').find().toArray();

      res.send(allPosts);

    } catch (error) {
        console.log(error); 
        res.send({errorMessage: "Post not get!"});
    }
}

export const deletePost = async (req,res)=>{
    try {
       const {id} = req.params


      await db.collection('posts').deleteOne({_id: new ObjectId(id)});

      res.send({message: "Post deleted"});



    } catch (error) {
        console.log(error); 
        res.send({errorMessage: "Post not get!"});
    }
}




