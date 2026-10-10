import { useState, useEffect } from "react"; 
import "./Hero.css"; 
 
import Hero_img_1 from "../../assets/123.png"; 
import Hero_img_2 from "../../assets/slider-new-first.webp"; 
 
function Hero() { 
 
    const slides = [Hero_img_1, Hero_img_2]; 
 
    const [currentSlide, setCurrentSlide] = useState(0); 
 
    // Auto slider - every 0.8 second 
    useEffect(() => { 
        const timer = setInterval(() => { 
            setCurrentSlide((currentSlide) => { 
                return (currentSlide + 1) % slides.length; 
            }); 
        }, 5000); 
 
        return () => clearInterval(timer); 
    }, [slides.length]); 
 
    const nextSlide = () => { 
        setCurrentSlide((currentSlide + 1) % slides.length); 
    }; 
 
    const prevSlide = () => { 
        setCurrentSlide( 
            (currentSlide - 1 + slides.length) % slides.length 
        ); 
    }; 
 
    return ( 
        <section className="hero"> 
 
            <button className="prev-btn" onClick={prevSlide}> 
                ← 
            </button> 
 
            <img 
                src={slides[currentSlide]} 
                alt="Lokpal of India" 
            /> 
 
            <button className="next-btn" onClick={nextSlide}> 
                → 
            </button> 
 
        </section> 
    ); 
} 
 
export default Hero; 