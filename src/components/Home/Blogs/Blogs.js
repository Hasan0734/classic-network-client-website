import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import blogImg from '../../../image/blogs/blog-1.jpg'
import './Blogs.css'
const blogs = [
    {
        img: blogImg,
        title: 'A Guide For Replacement Of Lighting',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when lookingat its',
        author: 'Rashed Kabir',
        authorImg: 'https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg',
        date: '25 April 2021',
    },
    {
        img: blogImg,
        title: 'A Guide For Replacement Of Lighting',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when lookingat its',
        author: 'Rashed Kabir',
        authorImg: 'https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg',
        date: '25 April 2021',
    },
    {
        img: blogImg,
        title: 'A Guide For Replacement Of Lighting',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when lookingat its',
        author: 'Rashed Kabir',
        authorImg: 'https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg',
        date: '25 April 2021',
    },
]

const Blogs = () => {
    return (
        <section className="blog-area">
            <div className="container mt-5">
                <div className="text-center">
                    <h4 className="text-danger">ABOUT US</h4>
                    <h1 className="text-secondary">Our Latest Blogpost</h1>
                </div>
                <div className="row">
                    {
                        blogs.map(blog => <BlogPost blog={blog}></BlogPost>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blogs;