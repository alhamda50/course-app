import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const Home = () => {

    const courses = [
        {
            courseId: 101,
            courseName: "Full Stack Web Development",
            courseCategory: "Six month program",
            courseDescription: "A comprehensive course covering both front-end and back-end development using MERN stack.",
            courseImage: 'https://swansoftwaresolutions.com/wp-content/uploads/2020/04/05.14.20-Meet-a-Full-Stack-Developer-Vlad-Ryba.jpg',
            courseFee: 4999
        },
        {
            courseId: 102,
            courseName: "Data Science and Analytics",
            courseCategory: "Industry readiness program",
            courseDescription: "Learn the basics of data science, analytics techniques, and data visualization tools.",
            courseImage: 'https://datafloq.com/wp-content/uploads/2022/12/What-Is-Data-Science-And-How-To-Become-A-Data-Scientist.jpg',
            courseFee: 5999
        },
        {
            courseId: 103,
            courseName: "Cybersecurity Fundamentals",
            courseCategory: "Upskilling program",
            courseDescription: "An introductory course on cybersecurity principles, network security, and risk management.",
            courseImage: "https://firewall.firm.in/wp-content/uploads/2020/08/Cybersecurity-Best-Practices-for-Small-Businesses-2048x1158.jpg",
            courseFee: 4500
        },
        {
            courseId: 104,
            courseName: "Mobile App Development",
            courseCategory: "Industry readiness program",
            courseDescription: "Master mobile app development for both Android and iOS using React Native.",
            courseImage: "https://www.techkul.com/wp-content/uploads/2020/02/mobile-app-9.png",
            courseFee: 5500
        },
        {
            courseId: 105,
            courseName: "Cloud Computing with AWS",
            courseCategory: "Six month program",
            courseDescription: "Gain a deep understanding of cloud computing services with hands-on experience using AWS.",
            courseImage: "https://images.squarespace-cdn.com/content/v1/60cfd646701da4034512a1c5/ca3d678a-cbfc-4c9c-bc79-9d3be9fb907e/AWS-Cloud.png",
            courseFee: 6500
        }
        
    ]

    return (
        <>
        <Grid container spacing={3} sx={{ padding: 2 }}>
            {courses.map((course) => (
                <Grid item xs={12} sm={6} md={4} key={course.courseId}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardMedia
                            sx={{ height: 180 }}
                            image={course.courseImage}
                            title={course.courseName}
                        />
                        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 700}}>
                                {course.courseName}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                               Category: {course.courseCategory}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                                Course Fee: {course.courseFee} INR 
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                                {course.courseDescription}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Read more</Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>   
        </>
    )
}

export default Home;
