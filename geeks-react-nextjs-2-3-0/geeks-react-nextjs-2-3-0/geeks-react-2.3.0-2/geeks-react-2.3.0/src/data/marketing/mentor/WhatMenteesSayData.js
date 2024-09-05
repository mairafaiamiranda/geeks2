import { v4 as uuid } from 'uuid';


// import media files
import Avatar1 from 'assets/images/avatar/avatar-1.jpg';
import Avatar2 from 'assets/images/avatar/avatar-2.jpg';
import Avatar3 from 'assets/images/avatar/avatar-3.jpg';
import Avatar4 from 'assets/images/avatar/avatar-4.jpg';
import Avatar5 from 'assets/images/avatar/avatar-5.jpg';
import Avatar9 from 'assets/images/avatar/avatar-9.jpg';
import Avatar11 from 'assets/images/avatar/avatar-11.jpg';

export const WhatMenteesSayData = [
    {
        id: uuid(),
        menteeImage: Avatar1,
        menteeName: 'Satvik',
        text: `The mentor was really knowledgeable and solved all my doubt regarding my Tech Stack and carrer as well.... if you are really confused or do need to know how to start your DSA career have a session with Sir... it will really help you.`,
        plan: '1 Month',
        date: 'September 9, 2024',
        rating: 5
    },
    {
        id: uuid(),
        menteeImage: Avatar2,
        menteeName: 'Monica',
        text: `Very good session with Jitu Chauhan. He listens to mentee clearly, note down things and device a proper plan to achieve those goals`,
        mentorImage: Avatar4,
        mentorName: 'Jitu Chauhan',
        replyText: 'Duis facilisis ex a urna blandit ultricies. Nullam sagittis ligula non eros semper, nec mattis odio ullamcorper. Phasellus feugiat sit amet leo eget consectetur.',
        plan: '3 Months',
        date: 'September 9, 2024',
        rating: 5
    },
    {
        id: uuid(),
        menteeImage: Avatar3,
        menteeName: 'Levisa',
        text: `I appreciate Jitu Chauhan patience to listen all the doubts and provided honest suggestions and roadmap according to my current situation. Thank you.`,
        plan: '2 Months',
        date: 'September 11, 2024',
        rating: 4
    },
    {
        id: uuid(),
        menteeImage: Avatar9,
        menteeName: 'Doris Esparza',
        text: `Proident quis deserunt qui ex exercitation veniam id Lorem est cupidatat ipsum irure aliquip ad.`,
        plan: '3 Months',
        date: 'September 11, 2024',
        rating: 5
    },
    {
        id: uuid(),
        menteeImage: Avatar5,
        menteeName: 'Marlene Turner',
        text: `Id duis velit enim officia ad nisi incididunt magna ex dolor minim deserunt dolor. Esse incididunt cillum nostrud esse do quis amet labore amet nulla eiusmod amet nulla Lorem. Incididunt ex voluptate irure officia laboris ea proident est qui.`,
        plan: '3 Months',
        date: 'September 11, 2024',
        rating: 5
    },
    {
        id: uuid(),
        menteeImage: Avatar11,
        menteeName: 'Daniel Groleau',
        text: `The generated lorem Ipsum is therefore always free from repetition, injected humour, or words etc generate lorem Ipsum which looks racteristic reasonable...`,
        plan: '3 Months',
        date: 'September 11, 2024',
        rating: 4.5
    },
];

export default WhatMenteesSayData;
