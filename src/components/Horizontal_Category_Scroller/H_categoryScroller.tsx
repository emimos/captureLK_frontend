import React, {useEffect, useRef, useState} from 'react';
import {Box, Container, IconButton} from "@mui/material";
//icons
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
//images
import olive_image from '../../assets/images/header-categories/44.jpg';
import beach_image from '../../assets/images/header-categories/13.jpg';

import theme from "../../Theme";
import {orange} from "@mui/material/colors";

const HCategoryScroller = () => {
    const scrollerRef = useRef<HTMLDivElement | null>(null);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const [showLeftButton, setShowLeftButton] = useState(false);

    const handleScroll = (scrollOffset: number) => {
        if (scrollerRef.current) {
            const currentScrollLeft = scrollerRef.current.scrollLeft;
            scrollerRef.current.scrollTo({
                left: currentScrollLeft + scrollOffset,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        if (scrollerRef.current) {
            const hasOverflow = scrollerRef.current.scrollWidth > scrollerRef.current.clientWidth;
            const scrollLeft = scrollerRef.current.scrollLeft;
            const maxScrollLeft = scrollerRef.current.scrollWidth - scrollerRef.current.clientWidth;

            setCanScrollRight(hasOverflow && scrollLeft < maxScrollLeft);
            setShowLeftButton(scrollLeft > 0);
        }
    }, []);

    const handleScrollChange = () => {
        if (scrollerRef.current) {
            const scrollLeft = scrollerRef.current.scrollLeft;
            const maxScrollLeft = scrollerRef.current.scrollWidth - scrollerRef.current.clientWidth;

            setCanScrollRight(scrollLeft < maxScrollLeft);
            setShowLeftButton(scrollLeft > 0);
        }
    };


    return (
        <>

            <Box className="horizontal-category-scroller-wrapper">
                <Container maxWidth="xl">
                    <Box className="wrapper-box-inline">
                      <div className="wrapper-box-inline-btn">

                              <IconButton onClick={() => handleScroll(-200)} disabled={!showLeftButton} style={{
                                  background:showLeftButton? '#e8e8e8' : '#f3f2f2',
                                  color:'#ffffff'
                              }}>
                                  <KeyboardArrowLeftIcon style={{fontSize:'28px'}}/>
                              </IconButton>


                      </div>
                        <Box className="horizontal-category-scroller-box" ref={scrollerRef} onScroll={handleScrollChange}>
                            <div className="horizontal-category-scroller-box-item-block">
                                <div className="horizontal-category-scroller-box-item">
                                    <img src={olive_image}  className="image-categories"/>
                                    <p className="text-category">Natural</p>
                                </div>
                                <div className="horizontal-category-scroller-box-item">
                                    <img src={beach_image}  className="image-categories"/>
                                    <p className="text-category">Beach & Ocean</p>
                                </div>
                                <h1 className="horizontal-category-scroller-box-item">1</h1>
                                <h1 className="horizontal-category-scroller-box-item">1</h1>
                                <h1 className="horizontal-category-scroller-box-item">1</h1>
                                <h1 className="horizontal-category-scroller-box-item">1</h1>
                                <h1 className="horizontal-category-scroller-box-item">1</h1>
                                <h1 className="horizontal-category-scroller-box-item">1</h1>
                                <h1 className="horizontal-category-scroller-box-item">1</h1>
                                <h1 className="horizontal-category-scroller-box-item">1</h1>
                                <h1 className="horizontal-category-scroller-box-item">1</h1>
                                <h1 className="horizontal-category-scroller-box-item">1</h1>
                                <h1 className="horizontal-category-scroller-box-item">1</h1>
                                <h1 className="horizontal-category-scroller-box-item">1</h1>
                                <h1 className="horizontal-category-scroller-box-item">1</h1>
                                <h1 className="horizontal-category-scroller-box-item">1</h1>
                                <h1 className="horizontal-category-scroller-box-item">1</h1>
                                <h1 className="horizontal-category-scroller-box-item">1</h1>
                                <h1 className="horizontal-category-scroller-box-item">1</h1>
                                <h1 className="horizontal-category-scroller-box-item">1</h1>
                                <h1 className="horizontal-category-scroller-box-item">1</h1>
                                <h1 className="horizontal-category-scroller-box-item">1</h1>
                                <h1 className="horizontal-category-scroller-box-item">1</h1>
                                <h1 className="horizontal-category-scroller-box-item">1</h1>
                                <h1 className="horizontal-category-scroller-box-item">1</h1>
                                <h1 className="horizontal-category-scroller-box-item">1</h1>
                                <h1 className="horizontal-category-scroller-box-item">1</h1>
                                <h1 className="horizontal-category-scroller-box-item">1</h1>
                                <h1 className="horizontal-category-scroller-box-item">1</h1>
                                <h1 className="horizontal-category-scroller-box-item">1</h1>
                                <h1 className="horizontal-category-scroller-box-item">1</h1>
                                <h1 className="horizontal-category-scroller-box-item">1</h1>
                            </div>
                        </Box>
                        <div className="wrapper-box-inline-btn">

                                <IconButton  disabled={!canScrollRight} onClick={() => handleScroll(200)}  style={{
                                    background:canScrollRight? '#e8e8e8' : '#f3f2f2',
                                    color:'#ffffff'
                                }}>
                                    <KeyboardArrowRightIcon style={{fontSize:'28px'}}/>
                                </IconButton>

                        </div>
                    </Box>


                </Container>
            </Box>

        </>

    );
};

export default HCategoryScroller;