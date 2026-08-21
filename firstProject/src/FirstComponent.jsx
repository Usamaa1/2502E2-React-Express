import Button from '@mui/material/Button';
import MyRatingComponent from './MyRatingComponent';
import MyEmojiRatingComponent from './MyEmojiRatingComponent';

export const FirstComponent = ()=>{

    return <>
     <Button variant="contained">Hello world</Button>
    <h1>First Component</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, facere, sequi dignissimos deleniti quae quo sunt hic debitis ab praesentium, tenetur repellendus. Delectus ullam consequuntur doloribus. Aliquid ab pariatur accusantium!</p>
    <MyRatingComponent></MyRatingComponent>
    <MyEmojiRatingComponent></MyEmojiRatingComponent>
    
    </>

}